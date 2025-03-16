import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EditTaskPopUp } from "./EditTaskPopUp";
import { useState } from "react";

export const TaskContainer = ({tasks, setTaskContainer, showingCompleted}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(null);
    const deleteTask = (deletedTask) => {
        setTaskContainer(tasks.filter((task) => task.id !== deletedTask.id));
    }
    const changeStatus = (taskID) => {
        setTaskContainer(tasks.map((task) => task.id === taskID ? {...task, completed: !task.completed} : task))
    }
    return(
        <>
        <div className="flex flex-col gap-[20px]">
            {tasks.filter((task) => task.completed === showingCompleted)
            .map((task) => (
                <div className="bg-[#393E46] p-[1em] rounded-[10px]">
                    <div className="flex gap-[10px]">
                        <input type="checkbox" className="cursor-pointer" onChange={() => {changeStatus(task.id)}} checked={task.completed} />
                        <p>{task.task}</p>
                    </div>
                    <div className="flex gap-[20px] mt-[0.5em]">
                        <FontAwesomeIcon icon={faEdit} className="cursor-pointer text-blue-300 hover:text-blue-500 duration-300" onClick={ () => {
                            setIsOpen(true);
                            setUpdatedTask(task);
                        }} />
                        <FontAwesomeIcon className="cursor-pointer text-red-500 hover:text-red-700 duration-300" icon={faTrash} onClick={() => {deleteTask(task)}} />
                    </div>
                </div>
            ))}
        </div>
        { isOpen && updatedTask && 
            <EditTaskPopUp isOpen={isOpen} updatingTask={updatedTask} tasks={tasks} setIsOpen={setIsOpen} setTaskContainer={setTaskContainer} />
        }
        </>
    );
}   