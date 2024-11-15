//App.js
import React from 'react';
import {
    BrowserRouter as Router,
    Routes, Route,
    Link, useNavigate
} from 'react-router-dom';
import Appointments from './components/Appointments/Appointments';
import Doctors from './components/Doctors/Doctors';
import Patients from './components/Patients/Patients';
import './App.css'
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

const App = () => {
    
    return (
        <Router>
            <div className="nyito">
                <div className="container">
                    <Nav />
                    <Routes>
                        <Route path="/appointments"
                            element={<Appointments />} />
                        <Route path="/"
                            element={<Home />} />
                        <Route path="/doctors"
                            element={<Doctors />} />
                        <Route path="/patients"
                            element={<Patients />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
