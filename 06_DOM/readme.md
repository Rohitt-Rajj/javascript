# 🌐 DOM (Document Object Model) - Complete Mastery Guide

<div align="center">

![DOM](https://img.shields.io/badge/DOM-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Complete DOM Manipulation Guide with Real Examples & Interview Questions**  
*From Basics to Advanced DOM Operations*

[📚 Table of Contents](#-table-of-contents) | [🎯 DOM Fundamentals](#-what-is-dom) | [🔧 DOM Manipulation](#-dom-manipulation-methods)

</div>

---

## 📚 Table of Contents

1. [What is DOM?](#-what-is-dom)
2. [DOM Tree Structure](#-dom-tree-structure)
3. [DOM vs HTML](#-dom-vs-html)
4. [Selecting Elements](#-selecting-elements)
5. [Traversing DOM](#-traversing-the-dom)
6. [Manipulating Elements](#-manipulating-elements)
7. [Creating Elements](#-creating-new-elements)
8. [Event Handling](#-event-handling)
9. [DOM Properties & Methods](#-dom-properties--methods)
10. [Performance Best Practices](#-performance-best-practices)
11. [Interview Questions](#-interview-questions)
12. [Real-world Examples](#-real-world-examples)

---

## 🎯 What is DOM?

### Definition
**DOM (Document Object Model)** is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.

### Key Points:
- **Tree Structure**: DOM represents HTML as a tree of objects
- **Programmable**: JavaScript can interact with DOM
- **Live**: DOM updates reflect immediately in the browser
- **Platform Independent**: Works across browsers and devices

### Why DOM is Essential:
```javascript
// Without DOM: Static HTML (cannot change after loading)
<h1>Hello World</h1>

// With DOM: Dynamic content (can change anytime)
const heading = document.querySelector('h1');
heading.textContent = 'Hello JavaScript!';
heading.style.color = 'red';
```

---

## 🌳 DOM Tree Structure

### HTML Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Learning</title>
</head>
<body class="bg-black">
    <div>
        <h1 id="title" class="heading">DOM Learning</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <ul>
            <li class="list-item">One</li>
            <li class="list-item">Two</li>
        </ul>
    </div>
</body>
</html>
```

### DOM Tree Representation:
```
Document
├── html
│   ├── head
│   │   └── title → "DOM Learning"
│   └── body (class="bg-black")
│       └── div
│           ├── h1 (id="title", class="heading")
│           │   └── Text: "DOM Learning"
│           ├── p
│           │   └── Text: "Lorem ipsum..."
│           └── ul
│               ├── li (class="list-item") → "One"
│               └── li (class="list-item") → "Two"
```

### Node Types:
1. **Element Nodes**: HTML tags (`<div>`, `<h1>`, `<p>`)
2. **Text Nodes**: Text content inside elements
3. **Attribute Nodes**: Attributes like `id`, `class`, `style`
4. **Comment Nodes**: `<!-- comments -->`
5. **Document Node**: Root node

---

## 🔄 DOM vs HTML

| Aspect | HTML | DOM |
|--------|------|-----|
| **Nature** | Static markup language | Dynamic object model |
| **Purpose** | Structure/content | Programming interface |
| **Changes** | Manual editing | Programmatic changes |
| **State** | Source code | Live representation |
| **Access** | Text editor | JavaScript API |

### Key Difference:
```html
<!-- HTML (Static) - Cannot change after page loads -->
<h1 id="title">Original Title</h1>

<!-- DOM (Dynamic) - Can change anytime -->
<script>
    // Change content dynamically
    document.getElementById('title').textContent = 'Updated Title';
    document.getElementById('title').style.color = 'blue';
</script>
```

---

## 🔍 Selecting Elements

### 1. **getElementById()** - Select by ID
```javascript
// HTML: <h1 id="title">Hello</h1>
const title = document.getElementById('title');
console.log(title); // <h1 id="title">Hello</h1>
```
- Returns: **Single element** or `null`
- Fastest selection method
- IDs must be unique

### 2. **getElementsByClassName()** - Select by Class
```javascript
// HTML: <li class="item">One</li><li class="item">Two</li>
const items = document.getElementsByClassName('item');
console.log(items); // HTMLCollection(2) [li.item, li.item]
console.log(items[0].innerHTML); // "One"
```
- Returns: **HTMLCollection** (live collection)
- Can access by index
- Converts to array: `Array.from(items)`

### 3. **getElementsByTagName()** - Select by Tag
```javascript
// HTML: <p>Para1</p><p>Para2</p>
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // HTMLCollection(2) [p, p]
```

### 4. **querySelector()** - CSS Selector (First Match)
```javascript
// Select first element with class 'heading'
const heading = document.querySelector('.heading');

// Select element with ID 'title'
const title = document.querySelector('#title');

// Select first list item
const firstItem = document.querySelector('ul li:first-child');
```
- Returns: **First matching element** or `null`
- Uses CSS selector syntax
- Most versatile single selector

### 5. **querySelectorAll()** - CSS Selector (All Matches)
```javascript
// Select all list items
const allItems = document.querySelectorAll('li');

// Select all elements with class 'list-item'
const listItems = document.querySelectorAll('.list-item');

// Select odd list items
const oddItems = document.querySelectorAll('li:nth-child(odd)');
```
- Returns: **NodeList** (static collection)
- Supports `forEach()` method
- Modern and flexible

---

## 📊 Selection Method Comparison

| Method | Returns | Live? | Can use forEach? | Best For |
|--------|---------|-------|------------------|----------|
| `getElementById()` | Element | N/A | No | Unique elements |
| `getElementsByClassName()` | HTMLCollection | ✅ Yes | No | Multiple elements by class |
| `getElementsByTagName()` | HTMLCollection | ✅ Yes | No | All elements of a type |
| `querySelector()` | Element | N/A | No | Complex CSS selectors |
| `querySelectorAll()` | NodeList | ❌ No | ✅ Yes | Modern, flexible selection |

---

## 🚶 Traversing the DOM

### Parent Relationships
```javascript
const child = document.querySelector('.day');

// Get parent element
const parent = child.parentElement;
console.log(parent); // <div class="parent">

// Get parent node (includes text/comment nodes)
const parentNode = child.parentNode;

// Get root parent
const rootParent = child.closest('body');
```

### Child Relationships
```javascript
const parent = document.querySelector('.parent');

// Get all child elements
const children = parent.children; // HTMLCollection
console.log(children.length); // Number of children

// Get first/last child element
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;

// Get specific child
const secondChild = parent.children[1];
secondChild.style.color = 'orange';
```

### Sibling Relationships
```javascript
const current = document.querySelector('.day');

// Next sibling element
const nextSibling = current.nextElementSibling;

// Previous sibling element
const prevSibling = current.previousElementSibling;

// All siblings
const parent = current.parentElement;
const siblings = Array.from(parent.children)
    .filter(child => child !== current);
```

### Node vs Element
```javascript
const parent = document.querySelector('.parent');

// childNodes includes ALL nodes (text, comment, element)
console.log("Nodes:", parent.childNodes);
// Output: NodeList [text, div.day, text, div.day, text...]

// children includes ONLY element nodes
console.log("Elements:", parent.children);
// Output: HTMLCollection [div.day, div.day, div.day...]
```

---

## 🎨 Manipulating Elements

### Changing Content
```javascript
const element = document.querySelector('#title');

// textContent (recommended)
element.textContent = 'New Text Content';

// innerHTML (can include HTML)
element.innerHTML = '<strong>Bold Text</strong>';

// innerText (CSS-aware)
element.innerText = 'Visible Text Only';
```

### Comparison:
| Property | Includes | Performance | Security |
|----------|----------|-------------|----------|
| `textContent` | All text | Fast | Safe |
| `innerHTML` | HTML tags | Slow | Risk of XSS |
| `innerText` | Visible text | Slowest | Safe |

### Changing Styles
```javascript
const element = document.querySelector('.heading');

// Individual properties
element.style.color = 'red';
element.style.backgroundColor = '#212121';
element.style.fontSize = '24px';
element.style.padding = '20px';

// Multiple styles at once
element.style.cssText = `
    color: white;
    background: black;
    padding: 10px;
    border-radius: 5px;
`;

// Using classList
element.classList.add('active', 'highlight');
element.classList.remove('heading');
element.classList.toggle('hidden');
element.classList.contains('active'); // true/false
```

### Working with Attributes
```javascript
const element = document.querySelector('#title');

// Get attribute
const id = element.getAttribute('id'); // "title"
const className = element.className; // "heading"

// Set attribute
element.setAttribute('title', 'New Title');
element.setAttribute('data-custom', 'value');

// Remove attribute
element.removeAttribute('style');

// Check attribute
const hasClass = element.hasAttribute('class'); // true

// Dataset (data-* attributes)
element.dataset.userId = '123';
console.log(element.dataset.userId); // "123"
```

---

## 🏗️ Creating New Elements

### Creating Elements
```javascript
// Create new element
const div = document.createElement('div');

// Add properties
div.className = 'main';
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute('title', 'Generated Title');

// Add styles
div.style.backgroundColor = 'green';
div.style.padding = '12px';
div.style.borderRadius = '5px';

// Add content
const text = document.createTextNode('Chai aur code');
div.appendChild(text);

// Alternative: innerHTML
div.innerHTML = '<span>Dynamic Content</span>';

// Add to DOM
document.body.appendChild(div);
```

### Inserting Elements
```javascript
const parent = document.querySelector('.parent');
const newElement = document.createElement('div');
newElement.textContent = 'New Day';

// Append (to end)
parent.appendChild(newElement);

// Prepend (to beginning)
parent.prepend(newElement);

// Insert before specific element
const reference = parent.children[1];
parent.insertBefore(newElement, reference);

// Insert adjacent HTML
reference.insertAdjacentHTML('beforebegin', '<div>Before</div>');
reference.insertAdjacentHTML('afterend', '<div>After</div>');
```

### Insert Positions:
```
<!-- beforebegin -->
<div class="reference">
    <!-- afterbegin -->
    Existing content
    <!-- beforeend -->
</div>
<!-- afterend -->
```

### Cloning Elements
```javascript
const original = document.querySelector('.day');
const clone = original.cloneNode(true); // true = deep clone

// Modify clone
clone.textContent = 'Cloned Day';
clone.style.color = 'blue';

// Insert clone
original.parentElement.appendChild(clone);
```

### Removing Elements
```javascript
const element = document.querySelector('.day');

// Remove from parent
element.parentElement.removeChild(element);

// Modern method (ES6)
element.remove();

// Remove all children
const parent = document.querySelector('.parent');
while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}

// Clear content
parent.innerHTML = '';
// OR
parent.textContent = '';
```

---

## ⚡ Event Handling

### Basic Event Listeners
```javascript
const button = document.querySelector('button');

// Add event listener
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event:', event);
    console.log('Target:', event.target);
});

// Arrow function
button.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});

// Multiple events
element.addEventListener('mouseover', handleHover);
element.addEventListener('mouseout', handleLeave);
```

### Common Events:
```javascript
// Mouse Events
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);
element.addEventListener('mousemove', handler);

// Keyboard Events
document.addEventListener('keydown', handler);
document.addEventListener('keyup', handler);
document.addEventListener('keypress', handler);

// Form Events
form.addEventListener('submit', handler);
input.addEventListener('change', handler);
input.addEventListener('input', handler);
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);

// Window Events
window.addEventListener('load', handler);
window.addEventListener('resize', handler);
window.addEventListener('scroll', handler);
```

### Event Object Properties
```javascript
element.addEventListener('click', function(event) {
    console.log(event.type);        // "click"
    console.log(event.target);      // Clicked element
    console.log(event.currentTarget); // Element with listener
    console.log(event.clientX);     // Mouse X coordinate
    console.log(event.clientY);     // Mouse Y coordinate
    console.log(event.key);         // Key pressed
    console.log(event.preventDefault()); // Prevent default
    console.log(event.stopPropagation()); // Stop bubbling
});
```

### Event Delegation
```javascript
// Instead of adding listeners to each item
const list = document.querySelector('ul');

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
        event.target.classList.toggle('selected');
    }
});
```

---

## 📋 DOM Properties & Methods Cheatsheet

### Element Properties
```javascript
element.id                     // Get/set ID
element.className              // Get/set class string
element.classList              // DOMTokenList of classes
element.tagName                // Tag name (uppercase)
element.innerHTML              // HTML content
element.textContent            // Text content
element.style                  // CSS style object
element.attributes             // NamedNodeMap of attributes
element.dataset                // data-* attributes
element.offsetWidth            // Visible width
element.offsetHeight           // Visible height
element.clientWidth            // Inner width
element.clientHeight           // Inner height
element.scrollWidth            // Full width
element.scrollHeight           // Full height
```

### DOM Methods
```javascript
// Query Methods
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()
element.closest()
element.matches()

// Traversal Methods
element.parentElement
element.parentNode
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling
element.childNodes

// Manipulation Methods
element.appendChild()
element.removeChild()
element.insertBefore()
element.replaceChild()
element.cloneNode()
element.remove()
element.setAttribute()
element.getAttribute()
element.removeAttribute()
element.hasAttribute()

// Style Methods
element.style.setProperty()
element.style.getPropertyValue()
element.style.removeProperty()
window.getComputedStyle(element)
```

---

## ⚡ Performance Best Practices

### 1. Cache DOM References
```javascript
// ❌ Bad: Query every time
for (let i = 0; i < 100; i++) {
    document.querySelector('.item').style.color = 'red';
}

// ✅ Good: Cache reference
const item = document.querySelector('.item');
for (let i = 0; i < 100; i++) {
    item.style.color = 'red';
}
```

### 2. Batch DOM Updates
```javascript
// ❌ Bad: Multiple reflows
element.style.width = '100px';
element.style.height = '100px';
element.style.margin = '10px';

// ✅ Good: Single reflow
element.style.cssText = `
    width: 100px;
    height: 100px;
    margin: 10px;
`;

// ✅ Better: Use class
element.classList.add('new-style');
```

### 3. Use Document Fragment
```javascript
// ❌ Bad: Multiple appends cause reflows
for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    document.querySelector('ul').appendChild(li);
}

// ✅ Good: Single reflow
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}
document.querySelector('ul').appendChild(fragment);
```

### 4. Debounce Scrolling/Resize Events
```javascript
let timeout;
window.addEventListener('resize', function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        // Perform expensive operation
        updateLayout();
    }, 250);
});
```

### 5. Use Efficient Selectors
```javascript
// ❌ Slow: Complex selector
document.querySelector('div.container > ul.list > li.item a.link');

