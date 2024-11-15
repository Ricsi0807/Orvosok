import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes, Route,
    Link, useNavigate
} from 'react-router-dom';

const Nav = () => {
    const [belepett, setBelepett] = useState(false);
    const isLinkActive =
        (path) =>
            window.location.pathname === path;
  return (
    <>
        {belepett ? 
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
   : null} </>)
}

export default Nav