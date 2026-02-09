import React, { useEffect } from 'react';
import './about.css'; 
import logo1 from './Images/BCORE Logo.png';
import logo5 from './Images/Indian_Olympic_Association_logo.png';
import { FaBullseye, FaFlagCheckered, FaQuoteLeft, FaGlobeAmericas } from 'react-icons/fa';
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
                            <div className="section-label"><FaBullseye /> Introduction</div>
                            <h2>The Legacy of <br/> Modern Olympism</h2>
                            <p>The idea of creating an Olympic Studies Centre can be traced back to the reviver of the Modern Olympic Games, Baron Pierre de Coubertin, who said shortly before his death: <strong>“I believe that a centre of Olympic studies would aid the preservation and progress of my work more than anything else.”</strong></p>
                            <p>The IOC Olympic Studies Centre was created under the Antonio Samaranch presidency in 1982. Inspired by these words, BCORE was established in 2024 as the first South Asian Olympic Study Center.</p>
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
                    <div className="section-label center"><FaFlagCheckered /> Our Mission</div>
                    <h2 className="section-title">Core Objectives</h2>
                    <div className="obj-grid">
                        <div className="obj-card">
                            <div className="obj-num">01</div>
                            <p>To develop, offer and organize educational programs and activities contributing to Olympic education in India and South Asia.</p>
                        </div>
                        <div className="obj-card">
                            <div className="obj-num">02</div>
                            <p>Encourage research and innovation in Olympic studies that contribute to the advancement of Olympic knowledge.</p>
                        </div>
                        <div className="obj-card">
                            <div className="obj-num">03</div>
                            <p>Creating a database for Olympic Education and facilitate as a resource center for literature and documentaries.</p>
                        </div>
                        <div className="obj-card">
                            <div className="obj-num">04</div>
                            <p>Collaborate with national sports bodies to assist in development of policies for hosting the Olympic Games.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Impact Section --- */}
            <section className="impact-section">
                <div className="container">
                    <div className="impact-row">
                        <div className="impact-card">
                            <h3>Unique Specialization</h3>
                            <p>BCORE's area of specialization lies in the intersection of Olympic policies and international relations, contributing to policy discourse and sports for peace.</p>
                        </div>
                        <div className="impact-visual">
                            <img src="https://www.asiaeducationreview.com/uploaded_images/newstransfer/xkpa2Olympic0.jpg" alt="Impact" />
                        </div>
                        <div className="impact-card">
                            <h3>Outreach & Impact</h3>
                            <p>Stationed in a pioneering national security university, BCORE extends Olympism to internal security forces, enhancing resilience through tailored training.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
    );
};