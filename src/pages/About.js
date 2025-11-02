import React, { useEffect } from 'react';
import './about.css'; // Updated CSS
import logo1 from './Images/BCORE Logo.png';
import logo5 from './Images/Indian_Olympic_Association_logo.png';
import { FaBullseye, FaFlagCheckered } from 'react-icons/fa';
import Map from './Images/Olympic Map.png';

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            {/* === Header === */}
            <header className="about-header">
                <h1 className="main-title">About Us</h1>
                <p className="subtitle">Our mission, vision, and the pursuit of excellence in Olympic education.</p>
            </header>

            {/* === Logo Section === */}
            <section className="logo-section">
                <div className="logo-container">
                    <img src={logo1} alt="BCORE Logo" className="logo-Cont" />
                    <img src={logo5} alt="Indian Olympic Association Logo" className="logo-Cont" />
                </div>
            </section>

            <section className="objectives-section">
            <div className="objectives-box">
                {/* Right Objectives Card */}
                <div className="objectives-content">
                <div className="content-card">
                    <div className="icon-title-group">
                    <FaBullseye className="card-icon" />
                    <h2 className="card-title">INTRODUCTION</h2>
                    </div>
                    <ul className="info-list">
                    <li className="list-item-card">The idea of creating an Olympic Studies Centre can be traced back to the reviver of the Modern Olympic Games, Baron Pierre de Coubertin, who said shortly before his death: “I believe that a centre of Olympic studies would aid the preservation and progress of my work more than anything else.” The IOC Olympic Studies Centre was created under the Antonio Samaranch presidency in 1982 with the objective to contribute to the understanding, education and studies of Olympism.</li>
                    <li className="list-item-card">Inspired from the words of Baron Pierre de Coubertin, the Bharat Center of Olympic Research and Education (BCORE) was established in 2024. The BCORE as per its Director, Utsav Chaware is envisioned to have “sports and education go hand in hand, where disciplines merge to create a robust Olympic ecosystem. The seeds we sow today will shape the next generation of Olympic scholars, workforce and leaders”.</li>
                    <li className="list-item-card">Being the first Indian and South Asian Olympic Study Center, the BCORE aims to carry forward the following objectives</li>
                    </ul>
                </div>
                </div>
                {/* Left Image */}
                <div className="objectives-image-container">
                <img src={Map} alt="Olympic Education" className="objectives-image" />
                </div>

            </div>
            </section>

            <section className="objectives-section">
            <div className="objectives-box">
                {/* Right Objectives Card */}
                <div className="objectives-content">
                <div className="content-card">
                    <div className="icon-title-group">
                    <FaFlagCheckered className="card-icon" />
                    <h2 className="card-title">OBJECTIVES</h2>
                    </div>
                    <ul className="info-list">
                    <li className="list-item-card">
                        To develop, offer and organize educational programs, courses, and
                        activities contributing to Olympic education in India as well as in
                        South Asia.
                    </li>
                    <li className="list-item-card">
                        Encourage research and innovation in Olympic studies that contribute
                        to the advancement of Olympic knowledge.
                    </li>
                    <li className="list-item-card">
                        Creating a database for Olympic Education, literature, personalities,
                        and documentaries and facilitating as a resource center in Olympic
                        Education.
                    </li>
                    <li className="list-item-card">
                        Collaborate with national sports bodies, government agencies, and other
                        sports organizations to assist in the development of policies and
                        strategies promoting the organization of sporting events, including
                        hosting the Olympic Games.
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </section>

            {/* === BCORE Overview Section === */}
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
