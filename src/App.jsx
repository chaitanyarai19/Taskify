import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);

// Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  // Function to toggle task completion
  const toggleCompletion = (id) =>{
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
    <div className="App p-4">
      <h1 className="text-2xl font-bold text-center">Task Manager</h1><br/>
          <AddTask addTask={addTask} />
          <TaskList tasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />
    </div>
    </>
  );
}

export default App;