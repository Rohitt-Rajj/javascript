# 📜 JavaScript Promises - Complete Interview Guide

## 📚 Table of Contents
1. [What is a Promise?](#what-is-a-promise)
2. [Promise States](#promise-states)
3. [Creating Promises](#creating-promises)
4. [Promise Methods](#promise-methods)
5. [Chaining Promises](#chaining-promises)
6. [Error Handling](#error-handling)
7. [Promise Static Methods](#promise-static-methods)
8. [Real-World Examples](#real-world-examples)
9. [Interview Questions](#interview-questions)
10. [Common Mistakes](#common-mistakes)

---

## 🎯 1. What is a Promise?

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Why Promises?
- **Better than callbacks** - Avoid callback hell
- **Better error handling** - Centralized catch
- **Chainable** - Easy sequential async operations
- **Readable** - Clear flow of async code

---

## 🔄 2. Promise States

A Promise can be in one of these states:

| State | Description | Example |
|-------|-------------|---------|
| **Pending** | Initial state, neither fulfilled nor rejected | `new Promise(...)` |
| **Fulfilled** | Operation completed successfully | `resolve(value)` |
| **Rejected** | Operation failed | `reject(error)` |

**Once settled (fulfilled/rejected), a promise cannot change state.**

---

## 🏗️ 3. Creating Promises

### Basic Syntax
```javascript
const promise = new Promise((resolve, reject) => {
    // Async operation here
    const success = true;
    
    if(success) {
        resolve("Operation successful!"); // Fulfill promise
    } else {
        reject("Operation failed!"); // Reject promise
    }
});
```

### Example from Code
```javascript
const p1 = new Promise((resolve, reject) => {
    resolve({
        name: "Rohit",
        age: 30,
    });
});

p1.then((response) => {
    console.log(response); // {name: "Rohit", age: 30}
});
```

---

## 🛠️ 4. Promise Methods

### `.then()` - Handle success
```javascript
promise.then(
    (value) => { /* handle success */ },
    (error) => { /* handle error */ } // Optional
);
```

### `.catch()` - Handle errors
```javascript
promise
    .then((value) => { /* success */ })
    .catch((error) => { /* handle ALL errors in chain */ });
```

### `.finally()` - Cleanup
```javascript
promise
    .then((value) => { /* success */ })
    .catch((error) => { /* error */ })
    .finally(() => { /* always runs */ });
```

---

## ⛓️ 5. Chaining Promises

### The Power of Chaining
```javascript
fetch("https://api.github.com/users")
    .then((response) => response.json()) // Returns new promise
    .then((data) => console.log(data))   // Receives data from previous
    .catch((error) => console.error(error));
```

### Why Chaining Works?
- Each `.then()` returns **a new promise**
- Return value becomes resolution of next promise
- Throw error to trigger `.catch()`

### Example: Zomato Order Flow
```javascript
placedOrder(orderDetail)
    .then((order) => preparingOrder(order))
    .then((order) => pickupOrder(order))
    .then((order) => deliverOrder(order))
    .then((order) => console.log(order))
    .catch((error) => console.log("Error:", error))
    .finally(() => console.log("Cleanup"));
```

---

## ❌ 6. Error Handling

### Multiple Approaches
```javascript
// Method 1: Separate error callback
promise.then(
    (value) => console.log(value),
    (error) => console.error(error)
);

// Method 2: Using catch (Recommended)
promise
    .then((value) => console.log(value))
    .catch((error) => console.error(error));

// Method 3: Error in chain
fetch("https://api.github.com/users")
    .then((response) => {
        if(!response.ok) {
            throw new Error("Data not present"); // Triggers catch
        }
        return response.json();
    })
    .catch((error) => console.error(error));
```

### Important: Error Propagation
- Errors bubble up through chain
- Single `.catch()` can handle all errors
- Return normal value after error to continue chain

---

## 🌟 7. Promise Static Methods

### `Promise.resolve()` - Create resolved promise
```javascript
const resolvedPromise = Promise.resolve("Success");
// Same as: new Promise(resolve => resolve("Success"))
```

### `Promise.reject()` - Create rejected promise
```javascript
const rejectedPromise = Promise.reject(new Error("Failed"));
```

### `Promise.all()` - Wait for all promises
```javascript
Promise.all([promise1, promise2, promise3])
    .then(([result1, result2, result3]) => {
        // All succeeded
    })
    .catch((error) => {
        // First error if any fails
    });
```

### `Promise.allSettled()` - Wait for all to settle
```javascript
Promise.allSettled([promise1, promise2])
    .then((results) => {
        results.forEach((result) => {
            if(result.status === "fulfilled") {
                console.log(result.value);
            } else {
                console.log(result.reason);
            }
        });
    });
```

### `Promise.race()` - First to settle wins
```javascript
Promise.race([fastPromise, slowPromise])
    .then((result) => {
        // Result of first settled promise
    });
```

### `Promise.any()` - First to fulfill wins
```javascript
Promise.any([promise1, promise2])
    .then((result) => {
        // First successful result
    })
    .catch((errors) => {
        // All failed
    });
```

---

## 🍕 8. Real-World Examples

### Example 1: API Request with Fetch
```javascript
fetch("https://api.github.com/users")
    .then((response) => {
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // Returns promise
    })
    .then((data) => {
        // Process data
        data.forEach(user => console.log(user.login));
    })
    .catch((error) => {
        console.error("Fetch error:", error);
        // Show user-friendly message
        document.getElementById("error").textContent = "Failed to load data";
    })
    .finally(() => {
        console.log("API call completed");
        // Hide loading spinner
    });
```

### Example 2: Zomato Order System (From Code)
```javascript
function placedOrder(orderDetail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.1) {
                orderDetail.status = true;
                resolve(orderDetail);
            } else {
                reject("Payment failed");
            }
        }, 3000);
    });
}

// Usage
placedOrder(orderDetail)
    .then(preparingOrder)
    .then(pickupOrder)
    .then(deliverOrder)
    .then((finalOrder) => {
        console.log("Order complete:", finalOrder);
    })
    .catch((error) => {
        console.log("Order failed:", error);
    });
```

### Example 3: Multiple Parallel Requests
```javascript
// Get user data and posts simultaneously
const userPromise = fetch("/api/user/1").then(r => r.json());
const postsPromise = fetch("/api/posts").then(r => r.json());

Promise.all([userPromise, postsPromise])
    .then(([user, posts]) => {
        console.log("User:", user);
        console.log("Posts:", posts.length);
    })
    .catch((error) => {
        console.error("Failed to load data:", error);
    });
```

---

## 💼 9. Interview Questions & Answers

### **Q1. What is a Promise in JavaScript?**
**A:** A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.

### **Q2. How do you create a Promise?**
**A:** 
```javascript
const promise = new Promise((resolve, reject) => {
    // Async operation
    setTimeout(() => {
        const success = true;
        success ? resolve("Done") : reject("Error");
    }, 1000);
});
```

### **Q3. What's the difference between .then() and .catch()?**
**A:** `.then()` handles fulfillment, `.catch()` handles rejection. `.catch(fn)` is equivalent to `.then(null, fn)`.

### **Q4. What is Promise chaining?**
**A:** Multiple `.then()` calls where each returns a value or promise for the next `.then()` to process.

### **Q5. How to handle multiple promises?**
**A:** 
- `Promise.all()`: All must succeed
- `Promise.allSettled()`: Wait for all
- `Promise.race()`: First to settle
- `Promise.any()`: First to succeed

### **Q6. What happens if you don't catch a promise rejection?**
**A:** Unhandled promise rejection warning in console. In Node.js, it might crash the app.

### **Q7. Difference between callbacks and promises?**
**A:** 
- **Callbacks**: Can lead to callback hell, harder error handling
- **Promises**: Chainable, better error handling, more readable

### **Q8. What is .finally() method?**
**A:** Runs regardless of promise outcome. Useful for cleanup operations.

### **Q9. Can you cancel a promise?**
**A:** Native promises cannot be cancelled. Use AbortController with fetch or third-party libraries.

### **Q10. What is Promise.resolve() and Promise.reject()?**
**A:** Shortcuts to create already settled promises.

---

## ⚠️ 10. Common Mistakes

### Mistake 1: Forgetting to return
```javascript
// WRONG
fetch(url)
    .then(response => response.json())  // No return
    .then(data => console.log(data));   // data is undefined

// CORRECT
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data; // Return for next .then()
    });
```

### Mistake 2: Not handling errors
```javascript
// BAD - Unhandled rejection
fetch(url).then(response => response.json());

// GOOD
fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
```

### Mistake 3: Nesting promises (Callback hell in disguise)
```javascript
// BAD
fetch(url1).then(response1 => {
    fetch(url2).then(response2 => {
        // Nested
    });
});

// GOOD
fetch(url1)
    .then(response1 => fetch(url2))
    .then(response2 => {
        // Chained
    });
```

### Mistake 4: Using promises for synchronous code
```javascript
// UNNECESSARY
const promise = new Promise(resolve => {
    resolve(calculateSync()); // Sync function
});

// BETTER
const result = calculateSync();
```

---

## 📝 Cheat Sheet

```javascript
// CREATE
const p = new Promise((resolve, reject) => {});

// HANDLE
p.then(onFulfill).catch(onReject).finally(cleanup);

// STATIC METHODS
Promise.resolve(value);      // Resolved promise
Promise.reject(error);       // Rejected promise  
Promise.all([p1, p2]);       // All must succeed
Promise.allSettled([p1, p2]);// Wait for all
Promise.race([p1, p2]);      // First to settle
Promise.any([p1, p2]);       // First to succeed

// ERROR PROPAGATION
promise
    .then(() => { throw new Error() }) // Caught by catch
    .catch(() => "recovered")          // Returns new promise
    .then((value) => console.log(value)); // "recovered"
```
