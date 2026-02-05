# 📚 Async/Await - Complete Interview Guide

## 📖 Table of Contents
1. [What is Async/Await?](#what-is-asyncawait)
2. [How Async/Await Works](#how-asyncawait-works)
3. [Error Handling](#error-handling)
4. [Real Examples](#real-examples)
5. [Comparison with Promises](#comparison-with-promises)
6. [Important Rules](#important-rules)
7. [Common Patterns](#common-patterns)
8. [Interview Questions](#interview-questions)

---

## 🎯 1. What is Async/Await?

### Simple Definition:
> **Async/Await is a modern way to write asynchronous code that looks like synchronous code.**

**Think of it like:**
- **`async`** = "This function will have to wait for something"
- **`await`** = "Wait here until this finishes"

### Basic Syntax:
```javascript
async function getData() {
    const data = await fetch('https://api.example.com');
    return data.json();
}
```

---

## 🔧 2. How Async/Await Works

### Rule #1: `async` function always returns a Promise
```javascript
async function greet() {
    return "Rohit"; // Automatically wrapped in Promise
}

// Equivalent to:
function greet() {
    return Promise.resolve("Rohit");
}
```

### Rule #2: `await` pauses execution until Promise settles
```javascript
async function example() {
    console.log("1. Starting...");
    
    const data = await fetch("url"); // Pauses here
    console.log("2. Got data:", data); // Runs after fetch completes
    
    return "3. Done";
}
```

### From the Code:
```javascript
async function github() {
    const response = await fetch("https://api.github.com/users"); // WAIT
    const data = await response.json(); // WAIT again
    // ... process data
}
```

---

## ❌ 3. Error Handling with Try/Catch

### Without Async/Await (Promises):
```javascript
fetch("url")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error));
```

### With Async/Await (Cleaner):
```javascript
async function getData() {
    try {
        const response = await fetch("url");
        if(!response.ok) {
            throw new Error("Data not found");
        }
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log("Error:", error); // One place for all errors
    }
}
```

### Example from Code:
```javascript
async function ordering() {
    try {
        const response1 = await placedOrder(orderDetail);
        const response2 = await preparingOrder(response1);
        const response3 = await pickupOrder(response2);
        const response4 = await deliverOrder(response3);
        console.log(response4);
    } catch(error) {
        console.log("Error:", error); // Catches ANY error in chain
    }
}
```

---

## 🍕 4. Real Examples from Code

### Example 1: GitHub Users Display
```javascript
async function github() {
    try {
        const response = await fetch("https://api.github.com/users");
        if(!response.ok) throw new Error("Data not present");
        
        const data = await response.json();
        
        // Process each user
        for(let user of data) {
            const element = document.createElement("div");
            // ... create UI elements
        }
    } catch(error) {
        console.log("Error:", error);
    }
}
```

### Example 2: Food Ordering System
```javascript
async function ordering() {
    try {
        // Sequential operations (one after another)
        const paymentDone = await placedOrder(orderDetail);
        const foodPrepared = await preparingOrder(paymentDone);
        const orderPicked = await pickupOrder(foodPrepared);
        const delivered = await deliverOrder(orderPicked);
        
        console.log("Order complete:", delivered);
    } catch(error) {
        console.log("Order failed:", error);
    }
}
```

---

## ⚖️ 5. Comparison: Promises vs Async/Await

### Same Code, Different Styles:

**Using Promises (then/catch):**
```javascript
fetch("url")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return processData(data);
    })
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

**Using Async/Await (Cleaner):**
```javascript
async function getData() {
    try {
        const response = await fetch("url");
        const data = await response.json();
        console.log(data);
        
        const result = await processData(data);
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}
```

### Pros of Async/Await:
| Advantage | Description |
|-----------|-------------|
| **Cleaner Code** | Looks like synchronous code |
| **Better Error Handling** | Single try/catch for all |
| **Easy Debugging** | Can use debugger easily |
| **Readable** | Clear flow of operations |

---

## 📜 6. Important Rules to Remember

### Rule 1: `await` only works inside `async` functions
```javascript
// ❌ WRONG - Can't use await here
function wrong() {
    const data = await fetch("url"); // Error!
}

// ✅ CORRECT
async function correct() {
    const data = await fetch("url"); // Works!
}
```

### Rule 2: `await` can only be used with Promises
```javascript
// Works - fetch returns Promise
const data = await fetch("url");

// Works - Function returns Promise
const result = await someAsyncFunction();

// ❌ Doesn't make sense
const x = await 5; // Just returns 5
```

### Rule 3: Top-level await (ES2022)
```javascript
// In modules, you can use await at top level
const response = await fetch("url");
console.log(await response.json());
```

---

## 🔄 7. Common Patterns

### Pattern 1: Sequential vs Parallel Execution

**Sequential (one after another):**
```javascript
async function sequential() {
    const user = await getUser();     // Wait for this
    const posts = await getPosts();   // Then wait for this
    const comments = await getComments(); // Then wait for this
    // Total time = sum of all times
}
```

**Parallel (all at once):**
```javascript
async function parallel() {
    const [user, posts, comments] = await Promise.all([
        getUser(),      // All start together
        getPosts(),     // 
        getComments()   // 
    ]);
    // Total time = time of slowest one
}
```

### From the Code:
```javascript
// Using Promise.all for parallel requests
const [comment, photos, chat] = await Promise.all([
    fetch("userComment"),
    fetch("photo"), 
    fetch("chat")
]);
```

### Pattern 2: Looping with Async/Await
```javascript
// ❌ WRONG - Sequential but might not be intended
for(const url of urls) {
    const data = await fetch(url); // Each waits for previous
}

// ✅ BETTER - Parallel fetching
const promises = urls.map(url => fetch(url));
const results = await Promise.all(promises);
```

---

## 💼 8. Interview Questions & Answers

### Q1. What is async/await?
**A:** A modern syntax for handling asynchronous operations. `async` makes a function return a Promise, `await` pauses execution until a Promise settles.

### Q2. Difference between Promises and async/await?
**A:** 
- **Promises**: Use `.then()` and `.catch()` chains
- **Async/Await**: Uses `async/await` with try/catch, looks synchronous
- Both do the same thing, async/await is syntactic sugar

### Q3. Can we use await without async?
**A:** No, `await` can only be used inside `async` functions (except top-level await in modules).

### Q4. How to handle errors in async/await?
**A:** Using try/catch block:
```javascript
try {
    const data = await fetch("url");
} catch(error) {
    console.log(error);
}
```

### Q5. What happens if we don't await a Promise?
**A:** The function continues execution without waiting. The Promise runs in background.

### Q6. How to run multiple async operations in parallel?
**A:** Use `Promise.all()`:
```javascript
const [result1, result2] = await Promise.all([task1(), task2()]);
```

### Q7. Can we use async/await with forEach?
**A:** Not directly. Use `for...of` loop instead:
```javascript
// ❌ Won't work as expected
array.forEach(async item => await process(item));

// ✅ Works correctly
for(const item of array) {
    await process(item);
}
```

### Q8. What does `async` function return?
**A:** Always returns a Promise, even if you return a regular value.

---

## 🎓 Quick Summary Cheat Sheet

```javascript
// 1. Basic Structure
async function myFunction() {
    try {
        const result = await someAsyncTask();
        return result;
    } catch(error) {
        console.log(error);
    }
}

// 2. Always returns Promise
async function test() {
    return "Hello"; // Returns Promise<"Hello">
}

// 3. Error handling
async function safeFetch() {
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        return null;
    }
}

// 4. Parallel execution
async function getMultiple() {
    const [data1, data2] = await Promise.all([fetch(url1), fetch(url2)]);
}
```

## ⚠️ Common Mistakes

1. **Forgetting `await`**
   ```javascript
   // ❌ Missing data
   const data = fetch("url"); // Returns Promise, not data
   
   // ✅ Correct
   const data = await fetch("url"); // Returns actual data
   ```

2. **Missing error handling**
   ```javascript
   // ❌ Unhandled rejection
   async function bad() {
       const data = await fetch("url"); // Error crashes app
   }
   ```

3. **Blocking unnecessarily**
   ```javascript
   // ❌ Sequential when parallel is better
   const a = await task1(); // Waits
   const b = await task2(); // Waits more
   
   // ✅ Parallel
   const [a, b] = await Promise.all([task1(), task2()]);
   ```

---

## 🚀 Pro Tips for Interviews

1. **Always mention**: "Async/await is syntactic sugar over Promises"
2. **Explain**: "Makes async code look synchronous"
3. **Show**: How try/catch simplifies error handling
4. **Compare**: With callback hell → Promises → Async/await evolution
5. **Remember**: `await` only pauses current function, not whole program

---

## 📝 Final Notes

**Async/Await makes your code:**
- ✅ **Cleaner** - No more .then() chains
- ✅ **Easier to read** - Looks like normal code
- ✅ **Better errors** - One try/catch handles all
- ✅ **Easy to debug** - Debugger works normally

**Remember this pattern:**
```javascript
async function doSomething() {
    try {
        // Do async work with await
        const result = await someAsyncTask();
        return result;
    } catch(error) {
        // Handle any error
        console.log("Failed:", error);
    }
}
```

**Golden Rule:** Whenever you see a function returning a Promise, you can `await` it inside an `async` function!