---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Picard.js"
  text: "Orchestrator for Micro Frontends"
  tagline: "The Captain for Shipping the Next Generation of Micro Frontends Federation and Beyond"
  image:
    src: /picard-logo-large.webp
    alt: VitePress
  actions:
    - theme: brand
      text: Markdown Examples
      link: /docs/examples
    - theme: alt
      text: API Examples
      link: /docs/examples/api

features:
  - title: Scalable
    icon: <img src="/icons/scalable.png">
    details: Integrate any number of micro frontends incl. shared dependencies and other resources.
  - title: Multi Platform
    icon: <img src="/icons/platform.png">
    details: Orchestrate micro frontends on the server, on the client, and in native apps.
  - title: Increase Compatibility
    icon: <img src="/icons/compatibility.png">
    details: Just works with micro frontends using single-spa, Piral, Module Federation and Native Federation.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #ff007f 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #ff007f 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
  --vp-c-default-soft: transparent;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
