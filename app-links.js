/**
 * @file Phoenix “App Links” redirect map for Docusaurus.
 *
 * Integrates with: @docusaurus/plugin-client-redirects (>= 3.7.0)
 *
 * WHAT THIS IS
 * ------------
 * A central, stable index of URLs the Phoenix app (desktop/browser) and docs
 * can safely link to as: https://docs.phcode.dev/app-links/*
 *
 * You can also use these entries to **predefine placeholder URLs**
 * before the corresponding documentation exists — this allows wiring
 * links into the Phoenix app early, while keeping URLs stable for when
 * docs are added later.
 *
 * The idea: the `from` side never changes; you’re free to restructure docs and
 * simply update the `to` target here—no broken links in the app or shared docs.
 *
 * DEV VS BUILD
 * ------------
 * - `npm run start` (Docusaurus dev server): redirect pages are NOT generated.
 *   You will NOT see /app-links/* work here.
 * - To verify redirects end-to-end:
 *     1) `npm run build`   → generates static pages for each redirect
 *     2) `npm run serve`   → serves the built site with working redirects
 *
 * SCHEMA
 * ------
 * Each entry: { from: string, to: string }
 * - `from` MUST be an absolute path starting with `/app-links/...`
 * - `to`   can be:
 *     • an internal path (e.g. `/docs/editing-text#line-height`)
 *     • a full external URL (e.g. `https://google.com`)
 *
 * CONVENTIONS & TIPS
 * ------------------
 * - Keep all stable links under `/app-links/*` to make deprecations easy.
 * - Use leading slashes for internal `to` values; include hash anchors if needed.
 * - External URLs are supported; the plugin will create a client page that
 *   performs a redirect (meta refresh + JS).
 *
 * EXTERNAL REDIRECT EXAMPLE
 * -------------------------
 *   {
 *     from: '/app-links/google-search',
 *     to: 'https://google.com',
 *   }
 *
 * TEST CHECKLIST
 * --------------
 * - After updating this file:
 *     - Run `npm run build` then `npm run serve`
 *     - Open a few /app-links/* routes and confirm they land on the right pages
 */


/** @type {Array<{from: string, to: string}>} */
export const appLinks = [
	{
		from: '/app-links/extn-line-height', // https://docs.phcode.dev/app-links/extn-line-height
		to: '/docs/editing-text#line-height', // https://docs.phcode.dev/docs/editing-text#line-height
	},
    {
		from: '/app-links/live-preview',
		to: '/docs/Features/Live Preview/live-preview',
	},
    {
		from: '/app-links/keyboard-shortcuts',
		to: '/docs/Features/keyboard-shortcuts',
	},
    {
		from: '/app-links/auto-rename-tag',
		to: '/docs/editing-text#auto-rename-tag',
	},
    {
		from: '/app-links/indent-guide-lines',
		to: '/docs/editing-text#indent-guide-lines',
	},
    {
		from: '/app-links/emmet',
		to: '/docs/editing-text#emmet',
	},
    {
		from: '/app-links/git',
		to: '/docs/Features/git',
	},
    {
		from: '/app-links/color-preview',
		to: '/docs/editing-colors#color-preview',
	},
    {
		from: '/app-links/auto-space-detection',
		to: '/docs/editing-text/#auto-space-detection',
	},
    {
		from: '/app-links/html-lint',
		to: '/docs/Features/Problems Panel/html-lint/',
	},
    {
		from: '/app-links/ESLint',
		to: '/docs/Features/Problems Panel/ESLint/',
	},
    {
		from: '/app-links/live-preview-settings',
		to: '/docs/Features/Live Preview/live-preview-settings',
	},
    {
		from: '/app-links/editor-rulers',
		to: '/docs/Features/editor-rulers/',
	},
    {
		from: '/app-links/find-in-files',
		to: '/docs/Features/find-in-files/',
	},
    {
		from: '/app-links/custom-snippets',
		to: '/docs/Features/custom-snippets',
	},
    {
		from: '/app-links/edu-pro',
		to: '/docs/phoenix-pro-school',
	},
	{
		from: '/app-links/live-preview-edit',
		to: '/docs/Pro%20Features/live-preview-edit',
	},
	{
		from: '/app-links/tab-bar',
		to: '/docs/file-management#tab-bar',
	}
];
