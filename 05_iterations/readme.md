# 🔄 JavaScript Loops & Iteration - Complete Mastery Guide

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Loops](https://img.shields.io/badge/Loops-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white)
![Iteration](https://img.shields.io/badge/Iteration-4CAF50?style=for-the-badge&logo=codewars&logoColor=white)

**Mastering All JavaScript Looping Constructs & Iteration Methods**  
*Complete Guide with Interview Questions & Performance Best Practices*

[📚 Table of Contents](#-table-of-contents) | [🔄 Loop Types](#-types-of-loops) | [🎯 Interview Prep](#-interview-questions)

</div>

---

## 📚 Table of Contents

1. [For Loop](#-for-loop)
2. [While Loop](#-while-loop)
3. [Do-While Loop](#-do-while-loop)
4. [For...of Loop](#-forof-loop)
5. [For...in Loop](#-forin-loop)
6. [ForEach Method](#-foreach-method)
7. [Break & Continue](#-break--continue)
8. [Nested Loops](#-nested-loops)
9. [Map Iteration](#-map-iteration)
10. [Performance Comparison](#-performance-comparison)
11. [Interview Questions](#-interview-questions)
12. [Best Practices](#-best-practices)

---

## 🔄 Types of Loops

| Loop Type | Best For | Returns | Can Break? |
|-----------|----------|---------|------------|
| `for` | Known iterations | Nothing | ✅ Yes |
| `while` | Unknown iterations | Nothing | ✅ Yes |
| `do-while` | At least one iteration | Nothing | ✅ Yes |
| `for...of` | Array/String values | Value | ✅ Yes |
| `for...in` | Object properties | Key | ✅ Yes |
| `forEach` | Array iteration | Nothing | ❌ No |

---

## 🔢 For Loop

### Basic Syntax
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i); // 0 to 9
}
```

### Components Explained
```javascript
for ([initialization]; [condition]; [final-expression]) {
    // Code to execute
}

// Example
for (let i = 0;     // Initialization (runs once)
     i < 5;         // Condition (checked before each iteration)
     i++) {         // Final expression (runs after each iteration)
    console.log(i); // 0, 1, 2, 3, 4
}
```

### Array Iteration
```javascript
const heroes = ["flash", "batman", "superman"];

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]); // flash, batman, superman
}
```

### Reverse Iteration
```javascript
for (let i = 10; i > 0; i--) {
    console.log(i); // 10 to 1
}
```

### Multiple Variables
```javascript
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
    // i:0, j:10 → i:1, j:9 → i:2, j:8 → i:3, j:7 → i:4, j:6
}
```

---

## ♾️ While Loop

### Basic Syntax
```javascript
let count = 0;

while (count < 5) {
    console.log(count); // 0, 1, 2, 3, 4
    count++;
}
```

### Array Iteration
```javascript
const heroes = ["flash", "batman", "superman"];
let index = 0;

while (index < heroes.length) {
    console.log(heroes[index]); // flash, batman, superman
    index++;
}
```

### Infinite Loop Prevention
```javascript
// ❌ Dangerous - infinite loop
// while (true) {
//     console.log("This runs forever");
// }

// ✅ Safe with break condition
let attempts = 0;
while (true) {
    console.log("Attempt:", attempts);
    attempts++;
    if (attempts >= 5) break; // Exit condition
}
```

---

## 🔄 Do-While Loop

### Syntax (Executes at least once)
```javascript
let score = 11;

do {
    console.log(`Score is ${score}`); // Executes once
    score++;
} while (score <= 10); // Condition checked after execution
```

### When to Use Do-While
```javascript
// 1. User input validation
let userInput;
do {
    userInput = prompt("Enter yes or no: ").toLowerCase();
} while (userInput !== "yes" && userInput !== "no");

// 2. Menu systems
let choice;
do {
    console.log("1. Option A");
    console.log("2. Option B");
    console.log("3. Exit");
    choice = getUserChoice();
} while (choice !== 3);
```

### Comparison with While Loop
```javascript
let i = 10;

// While - may not execute
while (i < 5) {
    console.log("While loop"); // Never executes
}

// Do-While - executes at least once
do {
    console.log("Do-While loop"); // Executes once
} while (i < 5);
```

---

## 🔄 For...of Loop

### Iterating Arrays
```javascript
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    console.log(num); // 1, 2, 3, 4, 5
}
```

### Iterating Strings
```javascript
const greeting = "Hello World!";

for (const char of greeting) {
    console.log(`Character: ${char}`);
    // H, e, l, l, o, , W, o, r, l, d, !
}
```

### Iterating Set
```javascript
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4]);

for (const num of uniqueNumbers) {
    console.log(num); // 1, 2, 3, 4 (only unique values)
}
```

### With Index using `entries()`
```javascript
const fruits = ["apple", "banana", "cherry"];

for (const [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
    // 0: apple, 1: banana, 2: cherry
}
```

---

## 🔑 For...in Loop

### Iterating Object Properties
```javascript
const programmingLanguages = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
};

for (const key in programmingLanguages) {
    console.log(`${key}: ${programmingLanguages[key]}`);
    // js: JavaScript, cpp: C++, rb: Ruby, swift: Swift by Apple
}
```

### Iterating Arrays (Not Recommended)
```javascript
const languages = ["JavaScript", "Python", "Java", "C++"];

for (const index in languages) {
    console.log(languages[index]); // JavaScript, Python, Java, C++
}
```

### Important: Only enumerable properties
```javascript
const obj = Object.create({
    inheritedProp: "I'm inherited"
});
obj.ownProp = "I'm own";

for (const key in obj) {
    console.log(key); // ownProp, inheritedProp
}

// To get only own properties
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key); // only ownProp
    }
}
```

---

## 🎯 ForEach Method

### Basic Syntax
```javascript
const languages = ["JavaScript", "Python", "Java", "C++"];

// Using anonymous function
languages.forEach(function(language) {
    console.log(language);
});

// Using arrow function
languages.forEach((language) => {
    console.log(language);
});

// One-liner arrow function
languages.forEach(language => console.log(language));
```

### Accessing Index and Array
```javascript
languages.forEach((language, index, array) => {
    console.log(`${index}: ${language} (Total: ${array.length})`);
    // 0: JavaScript (Total: 4)
    // 1: Python (Total: 4)
    // 2: Java (Total: 4)
    // 3: C++ (Total: 4)
});
```

### Using Named Functions
```javascript
function printLanguage(language) {
    console.log(language);
}

languages.forEach(printLanguage); // Pass function reference
```

### Iterating Array of Objects
```javascript
const codingLanguages = [
    { name: "JavaScript", file: "js" },
    { name: "Python", file: "py" },
    { name: "Java", file: "java" }
];

codingLanguages.forEach((item) => {
    console.log(`${item.name} -> .${item.file}`);
    // JavaScript -> .js
    // Python -> .py
    // Java -> .java
});
```

### Limitations of forEach
```javascript
// 1. Cannot break or continue
languages.forEach(lang => {
    if (lang === "Python") {
        // break; // ❌ Syntax Error
        // continue; // ❌ Syntax Error
        return; // Only skips current iteration
    }
    console.log(lang);
});

// 2. Returns undefined (not chainable like map/filter)
const result = languages.forEach(lang => lang.toUpperCase());
console.log(result); // undefined
```

---

## ⏹️ Break & Continue

### Break Statement
```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Found 5, breaking loop");
        break; // Exit entire loop
    }
    console.log(i); // 1, 2, 3, 4
}
```

### Continue Statement
```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping 5");
        continue; // Skip current iteration
    }
    console.log(i); // 1, 2, 3, 4, 6, 7, 8, 9, 10
}
```

### Labeled Break/Continue
```javascript
outerLoop: for (let i = 1; i <= 3; i++) {
    innerLoop: for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerLoop; // Break outer loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// Output: i=1,j=1, i=1,j=2, i=1,j=3, i=2,j=1
```

---

## 🏗️ Nested Loops

### Basic Nested Loop
```javascript
for (let i = 1; i <= 3; i++) {
    console.log(`Outer: ${i}`);
    
    for (let j = 1; j <= 3; j++) {
        console.log(`  Inner: ${j}`);
    }
}
// Total iterations: 3 * 3 = 9
```

### Multiplication Table
```javascript
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("---"); // Separator between tables
}
```

### 2D Array Iteration
```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
    }
}
```

### Performance Consideration
```javascript
// Time Complexity: O(n²) for nested loops
// Avoid deep nesting when possible
for (let i = 0; i < n; i++) {        // O(n)
    for (let j = 0; j < n; j++) {    // O(n)
        // O(n²) operations
    }
}
```

---

## 🗺️ Map Iteration

### Creating and Iterating Map
```javascript
const countryMap = new Map();
countryMap.set('IN', "India");
countryMap.set('US', "United States");
countryMap.set('FR', "France");
countryMap.set('IN', "India"); // Duplicate ignored

