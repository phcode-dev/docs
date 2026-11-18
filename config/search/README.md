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
   Agent Studio agent prompt and [system-instructions.md](system-instructions.md)
   into its System prompt editor. Apply the system prompt for testing, test both
   a mixed-edition question and an explicit Community question, then use the
   agent's **Save changes** action. Reload and read back both prompts: applying
   for testing alone does not publish them. Keep the existing provider, model,
   and tools unless a separate change calls for updating them.
7. Recrawl once the deployed pages and extraction configuration are ready.
   Review the crawl report and any publishing safety check. Removing duplicate
   archives can reduce record counts; inspect that difference before approving
   it instead of disabling the safety check.
   Compare settings, synonyms, and rules as well as records. The pending `.tmp`
   index may not yet contain the production synonyms. If needed for comparison,
   use **Manage index → Copy Settings** on the production index, select only
   **Synonyms**, and target its `.tmp` index. Verify the destination and its
   existing synonyms first. Recheck the live settings, synonyms, and representative
   queries after publication; do not assume record counts establish search quality.
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
- AI extraction also labels the start and end of each Docusaurus tab, including
  tabs without internal headings. Otherwise the Markdown helper places the tab
  labels together above several unlabeled workflows. The extractor matches each
  tab list to its own panels, preserves nested platform tabs, and skips ambiguous
  groups with mismatched counts. These annotations are removed from the source
  DOM after extraction; the article and keyword text retain their original layout.
- The input-color guide documents the actual available controls. The Styles Bar
  hides text controls for inputs; Pro users can edit `color` in the Layers panel,
  and Community users can edit CSS. Search ranking cannot supply an undocumented
  workflow or make a nonexistent control appear.

## Dependency checks

`@docsearch/react` is pinned to the reviewed source build in
[vendor/docsearch-react](../../vendor/docsearch-react/README.md). The npm override
ensures the adapter, modal, and sidepanel use the same package. Its fixes preserve
encoded URLs, give the Ask AI dialog an accessible name, and render linked
screenshots safely. Do not edit installed
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
Algolia caches identical first messages for the same agent configuration, so
repeating one opening question is not an independent quality sample. Include
different natural phrasings and verify that the retrieved text contains the
current extraction metadata after a crawl.
Recognize the intended task, not the presence of the words "how to". Short
requests and obvious misspellings should receive the same useful walkthrough;
ask for clarification only when the intended task is genuinely unclear.
The prompts define how to understand, retrieve, and explain; they must not
contain a list of recognized requests or copied recipes for individual features.
The cases below are regression samples, not routing rules or an exhaustive list
of supported topics. Add varied, previously untested tasks and wording during
review rather than teaching the prompt each test question.

Sample several kinds of request: a procedure, a reported problem, a comparison,
a conceptual question, pasted code, and a follow-up using earlier context. Include
edition/platform constraints, a topic change, a request with multiple parts, and
a genuinely ambiguous request. Check that the response form and illustrations
serve the current goal. Definitions should not become tutorials; a new topic
should not inherit an unrelated earlier workflow. Keep product details in their
source guides so future documentation changes do not require prompt recipes.

| Question | What a useful answer must contain |
| --- | --- |
| `how to add image` and `how to add ima` | Pro first: open the HTML page and Live Preview, enable Edit Mode, insert and select the new image, choose it through Image Gallery / Select from device, handle the folder prompt, add a description, save, and check the result. Community: the image-folder location, where to insert a complete HTML example, exact filename and description, saving, and preview. Each edition should include a relevant source screenshot and a full-size link. |
| `add images` and `add imagfes` | The same complete, illustrated add-image walkthrough. Do not require a question, the words "how to", corrected spelling, or an explicit request for screenshots. |
| `how do I replace a picture in Community?` | Community-only steps, Highlight Mode to locate the existing tag, selection or editing of that tag without adding a duplicate, and a saved result. |
| `replace image community` | The same Community-only replacement workflow, with a relevant Community screenshot. Do not treat the short wording as permission to omit steps or claim that the assistant has edited the user's project. |
| `find and replace` | The current-file walkthrough, opening Replace, entering both values, reviewing/replacing matches, and saving. Distinguish project-wide replacement without forcing both procedures into one answer. |
| `What does alt mean?` | A short explanation of the image description, with a small example if useful. Do not repeat the full image tutorial. |
| `Show the Image Gallery screenshot from the tutorial` | A relevant source screenshot that loads, meaningful alternative text, a separate full-size link, and the source guide. Check that it fits the desktop and mobile answer panel. |

Retain modes, dialogs, locations, and saving when shortening prose. A documentation
link can provide screenshots and optional practice files; it should not replace
essential instructions. These are manual checks of actual generated answers,
not keyword assertions that would confuse mentioning a control with explaining it.
For each recommended workflow, compare the answer's actions to the applicable
source steps. Check how the reader selects the object, enters the required mode,
opens each panel, finds the control, supplies its value, confirms, saves, and checks
the result. An action can be omitted when the conversation establishes it is
already complete or the source makes it optional. Mark a response incomplete if
it names a desired result but omits the controls needed to reach it; a screenshot
does not make up for that gap.

