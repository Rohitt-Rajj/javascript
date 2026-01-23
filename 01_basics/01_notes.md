# JavaScript Fundamentals - Quick Revision Notes

## Strings in JavaScript

### String Declaration & Concatenation
```javascript
const name = "rohit "
const repoCount = 50
console.log(name + repoCount); // Old method
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Template literals (modern)
```

### String Methods & Properties
| Method/Property | Description | Example |
|----------------|-------------|---------|
| `[]` | Access character by index | `name[0]` |
| `.length` | Get string length | `name.length` |
| `.toUpperCase()` | Convert to uppercase (original unchanged) | `name.toUpperCase()` |
| `.charAt()` | Get character at specific index | `name.charAt(2)` |
| `.indexOf()` | Find index of character | `name.indexOf("i")` |
| `.substring()` | Extract substring (no negative values) | `name.substring(0,3)` |
| `.slice()` | Extract substring (allows negative values) | `value.slice(-5,20)` |
| `.trim()` | Remove whitespace from both ends | `new_string.trim()` |
| `.replace()` | Replace substring | `url.replace('%123','-')` |
| `.includes()` | Check if substring exists | `url.includes('hi')` |
| `.split()` | Split string into array | `value.split(',')` |

---

## Variables & Scoping

### Variable Declaration Types
```javascript
const accountId = 12345        // Constant - cannot be reassigned
let accountEmail = "ranarohit@gmail.com" // Block scope (preferred)
var accountPassword = "12345"  // Global scope (avoid - issues with scope)
accountCity = "jaipur"         // Implicit global (never use)
let accountState;              // undefined by default
```

### Variable Comparison
| Type | Scope | Can Redeclare | Can Update | Hoisting | Best For |
|------|-------|---------------|------------|----------|----------|
| `var` | Function | Yes | Yes | Yes (undefined) | Avoid using |
| `let` | Block | No | Yes | Yes (not initialized) | Changing values |
| `const` | Block | No | No | Yes (not initialized) | Fixed values |

---

## Numbers & Math

### Number Methods
```javascript
const other_number = 123.500
console.log(other_number.toPrecision(3)); // Precision formatting
console.log(balance.toFixed(2));          // Fixed decimal places
console.log(hundred.toLocaleString('en-IN')); // Locale formatting (Indian)
```

### Number Object
```javascript
const balance = new Number(100)  // Creates Number object
console.log(typeof balance);     // Returns "object"
console.log(balance.toString().length); // Convert to string first
```

### Math Object Methods
| Method | Description | Example |
|--------|-------------|---------|
| `Math.abs()` | Absolute value | `Math.abs(-4)` |
| `Math.round()` | Nearest integer | `Math.round(4.8)` |
| `Math.ceil()` | Round up | `Math.ceil(4.1)` |
| `Math.floor()` | Round down | `Math.floor(4.8)` |
| `Math.min()` | Minimum value | `Math.min(4.8,5,6,2,1,0,3)` |
| `Math.max()` | Maximum value | `Math.max(4.8,5,6,2,1,0,3)` |
| `Math.random()` | Random 0-1 | `Math.random()` |

### Generate Random Number in Range
```javascript
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
```

---

## Date Object

### Date Creation & Methods
```javascript
let myDate = new Date()
console.log(myDate.toString());        // Full date string
console.log(myDate.toDateString());    // Date only
console.log(myDate.toLocaleString());  // Local format
console.log(myDate.getMonth() + 1);    // Months are 0-indexed
console.log(myDate.getDay());          // Day of week
```

### Date Formatting
```javascript
myDate.toLocaleString('default', {
    weekday: "long",
    // Other options...
})
```

---

## Data Types

### Primitive Types (7 Types)
1. **String** - Text data
2. **Number** - Integer/Float
3. **Boolean** - true/false
4. **null** - Empty/unknown value
5. **undefined** - Not assigned
6. **Symbol** - Unique identifier
7. **BigInt** - Large integers

```javascript
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false - Symbols are unique
```

### Non-Primitive (Reference) Types
1. **Array** - `["shaktiman", "naagraj", "doga"]`
2. **Object** - `{name: "Rohit", age: 22}`
3. **Function** - `function(){...}`

### Type Checking
```javascript
console.log(typeof null);      // "object"
console.log(typeof undefined); // "undefined"
```

---

## Type Conversion

### String to Number
```javascript
let score = "33"
let valueInNumber = Number(score)
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
```

### Boolean Conversion
```javascript
let isLoggedIn = 1
let conversion = Boolean(isLoggedIn)
// "" => false
// "Rohit" => true
```

### Number to String
```javascript
let someNumber = 33
let stringNumber = String(someNumber)
```

---

## Operations

### Arithmetic Operations
```javascript
console.log(2 + 2);  // 4
console.log(2 - 2);  // 0
console.log(2 / 2);  // 1
console.log(2 * 2);  // 4
```

### String Concatenation
```javascript
console.log("1" + 2);       // "12"
console.log("1" + 2 + 2);   // "122" (string first)
console.log(3 + 1 + "1");   // "41" (number first)
```

### Comparison Operators
```javascript
console.log(2 > 1);           // true
console.log(null > 0);        // false
console.log(null == 0);       // false
console.log(null >= 0);       // true (!)

// Strict equality (checks type too)
console.log("2" === 2);       // false
console.log("2" == 2);        // true (loose equality)
```

### Unary Operators
```javascript
console.log(+true);   // 1
let scoreGame = 101;
scoreGame++;          // Post-increment
++scoreGame;          // Pre-increment
```

---

## Memory Management

### Memory Types
- **Stack Memory** - Used for primitive types
  - Copy of value
  - Fixed size
  - Fast access
  
- **Heap Memory** - Used for non-primitive types
  - Reference to value
  - Dynamic allocation
  - Slower access

### "use strict" Directive
```javascript
"use strict";
// Treats all JS as newer version
// Stops accidental global variables
// Prevents duplicate variable names
// Makes debugging easier
```

---

## Key Points for Interviews

### Important Notes
1. **String methods don't modify original strings** (immutable)
2. **Template literals** are preferred over concatenation
3. **Always use `let` and `const`**, avoid `var`
4. **Months are 0-indexed** in Date object
5. **`null >= 0` is true** but `null > 0` is false (language quirk)
6. **`===` checks type and value**, `==` does type coercion
7. **`Symbols` are always unique** even with same description
8. **`typeof null` returns "object"** (historical JavaScript bug)

### Common Conversions
```javascript
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: Everything else

// Type coercion rules:
// String + Number = String
// Boolean + Number = Number
// null behaves like 0 in numeric context
```

