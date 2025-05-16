import React from "react"; 
import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleCompletion, deleteTask }) {
return(
    <>
    <div>
        {tasks.map(task => (
                <TaskItem
                key={task.id}
                task={task}
                toggleCompletion={toggleCompletion}
                deleteTask={deleteTask}
                />
            ))
        }
    </div>
    </>
)
}
export default TaskList;