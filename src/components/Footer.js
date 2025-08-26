import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import './footer.css';
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
    const [dateTime, setDateTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);


    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section: Email & Social Icons */}
                <div className="footer-left">
                    <p><a href="mailto:bcore@rru.ac.in">bcore@rru.ac.in</a></p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/company/bharat-centre-of-olympic-research-and-education-bcore/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://x.com/bcorerru" target="_blank" rel="noopener noreferrer"><FaXTwitter  /></a>
                        <a href="https://www.instagram.com/bcore_rru?igsh=MXFxejQzbzlqbDNjeg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>

                {/* Center Section: Date, Time, and Visit Count */}
                <div className="footer-center">
                    <p>© BCORE. All Rights Reserved.</p>
                    <p>Developed by: <a href="https://www.linkedin.com/in/harshil-khokhar/">Harshil Khokhar</a> and <a href="https://www.linkedin.com/in/harshdipsinh-rathod/">Harshdipsinh Rathod</a></p>
                    <p>{dateTime.toLocaleString()}</p>
                </div>

                {/* Right Section: Address */}
                <div className="footer-right">
                    <address>
                        Bharat Centre of Olympic Research and Education,<br />
                        Rashtriya Raksha University, Raksha Shakti Road,<br />
                        Lavad, Gandhinagar - Gujarat 382305
                    </address>
                </div>
            </div>
        </footer>
    );
};