// Using for...of (recommended)
for (const [code, name] of countryMap) {
    console.log(`${code}: ${name}`);
    // IN: India, US: United States, FR: France
}

// Using forEach
countryMap.forEach((name, code) => {
    console.log(`${code}: ${name}`);
});
```

### Map vs Object Iteration
```javascript
const obj = { a: 1, b: 2 };
const map = new Map([['a', 1], ['b', 2]]);

// Object - for...in
for (const key in obj) {
    console.log(key, obj[key]); // a 1, b 2
}

// Map - for...of (preserves insertion order)
for (const [key, value] of map) {
    console.log(key, value); // a 1, b 2
}
```

### Map Methods
```javascript
const map = new Map([['name', 'John'], ['age', 30]]);

// Iterating keys
for (const key of map.keys()) {
    console.log(key); // name, age
}

// Iterating values
for (const value of map.values()) {
    console.log(value); // John, 30
}

// Iterating entries
for (const [key, value] of map.entries()) {
    console.log(key, value); // name John, age 30
}
```

---

## ⚡ Performance Comparison

### Benchmark Different Loops
```javascript
const largeArray = Array(1000000).fill().map((_, i) => i);

// 1. Traditional for loop (Fastest)
console.time('for loop');
for (let i = 0; i < largeArray.length; i++) {
    // Operation
}
console.timeEnd('for loop');

