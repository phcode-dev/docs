---
slug: release-5.0
title:  Phoenix Pro Release (January-2026, V-5.0) is now Live
authors: [arun, charly, devvaannsh, phoenixBot]
tags: [Phoenix Pro, Live Preview Edit, Emmet, Tab Bar, Custom Snippets, Collapse Folders, Smarter hint suggestions, Stability Improvements, Windows, Linux, Mac, Release]
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

2026 January release (5.0) of Phoenix Code is now available for download at [phcode.io](https://phcode.io).

This is the biggest release of Phoenix Code ever! This brings lots of much-awaited features into Phoenix Code and we bump to the latest 5.0 version with this.

This release's core theme is `Phoenix Pro, Live Preview Edit, Emmet, Tab Bar and Custom Snippets`.

## Phoenix Pro

We are very excited to announce Phoenix Pro which comes with lots of powerful features which can boost your productivity by a large margin.
We also maintain a Phoenix Community version that is free and always will be as a sign of gratitude to the developer community and the open-source world.
We also are very grateful to the educators and the students and for that we have Phoenix Pro for Education which is absolutely free. [Read More](https://docs.phcode.dev/docs/phoenix-pro-school)


## Live Preview Edit

Now, you can edit the live preview directly without worrying about your source code. You can edit text, hyperlinks, images rearrange elements by drag & drop, cut, copy, paste them, view measurements of elements to position them accurately and so much more right from the live preview. Phoenix Code automatically updates your source code instantly.

Read more about [Live Preview Edit](https://docs.phcode.dev/docs/pro-features/live-preview-edit), [Image Gallery](https://docs.phcode.dev/docs/pro-features/image-gallery), [Measurements](https://docs.phcode.dev/docs/pro-features/measurements).

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/live-preview-edit/live-preview-edit.mp4"
/>

## Emmet

One of the most awaited features of Phoenix Code **Emmet** is finally here. Now you can write Emmet snippets and Phoenix Code will show you hints, selecting them will expand the hint into the whole code snippet. With Emmet, you can code even faster now! [Read More](https://docs.phcode.dev/docs/features/emmet)

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/editing-text/emmet-html.mp4"
/>

## Tab Bar

Phoenix Code now also adds the Tab Bar support which is shown at the top of the editor that displays the list of all the open files which helps you in viewing and navigating between files even more quickly. You can choose what suits you, Tab Bar or Working Files or have both enabled at the same time.
[Read More](https://docs.phcode.dev/docs/file-management#tab-bar)

![Tab Bar](../../docs/images/fileManagement/tab-bar.png "Tab Bar")

## Custom Snippets

Custom Snippets allows you to define your own code hints. Create your own code hints which when selected turn into full code blocks. You can also add cursor positions in your code blocks so that Phoenix Code will automatically place the cursor at the right position after expanding the code block.
[Read More](https://docs.phcode.dev/docs/features/custom-snippets)

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/custom-snippets/custom-snippets-main.mp4"
/>

## Collapse Folders

After working for some time, your project structure gets messy, lots of open directories with nested directories and all. But no worries now, Phoenix Code now supports Collapse All Folders feature using which in one click you can reset your view by collapsing all the expanded folders to their root level. [Read More](https://docs.phcode.dev/docs/file-management#collapse-all-folders)

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/file-management/collapse-folders.mp4"
/>

## Smarter Color hints

Phoenix Code code hints are now smarter than ever. When typing a color property Phoenix Code will prioritize the previously used colors which helps you in reusing frequently used colors without manually searching for them. [Read More](https://docs.phcode.dev/docs/editing-colors#color-hints)

![Previously Used Colors](../../docs/images/editingColors/previously-used-colors.png "Previously Used Colors")

## Notable changes and fixes

- We've improved the Live Preview to support internal stylesheets and SVGs better than before.
- We now show Git markers in the scrollbar so that it's easier to locate the git changes in a file.
- Improved Git so that it doesn't show stale project status.
- Reduced the number of popups that we show on first time installing Phoenix.
- Fixed an issue where macOS/iOS and browser autocorrect or smart keyboards altered filenames during renames.
- Show a dialog when user has deprecated extensions in their extension store.
- Quick view was coming up very quickly on hover which was interfering with user workflows, we have slowed it down a bit.
- Safari creates ghost image when dragging from CodeMirror.
- Truncate very long names in Working Files as it was distracting and redundant.
- Horizontal Scroll support. Press Shift + mouse scroll

## All changes

Please see [this link](https://github.com/phcode-dev/phoenix/commits/main/?since=2025-01-30&until=2026-01-18) for a full list of changes
in GitHub.

## A Request from the Phoenix Team:

-   **Share your feedback:** https://github.com/orgs/phcode-dev/discussions
-   **Spread the word** about Phoenix to friends and colleagues.

With gratitude,

The Phoenix Team
