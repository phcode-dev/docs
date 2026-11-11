# Contributing to Open Research
:+1::tada: Thanks for taking the time to contribute! :tada::+1:
## Table of Contents
1. [About the Project](#about-the-project)
1. [Project Status](#project-status)
1. [Getting Started](#getting-started)
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

## Files to use as the reference

The image tutorial is the existing example:

| File | Responsibility |
| --- | --- |
| [TutorialVideo.js](src/components/Video/TutorialVideo.js) | Shared playback behavior and `VideoObject` generated from the actual media URLs. |
| [image-tutorial-videos.json](src/data/image-tutorial-videos.json) | Shared recording details, metadata, watch and guide paths, and on-screen instructions for both image editions. |
| [ImageTutorialVideo.js](src/components/Video/ImageTutorialVideo.js) | Reuses the same recording in the article and watch page; `showWatchLink` adds **Open video →** in the article. |
| [ImageWatchPage.js](src/components/Video/ImageWatchPage.js) and [its styles](src/components/Video/ImageWatchPage.module.css) | Watch-page layout, metadata, return link, transcript, and responsive presentation. |
| [Pro route](src/pages/videos/add-image-phoenix-pro.js) and [Community route](src/pages/videos/add-image-phoenix-community.js) | Separate `/videos/...` pages, one recording per page. |
| [tutorial-media-manifest.json](scripts/tutorial-media-manifest.json) | Capture provenance, project, measured duration, and any requested duration limit. |
| [verify-tutorials.cjs](scripts/verify-tutorials.cjs) | Checks the built tutorial pages, media, watch pages, and publication metadata. |

These `Image...` components and data are specific to the image tutorial. For a
different topic, adapt or generalize the pattern with appropriate names and
verification coverage. Do not put unrelated recordings into the image registry.

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
   `GUIDES` list and image-watch-page checks are explicit; it does not
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
