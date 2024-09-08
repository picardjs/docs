# Fragment Endpoint

The fragment endpoint can be passed in to SSR variants such as `picard-js/node` via the `fragmentUrl` option.

The given fragment endpoint has to accept `GET` requests using the following specification.

## Request Parameters

The following request path parameters are send:

| Name | Type     | Description                              | Example    |
| ---- | -------- | ---------------------------------------- | ---------- |
| id   | `string` | The base 64 encoded name of the fragment | `dGVzdA==` |

The URL is thought as `/<your-url>/{id}`, e.g., if you specified `/api/v1/fragment` as your `fragmentUrl` then `/api/v1/fragment/dGVzdA==` would be called to retrieve the fragment of `test`.

The following request query parameters are send:

| Name | Type     | Description                                   | Example                |
| ---- | -------- | --------------------------------------------- | ---------------------- |
| data | `string` | The base 64 encoded JSON string with the data | `eyJmb28iOiJiYXIifQ==` |

The `data` is always presented as an object that is stringified by a JSON serialization with the base 64 encoding being performed to be URL safe.

## Response

The response must be send as an HTML fragment usign the `text/html` value set in the `Content-Type` header.
