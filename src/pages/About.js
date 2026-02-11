import React, { useEffect } from 'react';
import './about.css'; 
import logo1 from './Images/BCORE Logo.png';
import logo5 from './Images/Indian_Olympic_Association_logo.png';
import { FaQuoteLeft } from 'react-icons/fa';
import Map from './Images/Olympic Map.png';
import { Helmet } from 'react-helmet';

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
    <>
        <Helmet>
            <title>About – Bharat Centre of Olympic Research & Education</title>
            <meta name="description" content="Learn about BCORE's mission and history." />
        </Helmet>
        
        <div className="about-container">
            {/* --- Hero Section --- */}
            <section className="about-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-badge">Established 2024</span>
                    <h1 className="hero-title">Elevating the <span className="gold-text">Olympic</span> Spirit</h1>
                    <p className="hero-subtitle">Bharat Centre of Olympic Research & Education</p>
                </div>
            </section>

            {/* --- Partnership Logos --- */}
            <div className="partnership-strip">
                <img src={logo1} alt="BCORE Logo" />
                <div className="vertical-divider"></div>
                <img src={logo5} alt="Indian Olympic Association Logo" />
            </div>

            {/* --- Introduction Section --- */}
            <section className="intro-section">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text">
                            <h2>The Legacy of <br/> Modern Olympism</h2>
                            <p className="obj-p">The idea of creating an Olympic Studies Centre can be traced back to the reviver of the Modern Olympic Games, Baron Pierre de Coubertin, who said shortly before his death: <strong>“I believe that a centre of Olympic studies would aid the preservation and progress of my work more than anything else.”</strong></p>
                            <p className="obj-p">The IOC Olympic Studies Centre was created under the Antonio Samaranch presidency in 1982. Inspired by these words, BCORE was established in 2024 as the first South Asian Olympic Study Center.</p>
                        </div>
                        <div className="intro-image">
                            <img src={Map} alt="Olympic Map" className="map-visual" />
                            <div className="image-accent-box"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Quote Section --- */}
            <section className="quote-breakout">
                <FaQuoteLeft className="quote-icon" />
                <blockquote className="director-quote">
                    "Sports and education go hand in hand, where disciplines merge to create a robust Olympic ecosystem. The seeds we sow today will shape the next generation of Olympic scholars."
                </blockquote>
                <cite>— Utsav Chaware, Director</cite>
            </section>

            {/* --- Objectives Section (Grid) --- */}
            <section className="objectives-modern">
                <div className="container">
                    <h2 className="section-title">Core Objectives</h2>
                    <div className="obj-grid">
                        <div className="obj-card">
                            <div className="obj-num">01</div>
                            <p className="obj-p">To develop, offer and organize educational programs and activities contributing to Olympic education in India and South Asia.</p>
                        </div>
                        <div className="obj-card">
                            <div className="obj-num">02</div>
                            <p className="obj-p">Encourage research and innovation in Olympic studies that contribute to the advancement of Olympic knowledge.</p>
                        </div>
                        <div className="obj-card">
                            <div className="obj-num">03</div>
                            <p className="obj-p">Creating a database for Olympic Education, literature, personalities, and documentaries and facilitating as a resource center in Olympic Education.</p>
                        </div>
                        <div className="obj-card">
                            <div className="obj-num">04</div>
                            <p className="obj-p">Collaborate with national sports bodies, government agencies, and other sports organizations to assist in the development of policies and strategies promoting the organization of sporting events, including hosting the Olympic Games.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Impact Section --- */}
            <section className="impact-clean">
            <div className="impact-wrapper">
                <div className="impact-header">
                <h2 className="impact-main-title">OPERATIONAL EXCELLENCE</h2>
                </div>

                <div className="impact-grid-text">
                <div className="impact-box">
                    <div className="impact-info">
                    <span className="impact-index">01</span>
                    <h3>Unique Specialization</h3>
                    <p className="obj-p">BCORE's unique area of specialization lies in the nuanced intersection of Olympic policies and international relations, where it contributes to advancing scholarly understanding and shaping policy discourse in this critical domain. Furthermore, BCORE actively champions the cause of sports for peace, leveraging the universal appeal of sports to bridge divides and promote harmony on both national and global scales.</p>
                    </div>
                </div>

                <div className="impact-box">
                    <div className="impact-info">
                    <span className="impact-index">02</span>
                    <h3>Outreach & Impact</h3>
                    <p className="obj-p">Notably, BCORE, stationed in pioneering national security and police university of India, it extends its outreach to internal security forces, imparting the principles of Olympism to personnel within these essential institutions. Through tailored programs and training initiatives, BCORE initiates a pivotal role in enhancing the physical and mental resilience of security personnel, thereby contributing to the broader goal of national security and well-being.</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    </>
    );
};