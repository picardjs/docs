# `pi-component` API

## Attributes

| Name                   | Notes | Description                                            |
| ---------------------- | ----- | ------------------------------------------------------ |
| `cid`                  | (1)   | Component ID, i.e., what should be display             |
| `name`                 | (2,3) | Name of the component in the referenced micro frontend |
| `source`               | (2,3) | Name of the micro frontend or URL to a micro frontend  |
| `format`               | (3)   | Format of the micro frontend to load                   |
| `remote-name`          | (3)   | The name of the remote in case of Module Federation v1 |
| `remote-type`          | (3)   | The type of the remote in case of Module Federation v1 |
| `data`                 |       | The data to forward to the component ("props")         |
| `framework`            |       | The framework to use for displaying the component      |
| `fallback-template-id` |       | The ID of a template to display as fallback            |

If (1) is used the other attribute groups (2 or 3) are not taken into consideration. If `source` is a URL leading to a new micro frontend, group (3) is also used. Otherwise, (3) has no effect.

## Properties

| Name                   | Notes | Description                                            |
| ---------------------- | ----- | ------------------------------------------------------ |
| `data`                 |       | Gets or sets the deserialized data ("props")           |

The serialized data is understood as a JSON string. It is deserialized using `JSON.parse`. Make sure to only provide valid objects here, otherwise the data will be discarded.

## Events

| Name                   | Arguments                 | Description                                            |
| ---------------------- | ------------------------- | ------------------------------------------------------ |
| `changed-data`         | `ChangedDataEvent`        | Called when the data is changed                        |
| `mounted-component`    | `MountedComponentEvent`   | Called when the component was fully mounted            |
| `unmounted-component`  | `UnmountedComponentEvent` | Called when the component was fully unmounted          |

All events are emitted through the Picard.js event system.

## Interfaces

```ts
interface ChangedDataEvent {
  /**
   * The previously deserialized data.
   */
  previous: any;
  /**
   * The currently deserialized data.
   */
  current: any;
  /**
   * The currently available data serialization.
   */
  data: string;
}
```

```ts
interface MountedComponentEvent {
  /**
   * The corresponding HTML element.
   */
  element: HTMLElement;
}
```

```ts
interface UnmountedComponentEvent {
  /**
   * The corresponding HTML element.
   */
  element: HTMLElement;
}
```
