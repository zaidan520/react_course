# React Basics Practice

This project is a revision of React fundamentals including:
- Components & props
- useState hook
- Conditional rendering
- Event handling
- Lists & mapping
- Basic UI structure

Built as part of my learning journey as a Software Engineering student.
1. Change Text on the Page

Create a component called Welcome.

Display: “Hello Ali, I’m learning React!”

Render it in App.jsx.

2. Add a Button

Add a button inside your component.

Text: “Click Me”

3. Add a Counter

Create a state variable using useState.

Show a number starting from 0.

Button increases number: counter + 1  
// this task is done by using the useState hook beacuse we use this hook for remeber the value 
useState is a special React Hook that lets your component remember and update values.


4. Create 2 Components

One component shows your name.

One component shows your city.

Import both in App.jsx.

5. Pass Props

Create a component Student(props)

Send props:

6. Conditional Rendering
Create a variable isLoggedIn = true

If true → show “Welcome back”

If false → show “Please login”

simple we use if else statment for this task using ternary operates and plus we make a function for toggel state

6....Display a List
Create an array:

const fruits = ["Apple", "Mango", "Banana"];
Use .map() to display each fruit.

.map() is a JavaScript function that:

Loops through the array

Runs a function for each item

Returns a NEW array with the results

8. Input Field + Show Text
Add an input box.

Whatever user types should show live on screen.

9.  Create a Simple Navbar
Make a component called Navbar.jsx

Add 3 links: Home | About | Contact

10. Make a Small Card UI
Create a card component with:

Image (any URL)

Title

Description

A button (“Learn More”)