import React , {useEffect}from 'react';
import './about.css';  // Import the CSS file
import logo1 from './Images/BCORE Logo.png';
import logo5 from './Images/Indian_Olympic_Association_logo.png';

export const About = () => {
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs only once on mount
    return (
    <div>
        {/* Logo Section */}
        <section className="logo-section-1">
                <div className="logos-1">
                    <img src={logo1} alt="Logo 3" className="logo-1" />
                    <img src={logo5} alt="Logo 5" className="logo-1" />
                    {/* <img src={logo3} alt="Logo 4" className="logo-1" /> */}
                </div>
            </section>
        <section className="about-section">
            <div className="content">
                <h1 className="title">MISSION AND VISION</h1>
                <ul className="list">
                    <li className="list-item">
                        To develop, offer and organize educational programs, courses, and activities contributing to Olympic education in India as well as in South Asia.
                    </li>
                    <li className="list-item">
                        Encourage research and innovation in Olympic studies that contribute to the advancement of Olympic knowledge.
                    </li>
                    <li className="list-item">
                        Creating a database for Olympic Education, literature, personalities, and documentaries and facilitating as a resource center in Olympic Education.
                    </li>
                    <li className="list-item">
                        Collaborate with national sports bodies, government agencies, and other sports organizations to assist in the development of policies and strategies promoting the organization of sporting events, including hosting the Olympic Games.
                    </li>
                </ul>
                <h1 className="title">OBJECTIVES</h1>
                <ul className="list">
                    <li className="list-item">
                        To develop, offer and organize educational programs, courses, and activities contributing to Olympic education in India as well as in South Asia.
                    </li>
                    <li className="list-item">
                        Encourage research and innovation in Olympic studies that contribute to the advancement of Olympic knowledge.
                    </li>
                    <li className="list-item">
                        Creating a database for Olympic Education, literature, personalities, and documentaries and facilitating as a resource center in Olympic Education.
                    </li>
                    <li className="list-item">
                        Collaborate with national sports bodies, government agencies, and other sports organizations to assist in the development of policies and strategies promoting the organization of sporting events, including hosting the Olympic Games.
                    </li>
                </ul>
                <h1 className="title">RESEARCH ACTIVITIES</h1>
                <p className="list-item">Recently undergraduate students from School of Physical Education and Sports completed research projects centered towards Olympics and Olympic education. Some of the titles are as follows- </p>
                <ul className="list">
                    <li className="list-item">
                    Trans And Cis Athlete; Comprehensive Understanding of Physiological Contrast and Road to Inclusion
                    </li>
                    <li className="list-item">
                    Mental Health Challenges of Olympians
                    </li>
                    <li className="list-item">
                    Impact Of Social Media on The Performance and Public Perception of Track and Field Olympians.
                    </li>
                    <li className="list-item">
                    Technological Evolution in The Olympics Games Decision Making: Officiating Perspective.
                    </li>
                    <li className="list-item">
                    Prevalence Of Doping on Track and Field Athletes of India
                    </li>
                </ul>
            </div>
        </section>
    </div>
    );
};