The existing DocSearch Markdown renderer supports inline images. Extraction makes
source image URLs absolute so they also work in Agent Studio's preview. When
Docusaurus embeds an image as a `data:` URL, extraction uses the page's linked
image file or lazy image URL; otherwise it retains the description without the
unusable image. Binary image data must not consume the model's context. These
changes are confined to AI extraction and the source DOM is restored afterward.

The agent should use one or two relevant screenshots in a visual walkthrough
without a custom renderer or an explicit request for pictures. Both system and
agent instructions must agree: a generic instruction to be concise must not
remove the required modes, numbered steps, or useful illustrations. Request three
source records initially and search again for missing details instead of sending
many full articles to the model.
Use standalone `![description](source-image-url)` followed by a separate full-size
link. The maintained renderer also supports images nested in Markdown links, so
valid model output does not depend on this preferred format. Never construct
image filenames or use a screenshot from the
wrong edition. Complete text steps still matter when no useful image is retrieved.
Test a new conversation after publishing prompts; an existing saved answer does
not regenerate. Prompt changes improve sampled behavior but do not guarantee that
every generated answer includes an image.

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

### Illustrated-answer follow-up on 18 November 2026

- The reported `how to add ima` conversation retrieved the image guide and its
  screenshots but omitted images and Edit Mode from the answer. Its seven source
  articles included about 33,000 characters of embedded image data. Updated system
  and agent prompts now agree on complete illustrated procedures and focused
  retrieval. Both prompts were saved and verified after reloading Agent Studio.
- Crawler configuration v6 is published. The reviewed crawl replaced the live
  indices after approval of the record-count change: `phcode` has 5,423 records,
  and `markdown-index` retains the same 202 page URLs. Keyword extraction omits
  47 duplicate blog listing/tag pages and navigation text. The 30% safeguard,
  existing settings, and the Find and Replace synonym remain intact. The live
  AI index contains no embedded image data; the image guide retains nine usable
  screenshot URLs.
- Seven fresh API conversations covered the short image question twice, another
  add-image wording, inserting a picture, Community replacement, Find and Replace,
  and `alt`. All six procedural responses included source screenshots; image
  answers retained Edit Mode or Community Highlight Mode as appropriate. The
  factual answer stayed brief. All ten distinct screenshot/full-size URLs returned
  HTTP 200 with `image/png`. Repeated identical questions still returned some old
  source text even though the live index was clean, consistent with service-side
  caching; do not claim that every retrieved response refreshes immediately.
- Three additional fresh live conversations tested `add images`, `add imagfes`,
  and `replace image community`. Both add-image requests returned Pro-first and
  Community steps with two screenshots, mode selection, saving, and checking the
  result. The replacement request returned Community-only steps and its screenshot.
  The current live prompts handled these requests without a wording-specific change.
- The production build, 26 search regression tests, 14 tutorial/link tests, and
  generated search, tutorial, and local-link checks passed. The final browser
  connection dropped before a new desktop/mobile visual recheck could finish;
  the earlier renderer/layout checks above are not a substitute for that recheck.
- The prompts and refreshed Algolia indices are live independently of website
  deployment. The local branding, input-color content, and tab-link changes still
  require their website release and a subsequent crawl for the new page metadata.

### General instructions follow-up on 18 November 2026

- Replaced feature-specific prompt recipes with shared rules for understanding
  intent, retrieving evidence, preserving necessary steps, and choosing an answer
  format. Product procedures belong in their guides. Regression questions are
  examples for evaluation, not a list of recognized requests or supported topics.
- Saved both prompts in Agent Studio and verified an exact match with the local
  files after reloading. The existing model, provider, tools, and memory settings
  were retained. These instruction changes are live without a website deployment
  or another crawl.
- Fresh conversations covered procedures, troubleshooting, comparisons, code
  explanations, short definitions, edition/platform constraints, follow-ups,
  topic changes, multiple tasks, and ambiguity. Early samples exposed assumptions
  taken from the first result, unsupported linked-image formatting, omitted edition
  choices, and invented section anchors. The revisions address those behaviors
  generally rather than adding a recipe for each question.
- The final two API samples included Pro-first and Community workflows, two
  source screenshots each, saving and result checks, and page citations without
  invented anchors. The two-part request addressed both linking and sharing.
  A fresh answer on the deployed search page also displayed source screenshots
  and highlighted HTML. At a 390 px viewport, both images loaded and fit within
  the answer panel, with no horizontal overflow.
- Answer quality still varies. The final visual samples compressed some steps
  for reaching the image picker or editing a link; do not describe this evaluation
  as every answer passing a complete beginner walkthrough. Continue reviewing
  intermediate controls and dialogs against the source. Do not resolve a failed
  sample by teaching the prompt that particular question or copying its workflow.
- All 26 JavaScript search regression tests passed again, and the diff passed
  whitespace checks. This follow-up changed prompts and maintenance notes only;
  the earlier production build and runtime checks apply to the pending website
  changes, not a new deployment.

### Workflow completeness follow-up on 18 November 2026

