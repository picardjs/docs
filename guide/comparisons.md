# Comparisons

Picard.js is essentially a completely new category for using micro frontends. In contrast to other libraries, frameworks, or tools it does not care *how* you create micro frontends. Instead, it only cares *how* to load (and use) micro frontends.

When it comes to comparisons the position of Picard.js is quite clear:

> Picard.js should be thought rather as an extensions than a replacement for any of the mentioned technologies. They all work together with Picard.js and for building micro frontends you'd still select one of them.

## Full Frameworks such as Piral

Piral offers several strengths for building modular web applications with micro frontends:

1. **Modularity and Scalability**: Piral's architecture allows developers to break down applications into smaller, independently deployable components called pilets, which can be scaled and managed easily.
2. **Flexible Integration**: It supports the integration of various frameworks like React, Angular, and Vue within the same application, providing flexibility in choosing the right tool for each component.
3. **Seamless Updates**: The independent deployment of pilets allows for seamless updates and rollbacks, minimizing downtime and reducing the risk of introducing bugs.
4. **Strong Ecosystem and Tooling**: Piral provides robust tooling and an extensive ecosystem, simplifying the development process and offering support for common tasks like routing, state management, and authentication.

These strengths make Piral a powerful choice for developing modern, scalable, and maintainable web applications with a micro frontend architecture.

On the flipside, Piral is a full framework and requires you to conform to its way of thinking - starting with the `piral-cli`. If the CLI is not used, the whole application would be rather cumbersome to build and maintain.

Picard.js on the other hand does not require any tooling. It builds upon the strengths of Piral - ensuring modularity and scalability without having to introduce the same rigid boundaries. Picard.js can be mostly used with the ecosystem created by Piral. For instance, the debugging tools of Piral (example: [Piral Inspector](https://github.com/smapiot/piral-inspector)) just work with Picard.js.

Micro frontends created with Piral can be run with Picard.js. Likewise, the component model of Picard.js also supports the flexible integration offered by Piral.

## Component Activators such as single-spa

single-spa offers several strengths for building micro frontend architectures:

1. **Framework Agnostic**: single-spa allows the integration of multiple frameworks like React, Angular, Vue, and others within a single application, providing flexibility in technology choices.
2. **Incremental Adoption**: single-spa supports gradual adoption, enabling the integration of micro frontends into existing monolithic applications without a complete rewrite.
3. **Active Community and Ecosystem**: single-spa has a strong community and a rich ecosystem of plugins and tools, providing support and enhancing the development experience.
4. **Tooling Independent**: single-spa does not force a specific bundler or tooling, even though many of the templates use SystemJS or Module Federation with Webpack.

These strengths make single-spa a robust and flexible solution for developing modern, scalable, and maintainable web applications using a micro frontend architecture.

On the flipside, single-spa is only concerned with the component model and uses a strongly-coupled approach that will lead to scalability issues as applications grow.

Picard.js on the other hand leverages the component model drawn by single-spa and extends it by a platform-agnostic approach, that does not only allow client-side rendering (CSR), but also server-side rendering (SSR). This way, you can choose if you need or want SSR - or if you want to remain at CSR.

As most of the single-spa ecosystem deals with the specific micro frontends, you can just use the ecosystem (incl. converters such as [single-spa-react](https://single-spa.js.org/docs/ecosystem-react)) in your website powered by Picard.js.

## Tooling-Enhancers such as Module Federation

Module Federation in bundlers such as Webpack 5 or rspack offers several strengths for building scalable and maintainable web applications:

1. **Dynamic Code Sharing**: It allows for the dynamic sharing and loading of modules between applications at runtime, enabling seamless integration and reuse of code across different projects.
2. **Technology Agnostic**: Module Federation works with various frameworks and libraries, providing flexibility in technology choices and enabling gradual upgrades or migrations within an application.
3. **Strong Ecosystem**: As part of Webpack 5, Module Federation benefits from Webpack's extensive ecosystem and tooling, providing robust support for building and optimizing modern web applications.

These strengths make Module Federation a powerful tool for developing modular, scalable, and maintainable web applications, facilitating efficient code reuse and independent deployment of features.

On the flipside, Module Federation does not introduce error handling or helpers to avoid strong coupling. If you want to create a loosely coupled micro frontend solution you'd need to access the low-level primitives of Module Federation.

Picard.js builds upon the mental model of Module Federation and enhances it with a direct micro frontend discovery service integration, error handling, and component converters. This way, you can reuse your existing micro frontends - written using Module Federation - anywhere. Also, as the format of the micro frontends has not changed, the tooling of Module Federation also just works.
