import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Picard.js",
  description:
    "The captain for the next generation of micro frontends federation.",

  srcExclude: ['**/README.md'],

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
      { text: "Home", link: "/" },
      { text: "Examples", link: "/docs/examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/docs/examples" },
          { text: "Runtime API Examples", link: "/docs/examples/api" },
        ],
      },
    ],

    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "8J64VVRP8K",
    //     apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
    //     indexName: "vitepress",
    //   },
    // },

    socialLinks: [
      { icon: "github", link: "https://github.com/picardjs/picard" },
    ],
  },
});
