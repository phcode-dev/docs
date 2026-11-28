const assert = require('node:assert/strict');
const {test} = require('node:test');
const rehypeSearchTabs = require('../plugins/search-tabs/rehype');
const {addTabQueryToRecordUrl} = require('../plugins/search-tabs/record-url');
const {onRouteDidUpdate} = require('../src/clientModules/scroll-to-tab-heading');

const imports = "import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n";

async function annotations(source) {
  // Compile real MDX so tests also exercise the MDX JSX attribute/ESTree shape.
  const {compile} = await import('@mdx-js/mdx');
  const headings = [];
  await compile(source, {
    rehypePlugins: [
      rehypeSearchTabs,
      () => (tree) => {
        function visit(node) {
          if (node.type === 'element' && /^h[1-6]$/.test(node.tagName)) {
            headings.push(node.properties?.['data-search-params']);
          } else if (node.type === 'mdxJsxFlowElement' && /^h[1-6]$/.test(node.name ?? '')) {
            headings.push(node.attributes.find((attribute) => attribute.name === 'data-search-params')?.value);
          }
          for (const child of node.children ?? []) visit(child);
        }
        visit(tree);
      },
    ],
  });
  return headings;
}

test('publishes each edition on its own headings without changing ordinary headings', async () => {
  const result = await annotations(imports + `
## Before the tabs

<Tabs queryString="edition" defaultValue="pro">
<TabItem value="pro" label="Phoenix Pro">

### Select your photo

</TabItem>
<TabItem value="community" label="Community (free)">

### Copy your picture

</TabItem>
</Tabs>

## After the tabs
`);
  assert.deepEqual(result, [undefined, 'edition=pro', 'edition=community', undefined]);
});

test('supports import aliases, queryString=true, and literal expression values', async () => {
  const result = await annotations(`
import PlatformTabs from '@theme/Tabs';
import Platform from '@theme/TabItem';

<PlatformTabs queryString={true} groupId={'system'}>
<Platform value={'macos'}>

### Install Python

</Platform>
</PlatformTabs>
`);
  assert.deepEqual(result, ['system=macos']);
});

test('nested groups combine parameters and do not leak into sibling sections', async () => {
  const result = await annotations(imports + `
<Tabs queryString="edition"><TabItem value="community">

### Outer section

<Tabs queryString="system"><TabItem value="linux">

### Inner section

</TabItem></Tabs>

### Back to the outer section

</TabItem></Tabs>
`);
  assert.deepEqual(result, ['edition=community', 'edition=community&system=linux', 'edition=community']);
});

test('uses URL encoding for tab keys and values, including explicit JSX headings', async () => {
  const result = await annotations(imports + `
<Tabs queryString="selected platform"><TabItem value="mac &amp; linux">

<h3 id="install">Install the app</h3>

</TabItem></Tabs>
`);
  assert.deepEqual(result, ['selected+platform=mac+%26+linux']);
});

test('does not invent query parameters for disabled tabs or dynamic props', async () => {
  const result = await annotations(imports + `
<Tabs queryString={false}><TabItem value="one">

### Disabled

</TabItem></Tabs>

<Tabs queryString={query}><TabItem value="one">

### Dynamic key

</TabItem></Tabs>

<Tabs queryString="edition"><TabItem value={selectedEdition}>

### Dynamic value

</TabItem></Tabs>

<Tabs groupId="memory-only"><TabItem value="one">

### No query string

</TabItem></Tabs>

<Tabs queryString=""><TabItem value="one">

### Empty query string

</TabItem></Tabs>
`);
  assert.deepEqual(result, [undefined, undefined, undefined, undefined, undefined]);
});

test('respects JSX spread precedence and never evaluates expressions', async () => {
  const result = await annotations(imports + `
<Tabs queryString="edition" {...options}><TabItem value="community">

### Unknown key

</TabItem></Tabs>

<Tabs {...options} queryString="edition"><TabItem value="community" {...itemOptions}>

### Unknown value

</TabItem></Tabs>

<Tabs {...options} queryString="edition"><TabItem {...itemOptions} value="community">

### Known parameters

</TabItem></Tabs>
`);
  assert.deepEqual(result, [undefined, undefined, 'edition=community']);
});

