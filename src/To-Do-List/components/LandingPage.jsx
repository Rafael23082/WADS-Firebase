import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Message } from "./Messages";

export const LandingPage = () => {
    const navigate = useNavigate();

    return(
        <>
            <div className="flex items-center flex-col justify-center h-screen">
                <Message></Message>
                <div className="flex justify-content-center items-center">
                    <Button color="bg-blue-500" hover = "hover:bg-blue-800" message = "To Do" navigateTo="/Todo"></Button>
                    <Button color="bg-green-600" hover = "hover:bg-green-900" message = "My Profile" navigateTo="/profile"></Button>
                </div>
            </div>
        </>
    );
}