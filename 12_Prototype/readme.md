# 🧬 JavaScript Prototypes - Complete Placement Guide

## 📚 Table of Contents
1. [What is a Prototype?](#what-is-a-prototype)
2. [Prototype Chain](#prototype-chain)
3. [How Prototypes Work](#how-prototypes-work)
4. [Classes vs Prototypes](#classes-vs-prototypes)
5. [Inheritance with Prototypes](#inheritance-with-prototypes)
6. [Important Methods](#important-methods)
7. [Interview Questions](#interview-questions)
8. [Practical Examples](#practical-examples)

---

## 🎯 1. What is a Prototype?

### Simple Definition:
> **A prototype is a hidden object that every JavaScript object links to. It's like a "parent" object that provides shared properties and methods.**

### Visual Representation:
```
Your Object → Prototype → Prototype's Prototype → ... → null
```

### Basic Example:
```javascript
const person = {
    name: "Rohit",
    age: 30,
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

console.log(person.toString()); // Where does toString() come from? ← Prototype!
```

---

## 🔗 2. Prototype Chain

### The "Chain of Prototypes" Concept:
When you access a property on an object, JavaScript:
1. **Looks in the object itself**
2. **If not found, looks in its prototype**
3. **If not found, looks in prototype's prototype**
4. **Continues until reaches null**

```javascript
const obj = { name: "Rohit" };

// The chain:
// obj → Object.prototype → null

console.log(obj.toString()); // From Object.prototype
console.log(obj.hasOwnProperty("name")); // From Object.prototype
```

### Example from Code:
```javascript
const obj = {
    name: "Rohit",
    age: 20
};

const obj2 = Object.create(obj); // obj2's prototype is obj
obj2.account = 10;

console.log(obj2.account); // 10 (own property)
console.log(obj2.name); // "Rohit" (from prototype)
```

---

## 🏗️ 3. How Prototypes Work

### Three Ways to Set Prototype:

#### 1. **Object.create()** (Modern)
```javascript
const parent = { name: "Parent" };
const child = Object.create(parent); // parent is child's prototype
child.age = 10;

console.log(child.name); // "Parent" ← From prototype
console.log(child.age); // 10 ← Own property
```

#### 2. **Constructor Functions** (Traditional)
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add method to prototype
Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
};

const p1 = new Person("Rohit", 30);
p1.greet(); // Works via prototype
```

#### 3. **Classes** (Modern Syntax - ES6)
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() { // Automatically goes to prototype
        console.log(`Hello ${this.name}`);
    }
}
```

---

## ⚖️ 4. Classes vs Prototypes

### They're the Same Thing!
**Classes are just syntactic sugar over prototypes.**

### Class Syntax (ES6):
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
}

// Under the hood, this creates:
// Person.prototype.sayHi = function() { ... }
```

### Traditional Prototype Syntax:
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function() {
    console.log(`Hi ${this.name}`);
};
```

### Both Create Same Structure:
```
p1 (instance) → Person.prototype → Object.prototype → null
```

---

## 👨‍👦 5. Inheritance with Prototypes

### Using Classes (Modern):
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
}

class Customer extends Person {
    constructor(name, age, account, balance) {
        super(name, age); // Call parent constructor
        this.account = account;
        this.balance = balance;
    }
    
    checkBalance() {
        return this.balance;
    }
}

const c1 = new Customer("Mohan", 20, 12, 540);
c1.sayHi(); // Inherited from Person
console.log(c1.checkBalance()); // Own method
```

### Prototype Chain Created:
```
c1 → Customer.prototype → Person.prototype → Object.prototype → null
```

### Using Traditional Prototypes:
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function() {
    console.log(`Hi ${this.name}`);
};

function Customer(name, age, account, balance) {
    Person.call(this, name, age); // Call parent constructor
    this.account = account;
    this.balance = balance;
}

// Set up inheritance
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.checkBalance = function() {
    return this.balance;
};
```

---

## 🛠️ 6. Important Methods & Properties

### 1. **`Object.getPrototypeOf(obj)`**
```javascript
const proto = Object.getPrototypeOf(obj);
console.log(proto === Object.prototype); // true for plain objects
```

### 2. **`Object.setPrototypeOf(obj, prototype)`**
```javascript
const parent = { x: 10 };
const child = { y: 20 };
Object.setPrototypeOf(child, parent);
console.log(child.x); // 10
```

### 3. **`obj.hasOwnProperty(prop)`**
```javascript
const obj = { name: "Rohit" };
console.log(obj.hasOwnProperty("name")); // true (own property)
console.log(obj.hasOwnProperty("toString")); // false (inherited)
```

### 4. **`prop in obj`** (checks prototype chain)
```javascript
const obj = { name: "Rohit" };
console.log("name" in obj); // true
console.log("toString" in obj); // true (in prototype chain)
```

### 5. **`obj.__proto__`** (Deprecated but exists)
```javascript
console.log(obj.__proto__); // Works but avoid in production
```

### 6. **`Object.create(proto)`**
```javascript
const parent = { greet() { console.log("Hello") } };
const child = Object.create(parent);
child.greet(); // "Hello"
```

---

## 💼 7. Interview Questions & Answers

### Q1. What is a prototype in JavaScript?
**A:** Every JavaScript object has a hidden `[[Prototype]]` property that links to another object. When accessing a property, JavaScript looks up the prototype chain until it finds it or reaches null.

### Q2. Difference between `__proto__` and `prototype`?
**A:**
- **`__proto__`**: Property on instances pointing to their prototype
- **`prototype`**: Property on constructor functions (used when creating instances with `new`)

```javascript
function Person() {}
const p = new Person();

console.log(p.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
```

### Q3. How does JavaScript implement inheritance?
**A:** Through prototype chaining. When an object doesn't have a property, JavaScript looks up its prototype chain.

### Q4. What is prototype chain?
**A:** The linked list of prototype objects that JavaScript traverses when looking for properties.

### Q5. How to check if property is own or inherited?
**A:** Use `hasOwnProperty()`:
```javascript
obj.hasOwnProperty("name"); // true if own property
```

### Q6. What's the difference between classical and prototypal inheritance?
**A:**
- **Classical** (Java/C++): Classes are blueprints, create instances
- **Prototypal** (JS): Objects inherit directly from other objects

### Q7. How to create an object without prototype?
**A:** 
```javascript
const obj = Object.create(null); // No prototype
console.log(obj.toString); // undefined
```

### Q8. What happens when you modify a prototype?
**A:** All instances sharing that prototype are affected:
```javascript
function Person() {}
const p1 = new Person();
const p2 = new Person();

Person.prototype.greet = () => console.log("Hi");
p1.greet(); // "Hi"
p2.greet(); // "Hi" ← Both get the new method
```

---

## 💻 8. Practical Examples

### Example 1: Adding Methods to Built-in Types
```javascript
// Add custom method to Array prototype
Array.prototype.second = function() {
    return this[1];
};

const arr = [10, 20, 30];
console.log(arr.second()); // 20

// BUT BE CAREFUL: Modifying built-ins can cause issues!
```

### Example 2: Performance Optimization
```javascript
// BAD: Each object gets its own function
function createUser(name) {
    return {
        name: name,
        greet: function() { console.log("Hi " + this.name); }
    };
    // greet function created for EACH object
}

// GOOD: Shared via prototype
function User(name) {
    this.name = name;
}
User.prototype.greet = function() {
    console.log("Hi " + this.name);
};
// One greet function shared by all User instances
```

### Example 3: Checking Prototype Chain
```javascript
const arr = [];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

const date = new Date();
console.log(date instanceof Date); // true
console.log(date instanceof Object); // true
```

### Example 4: Creating Custom Error Types
```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Invalid input");
} catch(error) {
    if(error instanceof ValidationError) {
        console.log("Custom error caught!");
    }
}
```

---

## 🎓 Quick Summary Cheat Sheet

```javascript
// 1. Every object has a prototype
// 2. Access via Object.getPrototypeOf(obj)
// 3. Chain: obj → prototype → prototype → ... → null
// 4. Classes = syntactic sugar for prototypes
// 5. Inheritance = prototype chain
// 6. Methods should be on prototype for efficiency
```

### Prototype Relationships:
```
Instance → Constructor.prototype → Object.prototype → null
    ↑           ↑
  new         extends
    ↑           ↑
Constructor → Parent.prototype
```

---

## ⚠️ Common Mistakes & Best Practices

### 1. **Don't modify built-in prototypes**
```javascript
// ❌ BAD - Can break other code
Array.prototype.second = function() { return this[1]; };

// ✅ Better - Create utility functions
function getSecond(arr) { return arr[1]; }
```

### 2. **Use `Object.create()` for clean inheritance**
```javascript
// ✅ Clean inheritance
const animal = { eats: true };
const rabbit = Object.create(animal);
rabbit.jumps = true;
```

### 3. **Put methods on prototype, not constructor**
```javascript
// ❌ Inefficient
function Person(name) {
    this.name = name;
    this.greet = function() { console.log("Hi"); }; // New function each time
}

// ✅ Efficient
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() { console.log("Hi"); }; // Shared
```

### 4. **Remember `constructor` property**
```javascript
function Person() {}
Person.prototype = {
    // constructor is lost!
    greet: function() {}
};

// Fix:
Person.prototype = {
    constructor: Person, // Restore constructor
    greet: function() {}
};
```

---

## 🚀 Placement Tips

### Always Mention:
1. **"Everything in JavaScript is an object"** (almost)
2. **"JavaScript uses prototypal inheritance, not classical"**
3. **"Classes in ES6 are just syntactic sugar"**
4. **"Prototype chain ends with `null`"**

### Common Interview Patterns:
```javascript
// 1. How to check inheritance
console.log(obj instanceof Constructor);

// 2. How to create inheritance
Child.prototype = Object.create(Parent.prototype);

// 3. How to call parent constructor
Parent.call(this, args);

// 4. How to check own vs inherited property
obj.hasOwnProperty("prop") vs "prop" in obj
```

### Remember This Diagram:
```
[Your Object]
     ↓
[Prototype]
     ↓
[Object.prototype]
     ↓
    null
```

---

## 📚 Final Notes

**Key Takeaways:**
1. ✅ **Prototype** = Hidden link to parent object
2. ✅ **Prototype Chain** = Lookup path for properties
3. ✅ **Classes** = Just pretty syntax for prototypes
4. ✅ **Inheritance** = Setting up prototype chain
5. ✅ **Efficiency** = Put methods on prototype, not instances

**Golden Rule:** When you can't find a property in an object, JavaScript automatically looks up its prototype chain!