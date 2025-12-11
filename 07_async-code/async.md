Here is the **full Async JavaScript explanation in clean Markdown** exactly as you requested:

---

````md
# 🚀 Async JavaScript — Complete Explanation

JavaScript is **single-threaded**, meaning:

- It executes **one line at a time**
- It cannot run two tasks simultaneously

But web apps need to handle tasks like:

- Timers (`setTimeout`)
- API calls (`fetch`)
- DOM events (click, scroll)
- File reading
- Database queries

These tasks take time. JavaScript uses **Asynchronous Programming** to avoid blocking the main thread.

---

# ⚙️ How Async JavaScript Works (Event Loop Model)

Async JS relies on:

1. **Call Stack**
2. **Web APIs / Browser APIs**
3. **Callback Queue (Task Queue)**
4. **Microtask Queue**
5. **Event Loop**

### Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer done");
}, 2000);

console.log("End");
````

### Explanation:

1. `Start` prints.
2. `setTimeout` is sent to Browser API → waits 2 sec.
3. After 2 sec, callback moves to **Callback Queue**.
4. Event Loop pushes it to the Call Stack when free.
5. `End` prints before timeout.

---

# 🌟 Async Techniques in JavaScript

JavaScript supports three async methods:

---

## 1️⃣ Callbacks (Old Method)

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData((msg) => {
  console.log(msg);
});
```

❌ Problem: **Callback Hell**

---

## 2️⃣ Promises (Better Method)

Promise represents a future value.

```js
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 2000);
});

p.then(msg => console.log(msg));
```

### Promise States:

| State     | Meaning |
| --------- | ------- |
| Pending   | Waiting |
| Fulfilled | Success |
| Rejected  | Failed  |

Chainable:

```js
p.then(...).then(...).catch(...);
```

---

## 3️⃣ async / await (Best Method)

Makes asynchronous code look synchronous.

```js
async function getData() {
  let result = await fetch("https://api.example.com");
  let data = await result.json();
  console.log(data);
}

getData();
```

### Why async/await?

* Cleaner
* Easy to understand
* Avoids Callback Hell
* Avoids long Promise chains

---

# 📌 Microtask Queue vs Callback Queue

| Type                    | Queue               |
| ----------------------- | ------------------- |
| Promises                | **Microtask Queue** |
| async/await             | **Microtask Queue** |
| setTimeout, setInterval | **Callback Queue**  |

**Microtasks run before Callback tasks.**

Example:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

### Output:

```
A
D
C
B
```

---

# 🧠 Full Async Example

```js
async function orderFood() {
  console.log("Order placed…");

  let cooking = new Promise(resolve => {
    setTimeout(() => resolve("Food ready!"), 3000);
  });

  let result = await cooking;

  console.log(result);
}

orderFood();
console.log("Doing other work…");
```

### Output:

```
Order placed…
Doing other work…
Food ready!
```

---

# 🏁 Summary

* Async JS prevents blocking.
* Three async methods:

  * Callbacks
  * Promises
  * async/await
* Event Loop decides when async tasks run.
* **Microtasks (Promises) run before Callback tasks (setTimeout).**

---
