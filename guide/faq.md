# Frequently Asked Questions

**What else is missing for now?**

> Not much - Picard.js is close to being feature complete. Right now we are tuning the packaging, API, and some of the covered functionality such as what formats are supported.

**When is Picard.js feature complete?**

> Presumably end of July / start of August 2024.

**When is Picard.js ready for production?**

> In September 2024.

**How does SSR work with web components?**

> When the HTML is streamed out we'll look at the code and replace the configured web components with the rendering done by the referenced micro frontend(s).

**What formats (micro frontend frameworks) are supported?**

> Picard.js supports micro frontends using SystemJS like Piral, but also Module Federation (v1 and v2), Native Federation, as well as plain native esm modules.

**What UI libraries (frameworks) are supported?**

> Picard.js supports every UI library as long as it can be converted to Picard's own [lifecycle definition](../api/lifecycle/index.md) or to an integrated target [such as single-spa](./frameworks/single-spa.md).

**Can dependencies be shared between the different formats, such as module federation and native federation?**

> Yes.

**Is native federation also capable of rendering server-side?**

> In general yes - that, of course, depends if your component is capable of being server-side rendered.

**How can I contribute to the project?**

> Reporting issues, writing fixes or new features, writing an article or sharing your success story. There are multiple ways to contribute!

**What's the story behind Picard.js and Piral? Is Picard.js the successor of Piral?**

> No, but it will be the base library for Piral v2 - effectively replacing `piral-base` in the process.

**Can the Piral Cloud Feed Service work with Picard.js?**

> Yes, it works with anything that you can throw into Picard.js.

**What micro frontend discovery services can work with Picard?**

> Any service providing one of the known [discovery formats](../api/discovery/index.md) works out of the box. For anything else you can use a callback and convert the response.

**Can you go into details regarding how Picard.js loads and orchestrates the micro frontends?**

> Sure, have a look at our [architecture documentation](https://github.com/picardjs/picard/blob/develop/ARCHITECTURE.md) in the repo.

**Why should I use module federation with Picard.js over just plain module federation?**

> There can be multiple reasons, such as (1) you also need to integrate micro frontends using something else (2) you need to be flexible regarding the choice of tooling (3) you want to fully embrace a powerful micro frontend discovery service without needing to know Module Federation internals (4) you want to be loosely coupled and fully resiliant in your application

**Do I need to integrate Picard.js from the get-go or can I just wait / use it when necessary?**

> You can also wait and progressively go into Picard.js. The beauty of web components is that you can already use them - in the worst case they would just not render (yet).

**Will there be articles available for Picard.js?**

Yes! And there will be [more videos](https://www.youtube.com/watch?v=_XPytuQrKaY), too.
