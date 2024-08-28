import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './pages/Images/BCORE Logo.png'; // adjust the path as necessary

import './navbar.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            <Link to="/" className='title'>
                <img src={logo} alt="Logo" className='logo' />
                <span>BCORE</span>
            </Link>
            <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                <li><NavLink to="/Home" activeClassName="active" onClick={handleNavLinkClick}>Home</NavLink></li>
                <li><NavLink to="/About" activeClassName="active" onClick={handleNavLinkClick}>About</NavLink></li>
                <li><NavLink to="/Events" activeClassName="active" onClick={handleNavLinkClick}>Events</NavLink></li>
                <li><NavLink to="/Team" activeClassName="active" onClick={handleNavLinkClick}>BCORE Team</NavLink></li>
                <li><NavLink to="/Contact" activeClassName="active" onClick={handleNavLinkClick}>Contact</NavLink></li>
            </ul>
        </nav>
    );
}
