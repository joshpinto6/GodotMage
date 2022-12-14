// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GodotMage',
  tagline: 'Get Magic Superpowers. Free, Open-Source, No-Shortcuts Godot Tutorials, Snippets and Courses.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/GodotMage/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_unoutlined.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'joshpinto6', // Usually your GitHub org/user name.
  projectName: 'GodotMage', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          editUrl:
            'https://github.com/joshpinto6/GodotMage',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} GodotMage`,
          },
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/joshpinto6/GodotMage',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GodotMage',
        logo: {
          href: 'https://joshpinto6.github.io/GodotMage', // Default to `siteConfig.baseUrl`.
          alt: 'GodotMageLogo',
          src: 'img/logo_unoutlined.svg', 
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorials',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/forums', label: 'Forums', position: 'left'},
          {to: '/forge', label: 'GodotForge', position: 'left'},
          {
            href: 'https://github.com/joshpinto6/GodotMage',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Main Site',
            items: [
              {
                label: 'Home',
                to: 'https://joshpinto6.github.io/GodotMage',
              },
              {
                label: 'About',
                to: 'https://joshpinto6.github.io/GodotMage/#about',
              },
              {
                label: 'Contact',
                to: 'https://joshpinto6.github.io/GodotMage/#contact',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials',
                to: 'https://joshpinto6.github.io/GodotMage/docs',
              },
              {
                label: 'Snippets',
                to: 'https://joshpinto6.github.io/GodotMage/docs/category/snippets',
              },
              {
                label: 'Blog',
                to: 'https://joshpinto6.github.io/GodotMage/docs/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Bug Tracker',
                href: 'https://github.com/joshpinto6/GodotMage/issues',
              },
              {
                label: 'Discussion Forum',
                href: 'https://github.com/joshpinto6/GodotMage/discussions',
              },
              {
                label: 'Contribute',
                href: 'https://github.com/joshpinto6/GodotMage',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/joshpinto6/GodotMage',
              },
            ],
          },
        ],
        copyright: `Built with ♥ with <a href="https://docusaurus.io">Docusaurus</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        '@docusaurus/plugin-pwa',
        {
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/img/docusaurus.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/manifest.json', // your PWA manifest
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(37, 194, 160)',
            },
          ],
        },
      ],
    ],    
};

module.exports = config;
