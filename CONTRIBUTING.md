# Contributing to Phoenix Code documentation

Use this guide when writing, updating, or reviewing Phoenix Code documentation.
It applies to human contributors and AI agents.

## Table of Contents

1. [About the Project](#about-the-project)
1. [Project Status](#project-status)
1. [Getting Started](#getting-started)
1. [Writing and updating documentation](#writing-and-updating-documentation)
1. [Adding or updating tutorial videos](#adding-or-updating-tutorial-videos)

## Community engagement
1. [Code of Conduct](https://github.com/phcode-dev/docs/blob/main/CODE_OF_CONDUCT.md)
1. [License](https://github.com/phcode-dev/docs/blob/main/LICENSE)
### Need support?
  * Log an issue with us [here](https://github.com/phcode-dev/docs/issues/new/choose)
### Engage with the community?
  * Discuss the project [here](https://github.com/phcode-dev/docs/discussions)
  * Join our community discord channel [here](https://discord.com/invite/rBpTBPttca).

# About the Project
Documentation for phoenix/brackets

## Project Status
* Active.

# Getting Started
* see https://github.com/phcode-dev/docs/blob/main/README.md

# Writing and updating documentation

The goal is a page a new user can follow to a checked result. Use this workflow
for tutorials, feature guides, troubleshooting, and practical blog posts. Scale
it to the change: a wording correction does not need a new recording or practice
project. The [image tutorial](docs/10-Tutorials/01-add-images.md) and
[single-file replacement tutorial](docs/10-Tutorials/06-find-and-replace.md) show
the established structure and shared components.

## Choose the reader's task and the right page

- Start with a concrete outcome and the reader's starting point. Search queries,
  support questions, and observed mistakes can reveal a gap; a model's answer
  is not evidence that a product feature exists. Summarize private user examples
  without publishing account details or conversation identifiers.
- Search existing guides before creating a page. Correct or extend the relevant
  guide when the outcome is the same. Create a separate page when the scope or
  workflow differs, then link related pages. Finding text across files and
  replacing text in one file, for example, need different instructions.
- Keep established slugs and useful section anchors when revising a page. If a
  heading changes, retain its old explicit ID where appropriate. Follow the
  site's redirect conventions when a URL must change.
- Keep one main task per tutorial. Put prerequisites before the steps and
  optional variants or troubleshooting after them. A short conceptual answer
  does not need to become a tutorial.

## Verify the workflow before writing it

Perform the task in the real product with the intended project and file open.
Check the edition, platform, application version, and whether you are using the
desktop or web app. Record those details and the check date in the review notes.
Use a fresh practice copy when trying alternatives so earlier edits do not hide
missing steps or override later settings.

- Check the complete path: open the project and file, select the right object,
  enter the required mode, open the panel, change the value, apply it, save, and
  inspect the result. Include dialogs that can appear along the way.
- Copy control names and locations from the actual interface. A command constant
  or preference key in source code does not establish a visible menu or switch.
  Check source code or official product documentation for behavior the interface
  cannot show; distinguish that evidence from a workflow you ran yourself.
- State availability accurately. A free feature demonstrated while signed in
  to Pro is not proof that the recording used a Community-only account. Verify
  edition support before labeling the steps.
- For configuration, verify the file location, exact key and value, save/restart
  requirements, scope, and limitations. For dependencies, cover the supported
  operating systems or link directly to the installation steps.
- Inspect the saved file or exported output, not only the preview. Editing an
  existing element should preserve unrelated attributes, classes, styles, and
  content. Replacing a picture normally changes its `src` and `alt` values;
  pasting a new whole tag can remove the reader's layout settings.
- If verification is incomplete, record the specific gap in the handoff. Do not
  invent a control or present an untested procedure as verified.

## Write complete steps in plain language

Open with what the reader will accomplish, which editions it works in, and what
they need. Use familiar words and active verbs. Explain a technical term when
the reader first needs it, such as a project being the folder containing their
files. Remove promotional filler and vague claims; keep the details needed to
finish the task. A language review should improve clarity and accuracy, not
replace product verification with an AI-tone score.

1. Tell the reader where to start. Name the project, active file, or selected
   object where it matters. Offer a skip-ahead link when setup is already done.
2. Describe one action or a short sequence in each numbered step. Use the exact
   control label and its location. Give a menu or visible-button route before
   optional shortcuts, including platform differences where needed.
3. Say what changes after the action. A selected state, highlighted match, open
   dialog, or changed preview helps the reader recognize the right screen.
4. For code, identify the file and insertion or edit location. Say whether to
   insert new content or edit an existing value. Use a language-tagged code block
   for code to copy, and explain each placeholder to replace.
5. Include applying and saving changes, the file affected, and a visible result
   to check. For operations affecting several files or elements, explain the
   scope before applying them and give only verified undo instructions.

Prefer “Click the magnifying glass at the top left to open Find in Files” over
“Use the powerful search functionality.” A screenshot supports a step; it does
not replace an omitted instruction for reaching that screen.

## Show editions, platforms, and practice files clearly

When Pro and Community use different methods, show **Phoenix Pro first and by
default**, followed by **Community (free)**. Use the existing Docusaurus tabs:

```jsx
<Tabs groupId="tutorial-edition" queryString="edition" defaultValue="pro">
```

Import `Tabs` and `TabItem` as in the image tutorial, and use `pro` and `community`
as the tab values. Put descriptive headings inside each tab. Link to the relevant
edition and section using `?edition=community#section-id`, with the query before
the hash. Preserve a reader's explicit edition choice. See the
[Docusaurus tab documentation](https://docusaurus.io/docs/markdown-features/tabs#query-string).

If both editions use the same steps, say so once and share the procedure. Label
platform differences where they affect the action instead of duplicating an
entire guide. Never describe a Pro-only control as available in Community.

For Pro visual-editing tasks, show Design Mode when its larger preview helps.
Explain how to enter it and enable Edit Mode when needed. Community code-editing
tasks should show the editor beside Live Preview and explain Highlight Mode
where it locates the code. These are different modes; use their actual names.

Add a practice project when it helps readers reproduce the task. Reuse a suitable
project in `static/tutorials/` before creating another. Explain extraction, Open
Folder, the file to open, and the starting result. Make a sample optional when
the task works equally well in the reader's own file. A new packaged project
also needs registration in [package-tutorials.cjs](scripts/package-tutorials.cjs)
and the relevant release verification. Keep its source, ZIP, written examples,
screenshots, and recordings in agreement.

## Use recognizable icons and useful screenshots

- Pair a control's shape with its written name and location. Reuse
  [TutorialIcon](src/components/TutorialIcon/index.js), for example
  `<TutorialIcon name="preview" label="lightning bolt" />`. Use the actual
  product icon, not an emoji substitute. Add new shapes and their attribution
  to the shared icon map; follow the
  [icon maintenance notes](config/search/README.md#small-control-icons-in-answers).
- Capture the real interface in the correct project, file, mode, and edition.
  Do not generate or redraw product screenshots to imply a feature exists.
  Remove private account data, credentials, and unrelated windows from the
  capture setup. Use sample assets with a known license and keep attribution.
- Show the relevant control and enough surrounding interface to locate it.
  Keep menus, property rows, values, and results fully visible. Scroll or enlarge
  a panel before capture instead of publishing a clipped screenshot.
- Put each screenshot beside the step it explains. Write alternative text that
  describes the relevant state or action. Use a stable public asset path and a
  link to the full-size image when small details matter, as in the image tutorial.
  Keep published assets available while older pages or answers still link to them.
- Check images at the article's display size on desktop and mobile, in light and
  dark themes. Supply correct dimensions when writing raw `<img>` markup. Use
  one clear visual cue at a time; do not cover the control with an annotation.

## Keep recordings consistent with the article

Read the [video contributor notes](#adding-or-updating-tutorial-videos) before
changing any recording, player, metadata, or watch page. Use a recording when
motion helps explain the task. Aim for under 30 seconds for a new short task clip,
and honor any explicit duration limit; preserve understandable actions rather
than rushing to fit a target. For longer tasks, consider separate focused clips.

Plan the actions, remove idle time, highlight the relevant control, and finish on
the actual saved result. State setup already completed outside the recording.
When a procedure changes, review its screenshots, recording, captions, poster,
and shared metadata together. Do not leave a video teaching the superseded steps.
Use a poster with the video's aspect ratio to avoid a size change on playback.

Keep the complete written guide readable without playing a video. Reuse the
shared player and watch-page components, and follow the existing rules for
autoplay, reduced motion, captions, publication dates, and video discovery.

## Structure pages for readers, search, and Ask AI

Use descriptive titles and headings, an accurate description, stable URLs, and
useful links from related guides. In Docusaurus docs, front matter supplies the
page title; avoid adding a second H1. Set a relevant social image when one is
available. See the official
[front-matter reference](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter).
For blog posts, also follow the existing author, date, tag, and excerpt conventions,
including `<!-- truncate -->` after a useful introduction.

Use this outline when starting a tutorial. Replace all example values and
prompts with verified content; omit sections that do not serve the task.

```md
---
title: Complete a specific task
slug: /tutorials/task-name
description: Describe the outcome and method in one useful sentence.
toc_max_heading_level: 2
---

Explain the outcome and which editions support it.

**You'll need:** Name the required files, software, and starting state.

## 1. Open the project or file

Give the verified setup steps and expected starting screen.

## 2. Make the change

Give numbered actions, with edition tabs only when the methods differ.

## 3. Save and check

Name the save action and the result the reader should see.

## Need help?

Answer problems observed while following these steps.
```

- Make important steps, edition restrictions, and caveats available as text.
  Group each instruction with its relevant heading and illustration so search
  and Ask AI can retrieve a useful explanation. Keep full-size image links
  crawlable; do not rely on a screenshot's text or a video alone.
- Add FAQs for real reader problems, with direct answers and concrete fixes.
  Do not pad a page with repeated questions or keywords. Keep any structured
  data consistent with visible content and reuse the site's existing mechanisms.
- Fix missing or incorrect information in the source guide. Do not add a recipe
  for each question to the AI prompt. Readers may use a short request, a typo,
  or a follow-up; sample varied wording when reviewing generated answers.
- Check the generated canonical URL, sitemap entry, and crawl/index permissions
  for new public pages. Review generated `llms.txt` entries where applicable;
  change the source or generator rather than hand-editing build output.
- Judge quality by accuracy, completeness, and whether a reader can succeed.
  [Google's content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
  emphasizes useful, reliable content for people. A style score, FAQ, video,
  metadata field, or `llms.txt` file is not proof that Google has indexed a page.

## Review, release, and hand off

For published tutorial or blog changes, follow the
[tutorial release checks](README.md#tutorial-release-checks). Register new
tutorials, blog routes, and video registries in
[verify-tutorials.cjs](scripts/verify-tutorials.cjs) where applicable; it does not
automatically discover every new page. Use JavaScript for verification code.
Keep checks focused on meaningful behavior; prose edits do not need tests that
merely assert the new wording. For contributor-notes-only changes, review links
and the diff; a site build is unnecessary.

Before release, follow the [dependency maintenance rules](AGENTS.md#package-upgrades-and-docsearch-maintenance).
Use the [search checks](README.md#search-and-ask-ai-checks) for search or Ask AI
changes. Keep shared tooling changes limited to what the documentation needs.

Review the built page as a new reader. Follow the complete workflow from its
stated starting point, check every documented edition/platform variation, and
test links, downloads, code examples, screenshots, and saved results. Inspect
desktop and mobile layouts in light and dark themes. Check keyboard access and
the selected tab after opening an edition-specific link; follow the additional
visual checks for video pages. If a platform or behavior could not be checked,
state that limitation instead of marking the entire review complete.

After deployment, check the live page and its assets. When indexed content has
changed, recrawl Algolia and test fresh answers against the new source, including
citations, screenshots, icons, and code formatting where relevant. Content-only
updates do not require republishing crawler settings or agent prompts. Use the
[search maintenance guide](config/search/README.md) when those settings also
change. Check Google indexing separately in Search Console; an Algolia crawl
does not request or confirm Google indexing.

Leave a short handoff with the changed pages, product verification details,
checks actually run, remaining limitations, and commit or preview link. Distinguish
what is local, committed, deployed, recrawled, and confirmed indexed. Name the
next required action without claiming that an unperformed check passed.

# Adding or updating tutorial videos

Use these notes when adding recordings, changing a video player, or creating a
page for watching a tutorial video. They apply to human contributors and AI agents.

## Why we have separate watch pages

The written tutorial remains a complete guide with supporting videos. When a
recording also deserves its own viewing experience and discovery in video search,
give it a dedicated watch page where the video is the main content.
[Google's video guidance](https://developers.google.com/search/docs/appearance/video#create-a-dedicated-watch-page)
allows the same video on both pages; metadata alone does not make an article a
watch page.

Search Console may still report **Video isn't on a watch page** for the article.
That is expected when its video is supplementary and does not mean the article
cannot be indexed as a normal web page. Check the separate watch URL for video
indexing. See [Google's video indexing report documentation](https://support.google.com/webmasters/answer/9495631?hl=en).

## Preserve the reading experience

- Keep the article's written steps, screenshots, edition tabs, and inline videos
  in their useful positions. Keep Pro first and selected by default where both
  Pro and Community workflows are documented.
- Under an inline video with a watch page, use the existing small, right-aligned
  **Open video →** link. Keep its descriptive accessible label, visible keyboard
  focus, and touch target. Avoid a prominent extra callout or a sentence about
  watching the video "on its own page."
- The link must be a real crawlable link to the watch page. It opens a page, so
  do not label it "Fullscreen."
- Reuse `TutorialVideo` for playback: silent autoplay when visible, native
  controls, pause offscreen, respect a reader's pause and reduced-motion setting,
  and no automatic loop. Browser autoplay restrictions may require pressing Play.
- On the watch page, show one prominent video near the top, available in the
  initial HTML without opening a tab or expandable section. Follow it with brief
  context, a link back to the relevant article edition, and expandable on-screen
  instructions. Keep the article and watch page at their own canonical URLs.

## Plan and pace the recording

Write a short sequence before recording: the task, each input, the visible
response, and the finished result. Rehearse the real interface first. A duration
limit is a ceiling, not time to fill with a stationary screen.

- Keep the action and its result together. For drag and drop, show the press,
  movement, drop target, release, and changed order. Do not substitute a button
  click or edit away the middle of the gesture.
- Show how a setting is chosen and leave its selected value visible briefly.
  Do not make values change while the cursor points somewhere else.
- Use one short instruction and one relevant visual cue at a time. Position
  guidance near the action without covering labels, menus, or the drop target.
  In silent clips, long text competes with watching the interface.
- Remove setup, hesitation, and waiting that teaches nothing. Keep enough time
  to read the instruction and recognize the response; do not speed through a
  gesture or chain several unexplained changes to meet a duration target.
- Use a tighter crop when a control would otherwise be unreadable, retaining
  enough context to locate it. Avoid decorative zooms and constant cursor motion.
- Finish on the actual result. For a conversion, inspect and show the downloaded
  file, with an explicit label when cutting from the app to a result preview.
  Record the file in a real viewer and preserve its page layout. Identify the
  viewer when its appearance matters, and state the settings that affect the
  result. A custom side-by-side arrangement of separate PDF pages can mislead
  readers about what they will see when opening the download.
- Review the final cut at normal speed and at the article's display size. Check
  that a newcomer can identify the input and expected result at every step.
  Re-time captions after editing, and keep pause, replay, and seeking available.

These are our production choices informed by the following research; none of
these studies establishes an optimal duration for a sub-30-second silent clip:

| Research | Finding and scope | Application here |
| --- | --- | --- |
| [Mayer & Moreno (2003), *Educational Psychologist*](https://doi.org/10.1207/S15326985EP3801_6) | Their multimedia-learning research describes limited processing capacity and benefits from removing irrelevant material and aligning explanations with visuals. | Short instructions, a focused capture, and guidance aligned with the current action. |
| [Rodemer et al. (2022), *Applied Cognitive Psychology*](https://doi.org/10.1002/acp.3973) | Timed signals improved attention and retention in an eye-tracking experiment with 28 chemistry students; this was not a software-tutorial trial. | Use selective, synchronized highlights as a design hypothesis, not a promise of improved learning. |
| [Gold, Zacks & Flores (2017), *Cognitive Research*](https://doi.org/10.1186/s41235-016-0043-2) | Cues at meaningful event boundaries supported memory for everyday activities. | Place cuts and instruction changes between completed actions, preserving each gesture. |
| [Garrett (2021), *British Journal of Educational Technology*](https://doi.org/10.1111/bjet.13000) | Imposed segmentation did not improve transfer or reduce cognitive load in the tested Excel tutorial; viewers used pause and rewind. | Preserve viewer control and purposeful short holds; avoid automatic long pauses at every step. |
| [Guo, Kim & Rubin (2014), ACM Learning at Scale](https://doi.org/10.1145/2556325.2566239) | This observational study of 6.9 million MOOC viewing sessions measured engagement proxies, not mastery; tutorial and lecture viewing differed. | Do not treat watch time, speed, or a specific clip length as proof that readers can perform the task. |

## Files to use as the reference

The image and layout tutorials share the same player and watch-page layout as the
PNG-to-PDF blog guides:

| File | Responsibility |
| --- | --- |
| [TutorialVideo.js](src/components/Video/TutorialVideo.js) | Shared playback behavior and `VideoObject` generated from the actual media URLs. |
| [RecordedVideo.js](src/components/Video/RecordedVideo.js) | Shared recording player and small **Open video →** action for any guide. |
| [image-tutorial-videos.json](src/data/image-tutorial-videos.json) | Shared recording details, metadata, watch and guide paths, and on-screen instructions for both image editions. |
| [layout-tutorial-videos.json](src/data/layout-tutorial-videos.json) | Shared recording details for the image-next-to-text tutorial's Pro walkthrough. |
| [png-pdf-videos.json](src/data/png-pdf-videos.json) | Recording details for the conversion and page-settings blog walkthroughs. |
| [ImageTutorialVideo.js](src/components/Video/ImageTutorialVideo.js) and [PngPdfVideo.js](src/components/Video/PngPdfVideo.js) | Thin article components that choose a recording; `showWatchLink` adds **Open video →**. |
| [VideoWatchPage.js](src/components/Video/VideoWatchPage.js) and [its styles](src/components/Video/VideoWatchPage.module.css) | Shared watch-page layout, metadata, return link, transcript, and responsive presentation. |
| [Pro route](src/pages/videos/add-image-phoenix-pro.js) and [Community route](src/pages/videos/add-image-phoenix-community.js) | Separate `/videos/...` pages, one recording per page. |
| [Pro layout route](src/pages/videos/image-next-to-text-phoenix-pro.js) | The same watch-page pattern linked to the image-next-to-text tutorial. |
| [PNG conversion route](src/pages/videos/convert-png-to-pdf.js) and [page-settings route](src/pages/videos/png-to-pdf-page-settings.js) | The same watch-page pattern linked to blog guides. |
| [tutorial-media-manifest.json](scripts/tutorial-media-manifest.json) | Capture provenance, project, measured duration, and any requested duration limit. |
| [verify-tutorials.cjs](scripts/verify-tutorials.cjs) | Checks the built tutorial pages, media, watch pages, and publication metadata. |

Keep each topic's recordings in its own data file. Reuse `RecordedVideo` and
`VideoWatchPage` with that data and add verification coverage. The `Image...`
wrappers remain specific to the image tutorial; do not put unrelated recordings
into its registry.

## Adding a recording and watch page

1. Record the correct practice project, active file, and product edition. Show
   the controls a new user should click, with short on-screen instructions and
   highlights. Keep menus and properties fully visible. State any setup already
   completed or system file-picker steps that are outside the recording. Keep
   clips focused and honor the requested duration limit; the existing search
   walkthroughs must remain under 30 seconds.
2. Save the MP4, representative poster image, and timed English `.vtt` captions
   under `static/tutorials/media/`. Use stable filenames. Export the MP4 with
   fast-start metadata and register it in `scripts/tutorial-media-manifest.json`
   with its actual duration and capture details. Record verification only after
   performing it.
3. Share one recording definition between its inline player and watch page.
   Include the source, poster, captions, accessible label, descriptive name and
   description, exact ISO 8601 duration (for example, `PT24S`), and actual recording
   date in `dateCreated`. With the current verifier, write duration as `PT…S`.
   Match the watch page's on-screen instructions to the caption cues; do not
   invent spoken narration for a silent recording.
4. Add the `/videos/...` route using the existing Docusaurus layout. Give it a
   unique page title and description, a representative social image, one player,
   and one matching `VideoObject`. Reuse `TutorialVideo` rather than adding a
   second hand-written schema. The article and watch page must describe the same
   recording, poster, captions, duration, and publication date.
5. Add **Open video →** below the inline player and a return link to the matching
   guide or edition. Confirm that the watch page has its own canonical URL and
   appears in the generated sitemap, with no indexing or crawl block.
6. Extend `scripts/verify-tutorials.cjs` for the new article and watch route. Its
   `GUIDES`, `BLOGS`, and `WATCH_VIDEOS` lists are explicit; it does not
   automatically discover every new video page. Keep verification code in
   JavaScript and preserve the checks for shared metadata, links, captions,
   publication dates, and a single visible watch-page player.

## Preserve publication dates

`dateCreated` records when the video was made. `uploadDate` is its first
publication date and is supplied by the media plugin during deployment. Adding
a watch page for an existing video must preserve that video's original date.
Do not hardcode `uploadDate`, replace it with the current build date, or invent a
date to make a check pass.

Follow the [deployment notes](README.md#deployment). The workflow restores and
preserves `tutorials/video-publications.json`; local preview builds may leave
unpublished dates unset. Restore missing publication history before releasing.

## Verify before and after release

Run the [tutorial release checks](README.md#tutorial-release-checks). The build
includes local-link verification, and deployment additionally runs
`npm run verify:tutorials -- --release` against the build with publication dates.
Passing checks confirms the implementation, not Google's indexing decision.

Preview the built article and watch page on desktop and mobile, in light and dark
themes. Check that the article still reads naturally, controls and captions are
not clipped, the video plays and seeks, keyboard navigation works, reduced motion
is respected, and the return link selects the correct edition. Also navigate
from the article to the watch page to catch stale metadata after client navigation.

After deployment, check the live watch URL, MP4, poster, captions, and sitemap.
Use Search Console URL Inspection on the **watch page**: page indexing comes
before video indexing, and neither valid metadata nor a successful build
guarantees inclusion. The article's supplementary-video warning can remain;
preserve its reading layout while checking the watch page's result.
