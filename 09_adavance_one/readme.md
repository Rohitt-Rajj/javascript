
# ⭐ API in JavaScript (Beginner-Friendly Explanation)

## 🔶 What is an API?
**API (Application Programming Interface)** is a set of rules that allows **two software systems to communicate**.

In JavaScript, an API helps your code:
- Get data
- Send data
- Use browser features

Think of an API like a **waiter**:
You ask → waiter takes request → brings back response.

---

## 🔶 Types of APIs in JavaScript

### 1️⃣ Web (Browser) APIs
These are built into the browser and can be used directly in JavaScript.

Examples:
- **DOM API** → modify HTML/CSS  
- **Fetch API** → get data from servers  
- **localStorage API** → store data locally  
- **Geolocation API** → get location  
- **Clipboard API** → copy/paste  
- **Timer API** → setTimeout, setInterval  

---

### 2️⃣ Server APIs (REST APIs)
These live on the internet.  
JavaScript sends a request to a URL and receives data (usually JSON).

Example:
```

[https://api.github.com/users/rohit](https://api.github.com/users/rohit)

````

---

## 🔶 How JavaScript Uses APIs

Using the **Fetch API**:
```js
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
````

Steps:

1. JavaScript sends request
2. API receives it
3. API sends back a response
4. JavaScript uses the data

---

## 🔶 Why Do We Use APIs?

* To get data from servers
* To send user data (login, signup, forms)
* To show live updates (weather, news, stock prices)
* To access browser features
* To connect **frontend ↔ backend**

APIs power apps like:
Instagram, YouTube, Amazon, ChatGPT, etc.

---

## 🔶 Request & Response (Basics)

### Request

Sent by JavaScript. Includes:

* URL
* Method (GET, POST, PUT, DELETE)
* Headers
* Body (optional)

### Response

Sent by the API. Includes:

* Status code (200 success, 404 error)
* Data (often JSON)

---

## 🔶 JSON (Common API Data Format)

Most APIs return data like this:

```json
{
  "name": "Rohit",
  "age": 22,
  "city": "Delhi"
}
```

JavaScript can easily read JSON.

---

# ⭐ Summary

* **API = Communication tool** for JavaScript
* **Web APIs**: provided by browser
* **Server APIs**: give data from backend
* **Fetch API** is used to call server APIs
* API response is usually **JSON**

