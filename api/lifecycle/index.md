# Generic Component Lifecycle API

## Methods

| Name              | Region | Arguments                                             | Returns           |
| ----------------- | ------ | ----------------------------------------------------- | ----------------- |
| `load`            | Client |                                                       | `Promise<void>`   |
| `unload`          | Client |                                                       | `Promise<void>`   |
| `mount`           | Client | `container` (HTMLElement), `props` (1), `locals` (2)  | `void`            |
| `unmount`         | Client | `container` (HTMLElement), `locals` (2)               | `void`            |
| `update`          | Client | `props` (1), `locals` (2)                             | `void`            |
| `bootstrap`       | Server |                                                       | `Promise<void>`   |
| `stringify`       | Server | `props` (1)                                           | `Promise<string>` |

(1) the `props` are the deserialized object from the `data` property

(2) the `locals` is an (initially) empty object that can be used at will to transport information between the different lifecycle methods; it is created per component instance
