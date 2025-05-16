# Taskify

Taskify is a simple React-based task manager built with Vite. It demonstrates modern React concepts, component-based architecture, and various styling approaches.

## Features

- Add, complete, and delete tasks
- Dynamic rendering of task lists
- Multiple styling methods: Tailwind CSS, CSS Modules, and styled-components

## Topics Covered

- **Components:** Modular UI with `AddTask`, `TaskList`, and `TaskItem` components.
- **Dynamic Values:** Task data and UI update dynamically based on user actions.
- **Conditional Rendering:** Buttons and task styles change based on completion status.
- **Import and Export:** Components and styles are imported/exported across files.
- **Looping in JSX:** Task lists are rendered using `.map()` in JSX.
- **Props:** Data and event handlers are passed to components via props.
- **Destructuring:** Props and state are destructured for cleaner code.
- **Conditional Styling:** Styles change based on task completion (e.g., line-through for completed tasks).
- **CSS Module:** Scoped styles for components using [TaskItem.module.css](src/components/TaskItem.module.css).
- **Styled Components:** Dynamic styles in [TaskItem.jsx](src/components/TaskItem.jsx) using `styled-components`.
- **Tailwind CSS:** Utility-first styling in form elements and buttons.
- **Event Handling:** Functions handle form submissions, button clicks, and task actions.
- **Event Propagation:** Controlled via React’s synthetic event system.
- **React State:** Task data is managed using React state.
- **useState:** State hooks are used for managing tasks and form inputs.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
```bash
npm run dev
```
3. **Build for production:**

```bash
npm run build
```

## Project Structure

- **src/App.jsx:** Main app logic and state management.
- **src/components/AddTask.jsx:** Form for adding tasks.
- **src/components/TaskList.jsx:** Renders the list of tasks.
- **src/components/TaskItem.jsx:** Individual task with styled-components and conditional logic.
- **src/components/TaskItem.module.css:** CSS Module for scoped styles.

**Styling**
- **Tailwind CSS:** Used for utility classes in forms and buttons.
- **CSS Modules:** Scoped styles for task items.
- **styled-components:** Dynamic styling based on props.