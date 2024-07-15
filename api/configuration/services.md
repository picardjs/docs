# Runtime Services

Picard.js comes with a set of services that can be extended to provide more or augmented functionality.

## Service Definitions

Right now the following extensible services exist:

| Service Key Structure | Example           | Interface             | Notes         |
| --------------------- | ----------------- | --------------------- | ------------- |
| `framework.{type}`    | `framework.react` | `ConverterService`    |               |
| `format.{name}`       | `format.module`   | `ContainerService`    |               |
| `slotRel.{name}`      | `slotRel.router`  | `SlotBehaviorService` |               |
| `part.{name}`         | `part.style`      | `PartService`         | SSR only      |

## Interfaces

```ts
interface ConverterService {
  convert(component: any, opts: any): ComponentLifecycle;
}
```

```ts
interface ContainerService {
  createContainer(details: any): Promise<ComponentGetter>;
}
```

```ts
interface SlotBehaviorService {
  apply(attribs: Record<string, string>): [name: string, data: any];
}
```

```ts
interface PartService {
  getReplacement(document: Document, attribs: Record<string, string>): Promise<string>;
}
```
