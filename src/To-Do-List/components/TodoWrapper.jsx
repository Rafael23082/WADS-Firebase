import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Todo } from './Todo.jsx';
import { TodoForm } from './TodoForm.jsx';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm.jsx';
import { Button } from './Button.jsx';

uuidv4();

export const TodoWrapper = () => {
    const [toDos, setToDos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const navigate = useNavigate();

    const addToDo = toDo => {
        setToDos([...toDos, {
            id: uuidv4(),
            task: toDo,
            completed: false,
            isEditing: false
        }]);
    };

    const toggleComplete = id => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteToDo = id => {
        setToDos(toDos.filter(todo => todo.id !== id));
    };

    const editToDo = id => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    const editTask = (id, newTask) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, task: newTask, isEditing: !todo.isEditing } : todo));
    };

    const toggleCompletedFilter = () => {
        setShowCompleted(!showCompleted);
    };

    const filteredTasks = showCompleted ? toDos.filter(todo => todo.completed) : toDos;

    const handleToggle = todoId => {
        setToDos(prevToDos => prevToDos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
    };

    return (
        <>
        <div className='w-[100%] h-[100vh] flex items-center justify-center flex-col sm:flex-row'>
            <div className="mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg max-w-[500px]">
                <h1 className="text-2xl font-bold text-center text-gray-800 m-8">To-Do List</h1>
                <div className="flex justify-between mb-4">
                    <button onClick={toggleCompletedFilter} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        {showCompleted ? 'Show All' : 'Show Completed'}
                    </button>
                </div>

                <TodoForm addToDo={addToDo} />
                <div className={`mt-4 space-y-3 ${toDos.length === 0 ? "" :  "h-auto max-h-[200px] overflow-y-auto"}`}>
                    {filteredTasks.map(todo => (
                        todo.isEditing ? (
                            <EditTodoForm key={todo.id} editToDo={editTask} task={todo} />
                        ) : (
                            <Todo
                                key={todo.id}
                                task={todo}
                                toggleComplete={toggleComplete}
                                deleteToDo={deleteToDo}
                                editToDo={editToDo}
                                onToggle={handleToggle}
                            />
                        )
                    ))}
                </div>
            </div>
            <button onClick={() => {navigate("/")}} className='sm:absolute min-w-[100px] sm:bottom-0 sm:left-0 sm:mb-[5em] sm:ml-[4em] p-[1em] rounded-[10px] bg-blue-500 text-white m-8 sm:m-0'>Back</button>
        </div>
        </>
    );
};
