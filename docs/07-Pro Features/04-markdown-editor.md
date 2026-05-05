---
title: Markdown Editor
---

:::info Pro Feature
[Upgrade to Phoenix Code Pro](https://phcode.io/pricing) to access this feature.
:::

Phoenix Code supports a full rich text editing experience for Markdown files, right inside the Live Preview. Format text, build tables, drop in images, add links, use slash commands, and watch every change sync back to your source code instantly.

<!-- Add an image here showing the Markdown Editor in edit mode with the toolbar visible -->

## Enabling Edit Mode

To start editing, click the **Edit** button on the right side of the markdown toolbar. The toolbar expands to show formatting options, and you can start making changes right away.

To go back to the read-only view, click **Reader** in the same place.

<!-- Add an image here showing the Edit button in the toolbar -->

> By default, markdown files open in Edit mode for **Phoenix Code Pro** users.

## Cursor Sync

Click anywhere in the preview to jump the editor cursor to the matching line. The line briefly highlights so you can see where you landed. Cursor sync works in the other direction too. Clicking a line in the editor scrolls the preview to that line.

Scrolling in either view does the same: the other view follows along to keep you in sync.

Use the **cursor sync** button in the toolbar to toggle this behavior on or off.

<!-- Add an image here showing the cursor sync button in the toolbar -->

## Text Formatting

Select the text you want to format and click a formatting button, or use the keyboard shortcut. If no text is selected, the formatting applies to the word at your cursor.

- **Bold** (`Ctrl/Cmd + B`)
- **Italic** (`Ctrl/Cmd + I`)
- **Underline** (`Ctrl/Cmd + U`)
- **Strikethrough** (`Ctrl/Cmd + Shift + X`)
- **Inline Code** (`Ctrl/Cmd + E`)

You can also select text and use the **floating format bar** that appears near your selection.

<!-- Add an image here showing the floating format bar appearing above selected text -->

## Blocks and Lists

The toolbar lets you change the current block type using a **block type dropdown** (Paragraph, Heading 1 through Heading 5) and insert different types of content:

- **Bullet list**, **Numbered list**, **Task list** (checklist with checkboxes)
- **Blockquote**, **Divider** (horizontal line)
- **Code block** with an optional language picker
- **Table** (see [Table Editing](#table-editing))
- **Mermaid diagram** with a syntax editor and live rendered preview

<!-- Add an image here showing the block type dropdown with heading options -->

## Slash Menu

Type `/` at the start of an empty line to open the **Slash Menu**. This gives you a quick way to insert any block type without reaching for the toolbar.

<!-- Add an image here showing the Slash Menu with the list of available items -->

Start typing to filter the list. Use the arrow keys to navigate and press `Enter` to insert.

> The Slash Menu shows your most-used items first.

### Markdown Shortcuts

You can also use standard Markdown shortcuts as you type:

- `# ` through `##### ` for headings
- `- ` or `* ` for bullet lists
- `1. ` for numbered lists
- `- [ ] ` for task lists
- `> ` for blockquotes
- ` ``` ` for code blocks
- `---` for dividers

## Table Editing

When you insert a table, you can edit it directly in the preview. Click any cell to start typing in it. Use `Tab` to move to the next cell.

Right-click a cell to open a context menu with options to:

- Insert or delete rows
- Insert or delete columns
- Copy, cut, and paste rows or columns
- Delete the entire table

You can also click the **+ New row** button below the table to add a row.

<!-- Add an image here showing the table context menu with row and column options -->

## Images

You can add images in two ways:

- **From a URL** - enter the image URL and alt text in a dialog
- **Upload from your computer** - pick an image file from your device

Both options are available from the **Image** button in the toolbar or through the [Slash Menu](#slash-menu).

Click an image in the editor to see a popover with **Edit** and **Delete** buttons.

<!-- Add an image here showing the image popover with Edit and Delete buttons -->

## Links

To add a link, select some text and click the **Link** button in the toolbar (or press `Ctrl/Cmd + K`). Enter the URL in the floating input that appears and press `Enter`.

Click an existing link to see a popover showing the URL, with options to **Edit** or **Remove** the link.

<!-- Add an image here showing the link popover with the URL, Edit button, and Remove button -->

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Bold | `Ctrl/Cmd + B` |
| Italic | `Ctrl/Cmd + I` |
| Underline | `Ctrl/Cmd + U` |
| Strikethrough | `Ctrl/Cmd + Shift + X` |
| Inline Code | `Ctrl/Cmd + E` |
| Link | `Ctrl/Cmd + K` |
| Undo | `Ctrl/Cmd + Z` |
| Redo | `Ctrl/Cmd + Y` or `Ctrl/Cmd + Shift + Z` |
| Search | `Ctrl/Cmd + F` |
| Select All | `Ctrl/Cmd + A` |
