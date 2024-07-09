import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Picard.js",
  description:
    "The captain for the next generation of micro frontends federation.",

  srcExclude: ["**/README.md"],

  head: [
    ["link", { rel: "icon", type: "image/png", href: "/picard-logo-mini.png" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    [
      "meta",
      {
        property: "og:title",
        content: "Picard.js | Orchestrator for Micro Frontends",
      },
    ],
    ["meta", { property: "og:site_name", content: "Picard.js" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://picard.js.org/picard-og.jpg",
      },
    ],
    ["meta", { property: "og:url", content: "https://picard.js.org/" }],
  ],

  cleanUrls: true,

  themeConfig: {
    logo: { src: "/picard-logo-mini.png", width: 24, height: 24 },

    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "API", link: "/api/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Getting Started", link: "/guide/" },
            { text: "Why Picard.js?", link: "/guide/why" },
          ],
        },
        {
          text: "Web Components",
          items: [
            { text: "pi-component", link: "/guide/components/pi-component" },
            { text: "pi-slot", link: "/guide/components/pi-slot" },
            { text: "pi-part", link: "/guide/components/pi-part" },
          ],
        },
        {
          text: "Variants",
          items: [
            { text: "Browser", link: "/guide/variants/browser" },
            { text: "Node.js", link: "/guide/variants/node" },
            { text: "Electron", link: "/guide/variants/electron" },
          ],
        },
        {
          text: "Formats",
          items: [
            { text: "Module Federation", link: "/guide/formats/module-federation" },
            { text: "Native Federation", link: "/guide/formats/native-federation" },
            { text: "Pilet", link: "/guide/formats/pilet" },
          ],
        },
        {
          text: "Frameworks",
          items: [
            { text: "Default", link: "/guide/frameworks/default" },
            { text: "HTML", link: "/guide/frameworks/html" },
            { text: "single-spa", link: "/guide/frameworks/single-spa" },
          ],
        },
      ],
      "/api/": [
        {
          text: "API",
          items: [
            { text: "Overview", link: "/api/" },
            { text: "pi-component", link: "/api/pi-component" },
            { text: "pi-slot", link: "/api/pi-slot" },
            { text: "pi-part", link: "/api/pi-part" },
          ],
        },
        {
          text: "Configuration",
          items: [
            { text: "Services", link: "/api/services" },
          ],
        },
        {
          text: "Lifecycle",
          items: [
            { text: "Generic", link: "/api/lifecycle" },
          ],
        },
      ],
    },

    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "8J64VVRP8K",
    //     apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
    //     indexName: "vitepress",
    //   },
    // },

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/kKJ2FZmK8t" },
      { icon: "github", link: "https://github.com/picardjs/picard" },
    ],
  },
});
