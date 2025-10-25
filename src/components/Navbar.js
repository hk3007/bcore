"use client"

import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Newspaper,
  Phone,
  BookOpen,
  Calendar,
  ChevronDown,
} from "lucide-react";
import {
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../pages/Images/BCORE Logo.png";
import "./navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  // ✅ Responsive check
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1299px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      setOpenDropdown(null);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };
  const handleDropdownClick = (idx) => {
    if (!isMobile) return;
    setOpenDropdown((cur) => (cur === idx ? null : idx));
  };

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: BookOpen },
  {
    label: "Events & Guidelines",
    icon: Calendar,
    dropdown: [
      { to: "/upcomingevents", label: "Upcoming Events" },
      { to: "/events", label: "Past Events" },
      { to: "/ethics", label: "Ethics Statement and COPE Guidelines" },
      { to: "/olympicresearchgrants", label: "Olympic Research Grants" },
    ],
  },
  {
    label: "Work With BCORE",
    icon: Users,
    dropdown: [
      { to: "/team", label: "Team" },
      { to: "/careers", label: "Careers" },
    ],
  },
  { to: "/news", label: "News", icon: Newspaper },
  { to: "/contact", label: "Contact", icon: Phone },
];

  return (
    <header className="navbar-header" ref={navRef}>
      {/* Left Logo */}
      <div className="nav-left">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      {/* Center Nav */}
      <nav className="navbar">
        {/* Hamburger */}
        <button
          className={`menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={menuOpen ? "nav-list open" : "nav-list"}>
          {/* Mobile socials on top */}
          {isMobile && (
            <div className="mobile-socials">
              <a href="https://x.com/bcorerru" target="_blank" rel="noreferrer">
                <FaXTwitter  />
              </a>
              <a href="https://www.linkedin.com/company/bharat-centre-of-olympic-research-and-education-bcore/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/bcore_rru?igsh=MXFxejQzbzlqbDNjeg==" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          )}

          {navItems.map((item, idx) =>
            item.dropdown ? (
              <li
                key={idx}
                className={`dropdown ${openDropdown === idx ? "open" : ""}`}
                onMouseEnter={() => !isMobile && setOpenDropdown(idx)}
                onMouseLeave={() => !isMobile && setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="dropdown-toggle"
                  onClick={() => handleDropdownClick(idx)}
                  aria-expanded={openDropdown === idx}
                >
                  {item.icon && <item.icon className="nav-icon" />}
                  {item.label}
                  <ChevronDown className="chev" />
                </button>

                <ul className="nav-dropdown">
                  {item.dropdown.map((drop, i) => (
                    <li key={i}>
                      <NavLink
                        to={drop.to}
                        className={({ isActive }) =>
                          isActive ? "active" : ""
                        }
                        onClick={closeMenu}
                      >
                        {drop.icon && <drop.icon className="nav-icon" />}
                        {drop.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={idx}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "active nav-btn" : "nav-btn"
                  }
                  onClick={closeMenu}
                >
                  {item.icon && <item.icon className="nav-icon" />}
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Right Socials (desktop only) */}
      {!isMobile && (
        <div className="nav-right">
          <a href="https://x.com/bcorerru" target="_blank" rel="noreferrer">
            <FaXTwitter  />
          </a>
          <a href="https://www.linkedin.com/company/bharat-centre-of-olympic-research-and-education-bcore/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/bcore_rru?igsh=MXFxejQzbzlqbDNjeg==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      )}
    </header>
  );
};
