---
title: Extensions
draft: true
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

> **DRAFT — pending media.** Prose is complete. The workflow video and one updated UI screenshot are pending; placeholders inline. Remove this banner and the `draft: true` frontmatter once captured. Popular extensions descriptions were moved verbatim from the old `popular-extensions.md` and still need a style cleanup pass.

Phoenix Code supports extensions for adding features, themes, and language support. All extensions are managed through the built-in **Extension Manager**.

---

## Opening the Extension Manager

> **IMAGE TO TAKE**: Screenshot of the current Phoenix Code interface with a callout / arrow pointing to the Extension Manager button. We need this because the sidebar UI changed in this release and the old screenshot is stale.

Click the **Extension Manager** button in the sidebar to open the dialog.

---

## The Extension Manager dialog

The dialog has four tabs along the top:

| Tab | What it shows |
| --- | --- |
| **Available** | Extensions you can install from the marketplace. |
| **Themes** | Themes you can install from the marketplace. |
| **Installed** | Extensions and themes already installed. |
| **Updates** | Extensions with newer versions available. |

> **VIDEO TO RECORD**: 30 to 60 seconds. Walk through the basic workflow with one clean run, no narration needed:
> 1. Open the Extension Manager.
> 2. Browse the **Available** tab and install one extension.
> 3. Switch to the **Installed** tab to show it listed.
> 4. Remove that same extension and confirm the reload.
>
> Suggested host path: `https://docs-images.phcode.dev/videos/extensions/extension-manager-workflow.mp4`

{/* <VideoPlayer src="https://docs-images.phcode.dev/videos/extensions/extension-manager-workflow.mp4" /> */}

---

## Installing an extension

1. Open the Extension Manager.
2. Switch to the **Available** tab.
3. Find the extension by scrolling or using the search box.
4. Click **Install** on the extension card.
5. Click **Close** when the install confirmation appears.

Some extensions require a reload, which the dialog prompts for.

---

## Updating extensions

1. Open the Extension Manager.
2. Switch to the **Updates** tab. Available updates are listed here.
3. Click **Update** on any extension to upgrade it.

If the Updates tab is empty, all your extensions are current.

---

## Removing an extension

1. Open the Extension Manager.
2. Switch to the **Installed** tab.
3. Find the extension and click **Remove**.
4. In the confirmation popup, click **Remove Extensions and Reload**.

Phoenix Code reloads to finalize the removal.

---

## Themes

Themes use the same Extension Manager as other extensions, with a separate **Themes** tab for browsing.

### Installing a theme

1. Open the Extension Manager.
2. Switch to the **Themes** tab.
3. Find the theme and click **Install**.

Once installed, switch to it from `View > Themes...`. See [Customizing the Editor → Themes](./customizing-editor#themes).

### Applying a theme from the Extension Manager

You can also apply an installed theme without leaving the dialog:

1. Open the Extension Manager.
2. Switch to the **Installed** tab.
3. Find the theme and click **Apply**.

### Removing a theme

A theme is removed the same way as any other extension:

1. Open the Extension Manager.
2. Switch to the **Installed** tab.
3. Find the theme and click **Remove**.
4. Confirm with **Remove Extensions and Reload**.

---

## Creating your own

To create your own theme or extension, see the API section:

- [Creating Themes](/api/creating-themes)
- [Creating Extensions](/api/creating-extensions)
- [Creating Node Extensions](/api/creating-node-extensions)
- [Debugging Extensions](/api/debugging-extensions)
- [Publishing Extensions](/api/publishing-extensions)

---

## Popular extensions

A curated list of community extensions worth checking out.

### Minimap
Created by: [Zorgzerg](https://github.com/zorgzerg)

This extension adds a minimap preview of your code on the side of your editor, making it easier to navigate and get an overview of your code structure.

For more details, visit the [GitHub repository](https://github.com/zorgzerg/brackets-minimap) of the extension.

`Minimap` in action :-
![Minimap](./images/popular-extensions/minimap.png)

---

### Show Whitespace
Created by: [Dennis Kehrig](https://github.com/DennisKehrig)

This extension allows users to visualize spaces and tabs, making code more readable and helping maintain formatting consistency.

For more details, visit the [GitHub repository](https://github.com/DennisKehrig/brackets-show-whitespace) of the extension.

`Show Whitespace` in action :-
![Show Whitespace](./images/popular-extensions/Show-Whitespace.png)

---

### 1-2-3
Created by: [Michal Jeřábek](https://github.com/michaljerabek)

This extension generates number sequences directly in your editor, making it easy to create ordered lists or numbered markers with minimal effort.

For more details, visit the [GitHub repository](https://github.com/michaljerabek/1-2-3) of the extension.

`1-2-3` in action :-
![1-2-3](./images/popular-extensions/1-2-3.gif)

---

### FuncDocr
Created by: [Ole Kröger](https://github.com/Wikunia)

This extension generates JS/PHPDocs for your functions, keeping your code documented and organized.

For more details, visit the [GitHub repository](https://github.com/wikunia/brackets-funcdocr) of the extension.

`FuncDocr` in action :-
![FuncDocr](./images/popular-extensions/Func-Docr.gif)

---

### Remove Comments
Created by: [Pluto](https://github.com/devvaannsh)

This extension allows you to remove unwanted comments from your code. You can delete all comments at once or only those within a selected section.

For more details, visit the [GitHub repository](https://github.com/devvaannsh/Remove-Comments) of the extension.

`Remove Comments` in action :-
<VideoPlayer src="https://docs-images.phcode.dev/videos/popular-extensions/Remove-Comments.mp4" />

---

### Autosave Files on Window Blur
Created by: [Marty Penner](https://github.com/martypenner)

This extension automatically saves all unsaved files whenever Phoenix Code loses focus (for example, when you switch to another application).

For more details, visit the [GitHub repository](https://github.com/martypenner/brackets-autosave-files-on-window-blur) of the extension.

`Autosave Files on Window Blur` in action :-
<VideoPlayer src="https://docs-images.phcode.dev/videos/popular-extensions/autosave.mp4" />
