# Generic Component Lifecycle API

## Methods

| Name              | Region | Arguments                                             | Returns           |
| ----------------- | ------ | ----------------------------------------------------- | ----------------- |
| `load`            | Client |                                                       | `Promise`         |
| `unload`          | Client |                                                       | `Promise`         |
| `mount`           | Client | `container` (HTMLElement), `props` (1), `locals`: (2) |                   |
| `unmount`         | Client | `container` (HTMLElement), `locals` (2)               |                   |
| `update`          | Client | `props` (1), `locals` (2)                             |                   |
| `bootstrap`       | Server |                                                       | `Promise`         |
| `stringify`       | Server | `props` (1)                                           | `Promise<string>` |

(1) the `props` are the deserialized object from the `data` property

(2) the `locals` is an (initially) empty object that can be used at will to transport information between the different lifecycles; it is created per component instance
