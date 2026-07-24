---
title: JavaScript & TypeScript
slug: "/Features/js-ts-code-intelligence"
---

**Phoenix Code** ships full code intelligence for JavaScript, TypeScript, JSX, and TSX, powered by the TypeScript language server. It understands your whole project, so completions, navigation, and error checking work across files. It is on by default, so you don't need to setup anything!

<!-- TODO: PLUTO - add video here showing code intelligence in action -->

:::info Desktop Only
Browser version runs on classic JavaScript hints. For smarter Code intelligence, switch to the desktop app.
:::

## Code Completions

Suggestions appear as you type, drawn from your project and the libraries you use. Press `Ctrl + Space` to open them manually.

- A documentation popup appears beside the list, showing the selected item's signature and docs.
- Picking a symbol from another file or module automatically adds the import at the top of your file.
- If the same name exists in several modules, the hint shows how many and lets you choose which one to import.

## Parameter Hints

When you type a function call, a popup shows the function's parameters and highlights the one you are on. You can also open it from `Edit` → `Show Parameter Hint`.

## Hover Info

Hold your cursor over any symbol to see its type signature and documentation. The popup also has two quick action buttons:

- **Go to Definition**: Jumps to where the symbol is defined, even in another file.
- **Find Usages**: Lists every place the symbol is used across the project.

<!-- TODO: PLUTO - add image here showing the hover popup with quick actions -->

Both are also available in the right-click menu, and as keyboard shortcuts: `Ctrl/Cmd + J` for Go to Definition and `Shift + F12` for Find Usages.

## Errors and Quick Fixes

Errors and warnings from the language server appear in the [Problems panel](/docs/Features/Problems%20Panel/ESLint) as you type. When a fix is available, use the **Fix** button next to the problem, or **Fix All** to apply every fix in the file.

> In plain JavaScript files, type warnings are off by default. Turn on **Type-check JavaScript** in the [config panel](#the-config-panel) to get them.

## Project-Wide Intelligence

To understand your whole project, Phoenix Code needs a small config file (`jsconfig.json` or `tsconfig.json`) in the project root. It creates this file automatically the first time you open a JavaScript or TypeScript file, and keeps it updated for you. The file itself contains a note explaining why it is there and states that Phoenix Code auto-created this file.

To disable or self-manage Project-Wide Intelligence:

- **To turn it off**, delete the file. Phoenix Code will not create it again, and the [Problems panel](/docs/Features/Problems%20Panel/ESLint) offers a one-click re-enable if you change your mind.
- **To manage the file yourself**, set `autoManage` to `false` inside it. Phoenix Code will never modify it again.
- **To stop it for all projects**, set the `codeIntel.autoCreateConfig` [preference](/docs/editing-text#editing-preferences) to `false`.

## The Config Panel

When you open `jsconfig.json` or `tsconfig.json`, Phoenix Code shows a **Code Intelligence** panel that explains the most useful ones in plain words:

- **Type-check JavaScript**: Finds typos and type mistakes in your JS files and shows them in the Problems panel. Warnings only, your code runs unchanged.
- **Auto-download types**: Fetches type definitions for your npm packages, so code hints for them work even before you run `npm install`.
- **Managed by Phoenix Code**: Whether Phoenix Code keeps the file updated automatically.
- **Target**, **Module**, and **JSX**: The JavaScript version, module system, and JSX handling your project uses.

<!-- TODO: PLUTO - add image here showing the config panel -->

Click **All options…** to read about every available setting in the [TypeScript config reference](https://www.typescriptlang.org/tsconfig/).
