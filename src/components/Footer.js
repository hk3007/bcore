import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import React from 'react';
import './footer.css'; // Import the CSS for the footer

export const Footer = () => {
    return (
        <footer className="footer">
        <p>© BCORE All Rights Reserved. Developed by: Harshdipsinh Rathod and Harshil Khokhar</p>
        <div className="social-icons">
        <p><a href="mailto:bcore@rru.ac.in">bcore@rru.ac.in</a></p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/bcore_rru?igsh=MWk5OW41cWJlY3l1NQ==" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
    </footer>
    );
};