// ✅ Fast: ID selector
document.getElementById('link');

// ✅ Fast: Simple class
document.querySelector('.link');
```

---

## 🎯 Interview Questions

### Q1: What is DOM and why do we need it?
**A:** DOM is a programming interface that represents HTML as a tree of objects, allowing JavaScript to dynamically access and manipulate webpage content, structure, and styles after the page has loaded.

### Q2: Difference between `innerHTML`, `textContent`, and `innerText`?
**A:**
- `innerHTML`: Gets/sets HTML content (can include tags)
- `textContent`: Gets/sets all text (fast, ignores CSS)
- `innerText`: Gets/sets visible text (CSS-aware, slower)

### Q3: What is event delegation and why use it?
**A:** Event delegation attaches a single event listener to a parent element to handle events from multiple child elements. Benefits: better performance, works with dynamic content, less memory usage.

### Q4: Difference between `children` and `childNodes`?
**A:** `children` returns only element nodes, `childNodes` returns all nodes (elements, text, comments).

### Q5: How to create and add an element to DOM?
**A:**
```javascript
const div = document.createElement('div');
div.textContent = 'New Element';
div.className = 'my-class';
document.body.appendChild(div);
```

### Q6: What is `document.createDocumentFragment()`?
**A:** A lightweight document object used to batch DOM updates, reducing reflows and improving performance when adding multiple elements.

### Q7: Difference between `getElementById` and `querySelector`?
**A:** `getElementById` is faster and selects by ID only. `querySelector` uses CSS selectors, is more versatile but slightly slower.

### Q8: How to check if element has a class?
**A:** `element.classList.contains('className')`

### Q9: What is event bubbling and capturing?
**A:** Event propagation has two phases: capturing (top-down) and bubbling (bottom-up). Use `event.stopPropagation()` to stop it.

### Q10: How to get computed styles?
**A:** `window.getComputedStyle(element)`

---

## 🔧 Real-world Examples

### 1. Dynamic Todo List
```javascript
// HTML: <ul id="todo-list"></ul>
const todoList = document.getElementById('todo-list');
const input = document.getElementById('todo-input');
const button = document.getElementById('add-btn');

