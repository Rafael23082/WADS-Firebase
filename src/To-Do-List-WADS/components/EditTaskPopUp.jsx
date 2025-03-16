import Modal from "react-modal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const EditTaskPopUp = ({isOpen, updatingTask, setIsOpen, user, users, setUsers}) => {
    const [newTaskName, setNewTaskName] = useState("");

    const loggedInUser = users.find(userAccount => userAccount.id === user.id);

    const editTask = () => {
        const newTasks = loggedInUser.tasks.map(task => task.id === updatingTask.id ? {...task, task:newTaskName} : task);
        setUsers(users.map(userAccount => userAccount.id === user.id ? {...userAccount, tasks:newTasks} : userAccount));

        setIsOpen(false);
    };

    return(
        <Modal isOpen={isOpen} onRequestClose={() => {setIsOpen(false)}} className="rounded-[20px] w-[80%] md:w-[60%] h-[70vh] bg-[#222831] shadow-2xl inset-0 fixed self-center justify-self-center flex flex-col items-center justify-center text-[#EEEEEE]" overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.6)]">
            <FontAwesomeIcon icon={faTimes} className="text-[1.5rem] right-6 top-4 absolute cursor-pointer" onClick={() => {setIsOpen(false)}} />
            <p className="text-[1.4rem] font-medium w-[80%] text-center">Previous Task Name: {updatingTask.task}</p>
            <div className="flex gap-[30px] items-center mt-[2em] flex-col md:flex-row">
                <p>New Task Name:</p>
                <input type="text" placeholder="New Task" className="text-black bg-gray-200 rounded-[10px] pl-[1em] py-2 w-fit" onChange={(e) => {setNewTaskName(e.target.value)}} />
            </div>
            <button className="mt-[2.5em] bg-[#00ADB5] text-white px-5 py-2 rounded-[10px] w-fit hover:bg-[#008A92] duration-300 cursor-pointer" onClick={() => editTask()}>Update Task</button>
        </Modal>
    );
}