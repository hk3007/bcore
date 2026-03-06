import React, { useEffect } from "react";
import { Briefcase, Mail, Users, ShieldCheck, Globe, Zap, ArrowRight } from "lucide-react";
import { Helmet } from 'react-helmet';
import "./Careers.css";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bcore-careers-page-root">
      <Helmet>
        <title>Careers | BCORE</title>
        <meta name="description" content="Join the Bharat Centre of Olympic Research & Education." />
      </Helmet>

      {/* 🚀 Hero Section */}
      <section className="bcore-careers-hero-wrapper">
        <div className="bcore-careers-container">
          <div className="bcore-careers-hero-layout">
            <div className="bcore-careers-hero-text">
              <span className="bcore-careers-badge">Join the Movement</span>
              <h1 className="bcore-careers-main-title">
                Shape the Future of <br />
                <span className="bcore-careers-gradient-text">Olympic Excellence</span>
              </h1>
              <p className="bcore-careers-hero-sub">
                At BCORE, we don't just study sports; we build the framework for the next 
                generation of champions. Join a team dedicated to research and elite performance.
              </p>
              <div className="bcore-careers-hero-btns">
                <a href="#openings" className="bcore-careers-btn-filled">
                  View Openings <ArrowRight size={18} />
                </a>
                <a href="mailto:bcore@rru.ac.in" className="bcore-careers-btn-outline">
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="bcore-careers-hero-graphic">
              <div className="bcore-careers-blob"></div>
              <Users className="bcore-careers-floating-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 Benefits Section */}
      <section className="bcore-careers-benefits-section">
        <div className="bcore-careers-container">
          <div className="bcore-careers-benefits-grid">
            <div className="bcore-careers-card">
              <ShieldCheck className="bcore-careers-card-icon" />
              <h3>Integrity First</h3>
              <p>Work in an environment that prioritizes ethical research and fair play.</p>
            </div>
            <div className="bcore-careers-card">
              <Globe className="bcore-careers-card-icon" />
              <h3>Global Impact</h3>
              <p>Your research contributes directly to the international Olympic movement.</p>
            </div>
            <div className="bcore-careers-card">
              <Zap className="bcore-careers-card-icon" />
              <h3>Innovation</h3>
              <p>Access to cutting-edge tools and methodologies at Rashtriya Raksha University.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 💼 Jobs Section */}
      <section id="openings" className="bcore-careers-jobs-section">
        <div className="bcore-careers-container">
          <div className="bcore-careers-section-header">
            <Briefcase className="bcore-careers-header-icon" />
            <h2>Available Opportunities</h2>
          </div>

          <div className="bcore-careers-empty-state">
            <div className="bcore-careers-pulse-dot"></div>
            <h3>We're currently scouting talent</h3>
            <p>While there are no active postings, we're always eager to meet passionate researchers.</p>
            <div className="bcore-careers-contact-strip">
              <Mail size={18} />
              <span>Direct Inquiries: <a href="mailto:bcore@rru.ac.in">bcore@rru.ac.in</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* ⚖️ Equality Commitment */}
      <footer className="bcore-careers-footer">
        <div className="bcore-careers-container">
          <div className="bcore-careers-footer-box">
            <h3>Our Commitment to Equality</h3>
            <p>
              BCORE provides equal opportunities to all. We celebrate diversity and are committed 
              to creating an inclusive environment regardless of race, religion, gender identity, or background.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Careers;