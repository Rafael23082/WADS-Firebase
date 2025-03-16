import { ToDoWrapper } from "./components/ToDoWrapper";
import { LandingPage } from "./components/LandingPage";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { useState } from "react";
import { createContext } from "react";

export const Usercontext = createContext();

function App(){
    const [users, setUsers] = useState([
        {
            id: Date.now(),
            email: "rafael.anderson@binus.ac.id",
            password: "2702255981",
            tasks: [{
                id: Date.now(),
                task: "WADS Forum Assignment",
                completed: false
            }]
        },
        {
            id: Date.now(),
            email: "Dummy",
            password: "1",
            tasks: [{
                id: Date.now(),
                task: "I am a Dummy",
                completed: false
            }]
        }
    ]);

    const [user, setUser] = useState(null);
    return(
        <Usercontext.Provider value={{users, setUsers, user, setUser}}>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/todo" element={<ToDoWrapper />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </Usercontext.Provider>
    );
}

export default App;