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
  Bell,
} from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../pages/Images/BCORE Logo.png";
import "./navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openAnnouncement, setOpenAnnouncement] = useState(false);

  const navRef = useRef(null);

  // Example announcements – replace with API data
  const announcements = [
    "Please note: <br />All <i>FAQs</i> are available on the <i>IORC</i> event page for your reference.",
    "Full Paper Submission and Registration Deadline extended to 15 January 2026 for the 2nd International Olympic Research Conference.",
    "BCORE partners with NADA for the 2nd International Olympic Research Conference at Rashtriya Raksha University",
    "Accommodation Notice: <br />Sharing-based campus accommodation is available for the International Olympic Research Conference 2026. Please book in advance. Visit the Accommodation section for details.",
    "Abstract submissions are Date Extended till 31 December 2025 for the 2nd International Olympic Research Conference (ORC). ",
    "Registrations for the BCORE Night run 2026 are now open. Organised by BCORE, the night run will be held on 10 January 2026, bringing together athletes, students, enthusiasts to promote fitness, resilience and the Spirit.",
    "Bcore is pleased to announce that it will host the 2nd International ORC from 27-30 January 2026, bringing together global experts, scholars, and researchers to promote knowledge sharing in Olympic and sport research/ governance."
  ];

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1299px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

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

useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    // Only close if user scrolls DOWN at least 10px after menu is open
    if (menuOpen && Math.abs(window.scrollY - lastScrollY) > 10) {
      setMenuOpen(false);
      setOpenDropdown(null);
    }
    lastScrollY = window.scrollY;
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
  
useEffect(() => {
  if (menuOpen || openAnnouncement) {
    // ─── OPEN: Lock scroll + save position ───
    const scrollY = document.documentElement.scrollTop || window.pageYOffset;

    document.body.classList.add("body-lock");
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  } else {
    // ─── CLOSE: Restore exact scroll position ───
    const scrollY = document.body.style.top 
      ? Math.abs(parseInt(document.body.style.top, 10)) 
      : 0;

    document.body.classList.remove("body-lock");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    // This is the magic line — restores scroll instantly without jump
    window.scrollTo(0, scrollY);
  }
}, [menuOpen, openAnnouncement]);


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
      <div className="nav-left">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <nav className="navbar">

        {/* MOBILE ANNOUNCEMENT ICON */}
        {isMobile && (
          <div
            className="mobile-announcement"
            onClick={() => setOpenAnnouncement(true)}
          >
            <Bell className="announcement-icon" />
            <span className="announcement-badge">{announcements.length}</span>
          </div>
        )}

        {/* HAMBURGER */}
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

        {/* MOBILE SIDEBAR LIST */}
        <ul className={menuOpen ? "nav-list open" : "nav-list"}>
          {isMobile && (
            <div className="mobile-socials">
              <a href="https://x.com/bcorerru" target="_blank" rel="noreferrer">
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/bharat-centre-of-olympic-research-and-education-bcore/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/bcore_rru"
                target="_blank"
                rel="noreferrer"
              >
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

      {/* Desktop right side */}
      {!isMobile && (
        <div className="nav-right">

          {/* DESKTOP ANNOUNCEMENT ICON */}
          <div
            className="announcement-wrapper"
            onClick={() => setOpenAnnouncement(true)}
          >
            <Bell className="announcement-icon" />
            <span className="announcement-badge">{announcements.length}</span>
          </div>

          <a href="https://x.com/bcorerru" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/bharat-centre-of-olympic-research-and-education-bcore/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/bcore_rru"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      )}

      {/* ANNOUNCEMENT MODAL */}
      {openAnnouncement && (
        <div
          className="announcement-modal-overlay"
          onClick={() => setOpenAnnouncement(false)}
        >
          <div
            className="announcement-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Announcements</h2>

            <ul>
              {announcements.map((a, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{ __html: a }}
                ></li>
              ))}
            </ul>


            <button
              className="close-modal"
              onClick={() => setOpenAnnouncement(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
