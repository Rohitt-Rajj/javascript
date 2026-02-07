# 🎯 JavaScript `this` Keyword - Complete Placement Guide

## 📚 Table of Contents
1. [What is `this`?](#what-is-this)
2. [Global Context](#global-context)
3. [Function Context](#function-context)
4. [Object Methods](#object-methods)
5. [Classes & Constructors](#classes--constructors)
6. [Arrow Functions](#arrow-functions)
7. [call(), apply(), bind()](#call-apply-bind)
8. [Event Handlers](#event-handlers)
9. [Common Patterns](#common-patterns)
10. [Interview Questions](#interview-questions)

---

## 🎯 1. What is `this`?

### Simple Definition:
> **`this` refers to the object that is currently executing the code.** It's like saying "this object" or "this person" - it changes based on **how and where** the function is called.

### The Golden Rule:
**`this` is determined by HOW a function is called, not where it's defined.**

---

## 🌍 2. Global Context

### In Browser:
```javascript
console.log(this); // Window object (global object in browser)
```

### In Node.js:
```javascript
console.log(this); // {} (empty object in module scope)
```

### Global Object Reference:
```javascript
// Access global object safely
console.log(globalThis); // Works in both browser and Node.js

// In browser: globalThis === window
// In Node.js: globalThis === global
```

---

## 🎭 3. Function Context

### Regular Functions:
```javascript
function showThis() {
    console.log(this);
}

showThis(); // Depends on strict mode!
```

### Strict Mode vs Non-Strict Mode:
```javascript
// Non-strict mode
function example1() {
    console.log(this); // Global object (window/global)
}
example1();

// Strict mode
'use strict';
function example2() {
    console.log(this); // undefined
}
example2();
```

**Summary Table:**
| Context | Strict Mode | Non-Strict Mode |
|---------|-------------|-----------------|
| Global function | `undefined` | Global object |
| Method | Owning object | Owning object |
| Constructor | New instance | New instance |

---

## 🏢 4. Object Methods

### When function is a method of an object:
```javascript
const user = {
    name: "Rohit",
    age: 30,
    greet: function() {
        console.log(`Hello, I'm ${this.name}`); // this = user object
    }
};

user.greet(); // "Hello, I'm Rohit"
```

### Important: Method loses `this` when separated:
```javascript
const user = {
    name: "Rohit",
    greet: function() {
        console.log(this.name);
    }
};

const greetFunc = user.greet; // Reference to function only
greetFunc(); // undefined (lost context)
```

### Common Fix (pre-ES6):
```javascript
const user = {
    name: "Rohit",
    greet: function() {
        const that = this; // Store reference
        function inner() {
            console.log(that.name); // Use stored reference
        }
        inner();
    }
};
```

---

## 🏗️ 5. Classes & Constructors

### In Constructors:
```javascript
class Person {
    constructor(name, age) {
        // this = {} (automatically created by 'new')
        this.name = name;
        this.age = age;
        // return this (automatically)
    }
}

const p1 = new Person("Rohit", 20); // this points to new instance
```

### In Class Methods:
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(`Hello ${this.name}`); // this = instance
    }
}

const p1 = new Person("Rohit");
p1.greet(); // "Hello Rohit"
```

---

## 🏹 6. Arrow Functions

### Key Difference:
**Arrow functions don't have their own `this`. They inherit `this` from their parent scope (lexical scoping).**

### Example:
```javascript
const user = {
    name: "Rohit",
    regular: function() {
        console.log(this.name); // "Rohit" (user object)
    },
    arrow: () => {
        console.log(this.name); // undefined (global/window)
    }
};

user.regular(); // "Rohit"
user.arrow(); // undefined
```

### Common Use Case: Fixing `this` in callbacks
```javascript
const stopWatch = {
    seconds: 0,
    
    // ❌ PROBLEM: Regular function loses this
    badStart: function() {
        setInterval(function() {
            this.seconds++; // Wrong! this is global
            console.log(this.seconds);
        }, 1000);
    },
    
    // ✅ SOLUTION 1: Arrow function
    goodStart: function() {
        setInterval(() => {
            this.seconds++; // Correct! Inherits from goodStart
            console.log(this.seconds);
        }, 1000);
    },
    
    // ✅ SOLUTION 2: Store this reference (pre-ES6)
    oldStart: function() {
        const that = this;
        setInterval(function() {
            that.seconds++; // Correct! Uses stored reference
            console.log(that.seconds);
        }, 1000);
    }
};
```

---

## 🎛️ 7. call(), apply(), bind()

### 1. **call()** - Call function with specific `this`
```javascript
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const user = { name: "Rohit" };
const user2 = { name: "Mohit" };

greet.call(user, "Hello"); // "Hello, Rohit"
greet.call(user2, "Hi");   // "Hi, Mohit"
```

### 2. **apply()** - Same as call(), but takes array of arguments
```javascript
function incrementAge(value, name) {
    this.age += value;
    this.name = name;
}

const user = { age: 30 };
incrementAge.apply(user, [10, "Mohan"]); 
// user becomes { age: 40, name: "Mohan" }
```

### 3. **bind()** - Create new function with bound `this`
```javascript
function greet() {
    console.log(`Hello ${this.name}`);
}

const user = { name: "Rohit" };
const boundGreet = greet.bind(user); // Returns new function

boundGreet(); // "Hello Rohit" (this is always user)
```

### Comparison:
| Method | When called | Arguments | Returns |
|--------|-------------|-----------|---------|
| `call()` | Immediately | Individual | Function result |
| `apply()` | Immediately | Array | Function result |
| `bind()` | Later | Individual | New function |

---

## 🖱️ 8. Event Handlers

### Regular Functions in Events:
```javascript
const button = document.getElementById("first");

button.addEventListener('click', function() {
    console.log(this); // button element
    this.style.backgroundColor = "blue";
});
```

### Arrow Functions in Events:
```javascript
const button = document.getElementById("first");

button.addEventListener('click', () => {
    console.log(this); // window/global (not button!)
    // this.style.backgroundColor = "blue"; // ERROR!
});
```

### Recommendation:
- Use **regular functions** when you need `this` to refer to the element
- Use **arrow functions** when you want to preserve parent's `this`

---

## 🔄 9. Common Patterns & Pitfalls

### Pattern 1: Method borrowing
```javascript
const user1 = { name: "Rohit", age: 30 };
const user2 = { name: "Mohit", age: 20 };

function showInfo() {
    console.log(`${this.name} is ${this.age} years old`);
}

showInfo.call(user1); // "Rohit is 30 years old"
showInfo.call(user2); // "Mohit is 20 years old"
```

### Pattern 2: Array methods
```javascript
const users = [
    { name: "Rohit", age: 30 },
    { name: "Mohit", age: 20 }
];

users.forEach(function(user) {
    console.log(this); // window/global (careful!)
});

// Better:
users.forEach(function(user) {
    console.log(user.name); // Use parameter, not this
}, this); // Pass this as second argument if needed
```

### Pattern 3: Constructor functions
```javascript
function Person(name) {
    // If called without new
    if (!(this instanceof Person)) {
        return new Person(name); // Auto-correct
    }
    this.name = name;
}

const p1 = Person("Rohit"); // Still works
const p2 = new Person("Mohit");
```

---

## 💼 10. Interview Questions & Answers

### Q1. What is `this` in JavaScript?
**A:** `this` is a special keyword that refers to the context in which a function is executed. Its value depends on **how** the function is called, not where it's defined.

### Q2. How does `this` work in arrow functions?
**A:** Arrow functions don't have their own `this`. They inherit `this` from their parent lexical scope. This makes them ideal for callbacks where you want to preserve context.

### Q3. Difference between call, apply, and bind?
**A:**
- **call()**: Immediately invokes function with specified `this` and individual arguments
- **apply()**: Same as call but takes arguments as array
- **bind()**: Returns new function with bound `this`, doesn't invoke immediately

### Q4. What is `this` in global scope?
**A:** In browsers: `window` object. In Node.js module scope: empty object `{}`. Use `globalThis` for cross-environment compatibility.

### Q5. How does strict mode affect `this`?
**A:** In strict mode, `this` is `undefined` in global functions. In non-strict mode, it's the global object. This prevents accidental modification of global object.

### Q6. What happens when you use `new` keyword?
**A:** Creates new empty object, sets its prototype, makes `this` point to it inside constructor, and returns it (unless constructor returns another object).

### Q7. How to fix `this` losing context in callbacks?
**A:** Three ways:
1. Use arrow function: `() => { console.log(this); }`
2. Use bind: `callback.bind(this)`
3. Store reference: `const that = this;`

### Q8. What is `this` in event handlers?
**A:** In regular functions as event handlers, `this` refers to the element that triggered the event. In arrow functions, it refers to parent scope.

### Q9. Can you change `this` after function is created?
**A:** Yes, using `call()`, `apply()`, or `bind()` you can change what `this` refers to when the function is invoked.

### Q10. What's wrong with this code?
```javascript
const obj = {
    name: "Rohit",
    greet: () => {
        console.log(`Hello ${this.name}`);
    }
};
obj.greet(); // undefined
```
**A:** Arrow function is used as method, so `this` doesn't refer to `obj`. It refers to parent scope (global). Use regular function for object methods.

---

## 📊 `this` Value Reference Table

| Context | Example | `this` refers to |
|---------|---------|-------------------|
| Global | `console.log(this)` | Browser: `window`, Node: `{}` |
| Function (non-strict) | `function f() { console.log(this) }()` | Global object |
| Function (strict) | `'use strict'; function f() { console.log(this) }()` | `undefined` |
| Method | `obj.method()` | `obj` |
| Constructor | `new Person()` | New instance |
| Arrow function | `const f = () => console.log(this)` | Parent scope |
| DOM event handler | `button.onclick = function() { console.log(this) }` | Button element |
| call/apply/bind | `func.call(obj)` | First argument |

---

## 🎓 Quick Rules Summary

1. **Global**: Browser = `window`, Node = `{}`
2. **Function**: Depends on strict mode
3. **Method**: Object before dot
4. **Constructor**: New instance
5. **Arrow function**: From parent scope
6. **Event handler**: Element that triggered
7. **call/apply/bind**: First argument

### Mnemonic: **G-F-M-C-A-E-B**
- **G**lobal
- **F**unction
- **M**ethod
- **C**onstructor
- **A**rrow
- **E**vent
- **B**ind/call/apply

---

## ⚠️ Common Mistakes

### Mistake 1: Arrow function as method
```javascript
// ❌ WRONG
const user = {
    name: "Rohit",
    greet: () => console.log(`Hi ${this.name}`) // undefined
};

// ✅ CORRECT
const user = {
    name: "Rohit",
    greet: function() { console.log(`Hi ${this.name}`) } // "Rohit"
};
```

### Mistake 2: Losing context in callback
```javascript
// ❌ WRONG
const timer = {
    count: 0,
    start: function() {
        setInterval(function() {
            this.count++; // Wrong! this is global
        }, 1000);
    }
};

// ✅ CORRECT
const timer = {
    count: 0,
    start: function() {
        setInterval(() => {
            this.count++; // Correct! Arrow inherits this
        }, 1000);
    }
};
```

### Mistake 3: Using this before object is ready
```javascript
// ❌ WRONG
const user = {
    name: "Rohit",
    greet: function() {
        console.log(this.name);
    }
};

const greetFunc = user.greet;
greetFunc(); // undefined (lost context)

// ✅ CORRECT
user.greet(); // "Rohit"
// OR
greetFunc.call(user); // "Rohit"
```

---

## 🚀 Placement Tips

### Always Mention:
1. **"this is dynamic, not lexical"** (except arrow functions)
2. **"Determined by how function is called, not where defined"**
3. **"Arrow functions inherit this from parent scope"**

### Quick Test Questions:
```javascript
// What does this print?
const obj = {
    x: 10,
    getX: () => console.log(this.x),
    getX2: function() { console.log(this.x); }
};

obj.getX(); // ?
obj.getX2(); // ?
```

### Remember This Diagram:
```
How function is called → Determines this value
     ↓
Method call (obj.func()) → obj
     ↓
Function call (func()) → global/undefined
     ↓
Constructor call (new Func()) → new instance
     ↓
Arrow function → Parent's this
```

---

## 📝 Final Cheat Sheet

```javascript
// Global
console.log(this); // window (browser) / {} (Node)

// Function
function f() { console.log(this); } // depends on strict mode

// Method
obj.method(); // this = obj

// Constructor
new Person(); // this = new instance

// Arrow function
const arrow = () => console.log(this); // parent's this

// Event handler
button.onclick = function() { console.log(this); }; // button

// With call/apply/bind
func.call(obj); // this = obj
func.apply(obj); // this = obj
func.bind(obj)(); // this = obj
```

