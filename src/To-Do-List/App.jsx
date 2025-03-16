import { TodoWrapper } from './components/TodoWrapper'
import { LandingPage } from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Profile } from './components/Profile';

function App() {
  return (
    <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path='/todo' element={<TodoWrapper />}></Route>
                    <Route path='/profile' element={<Profile />}></Route>
                </Routes>
            </Router>
        </div>
  )
}

export default App;
