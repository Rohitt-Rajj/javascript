
# ⭐ 2️⃣ Selecting Elements in the DOM 

To change anything on a webpage using JavaScript, you must **select the element first**.

Examples of what you can do after selecting:
- Change text
- Change color
- Hide/show an element
- Move an element
- Add new content

So **selecting is the first step of DOM manipulation**.

---

# 🔵 1. `getElementById()`
### Select an element using its **ID**

```html
<h1 id="title">Hello</h1>
````

```js
const heading = document.getElementById("title");
console.log(heading);
```

* Returns **one element**
* IDs must be **unique**
* Fastest method

---

# 🔵 2. `getElementsByClassName()`

### Select elements using a **class**

```html
<p class="info">Para 1</p>
<p class="info">Para 2</p>
```

```js
const items = document.getElementsByClassName("info");
console.log(items);
```

* Returns **HTMLCollection**
* Can return **multiple elements**
* Looks like an array but is NOT a real array

---

# 🔵 3. `getElementsByTagName()`

### Select by **HTML tag** (p, div, h1, li, etc.)

```html
<p>Hello</p>
<p>Welcome</p>
```

```js
const paras = document.getElementsByTagName("p");
console.log(paras);
```

* Returns all `<p>` elements
* Also an **HTMLCollection**

---

# 🔵 4. `querySelector()`

### Select the **first matching** element

(very popular in modern JavaScript)

```html
<p class="text">Hello</p>
<p class="text">Hi</p>
```

```js
const firstPara = document.querySelector(".text");
console.log(firstPara);
```

* Returns **only the first match**
* Uses **CSS selectors**
  Examples:

  * `#idname`
  * `.classname`
  * `div`
  * `p:nth-child(2)`

---

# 🔵 5. `querySelectorAll()`

### Select **all matching** elements

```html
<div class="box">A</div>
<div class="box">B</div>
```

```js
const boxes = document.querySelectorAll(".box");
console.log(boxes);
```

* Returns **NodeList**
* Supports `forEach`
* Modern & flexible

---

# ⭐ Summary Table (Easy to Remember)

| Method                     | Returns        | Selects      | Notes                |
| -------------------------- | -------------- | ------------ | -------------------- |
| `getElementById()`         | Single element | ID           | Fastest              |
| `getElementsByClassName()` | HTMLCollection | Class        | Multiple elements    |
| `getElementsByTagName()`   | HTMLCollection | Tag          | Example: `p`, `div`  |
| `querySelector()`          | First match    | CSS selector | Most used            |
| `querySelectorAll()`       | NodeList       | All matches  | Supports `forEach()` |

---


