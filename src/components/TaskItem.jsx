import React from "react";
import styled from "styled-components";

const Task = styled.div`
  margin: 8px 0;
  padding: 8px;
  background-color: ${(props) => (props.completed ? '#d4edda' : '#f8d7da')};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

function TaskItem({ task, toggleCompletion, deleteTask }) {
return(
<>
<Task completed={task.completed}>
  <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <button onClick={() => toggleCompletion(task.id)} className="bg-green-500 text-white p-1 rounded mr-2">{task.completed ? 'Undo' : 'Complete'}</button>
      <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
</Task>
</>
);
}

export default TaskItem;