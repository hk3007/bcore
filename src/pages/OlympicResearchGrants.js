import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./OlympicResearchGrants.css";
import { Helmet } from "react-helmet";
import {
  Target, Users, Search, Landmark, Gift, ShieldCheck,
  Mail, ExternalLink, Download, Award,
  FileText, CheckCircle, ChevronRight,
  BookOpen, Zap, Globe, Clock, Star
} from "lucide-react";

const SectionTag = ({ children }) => (
  <span className="section-tag">{children}</span>
);

const Step = ({ n, text }) => (
  <div className="step-row">
    <span className="step-num">{n}</span>
    <span className="step-text">{text}</span>
  </div>
);

const GrantTab = ({ active, onClick, label, badge }) => (
  <button className={`grant-tab ${active ? "grant-tab--active" : ""}`} onClick={onClick}>
    <span>{label}</span>
    {badge && <span className="grant-tab-badge">{badge}</span>}
  </button>
);

export const OlympicResearchGrants = () => {
  const [activeGrant, setActiveGrant] = useState("bcore");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="grp-root">
      <Helmet>
        <title>Olympic Research Grants – BCORE</title>
      </Helmet>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="grp-hero">
        <div className="grp-hero__grid-bg" aria-hidden />
        <div className="grp-hero__glow grp-hero__glow--1" aria-hidden />
        <div className="grp-hero__glow grp-hero__glow--2" aria-hidden />

        <div className="grp-container grp-hero__inner">
          <motion.div
            className="grp-hero__content"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTag>2026 Cohort</SectionTag>
            <h1 className="grp-hero__title">
              Olympic<br />
              <em>Research Grants</em>
            </h1>
            <p className="grp-hero__sub">
              The Bharat Centre of Olympic Research & Education (BCORE), Rashtriya Raksha University, supports emerging scholars whose work advances Olympic knowledge, evidence-based policymaking, and sport development in India and South Asia.
            </p>
            <div className="grp-hero__pills">
              <span className="hero-pill"><Globe size={14} /> India & South Asia</span>
              <span className="hero-pill"><BookOpen size={14} /> Olympic Studies</span>
              <span className="hero-pill"><Zap size={14} /> Funded Research</span>
            </div>
          </motion.div>

          <motion.div
            className="grp-hero__stats"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-stat-card">
              <Award className="hero-stat-icon" size={28} />
              <div className="hero-stat-value">₹50,000</div>
              <div className="hero-stat-label">GoBananas Grant</div>
            </div>
            <div className="hero-stat-card">
              <Star className="hero-stat-icon" size={28} />
              <div className="hero-stat-value">2</div>
              <div className="hero-stat-label">Active Grants</div>
            </div>
            <div className="hero-stat-card">
              <Clock className="hero-stat-icon" size={28} />
              <div className="hero-stat-value">2026</div>
              <div className="hero-stat-label">Current Cohort</div>
            </div>
          </motion.div>
        </div>

        <div className="grp-hero__wave" aria-hidden>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path fill="var(--grp-bg)" d="M0,40 C360,90 1080,0 1440,60 L1440,90 L0,90 Z" />
          </svg>
        </div>
      </section>

      {/* ═══════════════ BODY ═══════════════ */}
      <div className="grp-body">
        <div className="grp-container">

          {/* ══ PROGRAMME OVERVIEW — shown once, common to both grants ══ */}
          <motion.section
            className="grp-overview"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTag>Programme Overview</SectionTag>
            <h2 className="grp-section-title">
              Advancing Olympic Research<br />
              <span className="gold">in India & South Asia</span>
            </h2>
            <p className="grp-overview__text">
              BCORE is committed to advancing high-quality research in Olympic studies and allied disciplines.
              This programme supports emerging scholars whose work contributes to the growth of Olympic knowledge,
              evidence-based policymaking, and the development of sport in India and South Asia.
            </p>
          </motion.section>

          {/* ══ COMMON INFO GRID — objectives · eligibility · selection · benefits ══ */}
          <motion.section
            className="grp-common-section"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="common-info-grid">

              {/* Objectives */}
              <div className="common-card">
                <div className="common-card__head">
                  <Target size={20} className="col-icon blue" />
                  <span>Programme Objectives</span>
                </div>
                <ul className="bullet-list">
                  <li>Support high-quality independent research in Olympic studies and related fields.</li>
                  <li>Promote research that informs Olympic strategies, governance, policymaking, and institutional reforms.</li>
                  <li>Encourage innovative theoretical and methodological approaches in Olympic research.</li>
                  <li>Build a network of young scholars advancing Olympic values, education, and development.</li>
                  <li>Foster research on Olympic bidding, economic impact, legacy, sustainability, and sport development in the Indian context.</li>
                </ul>
              </div>

              {/* Eligibility */}
              <div className="common-card">
                <div className="common-card__head">
                  <Users size={20} className="col-icon gold" />
                  <span>Eligibility</span>
                </div>
                <ul className="bullet-list">
                  <li>Citizens of India or South Asia.</li>
                  <li>Enrolled in a full-time Master's or PhD programme at a recognized university.</li>
                  <li>Research must be directly related to Olympic studies and relevant to India's Olympic aspirations and development goals.</li>
                  <li>Must have an approved or ongoing research project with demonstrable progress.</li>
                  <li>Early-stage researchers are strongly encouraged to apply.</li>
                </ul>
              </div>

              {/* Selection */}
              <div className="common-card">
                <div className="common-card__head">
                  <Search size={20} className="col-icon blue" />
                  <span>Selection Process</span>
                </div>
                <p className="common-card__intro">
                  Applications will be evaluated by a panel of experts in Olympic studies, sports policy, governance, economics, and related disciplines.
                </p>
                <Step n="1" text="Applications reviewed by a multidisciplinary expert panel." />
                <Step n="2" text="Shortlisted candidates may be invited to present their research before the selection committee." />
                <Step n="3" text="Final selection based on relevance, potential impact, originality, feasibility, and contribution to the Olympic Movement." />
              </div>

              {/* Benefits */}
              <div className="common-card">
                <div className="common-card__head">
                  <Gift size={20} className="col-icon gold" />
                  <span>Benefits & Support</span>
                </div>
                <ul className="bullet-list">
                  <li>Access to BCORE's national and international research resources.</li>
                  <li>Use of BCORE's physical and virtual libraries and Human Performance Lab.</li>
                  <li>Support for data collection, networking, and academic collaborations.</li>
                  <li>Opportunities to present research at BCORE seminars, workshops, and conferences.</li>
                  <li>Certificate of Research Recognition upon successful completion of the programme.</li>
                </ul>
              </div>

            </div>
          </motion.section>

          {/* ══ INDIVIDUAL GRANTS — tab switcher ══ */}
          <section className="grp-grants-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionTag>Available Grants</SectionTag>
              <h2 className="grp-section-title" style={{ marginBottom: "32px" }}>
                Choose Your <span className="gold">Grant</span>
              </h2>
            </motion.div>

            <div className="grp-tabs">
              <GrantTab
                active={activeGrant === "bcore"}
                onClick={() => setActiveGrant("bcore")}
                label="BCORE Olympic Research Grant"
                badge="Open"
              />
              <GrantTab
                active={activeGrant === "gobananas"}
                onClick={() => setActiveGrant("gobananas")}
                label="BCORE × GoBananas Grant"
                badge="₹50K"
              />
            </div>

            <AnimatePresence mode="wait">
              {activeGrant === "bcore" && (
                <motion.div
                  key="bcore"
                  className="grant-panel"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <BCOREGrant />
                </motion.div>
              )}
              {activeGrant === "gobananas" && (
                <motion.div
                  key="gobananas"
                  className="grant-panel"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <GoBananasGrant />
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* ══ COMPLIANCE & OBLIGATIONS ══ */}
          <motion.section
            className="grp-compliance-section"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTag>Policies</SectionTag>
            <h2 className="grp-section-title">Obligations & <span className="gold">Compliance</span></h2>
            <div className="grp-compliance-grid">
              <div className="compliance-card">
                <Landmark size={22} className="compliance-icon blue" />
                <h3>Recipient Obligations</h3>
                <ul className="bullet-list">
                  <li>Copyright of final report rests with BCORE; publishing requires prior permission.</li>
                  <li>Acknowledge BCORE support in all research outputs.</li>
                  <li>Submit progress reports every 3 months.</li>
                  <li>Submit final report upon completion or on request.</li>
                </ul>
              </div>
              <div className="compliance-card">
                <ShieldCheck size={22} className="compliance-icon gold" />
                <h3>Monitoring & Audit</h3>
                <ul className="bullet-list">
                  <li>BCORE reviews progress reports, expenditure statements, and utilization certificates.</li>
                  <li>Non-compliance may result in termination and refund with 10% interest.</li>
                  <li>Disclosure of other concurrent grants is mandatory.</li>
                  <li>Preference given to applicants without major overlapping grants.</li>
                  <li>BCORE reserves the right to audit and monitor progress anytime.</li>
                </ul>
              </div>
              <div className="compliance-card">
                <CheckCircle size={22} className="compliance-icon green" />
                <h3>Grant Disbursement</h3>
                <ul className="bullet-list">
                  <li>Grants disbursed in two phases: post-selection and post-publication.</li>
                  <li>Final report submission is mandatory before disbursement.</li>
                  <li>Funds released after verification of progress and documents.</li>
                  <li>Final reports undergo expert evaluation before final disbursement.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* ══ CONTACT ══ */}
          <motion.section
            className="grp-contact"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grp-contact__inner">
              <Mail size={36} className="grp-contact__icon" />
              <h3>Contact & Queries</h3>
              <p>Reach us at <strong>bcore.office@gmail.com</strong> or visit <strong>bcore.rru.ac.in</strong></p>
              <div className="grp-contact__btns">
                <a href="mailto:bcore.office@gmail.com" className="btn-primary">Email Office</a>
                <a href="https://bcore.rru.ac.in" target="_blank" rel="noreferrer" className="btn-outline">Visit Website</a>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   BCORE GRANT PANEL  — grant-specific info only
══════════════════════════════════════════════ */
const BCOREGrant = () => (
  <div className="bcore-grant">
    <div className="grant-panel__header grant-panel__header--bcore">
      <div>
        <div className="grant-panel__label">BCORE Olympic Research Grant</div>
        <h3 className="grant-panel__title">2026 Cohort</h3>
        <p className="grant-panel__sub">
          Open to Master's & PhD scholars across India & South Asia. Submit your application form with CV and research proposal.
        </p>
      </div>
      <div className="grant-status grant-status--open">
        <span className="status-dot" /> Open
      </div>
    </div>

    <div className="grant-bottom-row">
      {/* How to apply */}
      <div className="apply-box">
        <div className="grant-col__head">
          <ExternalLink size={18} className="col-icon blue" />
          <span>How to Apply</span>
        </div>
        <p className="apply-desc">
          Download and complete the BCORE Olympic Research Grant 2026 Application Form. Submit it along with your CV and a <strong>300–500 word research proposal summary</strong> to <strong>bcore@rru.ac.in</strong>. Ensure all information provided is accurate and up to date.
        </p>
        <div className="apply-links">
          <a
            href="https://rru.ac.in/wp-content/uploads/2025/06/Application-form-Olympic-Grant-BCORE.pdf"
            target="_blank"
            rel="noreferrer"
            className="apply-link apply-link--primary"
          >
            <Download size={14} /> Application Form (PDF)
          </a>
          <a
            href="https://rru.ac.in/wp-content/uploads/2025/06/Guidlines-Olympic-Research-Grant-by-BCORE.pdf"
            target="_blank"
            rel="noreferrer"
            className="apply-link apply-link--secondary"
          >
            <FileText size={14} /> Grant Guidelines
          </a>
          <a
            href="https://rru.ac.in/wp-content/uploads/2025/06/Olympic-Research-Grantby-BCORE.png"
            target="_blank"
            rel="noreferrer"
            className="apply-link apply-link--secondary"
          >
            <ExternalLink size={14} /> Grant Poster
          </a>
        </div>
        <p className="apply-note">
          <em>Note: If you miss the deadline but are working on a relevant project, you may still reach out for consideration.</em>
        </p>
      </div>

      {/* What makes a strong application */}
      <div className="selection-box">
        <div className="grant-col__head">
          <Award size={18} className="col-icon gold" />
          <span>Strong Application Tips</span>
        </div>
        <Step n="1" text="Clearly articulate the relevance of your research to India's Olympic aspirations." />
        <Step n="2" text="Demonstrate methodological rigor and feasibility within the proposed timeline." />
        <Step n="3" text="Highlight original contributions — what gap in Olympic knowledge does your work fill?" />
        <Step n="4" text="Show evidence of progress: approvals, data collection, or published work so far." />
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════
   GOBANANAS GRANT PANEL — grant-specific info only
══════════════════════════════════════════════ */
const GoBananasGrant = () => (
  <div className="gobananas-grant">
    <div className="grant-panel__header grant-panel__header--gobananas">
      <div>
        <div className="grant-panel__label grant-panel__label--collab">Collaboration Grant</div>
        <h3 className="grant-panel__title">BCORE × GoBananas</h3>
        <p className="grant-panel__sub">
          A single award of ₹50,000 for a Postgraduate or PhD scholar researching the professional and operational dimensions of Olympic mega-events, in partnership with GoBananas — a 360° experiential event agency from Ahmedabad.
        </p>
      </div>
      <div className="grant-amount-badge">
        <span className="amount-value">₹50,000</span>
        <span className="amount-label">Grant Value</span>
      </div>
    </div>

    {/* Research focus — what makes this grant different */}
    <div className="gobananas-focus">
      <Zap size={20} className="focus-icon" />
      <div>
        <div className="focus-label">Specific Research Focus for This Grant</div>
        <div className="focus-text">
          Research must focus on the <strong>professional and operational dimensions of Olympic mega-events</strong> — including event management, logistics, sponsorship, fan experience, venue operations, and experiential delivery. This is what distinguishes this grant from the general BCORE grant.
        </div>
      </div>
    </div>

    <div className="gobananas-apply">
      <div className="gobananas-apply__left">
        <div className="grant-col__head">
          <ExternalLink size={18} className="col-icon blue" />
          <span>How to Apply</span>
        </div>
        <p className="apply-desc">
          Applications for this grant are submitted via Google Form. Prepare a focused <strong>300–500 word proposal</strong> describing your event-management research angle before filling the form. This is a single-award competitive grant — selection is based on proposal quality and fit.
        </p>
        <div className="apply-links">
          {/* ← REPLACE href BELOW WITH ACTUAL GOOGLE FORM URL → */}
          <a
            href="https://forms.gle/957Zxt3aXiEYZ6BF6"
            target="_blank"
            rel="noreferrer"
            className="apply-link apply-link--gobananas"
          >
            <ExternalLink size={14} /> Apply via Google Form
          </a>
        </div>
        <p className="apply-note">
          <em>Note: This is a single-award grant. Selections are competitive and based on the relevance and quality of your proposal.</em>
        </p>
      </div>

      <div className="gobananas-partner-card">
        <div className="partner-logo-block">GB</div>
        <div className="partner-name">GoBananas</div>
        <div className="partner-desc">360° Experiential Event Agency, Ahmedabad</div>
      </div>
    </div>
  </div>
);

export default OlympicResearchGrants;