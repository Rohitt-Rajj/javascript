# 📚 JavaScript Arrays & Objects - Placement Guide

<div align="center">

![JavaScript Arrays](https://img.shields.io/badge/JavaScript-Arrays-yellow)
![Objects](https://img.shields.io/badge/Objects-in_JS-blue)
![Placement](https://img.shields.io/badge/Placement-Important-red)

**Master JavaScript Arrays & Objects for Technical Interviews**

</div>

---

## 📋 Table of Contents
1. [Arrays Fundamentals](#-arrays-fundamentals)
2. [Array Methods](#-array-methods-cheatsheet)
3. [Objects Deep Dive](#-objects-deep-dive)
4. [Important Concepts](#-important-concepts)
5. [Interview Questions](#-interview-questions)
6. [Practice Problems](#-practice-problems)

---

## 📊 Arrays Fundamentals

### 🔑 Key Characteristics of JavaScript Arrays
- **Resizable**: Can grow/shrink dynamically
- **Mixed Data Types**: Can contain different types of elements
- **Zero-indexed**: First element at index 0
- **Shallow Copies**: Copy operations create shallow copies
- **Non-associative**: Cannot use strings as indexes (use objects instead)

### 📝 Array Declaration Methods
```javascript
// Method 1: Array literal (Most Common)
const arr1 = [1, 2, 3, 4, 5];

// Method 2: Array constructor
const arr2 = new Array(7, 8, 9, 0);

// Method 3: Empty array
const arr3 = [];
```

---

## 🛠️ Array Methods Cheatsheet

### 🔄 Adding/Removing Elements

| Method | Description | Modifies Original | Returns |
|--------|-------------|-------------------|---------|
| `push()` | Adds to end | ✅ | New length |
| `pop()` | Removes from end | ✅ | Removed element |
| `unshift()` | Adds to start | ✅ | New length |
| `shift()` | Removes from start | ✅ | Removed element |

```javascript
const arr = [1, 2, 3];
arr.push(4);        // [1, 2, 3, 4]
arr.pop();          // [1, 2, 3]
arr.unshift(0);     // [0, 1, 2, 3]
arr.shift();        // [1, 2, 3]
```

### 🔍 Searching Elements

| Method | Description | Returns |
|--------|-------------|---------|
| `includes(value)` | Checks existence | Boolean |
| `indexOf(value)` | Finds index | Number (-1 if not found) |
| `find(callback)` | Finds first match | Element/undefined |
| `findIndex(callback)` | Finds index of first match | Number |

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3));    // true
console.log(arr.indexOf(3));     // 2
console.log(arr.find(x => x > 2));  // 3
```

### ✂️ Slicing & Splicing

#### **slice(start, end)** - DOES NOT MODIFY ORIGINAL
- Creates new array
- End index NOT included
- Negative indices allowed

#### **splice(start, deleteCount, ...items)** - MODIFIES ORIGINAL
- Changes original array
- Returns deleted elements
- Can insert new elements

```javascript
const arr = [1, 2, 3, 4, 5];

// SLICE - Non-destructive
const sliced = arr.slice(1, 4);  // [2, 3, 4]
console.log(arr);                // [1, 2, 3, 4, 5] - UNCHANGED

// SPLICE - Destructive
const removed = arr.splice(1, 3); // [2, 3, 4]
console.log(arr);                // [1, 5] - CHANGED
```

### 🧩 Combining Arrays

| Method | Description | Modifies Original |
|--------|-------------|-------------------|
| `concat()` | Merges arrays | ❌ |
| Spread `[...arr1, ...arr2]` | Merges arrays | ❌ |
| `push(arr2)` | Nests array | ✅ |

```javascript
const marvel = ["thor", "ironman"];
const dc = ["superman", "batman"];

// Method 1: concat()
const all1 = marvel.concat(dc);  // ["thor", "ironman", "superman", "batman"]

// Method 2: Spread operator (Preferred)
const all2 = [...marvel, ...dc]; // Same as above

// Method 3: push() - Creates nested array
marvel.push(dc);  // ["thor", "ironman", ["superman", "batman"]]
console.log(marvel[2][0]);  // "superman"
```

### 🔄 Advanced Array Methods

```javascript
// flat() - Flattens nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());        // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2));       // [1, 2, 3, 4, 5, 6]
console.log(nested.flat(Infinity)); // Flattens all levels

// Array.from() - Creates array from iterable
console.log(Array.from("Rohit"));  // ["R", "o", "h", "i", "t"]
console.log(Array.isArray("Rohit")); // false

// Array.of() - Creates array from arguments
const scores = Array.of(100, 200, 300);  // [100, 200, 300]
```

---

## 🏗️ Objects Deep Dive

### 📝 Object Declaration Methods

```javascript
// Method 1: Object literal (Most Common)
const obj1 = {
    name: "Rohit",
    age: 22
};

// Method 2: Object constructor
const obj2 = new Object();
obj2.name = "Rohit";

// Method 3: Object.create()
const obj3 = Object.create(null);
```

### 🔑 Accessing Object Properties

```javascript
const user = {
    name: "Rohit",
    "full name": "Rohit Raj",
    age: 22
};

// Dot notation (for valid identifiers)
console.log(user.name);  // "Rohit"

// Bracket notation (for special characters, variables)
console.log(user["full name"]);  // "Rohit Raj"

const key = "age";
console.log(user[key]);  // 22
```

### 🔄 Merging Objects

```javascript
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

// Method 1: Object.assign()
const merged1 = Object.assign({}, obj1, obj2);  // {a:1, b:2, c:3, d:4}

// Method 2: Spread operator (Preferred)
const merged2 = {...obj1, ...obj2};  // Same result

// Method 3: Wrong way (creates nested object)
const wrong = {obj1, obj2};  // {obj1: {...}, obj2: {...}}
```

### 🎯 Object Methods

```javascript
const user = {
    id: 1,
    name: "Rohit",
    isLoggedIn: false
};

// Get all keys
console.log(Object.keys(user));  // ["id", "name", "isLoggedIn"]

// Get all values
console.log(Object.values(user)); // [1, "Rohit", false]

// Get key-value pairs
console.log(Object.entries(user)); // [["id", 1], ["name", "Rohit"], ...]

// Check property existence
console.log(user.hasOwnProperty("name"));  // true
```

### 🎨 Destructuring Objects

```javascript
const course = {
    name: "JavaScript",
    price: 999,
    instructor: "Hitesh"
};

// Basic destructuring
const {instructor} = course;
console.log(instructor);  // "Hitesh"

// Renaming while destructuring
const {instructor: teacher} = course;
console.log(teacher);  // "Hitesh"

// Multiple properties
const {name, price} = course;
console.log(name, price);  // "JavaScript" 999
```

### 🎭 Symbols in Objects

```javascript
// Create symbol
const mySym = Symbol("key1");

const user = {
    name: "Rohit",
    [mySym]: "mykey1"  // Correct way to use symbol as key
};

console.log(user[mySym]);  // "mykey1"
console.log(typeof mySym); // "symbol"
```

### ❄️ Freezing Objects

```javascript
const user = {
    name: "Rohit",
    age: 22
};

Object.freeze(user);
user.age = 25;  // ❌ No effect in strict mode
console.log(user.age);  // Still 22

// Check if frozen
console.log(Object.isFrozen(user));  // true
```

---

## 📌 Important Concepts

### 🎯 Shallow vs Deep Copy
```javascript
// SHALLOW COPY
const arr = [1, 2, [3, 4]];
const shallowCopy = [...arr];
shallowCopy[2][0] = 99;
console.log(arr[2][0]);  // 99 - ORIGINAL AFFECTED!

// DEEP COPY
const deepCopy = JSON.parse(JSON.stringify(arr));
deepCopy[2][0] = 100;
console.log(arr[2][0]);  // 99 - ORIGINAL UNCHANGED
```

### 🎯 Object vs Map
| Feature | Object | Map |
|---------|--------|-----|
| Key Types | Strings/Symbols | Any type |
| Order | Not guaranteed | Insertion order |
| Size | Manual counting | `.size` property |
| Performance | Optimized | Slightly slower |

### 🎯 Array vs Object Use Cases
- **Use Arrays when**: Need ordered collection, frequent iteration
- **Use Objects when**: Need key-value pairs, fast lookups by key

---

## 💡 Interview Questions

### ❓ Basic Level
1. **What's the difference between slice() and splice()?**
   - `slice()`: Non-destructive, returns new array
   - `splice()`: Destructive, modifies original array

2. **How to check if a value exists in array?**
   ```javascript
   arr.includes(value)  // Returns boolean
   arr.indexOf(value) !== -1  // Returns boolean
   ```

3. **What's the difference between == and === for arrays?**
   ```javascript
   [1,2] == [1,2]  // false (different references)
   [1,2] === [1,2] // false (different references)
   ```

### ❓ Intermediate Level
4. **How to remove duplicates from array?**
   ```javascript
   const unique = [...new Set(arr)];
   const unique2 = arr.filter((item, index) => arr.indexOf(item) === index);
   ```

5. **What's object destructuring?**
   ```javascript
   const {name, age} = person;  // Extract properties
   const {name: firstName} = person;  // Rename while extracting
   ```

6. **How to deep clone an object?**
   ```javascript
   // Method 1: JSON (loses functions, undefined)
   const clone = JSON.parse(JSON.stringify(obj));
   
   // Method 2: Structured Clone (modern)
   const clone = structuredClone(obj);
   
   // Method 3: Manual recursion
   ```

### ❓ Advanced Level
7. **Explain Array.prototype.flat() with polyfill**
   ```javascript
   // Polyfill for flat()
   Array.prototype.myFlat = function(depth = 1) {
       const result = [];
       const flatten = (arr, currentDepth) => {
           for(let item of arr) {
               if(Array.isArray(item) && currentDepth < depth) {
                   flatten(item, currentDepth + 1);
               } else {
                   result.push(item);
               }
           }
       };
       flatten(this, 0);
       return result;
   };
   ```

8. **Implement Object.assign() polyfill**
   ```javascript
   Object.myAssign = function(target, ...sources) {
       sources.forEach(source => {
           for(let key in source) {
               if(source.hasOwnProperty(key)) {
                   target[key] = source[key];
               }
           }
       });
       return target;
   };
   ```

---

## 🏋️ Practice Problems

### Problem 1: Array Manipulation
```javascript
// Given: [1,2,3,4,5]
// Task: Remove 3, add 6 at end, add 0 at start
const arr = [1,2,3,4,5];
// Your code here
// Expected: [0,1,2,4,5,6]
```

### Problem 2: Find Common Elements
```javascript
// Find common elements between two arrays
function findCommon(arr1, arr2) {
    // Your code here
}
console.log(findCommon([1,2,3], [2,3,4])); // [2,3]
```

### Problem 3: Object Transformation
```javascript
// Transform array of objects
const users = [
    {id: 1, name: "Rohit"},
    {id: 2, name: "Raj"}
];
// Convert to: {1: "Rohit", 2: "Raj"}
```

### Problem 4: Flatten Nested Object
```javascript
// Flatten: {a: 1, b: {c: 2, d: {e: 3}}}
// To: {a:1, b_c:2, b_d_e:3}
```

---

## 📊 Performance Tips

### ⚡ Array Performance
1. **Use `push/pop`** for adding/removing at end (O(1))
2. **Avoid `shift/unshift`** when possible (O(n))
3. **Pre-allocate size** for large arrays
4. **Use `for` loop** instead of `forEach` for performance-critical code

### ⚡ Object Performance
1. **Use Maps** for frequent additions/deletions
2. **Avoid `delete` operator** (slow)
3. **Use `Object.hasOwn()`** instead of `hasOwnProperty()`
4. **Cache repeated property accesses**

---

## 🎯 Key Takeaways for Interviews

### Must-Know Array Methods:
1. `map()`, `filter()`, `reduce()` - Functional programming
2. `find()`, `findIndex()` - Search operations
3. `some()`, `every()` - Condition checking
4. `sort()`, `reverse()` - Sorting

### Must-Know Object Methods:
1. `Object.keys()`, `values()`, `entries()`
2. `Object.assign()` and spread operator
3. `Object.freeze()`, `seal()`, `preventExtensions()`
4. `Object.create()` for prototype chain

### Common Gotchas:
1. Arrays are objects (typeof [] === "object")
2. `Array.isArray()` to check array type
3. Shallow copy vs deep copy
4. `null` vs `undefined` in objects

---

## 📚 Additional Resources

### 🔗 MDN Documentation
- [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Object Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### 🎥 Video Tutorials
- JavaScript Array Masterclass
- Objects in Depth - JavaScript
- Advanced Array Methods

### 📖 Practice Platforms
- LeetCode Array Problems
- HackerRank Data Structures
- Codewars JavaScript Challenges

---

<div align="center">

## 🚀 Quick Revision Sheet

| Concept | Syntax | Purpose |
|---------|--------|---------|
| Add to array | `arr.push(val)` | Add to end |
| Remove from array | `arr.pop()` | Remove from end |
| Merge arrays | `[...arr1, ...arr2]` | Combine arrays |
| Clone array | `[...arr]` or `arr.slice()` | Shallow copy |
| Object keys | `Object.keys(obj)` | Get all keys |
| Object values | `Object.values(obj)` | Get all values |
| Check property | `obj.hasOwnProperty(key)` | Property exists |
| Destructure | `const {prop} = obj` | Extract property |



**Happy Coding! 🚀 Remember: Practice > Theory**

</div>