# 🚀 JavaScript Functions Mastery - Complete Guide

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Functions](https://img.shields.io/badge/Functions-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white)
![Interview](https://img.shields.io/badge/Interview%20Prep-4CAF50?style=for-the-badge&logo=codewars&logoColor=white)

**Complete JavaScript Functions Guide with Interview Questions & Best Practices**  
*Following Chai aur Code Learning Path*

[📚 Table of Contents](#-table-of-contents) | [💻 Code Examples](#-function-types) | [🎯 Interview Prep](#-interview-questions)

</div>

---

## 📚 Table of Contents

1. [Function Declaration & Invocation](#-function-declaration--invocation)
2. [Parameters & Arguments](#-parameters--arguments)
3. [Return Statement](#-return-statement)
4. [Function Types](#-function-types)
5. [`this` Keyword](#-this-keyword)
6. [Arrow Functions](#-arrow-functions)
7. [IIFE (Immediately Invoked Function Expressions)](#-iife)
8. [Rest & Spread Operators](#-rest--spread-operators)
9. [Scope & Hoisting](#-scope--hoisting)
10. [Interview Questions](#-interview-questions)

---

## 📝 Function Declaration & Invocation

### Basic Function Syntax
```javascript
// Function Declaration (Hoisted)
function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}
sayMyName();  // Invocation
```

### Key Points:
- **Function Declaration**: Can be called before declaration (hoisted)
- **Function Expression**: Cannot be called before assignment
- **Invocation**: Use `()` to execute function

---

## 🔧 Parameters & Arguments

### Basic Parameters
```javascript
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// Arguments passed during invocation
const result = addTwoNumbers(3, 5);
console.log("Result: ", result);  // 8
```

### Default Parameters
```javascript
function login(userInput = "Guest") {
    if (!userInput) {
        return `Please enter username`;
    }
    return `${userInput} just logged in`;
}

console.log(login('rohit'));  // rohit just logged in
console.log(login());         // Please enter username
console.log(login(''));       // Please enter username
```

---

## 🔄 Return Statement

### Explicit Return
```javascript
function addTwoNumbers(num1, num2) {
    return num1 + num2;  // Explicit return
}
```

### Implicit Return (Arrow Functions)
```javascript
const addTwo = (num1, num2) => num1 + num2;  // Implicit return
```

### No Return = Returns `undefined`
```javascript
function noReturn() {
    console.log("No return statement");
}
const value = noReturn();  // value = undefined
```

---

## 📊 Function Types

### 1. Function Declaration (Hoisted)
```javascript
console.log(addOne(5));  // ✅ Works (hoisted)

function addOne(num) {
    return num + 1;
}
```

### 2. Function Expression (Not Hoisted)
```javascript
// console.log(addTwo(5));  // ❌ Error: Cannot access before initialization

const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(5));  // ✅ Works
```

### 3. Arrow Function (ES6+)
```javascript
const addThree = (num) => num + 3;

// Multi-line arrow function
const calculate = (a, b) => {
    const sum = a + b;
    return sum * 2;
};
```

### 4. Method (Function as Object Property)
```javascript
const user = {
    username: "Rohit",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to our website`);
    }
};
```

---

## 🎯 `this` Keyword

### `this` in Regular Functions
```javascript
const user = {
    username: "Rohit",
    
    welcomeMessage: function() {
        console.log(this);           // Refers to user object
        console.log(this.username);  // "Rohit"
    }
};

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();  // "Sam"
```

### `this` in Arrow Functions
```javascript
const user = {
    username: "Rohit",
    
    regularFunc: function() {
        console.log(this.username);  // "Rohit" ✅
    },
    
    arrowFunc: () => {
        console.log(this.username);  // undefined ❌
        // Arrow functions don't have their own 'this'
        // They inherit from parent scope
    }
};
```

### `this` in Global Scope
```javascript
console.log(this);  // {} in Node.js, Window in Browser

function checkThis() {
    console.log(this);  // Global object/undefined (strict mode)
}
```

---

## 🏹 Arrow Functions

### Basic Syntax
```javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function equivalent
const add = (a, b) => {
    return a + b;
};

// Implicit return (single expression)
const add = (a, b) => a + b;
```

### When to Use Arrow Functions:
```javascript
// 1. Callback functions
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// 2. Simple one-liners
const square = x => x * x;

// 3. When you want lexical 'this'
const obj = {
    value: 10,
    getValue: function() {
        setTimeout(() => {
            console.log(this.value);  // 10 ✅ (inherits from obj)
        }, 1000);
    }
};
```

### When NOT to Use Arrow Functions:
```javascript
// 1. Object methods (lose 'this' binding)
const person = {
    name: "Rohit",
    greet: () => console.log(`Hi ${this.name}`)  // ❌ undefined
};

// 2. Constructor functions
const Car = (model) => {
    this.model = model;  // ❌ Arrow functions can't be constructors
};

// 3. Event handlers (sometimes)
button.addEventListener('click', () => {
    console.log(this);  // Window/global ❌ (if you need element)
});
```

---

## ⚡ IIFE (Immediately Invoked Function Expressions)

### Basic Syntax
```javascript
// Named IIFE
(function chai() {
    console.log(`DB connected`);
})();

// Arrow function IIFE
(() => {
    console.log(`DB connected`);
})();

// IIFE with parameters
((name) => {
    console.log(`DB connected ${name}`);
})("Rohit");
```

### Use Cases:
```javascript
// 1. Creating private scope
(function() {
    const privateVar = "Secret";
    console.log(privateVar);  // Accessible here
})();
// console.log(privateVar);  // ❌ Error: not accessible

// 2. Avoiding global pollution
const module = (function() {
    let count = 0;
    
    return {
        increment: () => ++count,
        getCount: () => count
    };
})();

module.increment();
console.log(module.getCount());  // 1
```

---

## 🔄 Rest & Spread Operators

### Rest Operator (`...`) - Collects arguments
```javascript
function calculateCartPrice(...nums) {
    // nums becomes array [100, 200, 300]
    return nums.reduce((sum, num) => sum + num, 0);
}

console.log(calculateCartPrice(100, 200, 300));  // 600
console.log(calculateCartPrice(100, 200, 300, 400, 500));  // 1500
```

### Rest with Regular Parameters
```javascript
function userInfo(name, age, ...hobbies) {
    console.log(name);     // "Rohit"
    console.log(age);      // 22
    console.log(hobbies);  // ["Coding", "Reading", "Gaming"]
}

userInfo("Rohit", 22, "Coding", "Reading", "Gaming");
```

### Spread Operator (`...`) - Expands arrays/objects
```javascript
// With arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// With objects
const user = { name: "Rohit", age: 22 };
const updatedUser = { ...user, city: "Delhi" };
// { name: "Rohit", age: 22, city: "Delhi" }
```

---

## 🏗️ Scope & Hoisting

### Variable Scope
```javascript
let globalVar = "I'm global";

function testScope() {
    let functionVar = "I'm in function";
    
    if (true) {
        let blockVar = "I'm in block";
        console.log(globalVar);     // ✅ Accessible
        console.log(functionVar);   // ✅ Accessible
        console.log(blockVar);      // ✅ Accessible
    }
    
    console.log(blockVar);  // ❌ Error: not accessible
}

testScope();
console.log(functionVar);  // ❌ Error: not accessible
```

### Hoisting in Functions
```javascript
// Function Declaration - Hoisted
console.log(addOne(5));  // ✅ 6 (works even before declaration)

function addOne(num) {
    return num + 1;
}

// Function Expression - NOT Hoisted
// console.log(addTwo(5));  // ❌ Error (cannot access before initialization)

const addTwo = function(num) {
    return num + 2;
};

console.log(addTwo(5));  // ✅ 7
```

### Temporal Dead Zone (TDZ)
```javascript
// console.log(myLet);  // ❌ ReferenceError (TDZ)
// console.log(myConst); // ❌ ReferenceError (TDZ)

let myLet = "value";
const myConst = "value";

console.log(myVar);  // ✅ undefined (var is hoisted)
var myVar = "value";
```

---

## 🎯 Interview Questions

### Q1: Difference between function declaration and expression?
**A:** 
- Function declarations are hoisted, can be called before declaration
- Function expressions are not hoisted, must be defined before calling
- Function expressions can be anonymous, declarations have names

### Q2: What is the output?
```javascript
function test() {
    return
    {
        message: "Hello"
    };
}
console.log(test());
```
**A:** `undefined` (automatic semicolon insertion after return)

### Q3: Arrow function vs Regular function?
**A:**
- Arrow functions don't have `this`, `arguments`, `super`, `new.target`
- Arrow functions can't be used as constructors
- Arrow functions don't have prototype property
- Arrow functions have implicit return for single expressions

### Q4: What is IIFE and why use it?
**A:** Immediately Invoked Function Expression creates private scope, avoids global pollution, executes immediately. Used for module patterns, avoiding variable conflicts.

### Q5: Rest vs Spread operator?
**A:**
- Rest: Collects multiple elements into an array (function parameters)
- Spread: Expands array/object into individual elements

### Q6: What will this print?
```javascript
const obj = {
    x: 10,
    getX: () => {
        console.log(this.x);
    }
};
obj.getX();
```
**A:** `undefined` (arrow function doesn't bind `this` to obj)

---

## 🏆 Best Practices

### 1. Use Descriptive Names
```javascript
// ❌ Bad
function calc(a, b) { ... }

// ✅ Good
function calculateMonthlyInterest(principal, rate) { ... }
```

### 2. Keep Functions Small & Focused
```javascript
// ❌ Bad: Does too much
function processUser(user) {
    // validate, save to DB, send email, log...
}

// ✅ Good: Single responsibility
function validateUser(user) { ... }
function saveUser(user) { ... }
function sendWelcomeEmail(user) { ... }
```

### 3. Use Default Parameters
```javascript
// ❌ Bad
function greet(name) {
    name = name || "Guest";
    // ...
}

// ✅ Good
function greet(name = "Guest") {
    // ...
}
```

### 4. Return Early
```javascript
// ❌ Bad: Nested conditions
function getUserStatus(user) {
    if (user) {
        if (user.active) {
            return "Active";
        } else {
            return "Inactive";
        }
    }
    return "Not found";
}

// ✅ Good: Early returns
function getUserStatus(user) {
    if (!user) return "Not found";
    if (!user.active) return "Inactive";
    return "Active";
}
```

### 5. Pure Functions When Possible
```javascript
// ❌ Impure: Modifies external state
let total = 0;
function addToTotal(amount) {
    total += amount;
    return total;
}

// ✅ Pure: No side effects
function addToTotal(currentTotal, amount) {
    return currentTotal + amount;
}
```

---

## 📊 Cheat Sheet

| Concept | Syntax | Hoisted | Has `this` | Can be Constructor |
|---------|--------|---------|------------|-------------------|
| **Function Declaration** | `function name() {}` | ✅ Yes | ✅ Yes | ✅ Yes |
| **Function Expression** | `const fn = function() {}` | ❌ No | ✅ Yes | ✅ Yes |
| **Arrow Function** | `const fn = () => {}` | ❌ No | ❌ No | ❌ No |
| **IIFE** | `(function() {})()` | N/A | ✅ Yes | ✅ Yes |
| **Method** | `obj.method = function() {}` | N/A | ✅ Yes | ❌ No |

---

## 🚀 Advanced Concepts

### 1. Higher-Order Functions
```javascript
// Function that takes/returns another function
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5));  // 10
```

### 2. Closures
```javascript
function counter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const myCounter = counter();
console.log(myCounter());  // 1
console.log(myCounter());  // 2
```

### 3. Currying
```javascript
// Regular function
function add(a, b, c) {
    return a + b + c;
}

// Curried version
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curryAdd(1)(2)(3));  // 6
```

### 4. Memoization
```javascript
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const memoizedAdd = memoize((a, b) => a + b);
```

---

<div align="center">

## 📞 Connect With Me
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Rohitt-Rajj)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rohit-raaj/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ranarohitsinghh@gmail.com)

---

**"Functions are the building blocks of JavaScript. Master them to build anything!"** 🚀

⭐ **Star this repo if you found it helpful!** ⭐

</div>

---

## 📚 Additional Resources

### Recommended Learning:
1. [MDN Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
2. [Eloquent JavaScript - Functions](https://eloquentjavascript.net/03_functions.html)
3. [JavaScript.info - Functions](https://javascript.info/function-basics)

### Practice Platforms:
- [Codewars - JavaScript Functions](https://www.codewars.com/kata/search/javascript?q=functions)
- [LeetCode - JavaScript Problems](https://leetcode.com/problemset/all/)
- [HackerRank - JavaScript](https://www.hackerrank.com/domains/tutorials/10-days-of-javascript)

---

**Happy Coding! Remember: Practice makes permanent. Code every day!** 💻✨