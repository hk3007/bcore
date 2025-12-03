import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import "./footer.css";

export const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      {/* Decorative Olympic Bar */}
      <div className="footer-top-bar"></div>

      <div className="footer-container">
        {/* Left: Logo + Mission */}
        <div className="footer-section">
          <h3>BCORE</h3>
          <p>
            Advancing Olympic values through research, education, and
            professional collaboration at Rashtriya Raksha University.
          </p>
        </div>

        {/* Middle: Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:bcore@rru.ac.in">bcore@rru.ac.in</a></p>
          <address>
            Rashtriya Raksha University,<br />
            Lavad, Gandhinagar, Gujarat 382305
          </address>
        </div>

        {/* Right: Social + Time */}
        <div className="footer-section">
          <h4>Stay Connected</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/bharat-centre-of-olympic-research-and-education-bcore/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/bcorerru" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://www.instagram.com/bcore_rru?igsh=MXFxejQzbzlqbDNjeg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
          <p className="footer-time">{dateTime.toLocaleString()}</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BCORE. All Rights Reserved.</p>
        <p>
          Developed by{" "}
          <a href="https://www.linkedin.com/in/harshil-khokhar/">Harshil Khokhar</a>
        </p>
      </div>
    </footer>
  );
};
