import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './pages/Images/BCORE Logo.png'; // Adjust path as necessary
import './navbar.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({});

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const handleDropdownToggle = (menu) => {
        setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <nav>
            <Link to="/" className="title" onClick={closeMenu}>
                <img src={logo} alt="Logo" className="logo" />
                <span>BCORE</span>
            </Link>
            <div className="menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'nav-list open' : 'nav-list'}>
                <li>
                    <NavLink to="/Home" activeClassName="active" onClick={closeMenu}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About" activeClassName="active" onClick={closeMenu}>
                        About
                    </NavLink>
                </li>
                <li className="dropdown" onClick={() => handleDropdownToggle('services')}>
                    <p>Events</p>
                    {dropdownOpen.services && (
                        <ul className="nav-dropdown">
                            <li>
                                <NavLink to="/UpcomingEvents" onClick={closeMenu}>
                                    Upcoming Events
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Events" onClick={closeMenu}>
                                    Past Events
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <NavLink to="/Team" activeClassName="active" onClick={closeMenu}>
                        Team
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/News" activeClassName="active" onClick={closeMenu}>
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" activeClassName="active" onClick={closeMenu}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
