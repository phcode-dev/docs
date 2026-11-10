---
title: Find and replace text in Phoenix Code
sidebar_label: Find and replace text
slug: /tutorials/find-and-replace
description: Find and replace text in one file or across your project. Follow screenshots to review matches, apply selected replacements, save, and check your changes.
image: /tutorials/media/find-replace-review.png
toc_max_heading_level: 2
---

import TutorialIcon from '@site/src/components/TutorialIcon';

**Find in Files** searches for text across your project without changing it. **Find and replace** means finding that text and changing it to something else. Choose the command you need from the **Find** menu:

| Command | Where it looks | What it does |
| --- | --- | --- |
| **Find** | Open file | Finds and highlights text. |
| **Find in Files** | Project files | Lists matching files and lines. |
| **Replace** | Open file | Replaces one match or all matches in that file. |
| **Replace in Files** | Project files | Lets you review and apply selected replacements. |

In the toolbar, the <TutorialIcon name="search" label="magnifying glass" /> opens **Find in Files**. The <TutorialIcon name="showInTree" label="binoculars" /> is **Show in File Tree**: it locates the open file in the sidebar. Use **Find → Replace** or **Find → Replace in Files** when you want to change text.

For search instructions, see [Find in Files](/docs/Features/find-in-files). This tutorial walks through **replacing text** in your own files. For one file, follow steps 1–2. For several files, open your project in step 1, then go to step 3.

