import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EditTaskPopUp } from "./EditTaskPopUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TaskContainer = ({showingCompleted, users, setUsers, user}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(null);
    
    const loggedInUser = users.find(userAccount => userAccount.id === user?.id);

    const deleteTask = (deletedTask) => {
        const newTasks = loggedInUser.tasks.filter(task => task.id !== deletedTask.id);
        const updatedUsers = users.map(userAccount => userAccount.id === user.id ? {...userAccount, tasks:newTasks}: userAccount);
        setUsers(updatedUsers);
    }
    const changeStatus = (taskID) => {
        const newTasks = loggedInUser.tasks.map(task => task.id === taskID ? {...task, completed:!(task.complete)}: task);
        const updatedUsers = users.map(userAccount => userAccount.id === user.id ? {...userAccount, tasks:newTasks}: userAccount);
        setUsers(updatedUsers);
    }

    const navigate = useNavigate();

    if (!user){
        return(
            <div className="w-[100%] flex flex-col items-center justify-center]">
                <p>Your Session has Expired. Please Login to Your account</p>
                <button className="mt-[1em] bg-[#00ADB5] px-4 py-2 w-fit rounded-[10px] text-[#EEEEEE] font-semibold hover:bg-[#008A92] duration-300 cursor-pointer" onClick={() => {navigate("/login")}}>Login</button>
            </div>
        );
    }

    return(
        <>
        <div className="flex flex-col gap-[20px]">
            {loggedInUser.tasks.filter((task) => task.completed === showingCompleted)
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
            <EditTaskPopUp isOpen={isOpen} updatingTask={updatedTask} setIsOpen={setIsOpen} user={user} users={users} setUsers={setUsers} />
        }
        </>
    );
}   