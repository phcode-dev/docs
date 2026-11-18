# Guidance for AI contributors

Before adding or changing tutorial recordings, video players, video metadata,
or watch pages, read the
[video contributor notes](CONTRIBUTING.md#adding-or-updating-tutorial-videos).
They explain how to preserve the article's reading experience, reuse the video
and its metadata on a dedicated watch page, and retain original publication dates.

Keep verification code in JavaScript. For video or implementation changes, follow
the [tutorial release checks](README.md#tutorial-release-checks) and the visual
checks in the contributor notes. For notes-only edits, review links and the diff;
a website rebuild is unnecessary.

## Package upgrades and DocSearch maintenance

Before preparing a release, maintaining dependencies, or changing search/Ask AI,
check the live npm registry and official release notes for newer stable DocSearch
and Docusaurus versions. Compare them with `package.json`, `package-lock.json`,
and the upstream version recorded in any vendored package. Do not assume the
installed version or a cached search result is the latest release. For DocSearch:

```sh
npm view @docsearch/react dist-tags --json
```

While `@docsearch/react` uses a local `file:` dependency, ordinary `npm update`
will not bring Algolia's changes into that package. Follow the
[DocSearch maintenance notes](vendor/docsearch-react/README.md) when upgrading:

- Check whether the official release fixes encoded URLs and the Sidepanel's
  accessible name, including its header translations. Verify the behavior with
  the regression cases; keep unsafe URL scheme rejection intact.
- If both fixes are included, return to the official package and retire the
  custom build and override. Update packaging-specific tests while retaining
  the behavior checks.
- If a fix is still missing, update the custom build to the newer compatible
  upstream release and retain only the fixes still needed. Refresh its source,
  provenance, reviewed diff, version, packaged artifact, and lockfile together.

Keep related DocSearch packages compatible and run the
[search checks](README.md#search-and-ask-ai-checks), production build, and the
visual checks in the maintenance notes before releasing an upgrade. Record the
check date, current and latest upstream versions, and the upgrade outcome or
reason for deferral in the maintenance notes or release handoff. These checks
require a contributor to run them; this note does not install an automatic
release monitor.
