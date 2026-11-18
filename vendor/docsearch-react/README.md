# Phoenix Code DocSearch source dependency

This is a narrowly maintained source fork of `@docsearch/react` **5.2.0**, released
locally as **5.2.0-phcode.1**. The application consumes the package in `releases/`;
it does not rewrite installed dependencies or modify DocSearch's DOM at runtime.

## Upstream provenance

- Repository: <https://github.com/algolia/docsearch>
- Revision: `db3337978a2c9be6ec9187e73105a94dc0b1bbf3`
- Original package: <https://www.npmjs.com/package/@docsearch/react/v/5.2.0>
- Original package integrity:
  `sha512-ZJrYePS2+UK7M3X5xWmKsm8VJ0GuslnAk8jcIcjPfd20GoCEjce9e+3X/8UH0lAtWokesAm2ERUJzlwr/9YCpg==`
- License: [MIT](LICENSE), preserved from upstream.

`src/` and `style/` contain the package's production source. Unrelated upstream
tests, screenshots, examples, and monorepo packages are omitted. The original
SHA-256 for each imported file is recorded in [upstream-files.json](upstream-files.json).

## Changes

The reviewed source differences are recorded in [upstream.patch](upstream.patch):

1. **Preserve encoded URLs.** `src/utils/sanitize.ts` retains upstream's scheme
   validation, including decoding used to detect unsafe schemes, but returns the
   original validated URL. Previously, an absolute URL containing `Pro%20Features`
   became `ProFeatures`; encoded query values and fragments could also change.
   The existing HTML escaping and unsafe-scheme rejection remain in place.
2. **Name the Sidepanel dialog.** `src/Sidepanel/Sidepanel.tsx` creates a unique
   heading ID with `React.useId()`, connects it with `aria-labelledby`, and passes
   the already supported header translations through to `SidepanelHeader.tsx`.
   The heading stays visible and gives the dialog its accessible name.
3. **Identify the maintained build.** `src/version.ts` reports `5.2.0-phcode.1`.

The build configuration only relocates upstream's shared configuration into this
directory. It preserves the public exports, ESM and UMD outputs, CSS entry points,
and ES2017 browser target. Development dependencies are locked locally; no new
build tool is required by the application's normal installation.

## Rebuild and verify

Use Node.js 24 and npm 11, matching the tested build environment. Run from this
directory:

```sh
npm ci --ignore-scripts
npm run build
npm test
npm pack --pack-destination releases --ignore-scripts
```

The JavaScript tests execute the sanitizer source through the TypeScript compiler,
retain upstream's unsafe-scheme fixtures, test URL preservation, render the built
Sidepanel to verify its accessible name, and check that every other production
source file still matches its upstream hash. No test sends an AI request.

Commit source changes and the rebuilt tarball together. Update the application
lockfile so its integrity covers the new package. Do not run `npm publish` for this
private package. Do not edit `dist/`, the tarball, or installed `node_modules`.

The application's root dependency and npm override must both resolve to this same
artifact; check `npm ls @docsearch/react` to ensure that the Docusaurus adapter,
modal, and sidepanel integrations share the corrected package.

## Retiring this fork

Before upgrading, check upstream for fixes to the URL sanitizer and the Sidepanel
accessible name. Run the same regression cases against the candidate release and
verify full-page Ask AI submission, encoded citation/source links, mobile layout,
and keyboard close/focus behavior. Once an official release passes, replace the
file dependency with that release, remove the override, and remove this directory.

Relevant upstream implementation and documentation:

- [URL sanitizer](https://github.com/algolia/docsearch/blob/db3337978a2c9be6ec9187e73105a94dc0b1bbf3/packages/docsearch-react/src/utils/sanitize.ts)
- [Security change that introduced scheme checking](https://github.com/algolia/docsearch/pull/2929)
- [Sidepanel source](https://github.com/algolia/docsearch/blob/db3337978a2c9be6ec9187e73105a94dc0b1bbf3/packages/docsearch-react/src/Sidepanel/Sidepanel.tsx)
- [Supported Sidepanel API](https://docsearch.algolia.com/docs/packages/sidepanel/api/)
