import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./OlympicResearchGrants.css";
import { Helmet } from 'react-helmet';
import { 
  GraduationCap, Target, Users, Send, 
  Search, Landmark, Gift, ShieldCheck, 
  Mail, ExternalLink, Download, Award,
  AlertCircle, FileText, CheckCircle
} from "lucide-react";

const GrantCard = ({ title, label, icon: Icon, children, delay = 0 }) => (
  <motion.div 
    className="grant-card-item"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="grant-card-label">{label}</div>
    <div className="grant-card-header">
      <div className="icon-wrapper"><Icon size={22} /></div>
      <h3 className="grant-card-name">{title}</h3>
    </div>
    <div className="grant-card-body">{children}</div>
  </motion.div>
);

export const OlympicResearchGrants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grant-page-root">
      <Helmet>
        <title>Olympic Research Grants – Bharat Centre of Olympic Research & Education</title>
      </Helmet>

      {/* === HERO SECTION (Matched to Careers Style) === */}
      <section className="grant-hero-banner">
        <div className="hero-mesh-overlay"></div>
        <div className="grant-main-container hero-flex-layout">
          <motion.div 
            className="hero-content-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-display-title">
              Olympic <br />
              <span className="gold-text-accent">Research Grants</span>
            </h1>
            <p className="hero-display-subtitle">2025–26 Cohort • Empowering Scholars to Shape India’s Olympic Future</p>
          </motion.div>

          <div className="hero-visual-elements">
             <GraduationCap className="floating-icon icon-pos-1" size={45} />
             <Target className="floating-icon icon-pos-2" size={35} />
             <Award className="floating-icon icon-pos-3" size={40} />
          </div>
        </div>

        {/* Signature Wave Transition from Careers Page */}
        <div className="bcore-wave-bottom">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* === MAIN CONTENT SECTION === */}
      <div className="grant-body-wrapper">
        <div className="grant-main-container">
          
          {/* Introduction */}
          <div className="grant-intro-header">
            <h2 className="content-heading">Program <span className="blue-accent-text">Overview</span></h2>
            <p className="content-lead-text">
              The Bharat Centre of Olympic Research & Education (BCORE) aims to support Master's and PhD scholars in India and South Asia conducting Olympic-specific research that aligns with India's Olympic vision. Eligible topics include Olympic bidding, economic impact, infrastructure development, sustainability in sports, mega-event security, technology, social impact of Olympics, Olympic education and values, and allied areas. 
            </p>
          </div>

          {/* Info Grid (Objectives, Eligibility, Application) */}
          <div className="grant-info-grid">
            <GrantCard title="Objectives" label="Purpose" icon={Target} delay={0.1}>
              <ol className="grant-ol">
                <li>Support high-quality independent research in Olympic studies and allied fields.</li>
                <li>Promote research that informs Olympic strategies, policymaking, and institutional reforms.</li>
                <li>Encourage new theoretical and methodological approaches in Olympic research.</li>
                <li>Develop a network of young scholars advancing Olympic values and development.</li>
                <li>Promote research on Olympic bidding, economic impact, and sustainability in the Indian context.</li>
              </ol>
            </GrantCard>

            <GrantCard title="Eligibility" label="Criteria" icon={Users} delay={0.2}>
              <ul>
                <li>Citizens of India or South Asia enrolled in a full-time Master’s or PhD program at a recognized university.</li>
                <li>Research must be Olympic-specific and relevant to India's Olympic goals.</li>
                <li>Applicants must have an approved or ongoing research project with substantial progress.</li>
                <li>Early-stage researchers are encouraged to apply.</li>
              </ul>
            </GrantCard>

            <GrantCard title="How to Apply" label="Process" icon={Send} delay={0.3}>
              <p>Download and complete the BCORE Olympic Research Grant 2025 Application Form. Submit the filled form along with your CV and a 300–500 word research proposal summary to <strong>bcore@rru.ac.in</strong>.</p>
              <div className="grant-action-links">
                <a href="https://rru.ac.in/wp-content/uploads/2025/06/Application-form-Olympic-Grant-BCORE.pdf" target="_blank" rel="noreferrer" className="grant-link"><Download size={14}/> Form (PDF)</a>
                <a href="https://rru.ac.in/wp-content/uploads/2025/06/Guidlines-Olympic-Research-Grant-by-BCORE.pdf" target="_blank" rel="noreferrer" className="grant-link"><ExternalLink size={14}/> Guidelines</a>
                <a href="https://rru.ac.in/wp-content/uploads/2025/06/Olympic-Research-Grantby-BCORE.png" target="_blank" rel="noreferrer" className="grant-link"><FileText size={14}/> Poster</a>
              </div>
              {/* <p className="grant-deadline"><strong>Last date to apply:</strong> 14th August 2025</p> */}
              <p className="grant-note"><i>Note: If you miss the deadline but are working on a relevant project, you may still reach out for consideration.</i></p>
            </GrantCard>
          </div>

          {/* Compliance & Selection (Preserving all list data) */}
          <div className="detailed-compliance-row">
             <div className="compliance-item">
                <h3><Search className="gold-text-accent" /> Review & Selection</h3>
                <ul>
                  <li>Applications reviewed by experts in sports policy, economics, and Olympic studies.</li>
                  <li>Shortlisted candidates may present their research before the committee.</li>
                  <li>Selection is based on relevance, impact, and feasibility.</li>
                </ul>
             </div>
             <div className="compliance-item">
                <h3><Gift className="gold-text-accent" /> Entitlements</h3>
                <ul>
                  <li>Access to BCORE’s national and international resources.</li>
                  <li>Use of BCORE’s physical/virtual libraries and Human Performance Lab.</li>
                  <li>Assistance in data collection, networking, and collaborations.</li>
                  <li>Opportunities to present at BCORE seminars and conferences.</li>
                  <li>Certificate of Research Recognition upon successful completion.</li>
                </ul>
             </div>
             <div className="compliance-item">
                <h3><CheckCircle className="gold-text-accent" /> Grant Disbursement</h3>
                <ol>
                  <li>Grants disbursed in two phases: post-selection and post-publication.</li>
                  <li>Final report submission is mandatory.</li>
                  <li>Funds disbursed after verification of progress and documents.</li>
                </ol>
             </div>
          </div>

          {/* Final Detailed Sections */}
          <div className="grant-full-width-section">
            <div className="content-box">
              <h3><Landmark className="blue-accent-text" /> Obligations of Recipients</h3>
              <ul className="two-col-list">
                <li>Copyright of the final report rests with BCORE. Publishing requires prior permission.</li>
                <li>Acknowledge BCORE support in all outputs.</li>
                <li>Submit progress reports every 3 months.</li>
                <li>Submit final report upon completion or request.</li>
              </ul>
            </div>

            <div className="content-box compliance-box">
              <h3><ShieldCheck className="gold-text-accent" /> Monitoring & Compliance</h3>
              <ul className="two-col-list">
                <li>BCORE will review progress reports, expenditure statements, and utilization certificates.</li>
                <li>Non-compliance may result in termination and refund with 10% interest.</li>
                <li>Disclosure of other grants is mandatory.</li>
                <li>Preference given to applicants without major overlapping grants.</li>
                <li>All outputs must credit BCORE appropriately.</li>
                <li>BCORE may reassign affiliation if necessary for timely completion.</li>
                <li>Final reports undergo expert evaluation before final disbursement.</li>
                <li>BCORE reserves the right to audit and monitor progress anytime.</li>
              </ul>
            </div>
          </div>

          <section className="grant-highlight-section">
            <div className="grant-highlight-card">
              <h3 className="grant-highlight-title">
                BCORE – GoBananas Research Grant
              </h3>

              <p className="grant-highlight-text">
                <strong>BCORE</strong>, in collaboration with 
                <strong> GoBananas</strong>, a 360° experiential event agency from Ahmedabad,
                offers one research grant of <strong>₹50,000</strong> to a Postgraduate or PhD scholar.
              </p>

              <p className="grant-highlight-text">
                The grant supports research focused on the professional and operational
                dimensions of Olympic mega-events.
              </p>
            </div>
          </section>

          {/* Contact Footer */}
          <section className="grant-page-footer">
            <div className="footer-cta-card">
              <Mail className="footer-cta-icon" size={40} />
              <h3>Contact & Queries</h3>
              <p>For queries, email <strong>bcore.office@gmail.com</strong> or visit <strong>bcore.rru.ac.in</strong></p>
              <div className="footer-btns">
                <a href="mailto:bcore.office@gmail.com" className="grant-primary-btn">Email Office</a>
                <a href="https://bcore.rru.ac.in" target="_blank" rel="noreferrer" className="grant-outline-btn">Visit Website</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OlympicResearchGrants;