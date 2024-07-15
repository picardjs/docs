# Referencing Module Federation Scripts

## Introduction

Module Federation allows JavaScript applications to share and load code dynamically at runtime, supporting a microfrontend architecture. This feature enables independently deployed apps to collaborate by sharing modules, enhancing scalability and maintainability. It simplifies code reuse and integration, leading to more efficient development workflows and seamless updates across distributed systems.

## Using Module Federation

Module Federation can be used either as part of a discovery service response or directly by referencing a component using a `source` with `format` set to `module`. Depending on the version and variant of Module Federation more parameters such as `remote-name` and `remote-type` might be necessary.

### Module Federation v1 with Globals

```html
<pi-component
  name="MyComponent"
  source="https://yourcompany.com/example/remoteEntry.js"
  format="module"
  remote-name="example"
></pi-component>
```

Required:

- `format` has to be set to `module`
- `remote-name` has to be set to the global defined by the micro frontend

Optional:

- `remote-type` has to be set to `var`

### Module Federation v1 with ESModules

```html
<pi-component
  name="MyComponent"
  source="https://yourcompany.com/example/remoteEntry.mjs"
  format="module"
  remote-name="example"
  remote-type="esm"
></pi-component>
```

Required:

- `format` has to be set to `module`
- `remote-name` has to be set to the global defined by the micro frontend
- `remote-type` has to be set to `esm`

### Module Federation v2 with Manifest

Here, you reference the manifest.

```html
<pi-component
  name="MyComponent"
  source="https://yourcompany.com/example/mf-manifest.json"
  format="module"
></pi-component>
```

Required:

- `format` has to be set to `module`
- `remote-name` has to be left unspecified
