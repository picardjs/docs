# Referencing Native Federation Modules

## Introduction

Native Federation is a microfrontend architecture for mobile apps, allowing dynamic sharing and loading of components at runtime. This approach supports modularity and independent development, enabling scalable, flexible, and maintainable mobile applications by streamlining updates and enhancing collaboration between development teams.

## Using Native Federation

Native Federation modules can be used either as part of a discovery service response or directly by referencing a component using a `source` with `format` set to `native`.

### Native Federation

```html
<pi-component
  name="MyComponent"
  source="https://yourcompany.com/example/remoteEntry.json"
  format="native"
></pi-component>
```

Required:

- `format` has to be set to `native`
