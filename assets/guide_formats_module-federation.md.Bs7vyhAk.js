import{_ as e,c as s,o as i,a3 as a}from"./chunks/framework.Bp5TMMxn.js";const m=JSON.parse('{"title":"Referencing Module Federation Scripts","description":"","frontmatter":{},"headers":[],"relativePath":"guide/formats/module-federation.md","filePath":"guide/formats/module-federation.md","lastUpdated":1721037144000}'),t={name:"guide/formats/module-federation.md"},n=a(`<h1 id="referencing-module-federation-scripts" tabindex="-1">Referencing Module Federation Scripts <a class="header-anchor" href="#referencing-module-federation-scripts" aria-label="Permalink to &quot;Referencing Module Federation Scripts&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Module Federation allows JavaScript applications to share and load code dynamically at runtime, supporting a microfrontend architecture. This feature enables independently deployed apps to collaborate by sharing modules, enhancing scalability and maintainability. It simplifies code reuse and integration, leading to more efficient development workflows and seamless updates across distributed systems.</p><h2 id="using-module-federation" tabindex="-1">Using Module Federation <a class="header-anchor" href="#using-module-federation" aria-label="Permalink to &quot;Using Module Federation&quot;">​</a></h2><p>Module Federation can be used either as part of a discovery service response or directly by referencing a component using a <code>source</code> with <code>format</code> set to <code>module</code>. Depending on the version and variant of Module Federation more parameters such as <code>remote-name</code> and <code>remote-type</code> might be necessary.</p><h3 id="module-federation-v1-with-globals" tabindex="-1">Module Federation v1 with Globals <a class="header-anchor" href="#module-federation-v1-with-globals" aria-label="Permalink to &quot;Module Federation v1 with Globals&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pi-component</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyComponent&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://yourcompany.com/example/remoteEntry.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  remote-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pi-component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Required:</p><ul><li><code>format</code> has to be set to <code>module</code></li><li><code>remote-name</code> has to be set to the global defined by the micro frontend</li></ul><p>Optional:</p><ul><li><code>remote-type</code> has to be set to <code>var</code></li></ul><h3 id="module-federation-v1-with-esmodules" tabindex="-1">Module Federation v1 with ESModules <a class="header-anchor" href="#module-federation-v1-with-esmodules" aria-label="Permalink to &quot;Module Federation v1 with ESModules&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pi-component</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyComponent&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://yourcompany.com/example/remoteEntry.mjs&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  remote-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  remote-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;esm&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pi-component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Required:</p><ul><li><code>format</code> has to be set to <code>module</code></li><li><code>remote-name</code> has to be set to the global defined by the micro frontend</li><li><code>remote-type</code> has to be set to <code>esm</code></li></ul><h3 id="module-federation-v2-with-manifest" tabindex="-1">Module Federation v2 with Manifest <a class="header-anchor" href="#module-federation-v2-with-manifest" aria-label="Permalink to &quot;Module Federation v2 with Manifest&quot;">​</a></h3><p>Here, you reference the manifest.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pi-component</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyComponent&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://yourcompany.com/example/mf-manifest.json&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pi-component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Required:</p><ul><li><code>format</code> has to be set to <code>module</code></li><li><code>remote-name</code> has to be left unspecified</li></ul>`,20),o=[n];function l(h,d,p,r,k,c){return i(),s("div",null,o)}const E=e(t,[["render",l]]);export{m as __pageData,E as default};
