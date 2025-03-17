import { useContext, useEffect, useState } from "react"
import { Usercontext } from "../App"
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const ProfilePopUp = ({isOpen, setIsOpen}) => {

    const {user, users} = useContext(Usercontext);
    const loggedInUser = users.find(userAccount => userAccount.id === user.id);

    const [incompleteTask, setIncompleteTask] = useState(0);
    const [completeTask, setCompleteTask] = useState(0);

    const taskCounter = () => {
        let incomplete = 0;
        let complete = 0;

        loggedInUser.tasks.forEach(task => {
            if (task.completed){
                complete += 1;
            } else {
                incomplete += 1;
            }
        })

        setIncompleteTask(incomplete);
        setCompleteTask(complete);
    }

    useEffect(() => {
        taskCounter();
    }, []);

    return(
        <Modal isOpen={isOpen} className="w-[40%] flex flex-col justify-center items-center text-[#EEEEEE] h-[80vh] bg-[#222831] fixed mx-auto inset-0 self-center" overlayClassName="inset-0 fixed bg-[rgba(0,0,0,0.7)]" onRequestClose={() => {setIsOpen(false)}}>
            <FontAwesomeIcon icon={faTimes} className="text-[1.5rem] text-[#EEEEEE] right-6 top-4 absolute cursor-pointer" onClick={() => {setIsOpen(false)}} />
            <p className="font-semibold text-[2rem]">Profile</p>
            <p className="text-[1.3rem] mt-[1em]">Email: {user.email}</p>
            <p className="text-[1.3rem] mt-[0.5em]">Password: {"*".repeat(user.password.length)}</p>
            <div className="text-[1.3rem] mt-[0.5em] flex gap-[10px]">
                <p>Completed Tasks: </p><p className="text-green-500">{completeTask}</p>
            </div>
            <div className="text-[1.3rem] mt-[0.5em] flex gap-[10px]">
                <p>Incomplete Tasks: </p><p className="text-red-500">{incompleteTask}</p>
            </div>
        </Modal>
    );
}