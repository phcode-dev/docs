---
title: Replace text across files
slug: /tutorials/replace-in-files
description: Use Replace in Files in Phoenix Code to update text across a project. Review the matching lines, choose which changes to apply, and save all changed files.
image: /tutorials/media/find-replace-review.png
toc_max_heading_level: 2
---

import TutorialIcon from '@site/src/components/TutorialIcon';

Use **Find → Replace in Files** to update the same text in several files, such as a project name or a repeated phrase. You'll review the matches before applying changes.

These steps work in Community (free) and Phoenix Pro.

## 1. Open your project

Use **Open Folder** to open the project containing the files you want to change. Check the project name and file list on the left. If the project is already open, keep using it.

If Live Preview fills the app, click its <TutorialIcon name="restore" label="restore icon" /> to show the editor. You can close Live Preview with the <TutorialIcon name="preview" label="lightning bolt" /> if you need more room for the results.

## 2. Enter the old and new text

1. Choose **Find → Replace in Files**.
2. In **Find…**, enter the text you want to change.
3. In **Replace with…**, enter the new text.
4. Leave **Regular Expression** (`.*`) off for an ordinary text search.
5. Check the file filter beside **Replace…**. **No Files Excluded** searches across the project; **Search in files** or **Exclude files** can limit which files are searched.
6. Click **Replace…** to open the review list.

**Your files haven't changed yet.** The matches appear in **Search Results** at the bottom of the editor. Drag the panel's top edge upward if you need more room.

## 3. Choose which matches to replace

[![The replacement review lists checked matches across three HTML files, with a Replace button in the results toolbar](/tutorials/media/find-replace-review.png)](/tutorials/media/find-replace-review.png)

The screenshot shows an example: changing `Trail Notes` to `Weekend Notes`. Your review will show the words and files you chose. Click the screenshot to view it full size.

1. Check the old and new text in the review heading.
2. Read the matching lines. Click the small **▸ triangle** beside a filename if its matches are hidden.
3. Keep only the changes you want checked. Clear a match's checkbox to skip it, or clear the checkbox beside a filename to skip the whole file.
4. Click **Replace** in the **results toolbar** to apply the checked changes.

**Replace…** opens the review; **Replace** in that review applies your selection.

## 4. Save and check

1. Choose **File → Save All** to save every changed file.
2. Open a changed file and check that the new text appears where you expected.
3. Click the <TutorialIcon name="search" label="magnifying glass" /> to open **Find in Files**, or choose **Find → Find in Files**.
4. Search for the original text again, keeping the same project and file filters.

If you replaced every match in that search, you should get **No results**. If you skipped some matches, check that the remaining results are the ones you meant to keep.

**Shortcut:** open Replace in Files with **Ctrl+Shift+H** on Windows/Linux or **Cmd+Option+Shift+F** on macOS. Use the **Find** menu if your browser or operating system handles the shortcut instead.

**Need a sample project?** [Download the optional practice website](/tutorials/first-website.zip), extract it, and open the `first-website` folder. Searching for `Trail Notes` gives you the example shown above.

## Need help?

<details>
<summary>Can I limit the replacement to a folder or file type?</summary>

Right-click a folder in the file list and choose **Replace in…** to work within that folder. To search only HTML files, choose **Search in files** in the filter dropdown and enter `*.html`.

See [Find in Files filtering](/docs/Features/find-in-files#using-file-filters) for more examples.

</details>

<details>
<summary>Why is the file count different from the files listed?</summary>

The review header can overcount files in the current web app. Check the filename groups and their matching lines. In the sample screenshot, the eight matches belong to three files, even though the header says six.

</details>

<details>
<summary>Can I undo the replacements?</summary>

Open each changed file and choose **Edit → Undo** there, then choose **File → Save All**. One Undo does not revert every file in the project.

On larger projects, Phoenix Code may show **Replace Without Undo**. That option can change unopened files on disk without an undo history. Cancel and make a backup of your project before continuing.

</details>

For a change in just one file, follow [Replace text in one file](/docs/tutorials/find-and-replace). For search instructions, see [Find in Files](/docs/Features/find-in-files).
