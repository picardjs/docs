# Using `pi-component`

The `pi-component` can be used to render a component from a micro frontend on a website.

Consider the following HTML:

```html
<div class="d-flex p-2 justify-content-center">
  <pi-component
    name="counter"
    source="https://assets.piral.cloud/pilets/picard-demos/pi-simple-html/1.0.1/index.meta.json"
    format="pilet"
  ></pi-component>
</div>
```

Here we say "at this position, i.e., inside the `<div>` element, render the component named `counter` from the micro frontend (pilet) located at the given URL".

Using this instruction Picard.js will load the micro frontend, get the component definition, and finally mount the component in the `pi-component` element, which acts as a container.

In case the micro frontend was already loaded from a micro frontend discovery service we can simplify the markup significantly:

```html{4}
<div class="d-flex p-2 justify-content-center">
  <pi-component
    name="counter"
    source="pi-simple-html"
  ></pi-component>
</div>
```

Here, we only need to tell Picard the name of the micro frontend as `source`. Importantly, the `format` specifier (and others) are unnecessary now - as all this has already been fully determined from the micro frontend discovery response.
