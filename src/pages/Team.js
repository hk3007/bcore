import React, { useEffect } from "react";
import { TeamMember } from "./TeamMember";
import './Team.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

// Image Imports
import image2 from '../pages/Images/TEAM/Bimal Patel.jpeg';
import image3 from '../pages/Images/TEAM/Gaurav Singh Khushwah.jpg';
import image12 from '../pages/Images/TEAM/Utsav Chaware.jpg';
import image4 from '../pages/Images/TEAM/Krishna Ramani.jpeg';
import image6 from '../pages/Images/TEAM/Sonika Bisht.jpeg';
import image7 from '../pages/Images/TEAM/Tonmoy Paul.png';

const teamMembers = [
  { name: 'Prof. (Dr.) Bimal N. Patel', designation: 'Vice-Chancellor', photo: [image2], info: 'Member, UN International Law Commission (2023-2027). Member, National Security Advisory Board of India.' },
  { name: 'Dr. Jasbirkaur Thadhani', designation: 'University Dean (I/c)', photo: 'https://legacy.rru.ac.in/wp-content/uploads/2025/02/Jasbir-img-2-scaled-1.jpg', info: 'University Dean (I/c) & Assistant Professor at SBSFI.' },
  { name: 'Lt. (Dr.) Gaurav Singh Kushwah', designation: 'Associate University Dean', photo: [image3], info: 'Associate University Dean & Director School of NCC and Police Martial Music Band & Senior Assistant Director (Physical Education and Sports)' },
  { name: 'Dr. Utsav Chaware', designation: 'Director BCORE', photo: [image12], info: 'Expert in Olympic Studies, Talent Identification, and Sports Sciences.' },
  { name: 'Mr. Yash Sharma', designation: 'I/c Director & Assistant Prof.', photo: 'https://legacy.rru.ac.in/wp-content/uploads/2023/05/Yash-Sharma-scaled.jpg', info: 'Specializing in sports science and physical education.' },
  { name: 'Ms. Sonika Bisht', designation: 'Research Officer BCORE', photo: [image6], info: 'Research Officer at BCORE.' },
  { name: 'Ms. Khushbu Shah', designation: 'Administrative Assistant cum Coordinator', photo: "https://legacy.rru.ac.in/wp-content/uploads/2024/01/Khusbhu-Shah-min-scaled.jpg", info: 'Administrative Assistant Cum Coordinator with Bharat Centre for Olympic Research and Education (BCORE)' }
];

const interns = [
  { name: 'Krishna Ramani', schoolName: 'School of Internal Security, Defence and Strategic Studies', photo: [image4], info: 'Sponsership And Events' },
  { name: 'Tonmoy Paul', schoolName: 'School of Internal Security, Defence and Strategic Studies', photo: [image7], info: 'Multimedia Content Architect' }
];

export const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1200, easing: 'ease-out-back', once: true });
  }, []);

  return (
    <div className="tm-futuristic-root">
      <Helmet>
        <title>BCORE Team | Bharat Centre of Olympic Research</title>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&family=Cinzel:wght@700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* --- 3D ANIMATED BACKGROUND --- */}
      <div className="tm-3d-scene">
        <div className="tm-ring tm-ring-1"></div>
        <div className="tm-ring tm-ring-2"></div>
        <div className="tm-cube tm-cube-1"></div>
        <div className="tm-cube tm-cube-2"></div>
        <div className="tm-glow-blob"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="tm-hero-v2">
        <div className="tm-hero-overlay"></div>
        <div className="tm-hero-content" data-aos="zoom-out">
          <h1 className="tm-hero-title">BCORE <span className="tm-gold-text">TEAM</span></h1>
          <p className="tm-hero-subtitle">Bharat Centre of Olympic Research & Education</p>
          <div className="tm-hero-line"></div>
        </div>
        <div className="tm-wave-bottom">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path 
              fill="#ffffff" 
              d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
      </section>

      <div className="tm-main-container">
        {/* Leadership Section */}
        <div className="tm-section-heading" data-aos="fade-right">
          <h2>CORE <span className="tm-gold-text">LEADERSHIP</span></h2>
        </div>
        <div className="tm-grid-v2">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="tm-glass-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <TeamMember name={member.name} designation={member.designation} photo={member.photo} />
              <div className="tm-card-footer">
                <p>{member.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interns Section */}
        <div className="tm-section-heading tm-margin-top" data-aos="fade-right">
          <h2>BCORE <span className="tm-gold-text">INTERNS</span></h2>
        </div>
        <div className="tm-grid-v2">
          {interns.map((intern, index) => (
            <div key={intern.name} className="tm-glass-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <TeamMember name={intern.name} designation={intern.schoolName} photo={intern.photo} />
              <div className="tm-card-footer">
                <p>{intern.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};