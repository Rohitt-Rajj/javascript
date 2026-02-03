# 📞 JavaScript Callbacks - Placement Preparation Guide

## 📚 Table of Contents
1. [What is a Callback?](#what-is-a-callback)
2. [Why Use Callbacks?](#why-use-callbacks)
3. [Synchronous vs Asynchronous](#synchronous-vs-asynchronous)
4. [Common Use Cases](#common-use-cases)
5. [Callback Hell](#callback-hell)
6. [Interview Questions](#interview-questions)
7. [Code Examples](#code-examples)

---

## 🎯 1. What is a Callback?
A callback is **a function passed as an argument to another function**, to be executed later.

### Basic Syntax
```javascript
// Function that accepts a callback
function greet(name, callback) {
    console.log('Hello ' + name);
    callback(); // Executing the callback
}

// Callback function
function sayGoodbye() {
    console.log('Goodbye!');
}

// Passing function as argument
greet('John', sayGoodbye);
```

**Output:**
```
Hello John
Goodbye!
```

---

## 🔑 2. Why Use Callbacks?

| Purpose | Example |
|---------|---------|
| **Async Operations** | File I/O, API calls |
| **Event Handling** | Click, keypress events |
| **Higher-Order Functions** | map(), filter(), forEach() |
| **Customizable Behavior** | Sort functions, comparators |

### Key Points:
- ✅ **Non-blocking** - Doesn't stop code execution
- ✅ **Reusable** - Same function, different behaviors
- ✅ **Flexible** - Dynamic function execution

---

## ⏱️ 3. Synchronous vs Asynchronous Callbacks

### 🔄 **Synchronous Callbacks** (Immediate)
```javascript
// Executes immediately
[1, 2, 3].forEach(function(item) {
    console.log(item); // 1, 2, 3
});
console.log('Done'); // Runs after forEach
```

### ⏳ **Asynchronous Callbacks** (Delayed)
```javascript
// Executes after delay
setTimeout(function() {
    console.log('This runs after 2 seconds');
}, 2000);
console.log('This runs first'); // Runs immediately
```

---

## 🛠️ 4. Common Use Cases

### 1. **Array Methods**
```javascript
// forEach
[1, 2, 3].forEach(num => console.log(num * 2));

// map
const doubled = [1, 2, 3].map(num => num * 2);

// filter
const evens = [1, 2, 3, 4].filter(num => num % 2 === 0);

// reduce
const sum = [1, 2, 3].reduce((acc, num) => acc + num, 0);
```

### 2. **Event Listeners**
```javascript
button.addEventListener('click', function() {
    console.log('Button clicked!');
});
```

### 3. **Timers**
```javascript
setTimeout(() => console.log('Timeout'), 1000);
setInterval(() => console.log('Interval'), 2000);
```

### 4. **API Requests**
```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---

## ⚠️ 5. Callback Hell (Pyramid of Doom)

### ❌ **Problem**
```javascript
getUser(userId, function(user) {
    getOrders(user.id, function(orders) {
        getProducts(orders[0].id, function(products) {
            getReviews(products[0].id, function(reviews) {
                console.log(reviews); // Deep nesting!
            });
        });
    });
});
```

### ✅ **Solutions**

1. **Named Functions**
```javascript
function handleReviews(reviews) {
    console.log(reviews);
}

function handleProducts(products) {
    getReviews(products[0].id, handleReviews);
}

function handleOrders(orders) {
    getProducts(orders[0].id, handleProducts);
}

getUser(userId, function(user) {
    getOrders(user.id, handleOrders);
});
```

2. **Promises (Better Solution)**
```javascript
getUser(userId)
    .then(user => getOrders(user.id))
    .then(orders => getProducts(orders[0].id))
    .then(products => getReviews(products[0].id))
    .then(reviews => console.log(reviews))
    .catch(error => console.error(error));
```

3. **Async/Await (Modern Solution)**
```javascript
async function getUserData() {
    try {
        const user = await getUser(userId);
        const orders = await getOrders(user.id);
        const products = await getProducts(orders[0].id);
        const reviews = await getReviews(products[0].id);
        console.log(reviews);
    } catch (error) {
        console.error(error);
    }
}
```

---

## 💼 6. Interview Questions & Answers

### **Q1. What is a callback function?**
**A:** A function passed as argument to another function, executed after some operation completes.

### **Q2. Why are callbacks important in JavaScript?**
**A:** JavaScript is single-threaded. Callbacks enable async operations without blocking execution.

### **Q3. What is callback hell? How to avoid it?**
**A:** Deep nesting of callbacks making code hard to read. Avoid using:
1. Named functions
2. Promises
3. Async/await
4. Modularization

### **Q4. Difference: Synchronous vs Asynchronous callbacks?**
**A:** Sync executes immediately, async executes after current execution stack completes.

### **Q5. What is error-first callback pattern?**
**A:** Callbacks where first parameter is error object:
```javascript
function readFile(path, callback) {
    // Some operation
    if (error) {
        callback(new Error('File not found'));
    } else {
        callback(null, data);
    }
}
```

### **Q6. Can arrow functions be used as callbacks?**
**A:** Yes, but be careful with `this` context.

---

## 💻 7. Code Examples for Practice

### **Example 1: Basic Callback**
```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) { return x + y; }
function multiply(x, y) { return x * y; }

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, multiply)); // 15
```

### **Example 2: Async Simulation**
```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John' };
        callback(data);
    }, 1000);
}

fetchData((result) => {
    console.log('Received:', result);
});
console.log('Fetching data...'); // Runs first
```

### **Example 3: Custom forEach**
```javascript
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const numbers = [1, 2, 3];
myForEach(numbers, (num, index) => {
    console.log(`Index ${index}: ${num}`);
});
```

---

## 📝 Quick Summary Cheat Sheet

| Concept | Key Point |
|---------|-----------|
| **Definition** | Function passed as argument |
| **Purpose** | Handle async operations |
| **Sync Callback** | Executes immediately |
| **Async Callback** | Executes after current stack |
| **Common Uses** | Event handlers, array methods, timers |
| **Problem** | Callback Hell |
| **Solution** | Promises, Async/Await |
| **Pattern** | Error-first callbacks |

---

## 🎯 Placement Tips

1. **Always mention** that JavaScript is single-threaded when asked about callbacks
2. **Explain** how callbacks enable non-blocking operations
3. **Show** you understand callback hell and its solutions
4. **Compare** callbacks vs promises vs async/await
5. **Practice** common array methods with callbacks

---

## 🔗 Resources to Explore
- MDN: Callback Functions
- JavaScript.info: Callbacks
- Node.js: Error-first Callbacks
- Eloquent JavaScript: Chapter on Asynchronous Programming