**Phoenix Pro and Community (free) use the same steps.** You can follow along in the desktop app or in Chrome or Edge at [web.phcode.dev](https://web.phcode.dev/).

**Need a sample project?** [Download the optional practice website](/tutorials/first-website.zip), extract it, and use **Open Folder** to open the `first-website` folder. The screenshots use this sample; when working in your own files, enter the words you want to change.

## 1. Open your file

Open the file you want to edit. If you plan to change several files, use **Open Folder** to open their project folder first. Check the project name and file list on the left.

If your file or project is already open, you're ready to start. If Live Preview fills the app, click its <TutorialIcon name="restore" label="restore icon" /> to show the code editor and the **Find** menu.

## 2. Replace text in the open file

1. Choose **Find → Replace**.
2. In **Find…**, enter the word or phrase you want to change. Use text that appears in your open file.
3. In **Replace with…**, enter the new text.
4. Leave the **Regular Expression** (`.*`) button off so the search treats your text as ordinary words.

**Check the highlighted match in the editor.** If there are several, use the **◀** and **▶** buttons to move between them.

[![Replace in index.html, with A little time outside. in Find and My weekend walks. in Replace with](/tutorials/media/find-replace-one-file.png)](/tutorials/media/find-replace-one-file.png)

The screenshot shows an example: changing `A little time outside.` to `My weekend walks.` in one HTML file. Click any screenshot to view it full size.

5. Click **Replace** to change the highlighted match. To change every match in the open file, click **Replace All**.
6. Press **Esc** to close the bar, then save with **Ctrl+S** on Windows/Linux or **Cmd+S** on macOS.

**Check that the new text appears in your file.** Only the open file has changed. If that's all you needed, you're done.

## 3. Prepare replacements across your project

Use **Replace in Files** when the same change belongs in several files, such as updating a project name or correcting a repeated phrase.

If Live Preview is open, you can click the <TutorialIcon name="preview" label="lightning bolt" /> to close it and give the search results more room.

1. Choose **Find → Replace in Files**.
2. In **Find…**, enter the text you want to change across the project.
3. In **Replace with…**, enter the new text.
4. Leave **Regular Expression** (`.*`) off. Check the file filter beside **Replace…**: **No Files Excluded** searches across the project; **Search in files** or **Exclude files** can limit which files are searched.
5. Click **Replace…** beside the replacement text.

**This opens the review list; it hasn't changed your files yet.** The filenames and number of matches depend on your project and search text.

## 4. Review and apply the changes

The review appears in **Search Results** at the bottom of the editor. Drag the panel's top edge upward if you need more room to read the matches.

[![The replacement review lists eight checked matches across index.html, about.html, and contact.html, with a Replace button in the results toolbar](/tutorials/media/find-replace-review.png)](/tutorials/media/find-replace-review.png)

This example replaces `Trail Notes` with `Weekend Notes` in the optional sample project. Your review will show the words and files you chose.

1. Check the old and new text in the review heading.
2. Read the matching lines. Click the small **▸ triangle** beside a filename if its matches are hidden.
3. Keep only the changes you want checked. Clear a match's checkbox to skip that occurrence, or clear the checkbox beside a filename to skip the whole file.
4. Click **Replace** in the **results toolbar** to apply the checked changes.
5. Choose **File → Save All** to save every changed file.

The two buttons do different jobs: **Replace…** opens the review; **Replace** in that review applies your selection.

## 5. Check your changes

1. Open a changed file and check that the new text appears where you expected.
2. Choose **Find → Find in Files** and search for the original text again. Keep the same project and file filters.
3. If you replaced every match in that search, you should get **No results**. If you skipped some matches, check that the remaining results are the ones you meant to keep.

<details>
<summary>Preview the result if you're editing a webpage</summary>

Open the HTML page and click the <TutorialIcon name="preview" label="lightning bolt" /> to open Live Preview. Check the updated words on the page. You can use <TutorialIcon name="popout" label="Pop Out to New Window" /> to check the page in a separate browser window.

For a larger preview in **Design Mode**, close the search bar with **Esc** and click the <TutorialIcon name="expand" label="maximize icon" /> in the Live Preview toolbar.

This is the optional practice website after changing its heading and site name:

[![The first-website home page after saving, showing Weekend Notes and My weekend walks.](/tutorials/media/find-replace-result.png)](/tutorials/media/find-replace-result.png)

</details>

## Shortcuts for next time

Use the **Find** menu if your browser or operating system handles a shortcut instead.

| Action | Windows / Linux | macOS |
| --- | --- | --- |
| Find in the open file | **Ctrl+F** | **Cmd+F** |
| Find in Files | **Ctrl+Shift+F** | **Cmd+Shift+F** |
| Replace in the open file | **Ctrl+H** | **Cmd+Option+F** |
| Replace in Files | **Ctrl+Shift+H** | **Cmd+Option+Shift+F** |

## Need help?

<details>
<summary>Why are there no matches, or fewer than I expected?</summary>

Check that the intended file or project is open. **Replace** searches the open file; **Replace in Files** searches across the project. Check whether a file filter is hiding files you expected to search. Choose **Don't Exclude Files** if you want to clear that filter.

Copy the text directly from your file to avoid differences in spacing or punctuation. If you've already changed the words, search for the new text instead.

Leave **Regular Expression** (`.*`) off for ordinary text. The **Match Case** (`Aa`) button makes capital and lowercase letters matter; turn it off if you want to find both.

</details>

<details>
<summary>I clicked Replace…, but my files still have the old text</summary>

**Replace…** prepares the review list. Leave the changes you want checked, then click **Replace** in the results toolbar. Choose **File → Save All**. If you're checking a webpage in a separate browser window, reload it to see the saved changes.

</details>

<details>
<summary>Why is the file count different from the files listed?</summary>

The review header can overcount files in the current web app. Check the filename groups and their matching lines. In the sample screenshot, the eight matches belong to three files, even though the header says six.

</details>

<details>
<summary>Can I replace words in just one folder or file type?</summary>

Yes. Right-click a folder in the file list and choose **Replace in…** to limit the operation to that folder. To work only in HTML files, choose **Search in files** in the filter dropdown and enter `*.html`. Review the matches before applying the change.

See [Find in Files](/docs/Features/find-in-files) for more filtering examples.

</details>

<details>
<summary>Can I undo a replacement?</summary>

Use **Edit → Undo** in the file you changed. For a replacement across files, open each changed file and undo there, then choose **File → Save All**. One Undo does not revert every file in the project.

On larger projects, Phoenix Code may show **Replace Without Undo**. That option can change unopened files on disk without an undo history. Cancel and make a backup of your project before continuing.

</details>
