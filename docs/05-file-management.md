---
title: File Management
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

This section covers how **Phoenix Code** lets you manage, organize, and navigate files and folders within your projects.

---

## File Tree

The **File Tree** appears in the sidebar and shows the complete folder structure of the open project.
It lists all files and folders in a hierarchical view.

![File Tree](./images/fileManagement/file-tree.png "File Tree")

### File Tree Context Menu

When you right-click within the File Tree, a context menu appears which allows you to perform various operations.
> All file and folder operations, such as creating, renaming, and deleting are generally performed through this context menu.

The element you right-click in the File Tree becomes the selected context, meaning any operation performed will apply to that item. For example:
- Right-click a **file** → the action applies to that file.
- Right-click a **folder** → the action applies to or inside that folder (e.g., add file, create subfolder, delete contents).
- Right-click on **empty space** → the action applies to the project’s root directory.

![File Tree Context Menu](./images/fileManagement/file-tree-context-menu.png "File Tree Context Menu")
> In this example, `index.html` is selected as the context. Any action from the context menu will apply to that file.

The File Tree updates automatically, but if files or folders appear missing, use `Refresh File Tree` option in the context menu to manually reload it. This option forces a full refresh of the tree view.

You can also assign or update keyboard shortcuts for any File Tree action through the context menu.
See the [Keyboard Shortcuts Guide](./Features/keyboard-shortcuts) for complete details.

### Sorting Files and Folders

By default, the File Tree sorts folders first (in ascending order *a-z*), followed by files.

To sort folders and files together:
1. Click the **double-arrow** at the top-right of the sidebar.
2. In the dropdown, uncheck **Sort Folders First**.

![File Tree folders sort](./images/fileManagement/file-tree-sort-folders-option.png "File Tree folders sort")