button.addEventListener('click', function() {
    if (input.value.trim()) {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.classList.add('todo-item');
        
        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        input.value = '';
    }
});
```

### 2. Theme Toggle
```javascript
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    
    // Save preference
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update button text
    themeToggle.textContent = isDark ? 'Switch to Light' : 'Switch to Dark';
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = 'Switch to Light';
}
```

### 3. Form Validation
```javascript
const form = document.getElementById('signup-form');
const email = document.getElementById('email');
const error = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!validateEmail(email.value)) {
        error.textContent = 'Please enter a valid email';
        email.style.borderColor = 'red';
        email.focus();
        return;
    }
    
    error.textContent = '';
    email.style.borderColor = 'green';
    // Submit form
    form.submit();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
```

### 4. Image Gallery
```javascript
const gallery = document.querySelector('.gallery');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');

gallery.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        modalImg.src = event.target.src;
        modal.style.display = 'block';
    }
});

// Close modal
modal.addEventListener('click', function() {
    modal.style.display = 'none';
});
```

---

## 📚 Common DOM Patterns

### 1. Toggle Navigation Menu
```javascript
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigation');

menuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    menuBtn.textContent = nav.classList.contains('active') 
        ? 'Close Menu' 
        : 'Open Menu';
});
```

### 2. Lazy Loading Images
```javascript
const images = document.querySelectorAll('img[data-src]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => observer.observe(img));
```

### 3. Infinite Scroll
```javascript
let isLoading = false;
let page = 1;

window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= 
        document.body.offsetHeight - 500 && !isLoading) {
        loadMoreContent();
    }
});

async function loadMoreContent() {
    isLoading = true;
    // Fetch and append new content
    isLoading = false;
    page++;
}
```

---

<div align="center">

## 📞 Connect With Me
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Rohitt-Rajj)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rohit-raaj/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ranarohitsinghh@gmail.com)

---

**"Master DOM manipulation to create interactive, dynamic web applications."** 🚀

⭐ **Star this repo if you found it helpful!** ⭐

</div>
