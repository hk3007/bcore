import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import React from 'react';
import './footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section: Email & Social Icons */}
                <div className="footer-left">
                    <p><a href="mailto:bcore@rru.ac.in">bcore@rru.ac.in</a></p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.instagram.com/bcore_rru?igsh=MWk5OW41cWJlY3l1NQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>

                {/* Center Section: Copyright & Developed By */}
                <div className="footer-center">
                    <p>© BCORE. All Rights Reserved.</p>
                    <p>Developed by: <a href="https://www.linkedin.com/in/harshil-khokhar/">Harshil Khokhar </a> and <a href="https://www.linkedin.com/in/harshdipsinh-rathod/">Harshdipsinh Rathod</a></p>
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
