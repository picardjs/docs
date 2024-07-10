# Using HTML Fragments

## Introduction

HTML is the foundational layer of everything - the markup that is understood by the browser and therefore the text representation that needs to be chosen by any web server when sending back a document to the browser.

## Using HTML Fragments in Picard.js

Let's see how an example HTML fragment can be exposed:

```js
const html = `<div>Hello World!</div>`;

export default html;
```

With this definition your component is properly exported. The exported string indicates the content of the component.

Now you can use this HTML fragment in a `pi-component` as follows:

```html{4}
<pi-component
  name="MyComponent"
  source="some-mfe"
  framework="html"
></pi-component>
```

This will work on the client, as well as on the server. In both cases the retrieved string represents the `innerHTML` of the `pi-component`.
