# DevStack — Developer Technology Hub & Stack Builder

DevStack is a sleek, responsive, and interactive web application that enables developers to explore, analyze, compare, and assemble their ideal technology stacks for modern web applications, backend APIs, databases, DevOps, and cloud infrastructure.

---

## 🛠️ Technologies Used
- **Frontend Framework:** React.js (v19 with Vite)
- **Programming Language:** TypeScript (ES6+)
- **Styling & UI Kit:** Tailwind CSS (v4) & DaisyUI
- **Alerts & Notifications:** React-Toastify
- **Data Source:** JSON (`/technologies.json`)
- **Iconography:** Lucide-React
- **Version Control:** Git & GitHub

---

## 🌟 Key Features

1. **Interactive Technology Directory & Category Filters:**
   - Browse 14+ curated developer tools categorized into Frontend, Backend, Database, Language, Styling, DevOps, and Tools.
   - Real-time instant search input and interactive category filter pills.

2. **Real-Time "Your Stack" Sidebar & Duplicate Guard:**
   - Add technologies to your custom stack with a single click.
   - Prevents duplicate items, changes button state to `✓ Added to Stack`, and provides individual item removal as well as a `Remove All` feature.

3. **Responsive Dark Mode UI & Toast Notifications:**
   - Fully responsive sticky navbar with mobile hamburger menu drawer.
   - Unified brand gradient theme (`orange → pink → violet`).
   - Instant visual feedback powered by `react-toastify` for additions, removals, and duplicate attempts.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that lets developers write HTML-like elements directly inside JavaScript code. It is used in React because it makes building component structures intuitive, readable, and enables combining rendering logic with component state seamlessly.

### 2. What is the difference between props and state?
**Answer:** 
- **Props (Properties):** Read-only data passed from a parent component down to a child component to customize its behavior or display.
- **State:** Internal, mutable data managed within a component that triggers a component re-render whenever it updates.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** The `useState` hook allows functional components to create and update local component state variables. In this project, `useState` was used in `App.tsx` to manage the `technologies` array, the `stack` array of selected items, and the `isLoading` state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** The `useEffect` hook handles side effects in React components, such as fetching data, subscribing to events, or modifying the DOM after rendering. In this project, `useEffect` was required to asynchronously fetch the `/technologies.json` file on initial component mount and set the technology state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` prop to identify which items in a list have changed, been added, or removed. This helps React perform efficient DOM diffing and re-render only the modified list items rather than re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering is the ability to render different UI elements or components based on specific JavaScript boolean conditions. 
**Example in DevStack:** In `StackSidebar.tsx`, conditional rendering is used to display either an empty stack illustration when `stack.length === 0` or the list of selected tech items when items exist:
```tsx
{stackCount === 0 ? (
  <div>Your Stack is empty</div>
) : (
  <div className="space-y-3">
    {stack.map(item => ...)}
  </div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:** 
- **Parent to Child:** The parent passes data to the child as **props** (e.g. `<TechCard technology={tech} />`).
- **Child to Parent:** The parent passes a callback function as a prop to the child, and the child calls that function with data when an event happens (e.g. `<TechCard onAddToStack={handleAddToStack} />`).

---

© 2026 DevStack. Built with React & Tailwind CSS.
