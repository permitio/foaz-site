// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FoAz",
  tagline: "Frontend Only Authorization",
  favicon: "img/foaz-logo.svg",

  // Set the production url of your site here
  url: "https://www.foaz.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "permitio", // Usually your GitHub org/user name.
  projectName: "FoAz", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/permitio/foaz-site/blob/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/foaz-splash.png",
      navbar: {
        title: "FoAz",
        logo: {
          alt: "FoAz Logo",
          src: "img/foaz-logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "foaz",
            position: "left",
            label: "RFC",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/permitio/",
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
                label: "RFC",
                to: "/standard/RFC",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack (join #foaz)",
                href: "https://io.permit.io/FoAz-community",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/permit_io",
              },
              {
                label: "Permit Blog",
                href: "https://www.permit.io/blog",
              },
            ],
          },
          {
            title: "Other OSS Projects from Permit",
            items: [
              {
                label: "OPAL @ GitHub",
                href: "https://github.com/permitio/opal",
              },
              {
                label: "Cedar-Agent @ GitHub",
                href: "https://github.com/permitio/cedar-agent",
              },
              {
                label: "OPToggles @ GitHub",
                href: "https://github.com/permitio/OPToggles",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Permit, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
