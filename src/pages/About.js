import React, { useEffect } from 'react';
import './about.css'; // Import the CSS file
import logo1 from './Images/BCORE Logo.png';
import logo5 from './Images/Indian_Olympic_Association_logo.png';
import { FaBullseye, FaFlagCheckered, FaFlask} from 'react-icons/fa';

export const About = () => {
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
    }, []); // Empty dependency array means this runs only once on mount

    return (
        <div className="about-page">
            <header className="about-header">
                <h1 className="main-title">About Us</h1>
                <p className="subtitle">Our mission, vision, and the pursuit of excellence in Olympic education.</p>
            </header>

            <section className="logo-section">
                <div className="logo-container">
                    <img src={logo1} alt="BCORE Logo" className="logo-Cont" />
                    <img src={logo5} alt="Indian Olympic Association Logo" className="logo-Cont" />
                </div>
            </section>
            
            <section className="content-section mission-vision-section">
                <div className="content-card">
                    <div className="icon-title-group">
                        <FaFlagCheckered className="card-icon" />
                        <h2 className="card-title">MISSION AND VISION</h2>
                    </div>
                    <ul className="info-list">
                        <li className="list-item-card">To develop, offer and organize educational programs, courses, and activities contributing to Olympic education in India as well as in South Asia.</li>
                        <li className="list-item-card">Encourage research and innovation in Olympic studies that contribute to the advancement of Olympic knowledge.</li>
                        <li className="list-item-card">Creating a database for Olympic Education, literature, personalities, and documentaries and facilitating as a resource center in Olympic Education.</li>
                        <li className="list-item-card">Collaborate with national sports bodies, government agencies, and other sports organizations to assist in the development of policies and strategies promoting the organization of sporting events, including hosting the Olympic Games.</li>
                    </ul>
                </div>

                <div className="content-card">
                    <div className="icon-title-group">
                        <FaBullseye className="card-icon" />
                        <h2 className="card-title">OBJECTIVES</h2>
                    </div>
                    <ul className="info-list">
                        <li className="list-item-card">To develop, offer and organize educational programs, courses, and activities contributing to Olympic education in India as well as in South Asia.</li>
                        <li className="list-item-card">Encourage research and innovation in Olympic studies that contribute to the advancement of Olympic knowledge.</li>
                        <li className="list-item-card">Creating a database for Olympic Education, literature, personalities, and documentaries and facilitating as a resource center in Olympic Education.</li>
                        <li className="list-item-card">Collaborate with national sports bodies, government agencies, and other sports organizations to assist in the development of policies and strategies promoting the organization of sporting events, including hosting the Olympic Games.</li>
                    </ul>
                </div>
            </section>
            
            <section className="bcore-overview">
                <div className="text-left">
                    <h2>BCORE's Unique Specialization</h2>
                    <p>
                        BCORE's unique area of specialization lies in the nuanced intersection of Olympic policies and international relations, where it contributes to advancing scholarly understanding and shaping policy discourse in this critical domain. Furthermore, BCORE actively champions the cause of sports for peace, leveraging the universal appeal of sports to bridge divides and promote harmony on both national and global scales.
                    </p>
                </div>
                <img src="https://www.asiaeducationreview.com/uploaded_images/newstransfer/xkpa2Olympic0.jpg" alt="Olympic Policies" className="bcore-image" />
                <div className="text-right">
                    <h2>BCORE's Outreach and Impact</h2>
                    <p>
                        Notably, BCORE, stationed in pioneering national security and police university of India, it extends its outreach to internal security forces, imparting the principles of Olympism to personnel within these essential institutions. Through tailored programs and training initiatives, BCORE initiates a pivotal role in enhancing the physical and mental resilience of security personnel, thereby contributing to the broader goal of national security and well-being.
                    </p>
                </div>
            </section>
        </div>
    );
};