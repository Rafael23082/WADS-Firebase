import { ToDoWrapper } from "./components/ToDoWrapper";
import { LandingPage } from "./components/LandingPage";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { useState } from "react";

function App(){
    const [users, setUsers] = useState([
        {
            id: Date.now(),
            email: "rafael.anderson@binus.ac.id",
            password: "2702255981",
            tasks: [{
                id: Date.now(),
                task: "WADS Forum Assignment",
                isCompleted: true
            }]
        }
    ]);
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/todo" element={<ToDoWrapper />} />
                <Route path="/signup" element={<SignUp users={users} setUsers={setUsers} />} />
                <Route path="/login" element={<Login users={users} setUsers={setUsers} />} />
            </Routes>
        </Router>
    );
}

export default App;