// 2. for...of loop
console.time('for...of');
for (const item of largeArray) {
    // Operation
}
console.timeEnd('for...of');

// 3. forEach method
console.time('forEach');
largeArray.forEach(item => {
    // Operation
});
console.timeEnd('forEach');
```

### Performance Ranking (Fast to Slow):
1. **Traditional for loop** - Best for performance-critical code
2. **while loop** - Similar to for loop
3. **for...of loop** - Clean syntax, good performance
4. **for...in loop** - Slowest (iterates prototype chain)
5. **forEach method** - Functional style, slightly slower

### Memory Considerations
```javascript
// ❌ Creates new array (memory overhead)
const doubled = numbers.map(n => n * 2);

// ✅ In-place modification (memory efficient)
for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
}
```

---

## 🎯 Interview Questions

### Q1: Difference between for...of and for...in?
**A:** 
- `for...of` iterates over values of iterable objects (arrays, strings, maps, sets)
- `for...in` iterates over enumerable property names of objects
- Use `for...of` for arrays, `for...in` for objects

### Q2: Can you break a forEach loop?
**A:** No, forEach cannot be broken using break or continue. Use `for`, `for...of`, or array methods like `some()`, `every()` instead.

### Q3: What is the time complexity of nested loops?
**A:** Nested loops have O(n²) time complexity for two levels, O(n³) for three levels, etc. Optimize by reducing nesting when possible.

### Q4: When to use do-while vs while?
**A:** Use `do-while` when you need to execute the loop body at least once. Use `while` when the condition might be false initially.

### Q5: How to iterate Map objects?
**A:** Use `for...of` loop with destructuring: `for (const [key, value] of map)` or use Map methods: `map.forEach()`, `map.keys()`, `map.values()`

### Q6: What will this output?
```javascript
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}
```
**A:** 0, 1, 2, 3, 4 (let has block scope, each iteration creates new variable)

### Q7: How to skip array elements while iterating?
**A:** Use `continue` in for loops or return early in forEach callbacks.

### Q8: Difference between for loop and forEach?
**A:** 
- `for` loop can use break/continue, `forEach` cannot
- `for` loop is faster for large arrays
- `forEach` has cleaner syntax for functional programming
- `forEach` provides index and array automatically

---

## 🏆 Best Practices

### 1. Choose the Right Loop
```javascript
// Arrays: for...of or forEach
for (const item of array) { ... }
array.forEach(item => { ... });

