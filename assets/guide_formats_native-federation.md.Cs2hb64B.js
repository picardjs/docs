import{_ as e,c as a,o as i,a3 as t}from"./chunks/framework.Bp5TMMxn.js";const m=JSON.parse('{"title":"Referencing Native Federation Modules","description":"","frontmatter":{},"headers":[],"relativePath":"guide/formats/native-federation.md","filePath":"guide/formats/native-federation.md","lastUpdated":1721037144000}'),n={name:"guide/formats/native-federation.md"},s=t(`<h1 id="referencing-native-federation-modules" tabindex="-1">Referencing Native Federation Modules <a class="header-anchor" href="#referencing-native-federation-modules" aria-label="Permalink to &quot;Referencing Native Federation Modules&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Native Federation is a microfrontend architecture for mobile apps, allowing dynamic sharing and loading of components at runtime. This approach supports modularity and independent development, enabling scalable, flexible, and maintainable mobile applications by streamlining updates and enhancing collaboration between development teams.</p><h2 id="using-native-federation" tabindex="-1">Using Native Federation <a class="header-anchor" href="#using-native-federation" aria-label="Permalink to &quot;Using Native Federation&quot;">​</a></h2><p>Native Federation modules can be used either as part of a discovery service response or directly by referencing a component using a <code>source</code> with <code>format</code> set to <code>native</code>.</p><h3 id="native-federation" tabindex="-1">Native Federation <a class="header-anchor" href="#native-federation" aria-label="Permalink to &quot;Native Federation&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pi-component</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyComponent&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://yourcompany.com/example/remoteEntry.json&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;native&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pi-component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Required:</p><ul><li><code>format</code> has to be set to <code>native</code></li></ul>`,9),o=[s];function r(d,l,p,h,c,u){return i(),a("div",null,o)}const g=e(n,[["render",r]]);export{m as __pageData,g as default};
