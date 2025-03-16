import React, { useState } from 'react'
import { Button } from './Button'
import "../index.css"

export const TodoForm = ({addToDo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        if (value.replace(" ", "") !== ""){
            addToDo(value);
            setValue("");
        } else{
            alert("Please enter valid strings!");
        }
   
    }
    
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text"
                value={value}
                placeholder="Enter task"
                className='border rounded-[10px] p-3'
                onChange={(e) => setValue(e.target.value)}>
            </input>

            <button type="submit" className='min-w-[100px] max-w-[200px] w-[10%] p-[1em] rounded-[10px] bg-blue-500 text-white m-3'>Add Task</button>
        </form>
    )
}