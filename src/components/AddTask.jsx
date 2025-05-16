import React, {useState} from "react";

function AddTask({addTask}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title)
        {
            addTask({title, description});
            setTitle("");
            setDescription("");
        }
    };

return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input 
            type="text" 
            placeholder="Add a new task" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-2 mt-2 text-black bg-white placeholder:text-black"
        />
        <input 
            type="text" 
            placeholder="Add a description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-2 mt-2 text-black bg-white placeholder:text-black"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
    </form>    
    </>
);
}   

export default AddTask;