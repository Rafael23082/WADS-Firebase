import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = ({users, setUsers}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const updateText = (value, emailText) => {
        if (emailText){
            setEmail(value);
        } else {
            setPassword(value);
        }
    }
    const verifyUser = () => {
        const userExists = users.some((user) => (user.email === email));
        if (userExists){
            alert("User already exists, login instead!")
        } else {
            setUsers([...users, {id: Date.now(), email:email, password:password}]);
            alert("Account has been registered!");
        }
    }
    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center bg-[#393E46]">
            <button className="bg-[#00ADB5] px-5 py-2 rounded-[10px] w-fit hover:bg-[#008A92] duration-300 cursor-pointer absolute top-0 left-0 m-[2em] text-[#EEEEEE]" onClick={() => {navigate("/")}}>Home</button>
            <div className="w-[95%] md:w-[70%] h-[70vh] bg-[#222831] rounded-[20px] flex flex-col items-center justify-center min-h-[500px]">
                <p className="text-[#EEEEEE] font-medium text-[1.5rem]">User Sign Up</p>
                <input type="text" placeholder="Email" onChange={(e) => {updateText(e.target.value, true)}} className="bg-[#EEEEEE] py-[0.5em] mt-[2em] w-[70%] md:w-[40%] rounded-[10px] pl-[1em]"></input>
                <input type="password" placeholder="Password" onChange={(e) => {updateText(e.target.value, false)}} className="bg-[#EEEEEE] py-[0.5em] mt-[1em] w-[70%] md:w-[40%] rounded-[10px] pl-[1em]"></input>
                <p className="text-[#00ADB5] mt-[1em] text-center cursor-pointer hover:underline" onClick={() => {navigate("/login")}}>Already have an account? Log In.</p>
                <button className="bg-[#00ADB5] px-4 py-3 w-fit rounded-[10px] text-[#EEEEEE] font-semibold mt-[1em] hover:bg-[#008A92] duration-300 cursor-pointer" onClick={() => {verifyUser()}}>Sign Up</button>
            </div>
        </div>
    );
}