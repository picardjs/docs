# Using `pi-part`

The `pi-part` component is available exclusively on the server. On the client, this component won't render at all.

This component is essentially a replacement rule that is applied by the `decorate` function of Picard.

![`pi-part`](../../images/pi-part.svg)

Consider the following HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Picard.js</title>
    <pi-part name="style"></pi-part>
</head>
<body></body>
</html>
```

When the decorator sees a `pi-part` it will replace the covered span by the found replacement string. In case of a `style` replacement this might look similar to:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Picard.js</title>
    <style>pi-component, pi-slot { display: contents }</style>
</head>
<body></body>
</html>
```

::: tip
You can define additional replacement services. The used service name is `part.{name}`, where `{name}` refers to the name of the part that you want to provide.
:::
