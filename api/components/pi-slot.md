# `pi-slot` API

## Attributes

| Name                   | Notes | Description                                                      |
| ---------------------- | ----- | ---------------------------------------------------------------- |
| `name`                 |       | Name of the components to look for                               |
| `data`                 |       | The data to forward to the components ("props")                  |
| `item-template-id`     |       | The ID of a template to wrap each found component                |
| `fallback-template-id` |       | The ID of a template to display as fallback                      |
| `order-by`             | (1)   | Defines the ordering of the found components                     |
| `reverse-order`        |       | If set, reverses the order in which the components are displayed |

The ordering key must be one of `cid` (order by their component ID), `source` (order by their micro frontend name), `time` (order by the time the component was registered), and `none` (just take the order in which the components have been found.)

## Properties

| Name                   | Notes | Description                                            |
| ---------------------- | ----- | ------------------------------------------------------ |
| `name`                 |       | Gets or sets the name attribute                        |
| `data`                 |       | Gets or sets the deserialized data ("props")           |

The serialized data is understood as a JSON string. It is deserialized using `JSON.parse`. Make sure to only provide valid objects here, otherwise the data will be discarded.

## Events

| Name             | Arguments            | Description                                       |
| -----------------| -------------------- | ------------------------------------------------- |
| `mounted-slot`   | `MountedSlotEvent`   | Called when the slot was fully mounted            |
| `unmounted-slot` | `UnmountedSlotEvent` | Called when the slot was fully unmounted          |

All events are emitted through the Picard.js event system.

## Interfaces

```ts
interface MountedSlotEvent {
  /**
   * The corresponding HTML element.
   */
  element: HTMLElement;
}
```

```ts
interface UnmountedSlotEvent {
  /**
   * The corresponding HTML element.
   */
  element: HTMLElement;
}
```
