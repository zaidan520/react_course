# ⚛️ React Hooks Practice Project

This project is created to understand the **core working of React Hooks**, especially `useState`, props, conditional rendering, controlled inputs, and list rendering.

The main goal is to understand:

* Why normal JavaScript variable updates do not update the UI
* How React controls UI rendering
* How `useState` helps React track state changes

---

# 🧠 Why Hooks Are Important

In normal JavaScript:

```js
let counter = 5;
counter = counter + 1;
```

The variable updates, but the UI does NOT change automatically.

React controls UI rendering.
To update the UI, React provides **Hooks**, especially:

```js
useState()
```

`useState` allows React to:

* Track variable changes
* Re-render the component
* Update the UI automatically

---

# 🚀 Tech Used

* React
* JSX
* useState Hook
* Functional Components

---

# 📂 Project Structure

```
src/
│
├── App.jsx
├── Profile.jsx
├── CounterBox.jsx
├── UserStatus.jsx
├── StudentsList.jsx
├── MessageBox.jsx
```

---

# 📘 Implemented Tasks

---

## ✅ Task 1 — Profile Component (Props + JSX)

### 🎯 Objective:

Understand **props** and how to pass data between components.

### 📌 Component:

`Profile.jsx`

### Props Used:

* name
* age
* city

### Example Output:

```
Name: Ali
Age: 22
City: Faisalabad
```

### Concept Learned:

* Passing props
* Destructuring props
* Reusable components

---

## ✅ Task 2 — Counter With Increase & Decrease (useState)

### 🎯 Objective:

Understand state management using `useState`.

### 📌 Component:

`CounterBox.jsx`

### Requirements:

* Counter starts from `10`
* Two buttons:

  * Increase
  * Decrease
* Value updates live on screen

### Concepts Learned:

* useState hook
* Updating state
* React re-rendering
* onClick event handling

---

## ✅ Task 3 — Conditional Rendering (Ternary Operator)

### 🎯 Objective:

Understand conditional UI rendering.

### 📌 Component:

`UserStatus.jsx`

### State:

```js
const [online, setOnline] = useState(true)
```

### Logic:

* If `online === true` → Show:

  ```
  User is Online 🙂
  ```
* Else → Show:

  ```
  User is Offline 😴
  ```

### Includes:

* Toggle Status button
* Ternary operator

### Concepts Learned:

* Boolean state
* Conditional rendering
* UI switching dynamically

---

## ✅ Task 4 — Display List Using map()

### 🎯 Objective:

Understand list rendering in React.

### 📌 Component:

`StudentsList.jsx`

### Data:

```js
const students = ["Ali", "Hamza", "Zaid", "Ahsan"];
```

### Output:

* Displayed using `<li>` elements
* Rendered dynamically using `.map()`

### Concepts Learned:

* Array mapping
* Dynamic rendering
* JSX inside loops

---

## ✅ Task 5 — Controlled Input + Live Preview

### 🎯 Objective:

Understand controlled components in React.

### 📌 Component:

`MessageBox.jsx`

### Features:

* Input field
* Live text preview
* Clear button

### Logic:

* User types → state updates
* State displays live on screen
* Clear button resets state

### Concepts Learned:

* Controlled inputs
* onChange event
* Two-way binding behavior
* State reset

---

# 🧩 Example of Counter Logic (From App)

```js
const [counter, setcounter] = useState(5);

const addvalue = () => {
  setcounter((prevCounter) => {
    if (prevCounter >= 20) {
      console.log("counter is 20");
      return 0;
    }
    return prevCounter + 1;
  });
};

const remove_value = () => {
  setcounter((prevCounter) => {
    if (prevCounter <= 0) {
      return 0;
    }
    return prevCounter - 1;
  });
};
```

### Important Concept:

We use:

```js
setcounter((prevCounter) => {...})
```

Because:

* React state updates are asynchronous
* Using previous state ensures correct value

---

# 🎓 Learning Outcomes

After completing this project, you understand:

* Why React needs hooks
* How UI re-rendering works
* Props vs State
* Conditional rendering
* List rendering
* Controlled inputs
* Event handling in React

---

# ▶️ How To Run Project

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start development server

```bash
npm run dev
```

---

# 👨‍💻 Author

Ali Zaidan
Computer Science Student
Learning React & Full Stack Development 🚀

---

# ⭐ If You Like This Project

Give it a ⭐ on GitHub!

---