// Objects: for...in
for (const key in object) { ... }

// Performance-critical: Traditional for
for (let i = 0; i < array.length; i++) { ... }
```

### 2. Cache Array Length
```javascript
// ❌ Recomputes length each iteration
for (let i = 0; i < array.length; i++) { ... }

// ✅ Caches length (faster)
for (let i = 0, len = array.length; i < len; i++) { ... }
```

### 3. Avoid Nested Loops When Possible
```javascript
// ❌ O(n²) - inefficient
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        // Comparison
    }
}

// ✅ Use Set or Map for lookups O(1)
const lookup = new Set(array2);
for (const item of array1) {
    if (lookup.has(item)) { ... }
}
```

### 4. Use Descriptive Variable Names
```javascript
// ❌ Unclear
for (let i = 0; i < a.length; i++) { ... }

// ✅ Clear intent
for (let userIndex = 0; userIndex < users.length; userIndex++) {
    const user = users[userIndex];
    // Process user
}
```

### 5. Handle Async Code Properly
```javascript
// ❌ Won't wait for async operations
array.forEach(async (item) => {
    await process(item);
});

// ✅ Use for...of with await
for (const item of array) {
    await process(item);
}
```

### 6. Use Array Methods for Transformation
```javascript
// ✅ map, filter, reduce for transformations
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

### 7. Break Early When Possible
```javascript
// ❌ Processes entire array
let found = false;
array.forEach(item => {
    if (item === target) {
        found = true;
    }
});

// ✅ Breaks early (more efficient)
let found = false;
for (const item of array) {
    if (item === target) {
        found = true;
        break;
    }
}

// ✅ Even better with array methods
const found = array.some(item => item === target);
```

---

## 🔄 Loop Patterns & Tricks

### Iterating with Index
```javascript
// Multiple ways to get index
const fruits = ["apple", "banana", "cherry"];

// 1. Traditional for
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

// 2. for...of with entries
for (const [i, fruit] of fruits.entries()) {
    console.log(i, fruit);
}

// 3. forEach
fruits.forEach((fruit, i) => {
    console.log(i, fruit);
});
```

### Reverse Iteration
```javascript
// Backward iteration
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// Using reverse method (creates new array)
[...array].reverse().forEach(item => {
    console.log(item);
});
```

### Skipping Elements
```javascript
// Skip every other element
for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
}

// Skip first N elements
const startFrom = 3;
for (let i = startFrom; i < array.length; i++) {
    console.log(array[i]);
}
```

---

<div align="center">

## 📞 Connect With Me
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Rohitt-Rajj)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rohit-raaj/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ranarohitsinghh@gmail.com)

---

**"Mastering loops is essential for efficient JavaScript programming."** 🚀

⭐ **Star this repo if you found it helpful!** ⭐

</div>
