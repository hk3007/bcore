import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './pages/Images/BCORE Logo.png';
import './navbar.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({});
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const handleDropdownToggle = (menu) => {
        setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
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
                    <p>Events and Guidelines</p>
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
                            <li>
                                <NavLink to="/Ethics" onClick={closeMenu}>
                                    Ethics Statement and COPE Guidelines
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
