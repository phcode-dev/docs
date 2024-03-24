// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Phoenix Code Docs',
  tagline: 'Build the web',
  favicon: 'img/favicon.ico',
  themes: ['@docusaurus/theme-live-codeblock','@docusaurus/theme-mermaid'],
  // Set the production url of your site here
  url: 'https://docs.phcode.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash :true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'phcode-dev', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  // Enable mermaid diagrams
  markdown: {
    mermaid: true,
  },
  // Style for math formulas
  // https://docusaurus.io/docs/markdown-features/math-equations
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
       sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },

        docs: {
          sidebarPath: './sidebars.js',
          // below 3 lines are to enable math formula
          // https://docusaurus.io/docs/markdown-features/math-equations
          path: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/phcode-dev/docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/phcode-dev/docs/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        // Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)
        gtag: {
          trackingID: 'G-XMWSCV9SP1',
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: './sidebars.js',
        // ... other options
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: '8DZVLXVEPA',
        // Public API key: it is safe to commit it
        apiKey: 'e988677555350573b539eb974e2b7891',
        indexName: 'phcode',
        contextualSearch: false
      },
      // Replace with your project's social card
      image: 'img/socialcard.png',
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Phoenix Code',
        logo: {
          alt: 'Phoenix Code',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/api/intro', label: 'API', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://phcode.io/',
            label: 'Download',
            position: 'left',
          },
          {
            href: 'https://github.com/phcode-dev/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'API',
                to: '/api/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/rBpTBPttca',
              },
              {
                label: 'reddit',
                href: 'https://www.reddit.com/r/brackets/',
              },
              {
                label: 'X',
                href: 'https://x.com/phcodedev',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCNK2a8DKqPQQe3GlfTk-RHg',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/phcode-dev/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} core.ai scientific technologies private limited`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
