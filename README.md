# DevStack

DevStack is a small React app that helps users choose the technologies they want to use in a project. Users can look through different options, add them to a personal stack, and remove them later if they change their mind.

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- JSON
- React Toastify

## Features

- Users can add technologies to their own stack and remove them when they are no longer needed.
- The app does not allow the same technology to be added twice and shows toast messages for important actions.
- A loading spinner is shown before the technology cards appear, and the layout also works on smaller screens.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is like writing HTML inside JavaScript. It makes creating the UI easier in React.

### 2. What is the difference between props and state?

Props are used to pass data from one component to another. State is used to store data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores and updates changing data. I used it for the selected stack, the mobile menu, and the loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component renders. The JSON is imported directly, and I used `useEffect` to control the short loading state before showing the cards.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in the list.

### 6. What is conditional rendering? Show one place you used it.

It means showing something only when a condition is true. For example, I showed an empty stack message when there were no items.

### 7. How do you pass data from a parent to a child component, and how does a child send something back to the parent?

The parent sends data using props. The child can send data back by calling a function passed from the parent.