- The omitted controls were present in retrieved sources. Agent Studio's token,
  conversation-depth, and step limits were already set to Unlimited. A token cap
  therefore did not explain the observed summaries; raising that limit is not
  the fix for these samples.
- Removed repeated prompt guidance and added a general action-preservation
  review: resolve source cross-references, retain necessary interactions, and
  check that each instruction enables the next one. Both prompt files were saved
  and verified after reloading Agent Studio.
- Found and fixed a separate extraction defect: server-rendered Pro/Community
  tabs lost their boundaries in Markdown. Both hosted extraction callbacks now
  use the tab annotations described above. Algolia's URL Tester verified the
  actual Markdown for the image and link guides before the configuration was saved.
- The refresh finished with 251 successful URLs, 43 ignored URLs, and no failed
  URLs. The live indices retain 5,423 keyword records and the same 202 AI page URLs.
  Nine AI pages now have balanced tab boundaries, including platform alternatives;
  no AI record contains embedded image data. The existing Find and Replace synonym
  remains present. The article HTML, crawl scope, schedule, and safety limits were
  not changed by this extraction update.
- Eight live API scenarios produced ten reviewed answers covering image insertion,
  linking and sharing, project replacement and a single-file correction, extension
  installation, a code explanation followed by Python execution, troubleshooting,
  ambiguity, and comparison. Network interruptions were retried and are not quality
  passes. The linking answer now retained the text-editing and destination-dialog
  actions, and a fresh image preview retained the missing picker interactions.
  However, another image sample still omitted the gallery access steps, and a
  replacement answer copied linked-image Markdown that this renderer does not
  support. Do not report all responses as complete or consistently illustrated.
- A preview comparison with `gpt-6.1-sol` also omitted or confused interactions.
  It was not published. Production continues to use `gpt-6-luna` with the existing
  provider and tools. These limited samples do not establish that changing models
  fixes the problem. A separate source-based answer review and repair stage would
  need integration and evaluation work; the prompts' internal check is not that
  independently enforced stage, and no such stage was added in this change.
- The live registry and official release notes were checked again: DocSearch
  `5.2.0` and Docusaurus `3.10.2` remain current, so the `5.2.0-phcode.1` source
  dependency is retained. All 28 search tests and 14 tutorial/link tests passed,
  along with packaging, the production build, and generated search, tutorial,
  and link checks. Existing unrelated Docusaurus anchor warnings remain. Tests
  that spawn Git/Node subprocesses required execution outside the sandbox.

### Release verification on 18 November 2026

- The final browser check reproduced the linked-image failure described above:
  valid `[![description](image)](full-size)` output appeared as literal Markdown.
  The maintained package is now `5.2.0-phcode.2`. Its link renderer processes child
  tokens through the existing safe renderers instead of escaping the raw label.
  This resolves the rendering failure; it does not guarantee that every answer
  includes an image or all procedural steps.
- Source and installed-package regression cases cover linked and standalone
  images, formatted labels, encoded URLs, unsafe nested URLs, HTML and attribute
  injection, and streaming prefixes. The old artifact failed the new cases;
  the rebuilt artifact passes. The reviewed patch, version, tarball, both lockfiles,
  and upgrade/removal guidance were refreshed together.
- All 32 application search tests, 10 maintained-package tests, and 14 tutorial/link
  tests passed. A clean offline installation of the lockfile selected the new
  package. The production build and generated search, link, and tutorial checks
  passed; existing unrelated anchor/blog warnings remain.
- Chrome checks of the built site at 1440 px and 390 px confirmed Phoenix branding,
  the accessible dialog heading, visible linked Algolia attribution, two loaded
  clickable screenshots per sampled answer, highlighted HTML, preserved `%20`
  citations and Sources links, no horizontal overflow, and Escape/focus restoration.
  Desktop used light mode and mobile used dark mode. The local Docusaurus preview
  server selected the existing `/search/index.html` redirect repeatedly, so this
  check served the built `search.html` at `/search` through a temporary static
  preview. This preview configuration is not a production change.
- Both live prompts were read back after saving and match the repository. They
  still prefer standalone screenshots with separate full-size links, but no longer
  describe linked images as unsupported. The model remains `gpt-6-luna`.
- The website bundle, branding, and renderer fix require deployment of this commit.
  The extraction fixes and prompts are already live. After deploying the pending
  content/tab-link changes, recrawl so the index receives their new page metadata.
  Answer completeness remains a sampled quality limitation; no separate automated
  review-and-repair stage is included in this release.

## Official references

- [Docusaurus query-string tabs](https://docusaurus.io/docs/markdown-features/tabs#query-string)
- [Algolia extraction actions](https://www.algolia.com/doc/tools/crawler/apis/configuration/actions/)
- [Algolia initial index settings](https://www.algolia.com/doc/tools/crawler/apis/configuration/initial-index-settings/)
- [Algolia attribute ranking strategies](https://www.algolia.com/doc/api-reference/api-parameters/attributeCriteriaComputedBy)
- [Algolia response caching and cost controls](https://www.algolia.com/blog/product/guardrails-agent-studio)
- [Google robots metadata](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
