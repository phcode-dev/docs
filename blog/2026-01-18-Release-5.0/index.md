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

This release's core theme is `Phoenix Pro`, `Live Preview Edit`, `Emmet`, `Tab Bar` and `Custom Snippets`.

## Phoenix Pro

We're excited to announce Phoenix Pro -packed with powerful features to boost your productivity.

Phoenix Community remains free and always will be, as a sign of gratitude to the developer community and the open-source world.

For educators and students, we offer Phoenix Pro for Education at no cost. [Read More](https://docs.phcode.dev/docs/phoenix-pro-school)


## Live Preview Edit

Now you can edit the live preview directly without touching your source code.

Edit text, hyperlinks, and images. Rearrange elements with drag & drop. Cut, copy, paste. View measurements to position elements accurately. Phoenix Code updates your source code instantly.

Read more about [Live Preview Edit](https://docs.phcode.dev/docs/pro-features/live-preview-edit), [Image Gallery](https://docs.phcode.dev/docs/pro-features/image-gallery), [Measurements](https://docs.phcode.dev/docs/pro-features/measurements).

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/live-preview-edit/live-preview-edit.mp4"
/>

## Emmet

**Emmet** one of our most requested features is finally here.

Write Emmet abbreviations and Phoenix Code shows you hints. Select a hint to expand it into a full code snippet. Code faster than ever. [Read More](https://docs.phcode.dev/docs/features/emmet)

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/editing-text/emmet-html.mp4"
/>

## Tab Bar

Tab Bar is here. View all your open files at the top of the editor and switch between them instantly.

Choose what works for you -Tab Bar, Working Files, or both at the same time. [Read More](https://docs.phcode.dev/docs/file-management#tab-bar)

![Tab Bar](../../docs/images/fileManagement/tab-bar.png "Tab Bar")

## Custom Snippets

Define your own code hints with Custom Snippets.

Create hints that expand into full code blocks. You can also add cursor positions so Phoenix Code places your cursor exactly where you need it after expansion. [Read More](https://docs.phcode.dev/docs/features/custom-snippets)

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/custom-snippets/custom-snippets-main.mp4"
/>

## Collapse Folders

After working for some time, your project structure gets messy with lots of open and nested directories.

But no worries now. Phoenix Code supports Collapse All Folders, which lets you reset your view by collapsing all expanded folders to their root level in one click. [Read More](https://docs.phcode.dev/docs/file-management#collapse-all-folders)

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/file-management/collapse-folders.mp4"
/>

## Smarter Color Hints

Color hints in Phoenix Code are now smarter than ever.

When typing a color property, Phoenix Code prioritizes your previously used colors. This helps you reuse frequently used colors without manually searching for them. [Read More](https://docs.phcode.dev/docs/editing-colors#color-hints)

![Previously Used Colors](../../docs/images/editingColors/previously-used-colors.png "Previously Used Colors")

## Notable changes and fixes

- Improved Live Preview to support internal stylesheets and SVGs better than before.
- Git markers now appear in the scrollbar, making it easier to locate changes in a file.
- Improved Git so that it doesn't show stale project status.
- Reduced the number of popups shown when first installing Phoenix.
- Fixed an issue where macOS/iOS and browser autocorrect or smart keyboards altered filenames during renames.
- Added a dialog to notify users when they have deprecated extensions installed.
- Slowed down Quick View popup on hover as it was interfering with user workflows.
- Fixed ghost image appearing in Safari when dragging from CodeMirror.
- Long names in Working Files are now truncated for better readability.
- Added Horizontal Scroll support. Use Shift + mouse scroll.

## All changes

Please see [this link](https://github.com/phcode-dev/phoenix/commits/main/?since=2025-01-30&until=2026-01-18) for a full list of changes
in GitHub.

## A Request from the Phoenix Team:

-   **Share your feedback:** https://github.com/orgs/phcode-dev/discussions
-   **Spread the word** about Phoenix to friends and colleagues.

With gratitude,

The Phoenix Team
