---
slug: release-6.0
title: Phoenix AI Release (May-2026, V-6.0) is now Live
description: "Phoenix Code 6.0 introduces an AI assistant powered by Claude Code, a brand new Design Mode, a rich Markdown editor, an integrated terminal, and Phoenix Neo themes."
authors: [arun, charly, devvaannsh, phoenixBot]
tags: [AI, Claude Code, Design Mode, Markdown Editor, Terminal, Live Preview Edit, Phoenix Pro, Phoenix Neo, Windows, Linux, Mac, Release]
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

2026 May release (6.0) of Phoenix Code is now available for download at [phcode.io](https://phcode.io).

This release is all about making Phoenix Code a true all-in-one web development environment. [AI](#try-ideas-build-pages-and-fix-issues-with-ai) right inside the editor, an upgraded [Live Preview Edit](#live-preview-edit-upgrades), a rich [Markdown editor](#rich-markdown-editor), a built-in [terminal](#built-in-terminal), [Device previews](#view-your-page-at-any-device-size).

Phoenix also got a fresh new look with the [Phoenix Neo](#phoenix-neo-themes) themes, and a new [Design Mode](#design-mode) that lets you edit content visually while keeping your code out of the way.

## Try ideas, build pages, and fix issues with AI

*Included with Phoenix Pro.*

Phoenix Code now includes an AI assistant powered by Claude Code. Ask it to write code, fix bugs, build features, or explain a file.

Attach files, paste screenshots, or use the built-in screenshot tool to show the AI exactly what you mean.

Three permission modes: **Plan** drafts changes for you to approve, **Edit** edits files but asks before running terminal commands, and **Full Auto** runs uninterrupted. Every AI response creates a restore point, so you can undo or roll back at any time. [Read More...](https://docs.phcode.dev/app-links/ai-chat)

<VideoPlayer
  src="https://docs-images.phcode.dev/website/videos/ai-pro-dialog.mp4"
/>

## Design Mode

*Included with Phoenix Pro.*

Focus fully on your content while your code stays out of the way. Work side by side with AI and Live Preview. Edit content visually - whether you're building web pages or Markdown documents.

A new vertical control bar between the sidebar and the editor gives you one-click access to undo/redo, file actions, and the editor toggle. A Spotlight-style Quick Open lets you jump to any previewable file without breaking your flow. [Read More...](https://docs.phcode.dev/app-links/design-mode)

![Design Mode](https://docs-images.phcode.dev/in-app/pro-designMode.png)

## Rich Markdown Editor

*Included with Phoenix Pro.*

Edit Markdown like a document in Live Preview. Now it's easy to add images - just paste or pick one from your device, like in Google Docs or Word.

Format text, edit tables, and add diagrams with real-time sync between code and live preview. Use the slash menu to insert headings, lists, code blocks, and checkboxes without leaving the keyboard. An easier way to create Markdown files that you can share anywhere. [Read More...](https://docs.phcode.dev/app-links/markdown-editor)

![Rich Markdown Editor](https://docs-images.phcode.dev/in-app/pro-markdownEditor.png)

## Live Preview Edit Upgrades

*Included with Phoenix Pro.*

Live Preview Edit just got a major upgrade. Format text with bold, italic, and more. Add elements and update tags, classes, and attributes - all directly in Live Preview.

Drag spacing and resize handles to fine-tune margins, padding, width, and height with a real-time ruler. The new Styles panel reads styles straight from your source code, shows code hints with vendor prefixes and color swatches, and writes changes back to the matching selectors. [Read More...](https://docs.phcode.dev/app-links/live-preview-edit)

![Live Preview Edit](https://docs-images.phcode.dev/in-app/pro-controlBox.png)

## View your page at any device size

*Included with Phoenix Pro.*

Switch between popular phones, tablets, and desktops with a single click to see how your page looks at that size.

Phoenix Code also picks up your CSS `@media` breakpoints so you can jump straight to where your layout switches. [Read More...](https://docs.phcode.dev/app-links/resize-ruler)

![Resize Ruler](https://docs-images.phcode.dev/in-app/pro-resizeRuler.png)

## Built-in Terminal

*Available in desktop apps.*

Run commands right next to your code in the new built-in terminal.

Phoenix Code allows you to open multiple terminal tabs with your preferred shell. Press `F4` to focus the terminal, `Shift+Escape` to toggle focus between editor and terminal, and right-click for Copy / Paste / Clear. You can also open any folder directly from the project tree in a new terminal tab. [Read More...](https://docs.phcode.dev/app-links/terminal)

![Built-in Terminal](https://docs-images.phcode.dev/in-app/terminal.png)

## All Your Tools, One Place

A new tools drawer brings Git, Terminal, Problems, and more into one place. Switch between them instantly without panels getting in your way.

Drag tabs to reorder, use the overflow dropdown when space is tight, and maximize the panel when you need a full canvas. [Read More...](https://docs.phcode.dev/app-links/git)

![Bottom Panel](https://docs-images.phcode.dev/in-app/bottom-panel.png)

## Phoenix Neo Themes

Meet `Phoenix Dark Neo` and `Phoenix Light Neo` - the redesigned default themes with a cleaner, modernized look.

Switch between them anytime from `View > Themes...`. [Read More...](https://docs.phcode.dev/app-links/themes)

![Themes](https://docs-images.phcode.dev/in-app/themes-settings.png)

## Notable changes and fixes

- Prevented an out-of-memory crash that could happen while indexing very large projects, with binary file detection and a 1 GB cache cap.
- Phoenix now recovers gracefully from a corrupted local database instead of crashing on startup.
- Fixed a reflected XSS issue on the browser-not-supported page.
- Fixed an AI chat crash that could occur when sending clipboard-pasted images.
- Education licenses can now be activated on the Linux and macOS desktop apps.
- Fixed `File > Quit` not closing multi-window sessions on the desktop app.
- Hardened the Markdown viewer with a content security policy and a sandboxed iframe.
- New 3-step onboarding tour walks new users through Design Mode, the AI tab, and creating a new project.
- A small zoom HUD now shows the current percentage when you zoom in or out.
- Fixed pinned Markdown previews being bypassed when switching files.
- Markdown viewer scroll position is preserved across panel reopen, file switch, and image-edit dialog close.
- Fixed hyperlink editor multi-click bugs and the "open in new tab" selection in Design Mode.
- Color picker race conditions resolved, and the Computed tab now shows consistent rgb-to-hex values.

## Performance & Stability

- AI chat lazily renders large diffs and frees them on collapse, keeping long sessions responsive.
- AI session storage moved to a 30 MB virtual store with oldest-hunks-first pruning, replacing the older 16 MB FileSystem-based store.
- Sidebar layout is preserved across hide and show, making expand near-instant.
- Lazy hashing for read-tracked files saves CPU and memory.
- Fixed a race condition in Live Preview load that could cause stale iframe overwrites.
- Resize ruler, spacing handles, and color picker draw paths optimized; control surfaces are created once and reused instead of recreated.

## Platform Notes

- **macOS**: avoided the Xcode git install dialog at startup, fixed terminal canvas rendering and the xterm-screen gap, enabled text selection in the AI panel.
- **Windows**: Claude Code detection now works, the terminal can no longer be closed with a running command, and `Ctrl+C` / `Cmd+C` copy works correctly in the terminal.
- **Linux**: full Electron desktop support, including file drag-and-drop, single-window handling, and auto-update.

## All changes

Please see [this link](https://github.com/phcode-dev/phoenix/commits/main/?since=2026-01-18&until=2026-05-08) for a full list of changes
in GitHub.

## A Request from the Phoenix Team:

-   **Share your feedback:** https://github.com/orgs/phcode-dev/discussions
-   **Spread the word** about Phoenix to friends and colleagues.

With gratitude,

The Phoenix Team
