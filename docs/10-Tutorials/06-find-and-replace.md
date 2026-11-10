---
title: Replace text in one file
slug: /tutorials/find-and-replace
description: Find and replace a word or phrase in the file you have open in Phoenix Code. Review each match, replace the text, and save your changes.
image: /tutorials/media/find-replace-one-file.png
toc_max_heading_level: 2
---

import TutorialIcon from '@site/src/components/TutorialIcon';

Change a word or phrase in your open file using **Find → Replace**. These steps work in Community (free) and Phoenix Pro.

## 1. Open your file

Open the file you want to edit in Phoenix Code. If it's already open, you're ready to start.

If Live Preview fills the app, click its <TutorialIcon name="restore" label="restore icon" /> to show the code editor and the **Find** menu.

## 2. Enter the old and new text

1. Choose **Find → Replace**.
2. In **Find…**, enter the word or phrase you want to change. Use text that appears in this file.
3. In **Replace with…**, enter the new text.
4. Leave the **Regular Expression** (`.*`) button off for an ordinary text search.

[![Replace in index.html, with A little time outside. in Find and My weekend walks. in Replace with](/tutorials/media/find-replace-one-file.png)](/tutorials/media/find-replace-one-file.png)

This example changes `A little time outside.` to `My weekend walks.` Use your own words when following the steps. Click the screenshot to view it full size.

## 3. Replace and save

1. Check the highlighted match in the editor. Use the **◀** and **▶** buttons to move between matches.
2. Click **Replace** to change the highlighted match, or **Replace All** to change every match in this file.
3. Press **Esc** to close the search bar.
4. Save with **Ctrl+S** on Windows/Linux or **Cmd+S** on macOS.

**Check that the new text appears where you expected.**

**Shortcut:** open Replace with **Ctrl+H** on Windows/Linux or **Cmd+Option+F** on macOS. Use **Find → Replace** if your browser or operating system handles the shortcut instead.

**Need a sample file?** [Download the optional practice website](/tutorials/first-website.zip), extract it, open its folder in Phoenix Code, and choose `index.html`.

## Need help?

<details>
<summary>Why can't I find the text?</summary>

Check that the intended file is open. Copy the text directly from that file to avoid differences in spacing or punctuation.

Leave **Regular Expression** (`.*`) off. The **Match Case** (`Aa`) button makes capital and lowercase letters matter; turn it off if you want to find both.

</details>

<details>
<summary>How do I undo a replacement?</summary>

Choose **Edit → Undo** in the same file, check the result, then save again.

</details>

To change several files, follow [Replace text across files](/docs/tutorials/replace-in-files). To search across a project, see [Find in Files](/docs/Features/find-in-files).
