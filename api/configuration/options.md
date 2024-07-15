# Initialization Options

## Browser

In the browser Picard.js automatically runs - all you need to do is follow [the installation guide](../../guide/variants/browser.md).

To set the initial configuration you can use a callback, e.g., on the `load` event:

```html
<script>
function configure({ target }) {
  // Place a `config` property on the associated `<script>` element, e.g.,:
  target.config = {
    // ...
  };
}
</script>
<script src="./dist/picard.js" onload="configure(event)"></script>
```

The provided configuration has to follow the definition for the client. All options except `feed` and `state` can be set.

## Client

The `initializePicard` function can be called with an options object respecting the following interface:

```ts
interface PicardOptions {
  /**
   * The name of the pi-component.
   * @default pi-component
   */
  componentName?: string;
  /**
   * The name of the pi-slot.
   * @default pi-slot
   */
  slotName?: string;
  /**
   * The name of the pi-part.
   * @default pi-part
   */
  partName?: string;
  /**
   * The micro frontend discovery service URL,
   * data from calling it, or callback function
   * to call it manually.
   */
  feed?: FeedDefinition;
  /**
   * The initial state of Picard.js - if resumed.
   */
  state?: any;
  /**
   * The application's meta data.
   */
  meta?: any;
  /**
   * The additional services to register.
   */
  services?: Record<string, any>;
  /**
   * The centrally shared dependencies to use.
   */
  dependencies?: Record<string, () => Promise<any>>;
}
```

## Node

The `initializePicard` function can be called with an options object respecting the following interface:

```ts
interface PicardOptions {
  /**
   * The name of the pi-component.
   * @default pi-component
   */
  componentName?: string;
  /**
   * The name of the pi-slot.
   * @default pi-slot
   */
  slotName?: string;
  /**
   * The name of the pi-part.
   * @default pi-part
   */
  partName?: string;
  /**
   * The URL of the fragment service, if any.
   */
  fragmentUrl?: string;
  /**
   * The micro frontend discovery service URL,
   * data from calling it, or callback function
   * to call it manually.
   */
  feed?: FeedDefinition;
  /**
   * The initial state of Picard.js - if resumed.
   */
  state?: any;
  /**
   * The additional services to register.
   */
  services?: Record<string, any>;
  /**
   * The centrally shared dependencies to use.
   */
  dependencies?: Record<string, () => Promise<any>>;
}
```
