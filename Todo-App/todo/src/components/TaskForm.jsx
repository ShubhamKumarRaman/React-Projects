import { useState } from "react";

export default function TaskForm({onCreate}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        onCreate({
            title, 
            description
        })

        setTitle("")
        setDescription("")
    }

    return(
        <form>
            <input 
                className="border p-2 w-full mb-2"
                placeholder="Task Title"
                value={value}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <input
                className="border p-2 w-full mb-2"
                placeholder="Description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            />

            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Task
            </button>

        </form>
    )
}