---
title: Markdown Editor
---

:::info Pro Feature
[Upgrade to Phoenix Code Pro](https://phcode.io/pricing) to access this feature.
:::

The **Markdown Editor** lets you edit Markdown files directly in the Live Preview using a rich text editor. You can format text, add images, create tables, insert links, and more -- all without writing Markdown syntax by hand. Your changes are automatically synced back to the source code.

<!-- Add an image here showing the Markdown Editor in edit mode with the toolbar visible -->

---

## Enabling Edit Mode

To start editing, click the **Edit** button in the preview toolbar. The toolbar expands to show formatting options, and you can start making changes right away.

To go back to the read-only view, click **Reader** (or **Done**) in the toolbar.

<!-- Add an image here showing the Edit button in the toolbar -->

> Pro users start in Edit Mode by default when opening Markdown files.

---

## Toolbar

The toolbar appears at the top of the preview when you enter Edit Mode. It gives you quick access to all the formatting and editing tools described below.

On smaller screens, some toolbar buttons collapse into dropdown menus to save space.

<!-- Add an image here showing the full toolbar with all formatting options visible -->

---

## Text Formatting

Select the text you want to format and click a formatting button, or use the keyboard shortcut. If no text is selected, the formatting applies to the word at your cursor.

- **Bold** (`Ctrl/Cmd + B`)
- **Italic** (`Ctrl/Cmd + I`)
- **Underline** (`Ctrl/Cmd + U`)
- **Strikethrough** (`Ctrl/Cmd + Shift + X`)
- **Inline Code** (`Ctrl/Cmd + E`)

You can also select text and use the **floating format bar** that appears near your selection.

<!-- Add an image here showing the floating format bar appearing above selected text -->

---

## Block Types

Use the **block type dropdown** in the toolbar to change the type of the current block. Options include:

- Paragraph
- Heading 1 through Heading 5

<!-- Add an image here showing the block type dropdown with heading options -->

---

## Lists

The toolbar has buttons for three types of lists:

- **Bullet list** -- unordered list
- **Numbered list** -- ordered list
- **Task list** -- checklist with checkboxes

Click a list button to turn the current line into a list item, or to convert an existing list to a different type.

---

## Block Elements

You can insert these block-level elements from the toolbar:

- **Blockquote** -- a quoted block of text
- **Divider** -- a horizontal line
- **Code block** -- a fenced code block with an optional language picker
- **Table** -- inserts a new table (see [Table Editing](#table-editing))

---

## Slash Menu

Type `/` at the start of an empty line to open the **Slash Menu**. This gives you a quick way to insert any block type without reaching for the toolbar.

<!-- Add an image here showing the Slash Menu with the list of available items -->

The menu shows all available block types: paragraphs, headings, lists, blockquotes, code blocks, tables, dividers, mermaid diagrams, and images. Start typing to filter the list. Use the arrow keys to navigate and press `Enter` to insert.

> The Slash Menu learns from your usage and shows your most-used items first.

### Markdown Shortcuts

You can also use standard Markdown shortcuts as you type:

- `# ` through `##### ` for headings
- `- ` or `* ` for bullet lists
- `1. ` for numbered lists
- `- [ ] ` for task lists
- `> ` for blockquotes
- ` ``` ` for code blocks
- `---` for dividers

---

## Table Editing

When you insert a table, you can edit it directly in the preview. Click any cell to start typing in it. Use `Tab` to move to the next cell.

Right-click a cell to open a context menu with options to:

- Insert or delete rows
- Insert or delete columns
- Copy, cut, and paste rows or columns
- Delete the entire table

You can also click the **+ New row** button below the table to add a row.

<!-- Add an image here showing the table context menu with row and column options -->

---

## Images

You can add images in two ways:

- **From a URL**: Enter the image URL and alt text in a dialog
- **Upload from your computer**: Pick an image file from your device

Both options are available from the **Image** button in the toolbar or through the [Slash Menu](#slash-menu).

Click an image in the editor to see a popover with **Edit** and **Delete** buttons.

<!-- Add an image here showing the image popover with Edit and Delete buttons -->

---

## Links

To add a link, select some text and click the **Link** button in the toolbar (or press `Ctrl/Cmd + K`). Enter the URL in the floating input that appears and press `Enter`.

Click an existing link to see a popover showing the URL, with options to **Edit** or **Remove** the link.

<!-- Add an image here showing the link popover with the URL, Edit button, and Remove button -->

---

## Mermaid Diagrams

You can insert Mermaid diagram blocks through the toolbar or the [Slash Menu](#slash-menu). In Edit Mode, Mermaid blocks show a syntax editor where you write the diagram code, with a live preview of the rendered diagram. Click **Edit** or **Done** to toggle between the code and the preview.

<!-- Add an image here showing a Mermaid diagram block in edit mode with the syntax editor and rendered preview -->

---

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

