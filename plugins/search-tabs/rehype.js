/**
 * Publish the built-in Docusaurus tab query parameters alongside each heading.
 * Search crawlers use this metadata to link to a visible section, including
 * sections in an inactive tab. The Tabs component keeps all selection behavior.
 *
 * https://docusaurus.io/docs/markdown-features/tabs#query-string
 */
const UNKNOWN = Symbol('dynamic MDX attribute');
const SEARCH_ATTRIBUTE = 'data-search-params';

function staticAttribute(node, name) {
  let result;
  for (const attribute of node.attributes ?? []) {
    // A spread can replace a previous prop; a later explicit prop can restore it.
    if (attribute.type === 'mdxJsxExpressionAttribute') {
      result = UNKNOWN;
    } else if (attribute.name === name) {
      const {value} = attribute;
      if (value === null) {
        result = true;
      } else if (typeof value === 'string') {
        result = value;
      } else {
        const expression = value?.data?.estree?.body?.[0]?.expression;
        result = expression?.type === 'Literal' ? expression.value : UNKNOWN;
      }
    }
  }
  return result;
}

function tabQueryKey(node) {
  const queryString = staticAttribute(node, 'queryString');
  if (typeof queryString === 'string') return queryString || null;
  if (queryString === true) {
    const groupId = staticAttribute(node, 'groupId');
    return typeof groupId === 'string' && groupId ? groupId : null;
  }
  return null;
}

function componentNames(tree, source) {
  const names = new Set();
  for (const node of tree.children ?? []) {
    if (node.type !== 'mdxjsEsm') continue;
    for (const declaration of node.data?.estree?.body ?? []) {
      if (declaration.type !== 'ImportDeclaration' || declaration.source.value !== source) continue;
      for (const specifier of declaration.specifiers) {
        if (specifier.type === 'ImportDefaultSpecifier') names.add(specifier.local.name);
      }
    }
  }
  return names;
}

function annotateHeading(node, parameters) {
  if (parameters.size === 0) return;
  const value = new URLSearchParams(parameters).toString();
  if (node.type === 'element' && /^h[1-6]$/.test(node.tagName)) {
    node.properties ??= {};
    node.properties[SEARCH_ATTRIBUTE] = value;
  } else if (
    (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') &&
    /^h[1-6]$/.test(node.name ?? '')
  ) {
    node.attributes = (node.attributes ?? []).filter((attribute) => attribute.name !== SEARCH_ATTRIBUTE);
    node.attributes.push({type: 'mdxJsxAttribute', name: SEARCH_ATTRIBUTE, value});
  }
}

module.exports = function rehypeSearchTabs() {
  return (tree) => {
    const tabsNames = componentNames(tree, '@theme/Tabs');
    const itemNames = componentNames(tree, '@theme/TabItem');

    function visit(node, parameters, queryKey) {
      let nextParameters = parameters;
      let nextQueryKey = queryKey;
      if (tabsNames.has(node.name)) {
        nextQueryKey = tabQueryKey(node);
      } else if (itemNames.has(node.name) && queryKey !== null) {
        const value = staticAttribute(node, 'value');
        if (typeof value === 'string') {
          nextParameters = new Map(parameters);
          nextParameters.set(queryKey, value);
        }
      }
      annotateHeading(node, nextParameters);
      for (const child of node.children ?? []) visit(child, nextParameters, nextQueryKey);
    }

    visit(tree, new Map(), null);
  };
};
