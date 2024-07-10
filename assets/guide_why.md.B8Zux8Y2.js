import{_ as e,c as o,o as t,a3 as a}from"./chunks/framework.CDGoHCYz.js";const p=JSON.parse('{"title":"Why Picard.js?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/why.md","filePath":"guide/why.md","lastUpdated":1720632510000}'),r={name:"guide/why.md"},n=a('<h1 id="why-picard-js" tabindex="-1">Why Picard.js? <a class="header-anchor" href="#why-picard-js" aria-label="Permalink to &quot;Why Picard.js?&quot;">​</a></h1><h2 id="the-problems" tabindex="-1">The Problems <a class="header-anchor" href="#the-problems" aria-label="Permalink to &quot;The Problems&quot;">​</a></h2><p>Today, a rich collection of libraries, tools, and frameworks for creating micro frontends exist. The problem usually do not occur when a micro frontend is created using a specific technology - they usually occur when a micro frontend should be <em>integrated</em> into an existing solution.</p><p><strong>Picard.js</strong> enables integration of micro frontends independent of their technology or exposed functionality. It allows you to work with a central directory of micro frontends (e.g., retrieved from a micro frontend discovery service), as well as directly with an URL leading to a micro frontend.</p><h3 id="interoperability" tabindex="-1">Interoperability <a class="header-anchor" href="#interoperability" aria-label="Permalink to &quot;Interoperability&quot;">​</a></h3><p>One of the reasons why Picard.js might be interesting for you is that it allows to easily bring in micro frontends. So, instead of requiring to set up some bundler or go into specifics, all you need to do is grab a script and add a web component. That&#39;s it!</p><p>For owners of existing micro frontend solutions the integration of other micro frontends will no longer break due to technology incompatibilities. If two micro frontends have been written - one using Module Federation and another one using Native Federation - you will no longer require some frankenstein solution, but instead can just embed both; and it will just work.</p><h3 id="error-handling" tabindex="-1">Error Handling <a class="header-anchor" href="#error-handling" aria-label="Permalink to &quot;Error Handling&quot;">​</a></h3><p>Error handling has been one of the largest problems in solutions like Module Federation or Native Federation. The low-level nature of these building blocks ensured that you&#39;d need to build something from the beginning. Unfortunately, this meant that you are rather creating and maintaining a micro frontend framework than actually solving a business problem.</p><p>With Picard.js error handling is integrated from the ground up. You reference an invalid component? Nothing bad will happen. The component crashes or does not accept the given inputs? The solution will just continue - if you care you can pick up the error and display something else instead.</p><h3 id="technology-agnostic" tabindex="-1">Technology Agnostic <a class="header-anchor" href="#technology-agnostic" aria-label="Permalink to &quot;Technology Agnostic&quot;">​</a></h3><p>A design goal of Picard.js was to work without any tooling. As such owners of existing projects (let&#39;s say an existing page created with PHP or some other SSR technology such as ASP.NET) don&#39;t need to integrate additional tooling. They just add some additional markup to their generated HTML response and everything works.</p><p>One advantage of this approach is that - out-of-the-box - Picard.js is technology agnostic. While other approaches require specific tooling to work we don&#39;t need this here. As a result, Picard.js can also be used with tooling that is rather micro frontend hostile such as the Angular CLI. As long as there is some HTML somewhere you can add the script and use the web components.</p><h2 id="why-use-a-library-as-orchestrator" tabindex="-1">Why use a Library as Orchestrator? <a class="header-anchor" href="#why-use-a-library-as-orchestrator" aria-label="Permalink to &quot;Why use a Library as Orchestrator?&quot;">​</a></h2><p>Because a library is lightweight and does not stand in your way. Of course, you can use a full framework or invent your own thing (and in some scenarios that might be the right thing to do), but usually the orchestration itself should be <em>just</em> done. No questions asked.</p><p><strong>Picard.js</strong> was developed to be as flexible as possible. You don&#39;t like the names of the web components (such as <code>pi-component</code>)? Just rename them! You already have a custom format for your micro frontends? Just use it then!</p><h2 id="how-is-picard-js-different-from-x" tabindex="-1">How is Picard.js Different from X? <a class="header-anchor" href="#how-is-picard-js-different-from-x" aria-label="Permalink to &quot;How is Picard.js Different from X?&quot;">​</a></h2><p>You can check out the <a href="./comparisons">Comparisons</a> section for more details on how Vite differs from other similar tools.</p>',18),i=[n];function s(h,d,l,c,u,f){return t(),o("div",null,i)}const g=e(r,[["render",s]]);export{p as __pageData,g as default};
