## Welcome to Phoenix Documentation

This repository hosts the code for https://docs.phcode.dev/ . Please contribute
to this repo for helping the Phoenix/Brackets community.

## License

CC BY License Copyright (c) 2022-present, core.ai

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Tutorial release checks

Run these checks before releasing tutorial changes. They use JavaScript and
require Node.js, Git, and the dependencies installed by `npm ci`.

```sh
npm run test:tutorials
npm run package:tutorials
npm run build
npm run verify:tutorials
```

The checks cover tutorial links and anchors, image descriptions, video metadata
and captions, AI documentation indexes, and the contents of both practice ZIPs.
`npm run build` refreshes the API documentation from its source repository. If
the API files are already generated locally, `npm run docusaurus -- build` builds
the current checkout without refreshing them.

To preview the built site, run:

```sh
npm run serve -- --port 8208
```

### Deployment

The production workflow in `.github/workflows/gh-pages-deploy.yml` deploys reviewed
changes pushed to `prod`. It runs the tutorial checks before publishing to
`gh-pages`. Deployments run one at a time.

Video first-publication dates are assigned automatically during a deployment
build. The workflow restores `tutorials/video-publications.json` from the
previous deployment, assigns dates to new videos, and includes the resulting
manifest in the published site. Later releases preserve those original dates.
Local preview builds leave unpublished dates unset; no manual edit to the guide
is needed before release.

Keep `tutorials/video-publications.json` when restoring or moving the published
site. If an already published video has lost its recorded date, deployment stops
until the original date is restored. An unavailable deployment history also
stops the release. The final `verify:tutorials -- --release` check requires each
video's page metadata to match its saved publication date.
