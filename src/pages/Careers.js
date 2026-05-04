import React, { useEffect } from "react";
import { Briefcase, Mail, ShieldCheck, Globe, Zap, ArrowRight, FileText, Award, Search, UserPlus, Star, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import "./Careers.css";
import EOI1 from "../pages/Broucher/EOI 1.pdf";

const Careers = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const jobs = [
    {
      title: "Assistant Professor",
      description: "Leading research initiatives in Olympic education and high-performance sports science.",
      pdf: EOI1,
    }
  ];

  return (
    <div className="bcore-careers-root">
      <Helmet><title>Careers | BCORE</title></Helmet>

      {/* 🚀 High-Impact Hero Section */}
      <section className="bcore-hero">
        <div className="bcore-bg-graphics">
          <div className="bcore-grid-mesh"></div>
          <div className="bcore-radial-glow"></div>
          {/* Moving objects related to careers */}
          <div className="bcore-career-objects">
            <Briefcase className="obj obj-1" size={24} />
            <FileText className="obj obj-2" size={30} />
            <Award className="obj obj-3" size={20} />
            <Globe className="obj obj-4" size={26} />
            <Star className="obj obj-5" size={18} />
          </div>
        </div>

        <div className="bcore-container bcore-hero-flex">
          <div className="bcore-hero-text">
            <h1 className="bcore-title">Elevating the <br /><span className="gold-accent">Olympic</span> Spirit</h1>
            <p className="bcore-lead">Bharat Centre of Olympic Research & Education</p>
          </div>

          <div className="bcore-hero-infographic">
            <div className="infographic-box main-node">
              <Award className="gold-accent" size={32} />
              <span>Elite Talent Hub</span>
            </div>
            <div className="node-connector line-1"></div>
            <div className="infographic-box sub-node-1">Research</div>
            <div className="infographic-box sub-node-2">Innovation</div>
            <div className="infographic-box sub-node-3">Impact</div>
          </div>
        </div>

        <div className="bcore-wave-bottom">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* 🌟 New Values Section (Integrity, Global Impact, Innovation) */}
      <section className="bcore-pillars-section">
        <div className="bcore-container">
          <div className="bcore-section-title">
            <h2>Why Join <span className="gold-accent">BCORE?</span></h2>
          </div>
          <div className="bcore-pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-box"><ShieldCheck size={32} /></div>
              <h3>Integrity First</h3>
              <p>Work in an environment that prioritizes ethical research, transparency and fair play.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-box"><Globe size={32} /></div>
              <h3>Global Impact</h3>
              <p>Your work contributes directly to international Olympic research and athlete performance development.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-box"><Zap size={32} /></div>
              <h3>Innovation</h3>
              <p>Access cutting-edge tools and sports research methodologies at Rashtriya Raksha University.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔄 Recruitment Process */}
      <section className="bcore-flow-section">
        <div className="bcore-container">
          <div className="bcore-section-title">
            <h2>Our Recruitment <span className="blue-accent">Process</span></h2>
            <p>A transparent journey from application to elite contribution.</p>
          </div>
          <div className="bcore-process-grid">
            <div className="process-card">
              <div className="process-icon"><Search /></div>
              <h3>01. Discovery</h3>
              <p>Apply for open research or faculty positions.</p>
            </div>
            <div className="process-arrow"></div>
            <div className="process-card">
              <div className="process-icon"><UserPlus /></div>
              <h3>02. Selection</h3>
              <p>Evaluation based on performance and vision.</p>
            </div>
            <div className="process-arrow"></div>
            <div className="process-card">
              <div className="process-icon"><CheckCircle /></div>
              <h3>03. Excellence</h3>
              <p>Onboarding and contributing to the Olympic movement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 💼 Openings */}
      <section id="openings" className="bcore-jobs-section">
        <div className="bcore-container">
          <div className="bcore-jobs-header">
             <Briefcase size={28} className="gold-accent" />
             <h2>Current Openings</h2>
          </div>
          <div className="bcore-jobs-grid">
            {jobs.map((job, i) => (
              <div className="job-modern-card" key={i}>
                <div className="job-card-top">
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                </div>
                <div className="job-card-bottom">
                  <a href={job.pdf} target="_blank" rel="noopener noreferrer" className="bcore-btn-dark">
                    Full Details <FileText size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Equality Section */}
      <section className="bcore-equality-section">
        <div className="bcore-container">
          <div className="bcore-equality-card">
            <div className="equality-icon-wrap">
              <Globe className="blue-accent" size={32} />
            </div>
            <div className="equality-content">
              <h2>Our Commitment to <span className="gold-accent">Equality</span></h2>
              <p>
                BCORE provides equal opportunities to all. We celebrate diversity and are 
                committed to creating an inclusive environment regardless of race, 
                religion, gender identity, or background.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;