Alternatively, you can control this behavior by updating the `sortDirectoriesFirst` property in the preferences file.
See [Editing Preferences](./editing-text#editing-preferences) for details.

Now, files and folders are sorted together in one ascending list.
![File tree sorted](./images/fileManagement/file-tree-sorted.png "File Tree sorted")
> Notice how the `images` folder now appears in alphabetical order with other items.

### Collapse All Folders

The **Collapse All Folders** feature helps you quickly reset your view by collapsing all expanded folders to their root level, leaving only the top-level items visible in the File Tree.

To collapse all folders:
1. Hover over the File Tree header at the top-right.
2. Click the `collapse icon` (two arrows pointing toward each other) that appears.

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/file-management/collapse-folders.mp4"
/>

---

## Tab Bar

The **Tab Bar** appears at the top of the editor and displays all open files.
Each file in the Tab Bar is referred to as a **tab**, and you can open as many tabs as you like.
*The Tab Bar helps you switch quickly between files while working.*

![Tab Bar](./images/fileManagement/tab-bar.png "Tab Bar")

The active tab is highlighted with a *blue* marker to distinguish it from inactive ones.
To switch between tabs, simply click the tab you want to view.

To close a tab, click the `×` button beside its name.
For inactive tabs, this button appears only when you hover over them.

**Phoenix Code** shows a small `•` icon on tabs that have unsaved changes.

If you try to close a tab with unsaved changes, **Phoenix Code** displays a confirmation dialog with three options:
* **Don't Save**: Closes the tab without saving changes. All unsaved changes will be lost.
* **Save**: Saves the file and then closes the tab.
* **Cancel**: Keeps the tab open and returns you to editing.

![Save File Dialog](./images/fileManagement/save-file-dialog.png "Save File Dialog")

When multiple tabs have the same filename, **Phoenix Code** displays their parent folder name so you can easily tell them apart.
> Hovering over a tab will show a tooltip with its full path.

![Tab Bar UI](./images/fileManagement/tab-bar-main.png "Tab Bar UI")

> The image above shows various UI elements of a tab.

### Tab Bar in Split Panes
When multiple panes are open, each pane has its own Tab Bar and maintains its own list of open tabs.

The active tab in the **active pane** is marked in *blue*,
while the active tab in an **inactive pane** appears in *gray*.

![Split Pane Tab Bar](./images/fileManagement/split-panes-tabs.png "Split Pane Tab Bar")

> A file can appear as a tab in more than one pane.

### Hidden Tabs
When you open a new file, its tab is added to the right of the existing tabs.
If there are more tabs than can fit within the visible area, **Phoenix Code** displays a **Show Hidden Tabs** button.

![Show hidden tabs button](./images/fileManagement/overflow-button.png "Show Hidden Tabs button")

Clicking this button opens a dropdown list of all tabs that are not fully visible.
From this list, you can select a tab to bring it into view or close tabs directly from the dropdown.

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/file-management/overflow-tabs.mp4"
/>

### Drag-Drop Tabs
You can reorder tabs by dragging and dropping them.
While dragging, **Phoenix Code** highlights the drop position with a vertical blue marker, showing exactly where the tab will be placed.

Tabs can also be dragged between panes.
<VideoPlayer
  src="https://docs-images.phcode.dev/videos/file-management/drag-drop-tabs.mp4"
/>

### Tab Bar Context Menu
When you right-click a tab, a context menu appears which has multiple options so that you can work with tabs easily.

![Tab bar context menu](./images/fileManagement/tab-bar-context-menu.png "Tab bar context menu")

#### Tab Bar Context Menu Options

* **Close Tab** — Closes the tab that was right-clicked.
  *For example, in the image, the `script.js` tab will be closed.*

* **Close Tabs to the Left** — Closes all tabs to the left of the selected one (excluding the right-clicked tab).
  *In the image, the `styles.css` tab will be closed.*

* **Close Tabs to the Right** — Closes all tabs to the right of the selected one (excluding the right-clicked tab).
  *In the image, the `index.html` tab will be closed.*

* **Close Saved Tabs** — Closes all tabs with saved content. *Tabs for files that have unsaved changes remain open.*

* **Close All Tabs** — Closes every tab currently open in the Tab Bar.

* **Rename** — Allows you to rename the file linked to the selected tab. *When you choose this option, Phoenix Code opens the File Tree (if it is closed) and highlights the file so you can rename it directly.*

* **Delete** — Deletes the file from the project and removes its tab from the Tab Bar.

* **Show in File Tree** – Highlights the selected file in the File Tree so you can locate it easily.

* **Reopen Closed File** — Reopens the most recently closed file or tab.

> These options provide quick access to common file operations directly from the Tab Bar.

### Git - Tab Bar
The Tab Bar displays Git file status indicators, showing which files are **untracked** or **modified**.

![Tab bar Git](./images/fileManagement/tab-bar-git.png "Tab bar Git")

- A **green marker** indicates an **untracked** file.
- An **orange marker** indicates a **modified** file.

> These indicators appear only when your project is a Git repository.

### Limiting the Number of Tabs
**Phoenix Code** allows you to control the maximum number of tabs displayed in the Tab Bar at once.
By default, the value is set to `-1`, which means all open tabs are displayed.

For example, if you want to show a maximum of **3 tabs** in the Tab Bar, you can add the following to your preferences file:

```json
"tabBar.options": {
    "numberOfTabs": 3,
    "showTabBar": true
}
```
You can set `numberOfTabs` to any positive number to define the maximum tab limit.
If you set it to `0`, the Tab Bar will be hidden entirely.
Any negative value (such as `-1`) displays all open tabs without restriction.
> The active tab is always visible, except when the `numberOfTabs` value is set to `0`.

### Showing or Hiding the Tab Bar
You can enable or disable the Tab Bar in several ways:

#### 1. From the View Menu
Go to `View > File Tab Bar` to toggle it on or off.

![View > File Tab Bar](./images/fileManagement/disable-tab-bar-1.png "View > File Tab Bar")

#### 2. From the Sidebar
Click the **double-arrow** icon in the top-right corner of the sidebar,
then use the `Show File Tab Bar` option in the dropdown to toggle the Tab Bar.

![Disable Tab Bar](./images/fileManagement/disable-tab-bar-2.png "Disable Tab Bar")

#### 3. From Preferences
You can also toggle the Tab Bar by updating the `showTabBar` option in the preferences file.
```json
"tabBar.options": {
    "showTabBar": false
}
```
*Add this in your preferences file to hide the Tab Bar.*
Set the value to `true` to enable it.
See [Editing Preferences](./editing-text#editing-preferences) if you need help in editing the preferences.

---

## Working Files
**Working Files** (also called **Working Tree**) provides another way to view and manage open files. It appears in the sidebar, above the **File Tree**.

![Working Files](./images/fileManagement/working-files.png "Working Files")

Working Files and Tab Bar are synchronized, which means that any operation performed on one (closing, reordering, opening files, etc.) is automatically reflected on the other.

Working Files displays the same UI elements as the Tab Bar:
* `•` icon for unsaved files
* `×` button to close files
* Parent folder names when multiple files have the same filename
* Tooltip showing full file path on hover
* Git status indicators (green for untracked, orange for modified files)

> See the [Tab Bar](#tab-bar) section for detailed explanations of these features.

> **Note**: Unlike Tab Bar, you cannot control the maximum number of files displayed in Working Files.

### Working Files in Split Panes
When using split panes, each pane maintains its own list of open files in Working Files.

The panes are labeled based on the split orientation:
* **Vertical Split**: *Left* (first pane) and *Right* (second pane)
* **Horizontal Split**: *Top* (first pane) and *Bottom* (second pane)

![Working Files Split Panes](./images/fileManagement/working-files-split-panes.png "Working Files Split Panes")

### Drag-Drop in Working Files
You can reorder files in Working Files by dragging and dropping them, just like in the Tab Bar.

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/file-management/drag-drop-working-files.mp4"
/>

### Working Files Context Menu
When you right-click a file in Working Files, a context menu appears with various file operations.

![Working Files context menu](./images/fileManagement/working-files-context-menu.png "Working Files context menu")

#### Working Files Context Menu Options

* **Save File** — Saves the selected file if it has unsaved changes.

* **Show in File Tree** — Highlights the selected file in the File Tree so you can locate it easily.

* **Open In** — Opens the file or its location in external applications. *This option is available only in Desktop apps.*
  - **File Explorer** (Windows) / **File Manager** (Linux): Opens the file's location in the system file browser.
  - **Command Prompt** (Windows) / **Terminal** (Linux): Opens a terminal window at the file's directory.
  - **Default Application**: Opens the file in the system's default application for that file type.

* **Copy** — Copies the file name to the clipboard.

* **Copy Path** — Copies the file's full path to the clipboard.

* **Duplicate** — Creates a duplicate of the file with the same content. The duplicate is named with `(copy 1)` appended.
  *For example: `script.js` becomes `script(copy 1).js`.*

* **Download** — Downloads the file to your local system. *This option is available only in the browser version.*

* **Rename** — Allows you to rename the file. When you choose this option, **Phoenix Code** highlights the file in the File Tree so you can rename it directly.

* **Delete** — Deletes the file from the project and removes it from Working Files.

* **Find in...** — Opens the Find dialog to search for text within the selected file.

* **Replace in...** — Opens the Find and Replace dialog to search and replace text within the selected file.

* **Close** — Closes the selected file and removes it from Working Files.

* **Close Files Above** — Closes all files above the selected one in the Working Files list. *This option is disabled when there are no files above the selected file.*

* **Close Other Files** — Closes all files except the selected one. *This option is disabled when the selected file is the only open file.*

* **Close Files Below** — Closes all files below the selected one in the Working Files list. *This option is disabled when there are no files below the selected file.*

* **Add to .gitignore** — Adds the selected file to the `.gitignore` file, preventing it from being tracked by Git. *This option appears only when your project is a Git repository.*

* **Remove from .gitignore** — Removes the selected file from the `.gitignore` file, allowing it to be tracked by Git again. *This option appears only when your project is a Git repository.*

> These options provide quick access to common file operations directly from Working Files.

### Showing or Hiding Working Files
You can show or hide the Working Files panel in two ways:

#### 1. From the Sidebar
Click the **double-arrow** icon in the top-right corner of the sidebar, then use the `Show Working Files` option in the dropdown to toggle Working Files.

![Disable Working Files](./images/fileManagement/disable-working-files.png "Disable Working Files")

#### 2. From Preferences
You can also toggle Working Files by updating the `showWorkingSet` property in the preferences file.
```json
"showWorkingSet": true
```
Set the value to `false` to hide Working Files.
See [Editing Preferences](./editing-text#editing-preferences) if you need help editing the preferences.

---

## Recent Files

The **Recent Files** dialog provides quick access to files you've recently worked on.

### Opening Recent Files
* **Desktop App**: Press `Ctrl + R`.
* **Browser**: Press `Ctrl + Alt + Shift + O` (as `Ctrl + R` is reserved for browser reloads).

To customize the keyboard shortcut, refer to the [Keyboard Shortcuts Guide](./Features/keyboard-shortcuts#changing-a-keyboard-shortcut).

![Recent Files Dialog](./images/fileManagement/recent-files.png "Recent Files Dialog Box")

The dialog shows your recently opened files. Closed files appear in gray. Hover over them to see an `x` icon-click it to remove them from the list. The `Clear` button at the bottom removes all closed files at once.

> Currently open files cannot be removed from this list. Close them first to remove them.

To view a file's full path, hover over it or check the bottom-left corner of the dialog when a file is selected.

---

## File Recovery

**Phoenix Code** has a built-in **File Recovery** feature to help you retrieve unsaved changes after unexpected events like crashes or accidental closures.

### Recovering Files After a Crash
When you reopen the editor, if there are any unsaved changes from the previous session, a dialog box will appear with two options: `Discard` and `Restore`.

![File Recovery Dialog Box](./images/fileManagement/file-recovery.png "File Recovery Dialog Box")

* **Restore**: Recovers your unsaved files by reinstating all changes made before the last save.

* **Discard**: Removes the unsaved changes. *This will permanently delete the data.*

