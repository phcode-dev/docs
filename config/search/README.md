# Search and Ask AI maintenance

The site uses `phcode` for keyword search and `markdown-index` for Ask AI.
Their extraction code is in [records.cjs](records.cjs); the hosted Crawler runs
the standalone functions generated from this source. No credentials belong in
this directory.

## Apply changes in this order

1. Run `npm run test:search`, build the site, and run `npm run verify:search`.
   Also complete the [tutorial release checks](../../README.md#tutorial-release-checks).
2. Deploy the website before crawling when content or tab metadata has changed.
3. Run `node scripts/search-crawler.cjs --actions` from the repository root.
   Replace the Crawler's two `actions` with this output. Preserve the application's
   managed credentials, crawl scope, schedule, and safety checks.
4. Test a feature page, a mixed-edition tutorial, an individual blog article, and
   a blog tag archive in Algolia's URL Tester. The archive should produce no
   records; the other pages must remain searchable. Review and publish the configuration.
5. Run `node scripts/search-crawler.cjs --settings` and apply those deltas to
   the existing indices through Algolia's settings UI or `setSettings` API.
   Preserve settings not listed in the deltas. Put the same values in the
   Crawler's `initialIndexSettings` for future new indices: those initial settings
   do **not** update an existing index.
6. Copy [agent-instructions.md](agent-instructions.md) into this application's
   Agent Studio agent prompt. Test both a mixed-edition question and an explicit
   Community question, then save the instructions. Keep the existing provider,
   model, and tools unless a separate change calls for updating them.
7. Recrawl once the deployed pages and extraction configuration are ready.
   Review the crawl report and any publishing safety check. Removing duplicate
   archives can reduce record counts; inspect that difference before approving
   it instead of disabling the safety check.
8. Repeat [evaluation.json](evaluation.json) against the refreshed index and
   inspect the actual browser results. Use `analytics: false` and
   `clickAnalytics: false` for API diagnostics so test queries do not pollute
   customer analytics. Test one real browser result click separately to confirm
   that DocSearch Insights receives the event.

## Why these settings and records matter

- `attributeCriteriaComputedBy: "sum"` ranks all query words together. It prevents
  one word in a page title from dominating a better multiword match in a section.
  The 14-query comparison for this change improved `text color` and `text colour`
  while preserving the intended Find in Files, PDF, release, and API results.
  Keep `minProximity: 2`; lowering it favors joined API identifiers for some
  user-facing feature searches. Do not tune settings from a single question.
- Both indices omit blog listings, tag archives, and the site's search page.
  Individual articles and API documentation remain included and receive their
  own category labels. No client-side result filtering hides these sources.
- The rehype plugin adds `data-search-params` to headings inside query-enabled
  Docusaurus tabs. Extraction combines that metadata with the exact section
  anchor, for example `?edition=community#copy-your-picture`. Docusaurus itself
  selects the tab. Default Pro selection and the reading layout are preserved.
  Existing bare-hash links are not rewritten at runtime. Tabs without an internal
  heading cannot be assigned a section-specific selection by this mechanism.
- AI records include edition availability and labeled section links in the text
  the model reads. Pro-only notices remain attached to every split record.
  An absent edition marker means unspecified, not free. Instructions reinforce
  these source boundaries, but generated answers still require sampled checks.
- The input-color guide documents the actual available controls. The Styles Bar
  hides text controls for inputs; Pro users can edit `color` in the Layers panel,
  and Community users can edit CSS. Search ranking cannot supply an undocumented
  workflow or make a nonexistent control appear.

## Dependency checks

`@docsearch/react` is pinned to the reviewed source build in
[vendor/docsearch-react](../../vendor/docsearch-react/README.md). The npm override
ensures the adapter, modal, and sidepanel use the same package. Its fixes preserve
encoded URLs and give the Ask AI dialog an accessible name. Do not edit installed
dependencies, intercept global networking, or rewrite rendered citations.

After changing the dependency, test an absolute URL containing `%20` in both an
AI answer and its Sources menu; verify that it reaches the correct guide. Check
full-page Ask AI submission, keyboard close/focus restoration, and desktop/mobile
layout. Once an upstream release passes these cases, retire the source fork as
described in its README.

The search page uses `name="robots" content="noindex, follow"`. This applies to
the internal search page, not the documentation articles. An Algolia recrawl
does not request Google indexing.

## Answer usefulness checks

After changing agent instructions, test a fresh conversation as well as a
follow-up. Judge whether a beginner can finish the task, not just answer length.

| Question | What a useful answer must contain |
| --- | --- |
| `how to add image` | Pro first: open the HTML page and Live Preview, enable Edit Mode, insert and select the new image, choose it through Image Gallery / Select from device, handle the folder prompt, add a description, save, and check the result. Community: the image-folder location, where to insert a complete HTML example, exact filename and description, saving, and preview. |
| `how do I replace a picture in Community?` | Community-only steps, Highlight Mode to locate the existing tag, selection or editing of that tag without adding a duplicate, and a saved result. |
| `find and replace` | The current-file walkthrough, opening Replace, entering both values, reviewing/replacing matches, and saving. Distinguish project-wide replacement without forcing both procedures into one answer. |
| `What does alt mean?` | A short explanation of the image description, with a small example if useful. Do not repeat the full image tutorial. |
| `Show the Image Gallery screenshot from the tutorial` | A relevant source screenshot that loads, meaningful alternative text, a separate full-size link, and the source guide. Check that it fits the desktop and mobile answer panel. |

Retain modes, dialogs, locations, and saving when shortening prose. A documentation
link can provide screenshots and optional practice files; it should not replace
essential instructions. These are manual checks of actual generated answers,
not keyword assertions that would confuse mentioning a control with explaining it.

The existing DocSearch Markdown renderer supports inline images, and the Crawler's
Markdown keeps documentation image URLs and descriptions. The agent can use one
or two relevant screenshots in a visual walkthrough without a custom renderer.
Use standalone `![description](source-image-url)` followed by a separate full-size
link. Do not nest the image in a Markdown link: the current link renderer escapes
its inner HTML. Never construct image filenames or use a screenshot from the
wrong edition. Complete text steps still matter when no useful image is retrieved.

## Verification recorded on 18 November 2026

- The live npm registry and official release notes were checked: DocSearch
  `5.2.0` and Docusaurus `3.10.2` remain the latest stable releases and match this
  site's upstream versions. DocSearch's current development revision
  `1412418c58fc2a404b2bd4b5c450f318579877dd` still reproduces the encoded-URL
  bug and lacks the Sidepanel's accessible name, so the reviewed
  `5.2.0-phcode.1` build is retained. Recheck before the next release.
- A clean `npm ci` in an isolated directory installed the locked local package.
  All 24 search regression tests passed against that installation; the adapter,
  modal, sidepanel, and Docusaurus search theme resolved the same corrected
  package and React instance. The tarball matched its lockfile integrity.
- The production build, local-link checks, tutorial release checks, and 24
  JavaScript search regression tests passed. Existing unrelated Docusaurus
  anchor warnings remain outside this change.
- Chrome checks covered desktop and mobile search, light and dark appearance,
  full-page Ask AI submission, highlighted CSS, Sources links, and Escape/focus
  restoration. A real full-page result click received HTTP 200 from Insights.
- A built Community section link selected its tab and exposed the target
  heading. Opening a tutorial without an edition query still selected Pro.
- Algolia's hosted URL Tester retained feature pages, mixed tutorials, and
  individual articles, and returned no records for a blog tag archive.
  A temporary test fixture supplied the same heading metadata as the new build;
  the returned Markdown contained both edition labels and the exact section
  links. This verifies that `helpers.markdown` consumes the Cheerio annotations.
  The fixture was removed before publishing.
- Crawler configuration v5 and both existing index settings were saved and
  read back. Crawl scope, schedule, and the 30% record-loss safety check were
  preserved. The agent instructions were saved and sampled with Pro/Community
  questions. Deploy the website changes, then recrawl before evaluating the new
  input-color content or tab-aware links against the production index.
- After revising the prompt for complete walkthroughs and screenshots, fresh
  image answers retained numbered steps and displayed relevant Pro and Community
  images on the deployed site. Community replacement used Community screenshots;
  Find and Replace kept the shared current-file workflow; the `alt` follow-up
  stayed brief. Screenshots and full-size links loaded, and the answer panel had
  no horizontal overflow at a 390 px viewport. These prompt changes are live
  independently of the pending website deployment.

## Official references

- [Docusaurus query-string tabs](https://docusaurus.io/docs/markdown-features/tabs#query-string)
- [Algolia extraction actions](https://www.algolia.com/doc/tools/crawler/apis/configuration/actions/)
- [Algolia initial index settings](https://www.algolia.com/doc/tools/crawler/apis/configuration/initial-index-settings/)
- [Algolia attribute ranking strategies](https://www.algolia.com/doc/api-reference/api-parameters/attributeCriteriaComputedBy)
- [Google robots metadata](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
