//App.js
import React from 'react';
import {
    BrowserRouter as Router,
    Routes, Route,
    Link, useNavigate
} from 'react-router-dom';
import Appointments from '../components/Appointments/Appointments';
import Doctors from '../components/Doctors/Doctors';
import Patients from '../components/Patients/Patients';
import './App.css'

const App = () => {
    const isLinkActive =
        (path) =>
            window.location.pathname === path;
    return (
        <Router>
            <div className="nyito">
                <div className="container">
                    <h1 style={{ color: '#00a7aa' }}>
                        Kórház menedzselés
                    </h1>
                    <nav>
                        <div className="nyito">
                        <ul>
                            <li className={
                                isLinkActive('/appointments')
                                    ? 'active' : ''}>
                                <Link to="/appointments">
                                    Időpont
                                </Link>
                            </li>
                            <li className={
                                isLinkActive('/doctors') ?
                                    'active' : ''}>
                                <Link to="/doctors">
                                    Orvos
                                </Link>
                            </li>
                            <li className={
                                isLinkActive('/patients') ?
                                    'active' : ''}>
                                <Link to="/patients">
                                    Páciensek
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </nav>

                    <Routes>
                        <Route path="/appointments"
                            element={<Appointments />} />
                        <Route path="/"
                            element={<Appointments />} />
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
