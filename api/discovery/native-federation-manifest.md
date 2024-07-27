# Native Federation Manifest

Discovery service responses following [the Native Federation manifest](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/native-federation/README.md#initializing-the-host) are directly supported.

## Schema Description

The returned response has to be an object mapping a string (name of the micro frontend) to a string (URL of the micro frontend manifest given as a JSON).

## Mapping of Properties

### Module Federation

**This is not supported**.

All values in the Native Federation manifest are interpreted as remote entries describing a micro frontend using Native Federation.

### Native Federation

| Property  | Description                   |
| --------- | ----------------------------- |
| `[key]`   | Name of the micro frontend    |
| `[value]` | Link to the remote entry JSON |

### Pilets

**This is not supported**.

All values in the Native Federation manifest are interpreted as remote entries describing a micro frontend using Native Federation.

### Anything Else

**This is not supported**.

All values in the Native Federation manifest are interpreted as remote entries describing a micro frontend using Native Federation.