test('does not interpret unrelated components named Tabs as Docusaurus tabs', async () => {
  assert.deepEqual(await annotations(`
import Tabs from './another-component';
import TabItem from './another-item';

<Tabs queryString="edition"><TabItem value="community">

### Other tabs

</TabItem></Tabs>
`), [undefined]);
});

test('search links to an inactive edition select that edition and retain the exact anchor', () => {
  assert.equal(
    addTabQueryToRecordUrl('https://docs.phcode.dev/docs/tutorials/add-images#copy-your-picture', {
      'copy-your-picture': 'edition=community',
    }),
    'https://docs.phcode.dev/docs/tutorials/add-images?edition=community#copy-your-picture',
  );
});

test('scrolls to the visible edition heading even when hydration replaces the original', (t) => {
  let scrolls = 0;
  let notifyMutation;
  let heading = {
    dataset: {searchParams: 'edition=community'},
    getClientRects: () => [],
    scrollIntoView: () => { scrolls++; },
  };
  const root = {dataset: {hasHydrated: 'false'}};
  globalThis.document = {documentElement: root, getElementById: (id) => id === 'table' ? heading : null};
  globalThis.MutationObserver = class {
    constructor(callback) { notifyMutation = callback; }
    observe(target) { assert.equal(target, root); }
    disconnect() { notifyMutation = undefined; }
  };
  t.after(() => {
    delete globalThis.document;
    delete globalThis.MutationObserver;
  });
  const location = {pathname: '/guide', hash: '#table', search: '?edition=community'};
  onRouteDidUpdate({location: {...location, search: '?edition=pro'}});
  assert.equal(notifyMutation, undefined);
  onRouteDidUpdate({location});
  root.dataset.hasHydrated = 'true';
  notifyMutation();
  assert.equal(scrolls, 0);
  heading = {...heading, getClientRects: () => [{}]};
  notifyMutation();
  assert.equal(scrolls, 1);
  assert.equal(notifyMutation, undefined);
  heading = {...heading, getClientRects: () => []};
  onRouteDidUpdate({location});
  onRouteDidUpdate({location: {...location, hash: ''}, previousLocation: location});
  assert.equal(notifyMutation, undefined);
});

test('preserves unrelated query parameters, encoded paths, and nested tab choices', () => {
  assert.equal(
    addTabQueryToRecordUrl('https://docs.phcode.dev/docs/Pro%20Features/example?ref=search&edition=pro#copy', {
      copy: 'edition=community&system=linux',
    }),
    'https://docs.phcode.dev/docs/Pro%20Features/example?ref=search&edition=community&system=linux#copy',
  );
});

test('matches decoded Unicode anchors exactly without prefix matches', () => {
  const mapping = {'caf\u00e9': 'edition=community', copy: 'edition=pro'};
  assert.equal(addTabQueryToRecordUrl('https://docs.phcode.dev/page#caf%C3%A9', mapping),
    'https://docs.phcode.dev/page?edition=community#caf%C3%A9');
  assert.equal(addTabQueryToRecordUrl('https://docs.phcode.dev/page#copy-other', mapping),
    'https://docs.phcode.dev/page#copy-other');
});

test('leaves absent, malformed, inherited, and non-web targets unchanged', () => {
  const mapping = Object.create({copy: 'edition=community'});
  for (const url of [
    'https://docs.phcode.dev/page',
    'https://docs.phcode.dev/page#missing',
    'https://docs.phcode.dev/page#copy',
    'https://docs.phcode.dev/page#%E0%A4%A',
    '/page#copy',
    'mailto:hello@example.com#copy',
  ]) {
    assert.equal(addTabQueryToRecordUrl(url, mapping), url);
  }
});
