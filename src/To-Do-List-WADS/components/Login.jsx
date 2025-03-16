import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from "../App";

export const Login = () => {
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
    const {users, user, setUser} = useContext(Usercontext);
    const login = () => {
        const account = users.find((user) => user.email === email);
        if (account){
            const passwordCorrect = password === account.password;
            if (!passwordCorrect) {
                alert("Email or Password is Incorrect!");
            } else {
                navigate("/todo");
                setUser(account);
            }
        } else {
            alert("Email or Password is Incorrect!");
        }
    }

    useEffect(() => {
        console.log(user);
    }, [user])

    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center bg-[#393E46]">
            <button className="bg-[#00ADB5] px-5 py-2 rounded-[10px] w-fit hover:bg-[#008A92] duration-300 cursor-pointer absolute top-0 left-0 m-[2em] text-[#EEEEEE]" onClick={() => {navigate("/")}}>Home</button>
            <div className="w-[95%] md:w-[70%] h-[70vh] bg-[#222831] rounded-[20px] flex flex-col items-center justify-center min-h-[500px]">
                <p className="text-[#EEEEEE] font-medium text-[1.5rem]">User Login</p>
                <input type="text" placeholder="Email" className="bg-[#EEEEEE] py-[0.5em] mt-[2em] w-[70%] md:w-[40%] rounded-[10px] pl-[1em]" onChange={(e) => {updateText(e.target.value, true)}}></input>
                <input type="password" placeholder="Password" className="bg-[#EEEEEE] py-[0.5em] mt-[1em] w-[70%] md:w-[40%] rounded-[10px] pl-[1em]" onChange={(e) => {updateText(e.target.value, false)}}></input>
                <p className="text-[#00ADB5] mt-[1em] text-center cursor-pointer hover:underline" onClick={() => {navigate("/signup")}}>Don't have an account yet? Sign Up!</p>
                <button className="bg-[#00ADB5] px-4 py-3 w-fit rounded-[10px] text-[#EEEEEE] font-semibold mt-[1em] hover:bg-[#008A92] duration-300 cursor-pointer" onClick={() => {login()}}>Login</button>
            </div>
        </div>
    );
}