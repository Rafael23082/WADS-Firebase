import React, { useState } from 'react'

export const EditTodoForm = ({ editToDo, task }) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editToDo(task.id, value);  // Fix parameter order
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Update task' />

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Update Task</button>
        </form>
    )
}