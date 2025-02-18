const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FTCLayer documentation",
  tagline: "Make FTC programming easy",
  url: "https://ftclayer-docs.pages.dev",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "ftc17191", // Usually your GitHub org/user name.
  projectName: "ftclayer-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ftc17191/ftclayer-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "FTCLayer",
        logo: {
          alt: "FIRST Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Getting Started",
          },
          {
            href: "https://github.com/ftc17191/ftclayer-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ftc17191/ftclayer-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FTCLayer. Built with Docusaurus. Hosted on Cloudflare Pages`,
      },
      algolia: {
        appId: "EPBUNYW07F",
        apiKey: "a116db56f79fb36001dc6b65ecdf0ef7",
        indexName: "ftclayer-docs-pages",
        contextualSearch: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java"],
      },
    }),
};

module.exports = config;
