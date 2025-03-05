# Type enforcement in JS. 

### Installation
```sh
npm install eruka37/types
```

### Supported types
| Type            | Function                        | Description |
|----------------|--------------------------------|-------------|
| String         | `types.String(value)`         | Ensures the value is a string. |
| Number         | `types.Number(value)`         | Ensures the value is a number (not NaN). |
| Boolean        | `types.Boolean(value)`        | Ensures the value is a boolean. |
| Array          | `types.Array(value)`          | Ensures the value is an array. |
| Object         | `types.Object(value)`         | Ensures the value is a non-null object (not an array). |
| Function       | `types.Function(value)`       | Ensures the value is a function. |
| Null           | `types.Null(value)`           | Ensures the value is null. |
| Undefined      | `types.Undefined(value)`      | Ensures the value is undefined. |
| Symbol         | `types.Symbol(value)`         | Ensures the value is a symbol. |
| BigInt         | `types.BigInt(value)`         | Ensures the value is a BigInt. |
| Date          | `types.Date(value)`           | Ensures the value is a valid Date object. |
| RegExp         | `types.RegExp(value)`         | Ensures the value is a RegExp object. |
| JSON          | `types.JSON(value)`           | Parses a valid JSON string. |
| NotEmptyString | `types.NotEmptyString(value)` | Ensures the value is a non-empty string. |
| PositiveNumber | `types.PositiveNumber(value)` | Ensures the value is a positive number (> 0). |
| NegativeNumber | `types.NegativeNumber(value)` | Ensures the value is a negative number (< 0). |
| Integer        | `types.Integer(value)`        | Ensures the value is an integer. |
| Float         | `types.Float(value)`          | Ensures the value is a non-integer number (float). |
| Email         | `types.Email(value)`          | Ensures the value is a valid email address. |
| URL           | `types.URL(value)`            | Ensures the value is a valid URL. |
| UUID          | `types.UUID(value)`           | Ensures the value is a valid UUID. |


### Usage examples
```javascript
const types = require("@eruka37/types");

// ✅ Correct Usage
let name = types.String("John");
let age = types.PositiveNumber(25);
let email = types.Email("test@example.com");
let url = types.URL("https://example.com");
let uuid = types.UUID("123e4567-e89b-12d3-a456-426614174000");

// ❌ Incorrect Usage (Throws an Error)
try {
  let invalidName = types.String(123);
} catch (error) {
  console.error(error.message); // Expected a string, but got number
}

try {
  let invalidEmail = types.Email("invalid-email");
} catch (error) {
  console.error(error.message); // Expected a valid email address
}
```
