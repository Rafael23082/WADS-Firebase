import { useState } from "react";
import { TaskContainer } from "./TasksContainer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from "../App";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ToDoWrapper = () => {
    const [task, setTask] = useState("");
    const [showingCompleted, setShowingCompleted] = useState(false);
    const navigate = useNavigate();
    const {users, setUsers, user} = useContext(Usercontext);

    const addTask = () => {
        let newString = task.trim();
        if (newString === "") {
            alert("Please enter a valid task name!");
            return;
        }
    
        const newTask = { id: Date.now(), task: newString, completed: false };
        const updatedUsers = users.map(userAccount => userAccount.id === user.id ? { ...userAccount, tasks: [...userAccount.tasks, newTask] } : userAccount);
    
        setUsers(updatedUsers);
        setTask("");
    };

    return(
        <>
        <FontAwesomeIcon icon={faUserCircle} className="absolute text-[#EEEEEE] right-0 text-[2rem] mr-[1em] mt-[1em] cursor-pointer" />
        <div className="w-[100%] h-[100vh] flex items-center justify-center bg-[#393E46] text-[#EEEEEE]">
            <div className="w-[90%] h-auto shadow-2xl rounded-[20px] flex flex-col min-h-[400px] min-w-[300px] max-w-[1200px] bg-[#222831] pb-[2em] relative">
            <button className="bg-[#00ADB5] px-5 py-2 rounded-[10px] w-fit hover:bg-[#008A92] duration-300 cursor-pointer absolute top-0 left-0 m-[2em]" onClick={() => {navigate("/")}}>Back</button>
                <p className="font-medium text-2xl text-center mt-[4em]">To Do List</p>
                <div className="flex justify-center gap-[40px] mt-[2em] sm:flex-row items-center flex-col">
                    <input type="text" placeholder="Add Task" className="bg-gray-200 rounded-[10px] pl-[1em] py-2 w-fit text-black" onChange={(e) => {setTask(e.target.value)}} value={task}></input>
                    <button className="bg-[#00ADB5] px-5 py-2 rounded-[10px] w-fit hover:bg-[#008A92] duration-300 cursor-pointer" onClick={() => addTask()}>Add Task</button>
                    <button className="bg-[#00ADB5] px-5 py-2 rounded-[10px] w-fit hover:bg-[#008A92]  duration-300 cursor-pointer" onClick={() => {setShowingCompleted(!showingCompleted)}}>{showingCompleted ? "Show Uncompleted" : "Show Completed"}</button>
                </div>
                <div className="min-h-[100px] max-h-[30vh] w-[80%] lg:w-[60%] overflow-y-auto block mx-auto mt-[2em] scrollbar-hide">
                    <TaskContainer showingCompleted={showingCompleted} users={users} setUsers={setUsers} user={user} /> 
                </div>
            </div>
        </div>
        </>
    );
}