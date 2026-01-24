# 🎯 JavaScript Control Flow - Complete Guide

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Conditional Logic](https://img.shields.io/badge/Conditionals-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white)
![Operators](https://img.shields.io/badge/Operators-4CAF50?style=for-the-badge&logo=codewars&logoColor=white)

**Mastering JavaScript Control Flow Statements & Operators**  
*Complete Guide with Interview Questions & Best Practices*

[📚 Table of Contents](#-table-of-contents) | [💡 Quick Examples](#-quick-examples) | [🎯 Interview Prep](#-interview-questions)

</div>

---

## 📚 Table of Contents

1. [Conditional Statements](#-conditional-statements)
2. [Comparison Operators](#-comparison-operators)
3. [Logical Operators](#-logical-operators)
4. [Switch Statements](#-switch-statements)
5. [Truthy & Falsy Values](#-truthy--falsy-values)
6. [Ternary Operator](#-ternary-operator)
7. [Nullish Coalescing](#-nullish-coalescing-operator)
8. [Short-Circuit Evaluation](#-short-circuit-evaluation)
9. [Interview Questions](#-interview-questions)
10. [Best Practices](#-best-practices)

---

## ⚡ Conditional Statements

### Basic `if-else`
```javascript
const temperature = 41;

if (temperature < 40) {
    console.log("Temperature is normal");
} else {
    console.log("Temperature is high");
}
```

### `if-else if-else` Ladder
```javascript
const balance = 1000;

if (balance < 500) {
    console.log("Less than 500");
} else if (balance < 750) {
    console.log("Less than 750");
} else if (balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Less than 1200");
}
```

### One-liner `if` (Implicit Scope)
```javascript
const balance = 1000;
if (balance > 500) console.log("Balance is sufficient");
```

### Block Scope in Conditionals
```javascript
const score = 200;

if (score > 100) {
    let power = "fly";  // Block-scoped variable
    console.log(`User power: ${power}`);
}
// console.log(power); // ❌ Error: power is not defined
```

---

## 🔍 Comparison Operators

| Operator | Name | Example | Returns |
|----------|------|---------|---------|
| `==` | Loose Equality | `5 == "5"` | `true` |
| `===` | Strict Equality | `5 === "5"` | `false` |
| `!=` | Loose Inequality | `5 != "5"` | `false` |
| `!==` | Strict Inequality | `5 !== "5"` | `true` |
| `<` | Less Than | `3 < 5` | `true` |
| `>` | Greater Than | `10 > 5` | `true` |
| `<=` | Less Than or Equal | `5 <= 5` | `true` |
| `>=` | Greater Than or Equal | `5 >= 3` | `true` |

### Important Notes:
- **Loose equality** (`==`) performs type coercion
- **Strict equality** (`===`) checks value AND type
- **Always prefer** `===` and `!==` for predictable code

```javascript
// Type Coercion Examples
console.log(0 == false);      // true (type coercion)
console.log(0 === false);     // false (different types)
console.log(null == undefined); // true
console.log(null === undefined); // false
```

---

## 🎭 Logical Operators

### AND (`&&`) - All conditions must be true
```javascript
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}
```

### OR (`||`) - At least one condition must be true
```javascript
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
```

### NOT (`!`) - Inverts boolean value
```javascript
const isLoggedOut = !userLoggedIn;  // false
```

### Combined Conditions
```javascript
if ((userLoggedIn && debitCard) || (loggedInFromGoogle && loggedInFromEmail)) {
    console.log("Access granted");
}
```

---

## 🎪 Switch Statements

### Basic Syntax
```javascript
const month = "march";

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("Month not found");
        break;
}
```

### Without `break` (Fall-through)
```javascript
const day = "monday";

switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("Weekday");
        break;
    case "saturday":
    case "sunday":
        console.log("Weekend");
        break;
}
```

### Switch vs If-else
- **Use switch** when checking single variable against multiple values
- **Use if-else** for complex conditions or range checking
- **Switch is faster** for many cases (jump table optimization)

---

## ✅❌ Truthy & Falsy Values

### Falsy Values (Evaluate to `false`)
```javascript
false
0
-0
0n (BigInt zero)
"" (empty string)
null
undefined
NaN
```

### Truthy Values (Evaluate to `true`)
```javascript
true
"0" (string zero)
'false' (string false)
" " (space string)
[] (empty array)
{} (empty object)
function() {} (empty function)
42 (non-zero numbers)
"Hello" (non-empty strings)
```

### Checking Empty Arrays & Objects
```javascript
const userEmail = [];
const emptyObj = {};

// Check empty array
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// Check empty object
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
```

### Real-world Example
```javascript
const userEmail = "user@example.com";

if (userEmail) {  // Truthy check
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
```

---

## ❓ Ternary Operator

### Syntax: `condition ? trueExpression : falseExpression`
```javascript
const iceTeaPrice = 100;
const message = iceTeaPrice <= 80 ? "Less than 80" : "More than 80";
console.log(message);
```

### Nested Ternary (Avoid when possible)
```javascript
const age = 20;
const category = age < 13 ? "Child" : 
                 age < 20 ? "Teenager" : 
                 age < 65 ? "Adult" : "Senior";
```

### Returning Values
```javascript
function getDiscount(isMember) {
    return isMember ? 0.2 : 0.1;  // 20% or 10% discount
}
```

---

## 🎯 Nullish Coalescing Operator (`??`)

### Returns right-hand operand when left-hand is `null` or `undefined`
```javascript
let val1;

val1 = 5 ?? 10;           // 5 (5 is not null/undefined)
val1 = null ?? 10;        // 10 (null is nullish)
val1 = undefined ?? 15;   // 15 (undefined is nullish)
val1 = null ?? 10 ?? 20;  // 10 (first non-nullish value)
```

### Difference from OR (`||`) Operator
```javascript
const value1 = 0 ?? "default";   // 0 (0 is not nullish)
const value2 = 0 || "default";   // "default" (0 is falsy)

const value3 = "" ?? "default";  // "" (empty string is not nullish)
const value4 = "" || "default";  // "default" (empty string is falsy)
```

### Practical Use Case
```javascript
// Default configuration
const config = {
    port: process.env.PORT ?? 3000,  // Use env var or default
    apiKey: process.env.API_KEY ?? "default-key"
};
```

---

## ⚡ Short-Circuit Evaluation

### AND (`&&`) Short-Circuit
```javascript
// If first operand is falsy, second operand is NOT evaluated
false && console.log("This won't run");
true && console.log("This will run");
```

### OR (`||`) Short-Circuit
```javascript
// If first operand is truthy, second operand is NOT evaluated
true || console.log("This won't run");
false || console.log("This will run");
```

### Practical Patterns
```javascript
// Default values
const username = userInput || "Guest";

// Conditional execution
isLoggedIn && showDashboard();

// Optional chaining guard
user && user.address && console.log(user.address.city);
```

---

## 🎯 Interview Questions

### Q1: Difference between `==` and `===`?
**A:** `==` performs type coercion before comparison, while `===` checks both value and type without coercion. Always prefer `===` for predictable code.

### Q2: What are falsy values in JavaScript?
**A:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

### Q3: Difference between `??` and `||`?
**A:** `??` returns right-hand operand only when left-hand is `null` or `undefined`. `||` returns right-hand operand when left-hand is falsy (including 0, "", false).

### Q4: What is short-circuit evaluation?
**A:** When using `&&` or `||`, JavaScript stops evaluating as soon as the result is determined. For `&&`, if first operand is falsy, it returns it without checking second. For `||`, if first operand is truthy, it returns it without checking second.

### Q5: How to check if an object is empty?
**A:** `Object.keys(obj).length === 0` or `JSON.stringify(obj) === '{}'`

### Q6: What will this output?
```javascript
console.log([] == false);
console.log([] === false);
```
**A:** `true` (type coercion), `false` (strict comparison)

### Q7: When to use switch vs if-else?
**A:** Use switch for equality checks against multiple values of a single variable. Use if-else for range checks, complex conditions, or multiple variables.

---

## 🏆 Best Practices

### 1. Always Use `===` and `!==`
```javascript
// ❌ Bad
if (value == 0) { ... }

// ✅ Good
if (value === 0) { ... }
```

### 2. Avoid Deep Nesting
```javascript
// ❌ Bad: Deep nesting
if (condition1) {
    if (condition2) {
        if (condition3) {
            // ...
        }
    }
}

// ✅ Good: Early returns
if (!condition1) return;
if (!condition2) return;
if (!condition3) return;
// Main logic here
```

### 3. Use Descriptive Variable Names
```javascript
// ❌ Bad
if (a && b && c) { ... }

// ✅ Good
if (isLoggedIn && hasPermission && isActive) { ... }
```

### 4. Prefer Ternary for Simple Conditions
```javascript
// ❌ Bad
let status;
if (isActive) {
    status = "Active";
} else {
    status = "Inactive";
}

// ✅ Good
const status = isActive ? "Active" : "Inactive";
```

### 5. Handle Edge Cases
```javascript
// Always check for null/undefined
const name = user?.name ?? "Anonymous";

// Check array/object emptiness
if (Array.isArray(items) && items.length > 0) {
    // Process items
}
```

### 6. Use Parentheses for Complex Conditions
```javascript
// ❌ Confusing
if (a && b || c && d) { ... }

// ✅ Clear
if ((a && b) || (c && d)) { ... }
```

---

## 📊 Operator Precedence Cheat Sheet

| Precedence | Operator | Description |
|------------|----------|-------------|
| 1 | `()` | Grouping |
| 2 | `!`, `++`, `--` | NOT, increment, decrement |
| 3 | `*`, `/`, `%` | Multiply, divide, remainder |
| 4 | `+`, `-` | Add, subtract |
| 5 | `<`, `<=`, `>`, `>=` | Relational |
| 6 | `==`, `!=`, `===`, `!==` | Equality |
| 7 | `&&` | Logical AND |
| 8 | `||` | Logical OR |
| 9 | `??` | Nullish Coalescing |
| 10 | `?:` | Ternary |

---

## 🔄 Common Patterns

### Guard Clauses
```javascript
function processUser(user) {
    if (!user) return null;  // Guard clause
    if (!user.isActive) return null;
    
    // Main logic here
    return user.process();
}
```

### Optional Chaining with Nullish Coalescing
```javascript
const city = user?.address?.city ?? "Unknown";
```

### Conditional Object Properties
```javascript
const config = {
    apiUrl: "https://api.example.com",
    ...(isDebug && { debug: true }),
    ...(userToken && { token: userToken })
};
```

---

<div align="center">

## 📞 Connect With Me
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Rohitt-Rajj)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rohit-raaj/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ranarohitsinghh@gmail.com)

---

**"Mastering control flow is the first step to writing clean, maintainable JavaScript code."** 🚀

⭐ **Star this repo if you found it helpful!** ⭐

</div>

---

## 📚 Additional Resources

### Recommended Learning:
- [MDN Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript.info - Logical Operators](https://javascript.info/logical-operators)
- [Eloquent JavaScript - Program Structure](https://eloquentjavascript.net/02_program_structure.html)

### Practice Problems:
- [LeetCode - Control Flow Problems](https://leetcode.com/problemset/all/?topicSlugs=conditional-statements)
- [HackerRank - JavaScript Challenges](https://www.hackerrank.com/domains/tutorials/10-days-of-javascript)
- [Edabit - JavaScript Exercises](https://edabit.com/challenges/javascript)

---

**Happy Coding! Remember: Clean conditionals lead to predictable code.** 💻✨