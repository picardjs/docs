# Using Web Components

## Introduction

Web components are a set of standardized APIs for creating reusable, encapsulated custom HTML elements. They consist of Custom Elements, Shadow DOM, and HTML Templates, allowing developers to define new tags, encapsulate styles and scripts, and create reusable markup. This promotes modularity, maintainability, and interoperability in web development, enabling the seamless integration of custom elements across different web applications and frameworks.

## Using Web Components in Picard.js

Let's see how an example web component can be exposed:

```js
class MyWebComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // your display logic
  }
}

const name = 'my-component';
customElements.define(name, MyWebComponent);

export default name;
```

With this definition your component is properly exported. The exported string indicates the name of the web component.

Now you can use this web component in a `pi-component` as follows:

```html{4}
<pi-component
  name="MyComponent"
  source="some-mfe"
  framework="web-component"
></pi-component>
```

This will automatically create an HTML structure like `<my-component></my-component>`; working on the client, as well as on the server.

The incoming data will be spread as attributes into the component.
