
## 🔶 What Are Events?
Events are actions or occurrences that happen in the browser.  
JavaScript can detect these actions and run functions in response.

Examples: clicking, typing, scrolling, loading a page, submitting forms.

---

## 🔶 Why Are Events Important?
Events allow websites to become **dynamic and interactive**.

Without events → website is static.  
With events → website responds to user actions.

---

## 🔶 Event Listeners
To respond to events, JavaScript uses **event listeners**.

### Syntax:
```

element.addEventListener("eventName", callbackFunction)

```

Event listener =  
"Listen for this event, and run this function when it happens."

---

## 🔶 Common Types of Events

### 🔹 Mouse Events
- click  
- dblclick  
- mouseover  
- mouseout  
- contextmenu  

### 🔹 Keyboard Events
- keydown  
- keyup  
- keypress  

### 🔹 Form Events
- submit  
- input  
- change  
- focus  
- blur  

### 🔹 Window Events
- load  
- scroll  
- resize  

---

## 🔶 Event Object (`event` / `e`)
Every event returns an **event object** containing details like:
- the target element  
- mouse position  
- which key was pressed  
- time of the event  

---

## 🔶 Event Bubbling (Default)
Events move **from child → parent**.  
Clicking a child element also triggers events on its parent elements.

---

## 🔶 Event Capturing
Opposite of bubbling.  
Events move **from parent → child**.  
Enabled using a third parameter in `addEventListener`.

---

## 🔶 Event Delegation
A technique where you:
- add **one event listener** on a parent element  
- detect which child triggered the event  

Useful when dealing with dynamically added elements.

---

## 🔶 preventDefault()
Stops the browser's default action (like form submission, link navigation).

---

## 🔶 stopPropagation()
Stops the event from continuing in the bubbling or capturing phase.

---

# ⭐ Summary
Events are essential for making websites responsive and interactive.  
They allow JavaScript to detect user actions and react to them using event listeners.  
Understanding event flow (bubbling, capturing) and event delegation is key to writing efficient DOM code.

