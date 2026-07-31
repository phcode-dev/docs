---
title: JSON
slug: "/Features/json-code-intelligence"
---

**Phoenix Code** has code intelligence for JSON files, with extra features for `package.json`.

## package.json

When you edit the dependencies in `package.json`:

- Typing a package name shows live suggestions from the npm registry.
- Typing a version shows the package's real versions, newest first, with `^` and `~` shortcuts at the top.
- Hovering over a dependency shows the package's description, latest version, license, and links to its homepage and docs.

<!-- TODO: PLUTO - add image here showing npm package hints in package.json -->

Your dependencies are also checked against npm's security advisories, the same data `npm audit` uses. If a dependency has a known vulnerability, it is underlined in the editor and listed in the [Problems panel](/docs/Features/Problems%20Panel/ESLint) with its severity.

<!-- TODO: PLUTO - add image here showing a vulnerability warning -->

:::info Desktop Only
The security check runs in the desktop app. The package name, version, and hover hints work everywhere.
:::

## Config File Intelligence

Phoenix Code knows the valid fields of well-known config files like `package.json`, `tsconfig.json`, `.eslintrc`, `.babelrc`, and `.prettierrc`. It suggests fields as you type, shows what each field means on hover, and flags mistakes in the Problems panel.

:::info Desktop Only
Config file intelligence runs in the desktop app.
:::
