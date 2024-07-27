# Piral Feed Service

Discovery service responses following [the Piral Feed Service specification](https://docs.piral.io/reference/specifications/feed-api-specification) are directly supported.

::: tip
You can get access to a *free* (for personal and non-production payloads) discovery service at [feed.piral.cloud](https://feed.piral.cloud). If you like to use this on-premise you can even get a licensed version with support. For more information, see [www.piral.cloud](https://www.piral.cloud).

This document describes the *default* response from the Piral Cloud Feed Service - following the [specification](https://docs.piral.io/reference/specifications/feed-api-specification). Note, that the Piral Cloud Feed Service also supports providing responses in other formats, such as [the discovery schema](./discovery-schema.md).
:::

## Schema Description

The returned response has either to be an array consisting of objects following the schema (i.e., they need to have a `name`, `version`, `spec` and `link` property), or must be an object with an `items` property that is an array with the previously mentioned array items.

While pilets are directly supported, other micro frontends such as Module Federation or Native Federation powered micro frontends are covered with a special property called `custom`.

## Mapping of Properties

### Module Federation

| Property                  | Description                                         |
| ------------------------- | --------------------------------------------------- |
| `name`                    | Name of the micro frontend                          |
| `spec`                    | Needs to be set to `mf`                             |
| `link`                    | Link to the remote entry (manifest or JS)           |
| `custom.id`               | The global name of the remote                       |
| `custom.metaData`         | The `metaData` section of the remote entry manifest |
| `custom.exposes`          | The `exposes` section of the remote entry manifest  |
| `custom.remotes`          | The `remotes` section of the remote entry manifest  |
| `custom.shared`           | The `shared` section of the remote entry manifest   |
| `custom.runtime`          | The MF runtime version (e.g., `1.0` or `2.0`)       |
| `custom.type`             | The type (`esm` / `module` or `var` / `global`)     |

::: warning
It is crucial that the right runtime version of Module Federation is transported. While a missing `runtime` value could still be inferred correctly, an incorrect one will almost certainly lead to a wrong interpretation of the micro frontend.
:::

### Native Federation

| Property                  | Description                                         |
| ------------------------- | --------------------------------------------------- |
| `name`                    | Name of the micro frontend                          |
| `spec`                    | Needs to be set to `nf`                             |
| `link`                    | Link to the JSON definition                         |
| `custom.exposes`          | The `exposes` section of JSON definition            |
| `custom.dependencies`     | The `dependencies` section of the JSON definition   |

### Pilets

| Property                  | Description                                         |
| ------------------------- | --------------------------------------------------- |
| `name`                    | Name of the micro frontend                          |
| `version`                 | The version of the micro frontend                   |
| `link`                    | The URL of the entry module                         |
| `dependencies`            | The `dependencies` section of pilet                 |
| `config`                  | The `config` section of pilet                       |
| `spec`                    | The `spec` section of the pilet                     |
| `integrity`               | The `integrity` section of the pilet                |

### Anything Else

**This is not supported** (right now).

All values in the discovery schema are interepreted as one of the previously three mentioned formats. If you know another format that can be / is transported commonly then let us know!
