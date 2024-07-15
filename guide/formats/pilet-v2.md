# Referencing Pilets

## Introduction

Pilets are the building blocks of microfrontends in Piral, a framework for creating modular web applications. Each pilet represents an independently developed and deployable feature, enabling seamless integration and dynamic loading within a Piral instance. This approach promotes a highly scalable and maintainable architecture, allowing teams to work autonomously on different features and deploy updates without affecting the entire application. Pilets streamline the development process, enhance flexibility, and ensure a cohesive user experience across diverse components.

## Using Pilets

Pilets can be used either as part of a discovery service response or directly by referencing a component using a `source` with `format` set to `pilet`. Depending on the pilet specification more parameters might be necessary.

### Pilet v2

```html
<pi-component
  name="MyComponent"
  source="https://yourcompany.com/example/index.meta.json"
  format="pilet"
></pi-component>
```

Required:

- `format` has to be set to `pilet`
