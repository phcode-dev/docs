---
title: File Management
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

This section covers how **Phoenix Code Editor** lets you manage, organize, and navigate files and folders within your projects.

---

## File Tree

The **File Tree** appears in the sidebar and shows the complete folder structure of the open project.
It lists all files and folders in a hierarchical view.

![File Tree](./images/fileManagement/file-tree.png "File Tree")

> All file and folder operations, such as creating, renaming, and deleting, is generally performed through the File Tree.

### File Tree Context Menu

When you right-click within the File Tree, a context menu appears which allows you to perform various operations.

- Right‑click a **file** → the action applies to that file.
- Right‑click a **folder** → the action applies inside that folder (e.g., add file, create subfolder, delete contents).
- Right‑click on **empty space** → the action applies to the project’s root directory.

![File Tree Context Menu](./images/fileManagement/file-tree-context-menu.png "File Tree Context Menu")
> In this example, `index.html` is selected. Any action from the context menu will apply to that file.

The File Tree updates automatically, but if files or folders appear missing, use `Refresh File Tree` option in the context menu to manually reload it. This option forces a full refresh of the tree view.

You can also assign or update keyboard shortcuts for any File Tree action through the context menu.
See the [Keyboard Shortcuts Guide](./Features/keyboard-shortcuts) for complete details.

---

### Sorting Files and Folders

By default, the File Tree sorts folders first (in ascending order), followed by files.

To sort folders and files together:
1. Click the **arrows icon** at the top-right of the sidebar.
2. In the dropdown, uncheck **Sort Folders First**.

![File Tree folders sort](./images/fileManagement/file-tree-sort-folders-option.png "File Tree folders sort")

Alternatively, you can control this behavior by updating the `sortDirectoriesFirst` property in the preferences file.
See [Editing Preferences](./editing-text#editing-preferences) for details.

Now, files and folders are sorted together in one ascending list.
![File tree sorted](./images/fileManagement/file-tree-sorted.png "File Tree sorted")
> Notice how the `images` folder now appears in alphabetical order with other items.
