import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WDOPEN',
  tagline: '「增长成员能力，促进维基互通」',
  favicon: 'img/favicon.ico',

  url: 'https://docs.dfcwiki.xyz/',
  baseUrl: '/',

  organizationName: 'wdopen',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/wdopen/docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/wdopen/docs/blob/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WDOPEN',
        logo: {
          alt: 'WDOPEN Logo',
          src: 'img/logo_light.png',
          srcDark: 'img/logo_dark.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: '文档',
            position: 'left',
          },
          {
            to: '/blog',
            label: '博客',
            position: 'left'
          },
          {
            href: 'https://github.com/wdopen/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'WDOPEN',
            items: [
              {
                label: '文档',
                to: '/docs/intro',
              },
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '社区',
                to: '/community',
              },
            ],
          },
          {
            title: 'Wikidot',
            items: [
              {
                label: '官方文档',
                href: 'https://www.wikidot.com/doc',
              },
              {
                label: '服务条款',
                href: 'https://www.wikidot.com/legal:terms-of-service',
              },
              {
                label: '隐私政策',
                href: 'http://www.wikidot.com/legal:privacy-policy',
              },
            ],
          },
          {
            title: '社区准则',
            items: [
              {
                label: '社区公约',
                href: 'https://github.com/wdopen/docs/blob/main/CODE_OF_CONDUCT.md',
              },
              {
                label: '贡献指南',
                href: 'https://github.com/wdopen/docs/blob/main/CONTRIBUTING.md',
              },
              {
                label: '免责声明',
                to: '/docs/disclaimer',
              },
            ],
          },
          {
            title: '其它信息',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/wdopen/docs',
              },
            ],
          },
        ],
        copyright: ` 除非特别说明，否则本页的内容均采用<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.zh-hans">CC BY-SA 3.0</a>授权方式。 `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;