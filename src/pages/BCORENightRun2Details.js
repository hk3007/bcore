import React, { useState } from "react";
import "./BCORENightRun2Details.css";

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "about", label: "About the Run" },
  { key: "10km", label: "10 KM" },
  { key: "5km3km", label: "5 KM & 3 KM" },
];

const REGISTER_LINK = "https://bnfest.nmediasoft.com/bcore-night-run-2nd-edition-in-gandhinagar-gujarat-india";

const BCORENightRun2Details = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bnr2-wrapper">
      {/* HERO */}
      <section className="bnr2-hero">
        <div className="bnr2-container">
          <span className="bnr2-bib-pill">⚡ BIB NO. 2029 · GANDHINAGAR, GUJARAT</span>

          <div className="bnr2-date-chip">
            <svg
              className="bnr2-calendar-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M3 9.5H21" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8 3V6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M16 3V6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="8" cy="13.5" r="1.1" fill="currentColor" />
              <circle cx="12" cy="13.5" r="1.1" fill="currentColor" />
              <circle cx="16" cy="13.5" r="1.1" fill="currentColor" />
              <circle cx="8" cy="17.2" r="1.1" fill="currentColor" />
              <circle cx="12" cy="17.2" r="1.1" fill="currentColor" />
            </svg>
            12 <span className="bnr2-month">DEC</span> 2026
            <small>Save the date</small>
          </div>

          <span className="bnr2-eyebrow">🔥 After Dark</span>

          <h1 className="bnr2-hero-title">
            BCORE NIGHT<br />
            <span className="bnr2-accent">RUN</span>
          </h1>

          <div className="bnr2-edition">2ND EDITION</div>

          <div className="bnr2-hero-lead-box">
            <p>
              India's premier night running festival, where fitness meets
              energy, community meets sport, and every step inspires a
              healthier, stronger and more inclusive sporting culture.
              Celebrate women and youth in sport, champion Safe Sport, and
              run together under the lights of Gandhinagar!
            </p>
          </div>

          <div className="bnr2-distance-pills">
            <span>10KM</span>
            <span>5KM</span>
            <span>3KM</span>
          </div>
        </div>
      </section>

      {/* TAB NAV */}
      <nav className="bnr2-tabs-nav">
        <div className="bnr2-container bnr2-tabs-flex">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`bnr2-tab-btn ${activeTab === tab.key ? "bnr2-active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* OVERVIEW TAB */}
      {activeTab === "overview" && (
        <>
          <section className="bnr2-dark-section">
            <div className="bnr2-container">
              <span className="bnr2-section-kicker">
                Overview · 2nd Edition · Gandhinagar
              </span>
              <h2 className="bnr2-section-title">
                We're more than just a night run
              </h2>
              <p className="bnr2-section-desc">
                Centered on Safe Sports and Athlete Safeguarding, the 2nd
                Edition of BCORE Night Run raises awareness about creating
                environments where every athlete, especially women and
                girls, can train, compete and thrive with dignity, respect
                and security. It also supports Rashtriya Raksha University's
                preparations for the World Police and Fire Games 2029.
              </p>

              <div className="bnr2-divider" />

              <div className="bnr2-stats-grid">
                <div className="bnr2-stat-card">
                  <span className="bnr2-stat-split">Split 01</span>
                  <span className="bnr2-stat-value">6k+</span>
                  <span className="bnr2-stat-label">Runners Targeted</span>
                </div>
                <div className="bnr2-stat-card bnr2-stat-highlight">
                  <span className="bnr2-stat-split">Split 02</span>
                  <span className="bnr2-stat-value">2k+</span>
                  <span className="bnr2-stat-label">Spectators & Volunteers</span>
                </div>
                <div className="bnr2-stat-card">
                  <span className="bnr2-stat-split">Split 03</span>
                  <span className="bnr2-stat-value">10+</span>
                  <span className="bnr2-stat-label">Partners & Sponsors</span>
                </div>
              </div>

              <div className="bnr2-hashtag">#BCORENIGHTRUN</div>
            </div>
          </section>

          <section className="bnr2-light-section">
            <div className="bnr2-container">
              <span className="bnr2-section-kicker">Edition 1 recap</span>
              <h2 className="bnr2-section-title">
                The inaugural Night Run
              </h2>
              <div className="bnr2-recap-box">
                The inaugural BCORE Night Run drew 4,422 participants,
                including students, police personnel, fitness enthusiasts,
                and recreational and competitive runners. This 2nd Edition
                builds on that momentum as an official legacy event for the
                World Police and Fire Games 2029.
              </div>
            </div>
          </section>

          <section className="bnr2-light-section" style={{ paddingTop: 0 }}>
            <div className="bnr2-container">
              <span className="bnr2-section-kicker">Choose your distance</span>
              <div className="bnr2-distance-grid">
                <div className="bnr2-distance-card">
                  <h3>10 KM</h3>
                  <p className="bnr2-distance-sub">Men & Women (Open Category)</p>
                  <div className="bnr2-distance-price">
                    ₹599
                    <span>Registration fee</span>
                  </div>
                  <a href={REGISTER_LINK} target="_blank" rel="noreferrer" className="bnr2-register-btn">
                    Register
                  </a>
                </div>
                <div className="bnr2-distance-card">
                  <h3>5 KM</h3>
                  <p className="bnr2-distance-sub">Open Male & Female</p>
                  <div className="bnr2-distance-price">
                    ₹499
                    <span>Registration fee</span>
                  </div>
                  <a href={REGISTER_LINK} target="_blank" rel="noreferrer" className="bnr2-register-btn">
                    Register
                  </a>
                </div>
                <div className="bnr2-distance-card">
                  <h3>3 KM Fun Run</h3>
                  <p className="bnr2-distance-sub">Open Male & Female</p>
                  <div className="bnr2-distance-price">
                    ₹399
                    <span>Registration fee</span>
                  </div>
                  <a href={REGISTER_LINK} target="_blank" rel="noreferrer" className="bnr2-register-btn">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ABOUT THE RUN TAB */}
      {activeTab === "about" && (
        <section className="bnr2-dark-section">
          <div className="bnr2-container">
            <span className="bnr2-section-kicker">
              From the first start line to WPFG 2029
            </span>

            <div className="bnr2-timeline">
              <div className="bnr2-timeline-item">
                <span className="bnr2-timeline-year">Origin, 2025</span>
                <h4>BCORE is founded</h4>
                <p>
                  The Bharat Centre of Olympic Research and Education
                  launches at Rashtriya Raksha University to promote
                  fitness, community participation and endurance sports.
                </p>
              </div>

              <div className="bnr2-timeline-item">
                <span className="bnr2-timeline-year">Edition 1, 10 Jan 2026</span>
                <h4>The inaugural Night Run</h4>
                <p>
                  Gandhinagar hosts the first BCORE Night Run. 4,422
                  participants, from students and police personnel to
                  fitness enthusiasts and the public, cross the finish
                  line.
                </p>
              </div>

              <div className="bnr2-timeline-item">
                <span className="bnr2-timeline-year">Building now, 2026</span>
                <h4>The 2nd Edition takes shape</h4>
                <p>
                  The first edition's response becomes the foundation for
                  an annual flagship. This December, Gandhinagar prepares
                  to run again, 6,000+ strong.
                </p>
              </div>

              <div className="bnr2-timeline-item">
                <span className="bnr2-timeline-year">The bigger picture, 2029</span>
                <h4>Road to WPFG</h4>
                <p>
                  Rashtriya Raksha University hosts eight disciplines of
                  the World Police and Fire Games, including 5 KM and 10
                  KM Cross Country. Night Run is the legacy initiative
                  built to get there.
                </p>
              </div>

              <div className="bnr2-timeline-item">
                <span className="bnr2-timeline-year">Our vision</span>
                <h4>India's premier night run</h4>
                <p>
                  To establish BCORE Night Run as India's premier annual
                  night running festival, advancing safe sports, athlete
                  safeguarding, and inclusive, women-forward fitness
                  culture, while serving as the official legacy event for
                  Rashtriya Raksha University's hosting of the World
                  Police and Fire Games 2029.
                </p>
              </div>

              <div className="bnr2-timeline-item">
                <span className="bnr2-timeline-year">Our aim</span>
                <h4>6,000+ at the start line</h4>
                <p>
                  Building on the success of its inaugural edition, the
                  2nd Edition aims to bring together over 6,000
                  participants in a celebration of fitness, inclusivity,
                  and women-forward sporting culture.
                </p>
              </div>

              <div className="bnr2-timeline-item">
                <span className="bnr2-timeline-year">Organised by</span>
                <h4>Bharat Centre of Olympic Research and Education</h4>
                <p>
                  Rashtriya Raksha University is an Institution of
                  National Importance, India's pioneering National
                  Security and Police University, under the Ministry of
                  Home Affairs, Government of India, Gujarat.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 10 KM TAB */}
      {activeTab === "10km" && (
        <section className="bnr2-dark-section">
          <div className="bnr2-container">
            <span className="bnr2-section-kicker">10 KM · Open Category</span>
            <h2 className="bnr2-section-title">
              A serious endurance test through Gandhinagar after dark
            </h2>
            <p className="bnr2-section-desc">
              The 10 KM is where Night Run's endurance challenge really
              begins: a well-lit route across the RRU campus and
              Gandhinagar, open to men and women in the open category.
              Registration fee: ₹599.
            </p>
            <p className="bnr2-section-desc">
              Part of BCORE's legacy initiative ahead of the World Police
              and Fire Games 2029, which will feature 5 KM and 10 KM Cross
              Country events.
            </p>

            <div className="bnr2-two-col">
              <div className="bnr2-info-panel">
                <h4>Included — Runner Amenities</h4>
                <ul>
                  <li>Unique race bib with name</li>
                  <li>Limited edition race shirt</li>
                  <li>Exclusive medal</li>
                  <li>Surprise goody kit</li>
                  <li>Official timing E-certificate</li>
                </ul>
              </div>
              <div className="bnr2-info-panel">
                <h4>Optional Add-ons</h4>
                <ul>
                  <li>Customized race shirt</li>
                  <li>Medal engraving</li>
                  <li>Access to Safe Sports awareness workshop</li>
                </ul>
              </div>
            </div>

            <span className="bnr2-section-kicker">The course</span>
            <h2 className="bnr2-section-title">
              A night course like never before
            </h2>
            <p className="bnr2-section-desc">
              A fully illuminated 10 KM route across the RRU campus and
              Gandhinagar. Perfect for seasoned runners looking for a
              night-run challenge and newcomers ready to step up from
              shorter distances.
            </p>

            <div className="bnr2-feature-row">
              <div className="bnr2-feature-card">
                <strong>10 KM</strong>
                <span>Cross Country distance for WPFG 2029</span>
              </div>
              <div className="bnr2-feature-card">
                <strong>Night course</strong>
                <span>Illuminated route through Gandhinagar</span>
              </div>
              <div className="bnr2-feature-card">
                <strong>Fast course</strong>
                <span>Designed for personal bests</span>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <a href={REGISTER_LINK} target="_blank" rel="noreferrer" className="bnr2-register-btn">
                Register for 10K
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 5KM & 3KM TAB */}
      {activeTab === "5km3km" && (
        <section className="bnr2-dark-section">
          <div className="bnr2-container">
            <span className="bnr2-section-kicker">5 KM · The signature distance</span>
            <h2 className="bnr2-section-title">
              The signature distance and a perfect first-timer distance
            </h2>
            <p className="bnr2-section-desc">
              The 5 KM is the signature Night Run distance, with a
              well-lit route through Gandhinagar for open male and female
              participants. Registration fee: ₹499. A great next step
              after the 3 KM Fun Run, and the perfect building block
              toward the 10 KM.
            </p>
            <div style={{ textAlign: "center" }}>
              <a href={REGISTER_LINK} target="_blank" rel="noreferrer" className="bnr2-register-btn">
                Register for 5K
              </a>
            </div>

            <div className="bnr2-divider" style={{ marginTop: "70px" }} />

            <span className="bnr2-section-kicker">3 KM · The first-timer distance</span>
            <h2 className="bnr2-section-title">
              Night Run 3 KM Fun Run
            </h2>
            <p className="bnr2-section-desc">
              Get ready for big smiles and lots of excitement. Accessible
              to young runners, the 3 KM Night Run is for under-14 boys
              and girls. Registration fee: ₹399.
            </p>
            <div style={{ textAlign: "center" }}>
              <a href={REGISTER_LINK} target="_blank" rel="noreferrer" className="bnr2-register-btn">
                Register for Fun Run
              </a>
            </div>

            <div className="bnr2-tag-row">
              <div className="bnr2-tag-item">
                <strong>Family friendly</strong>
                <span>Perfect for all ages</span>
              </div>
              <div className="bnr2-tag-item">
                <strong>Fun atmosphere</strong>
                <span>A celebration of running</span>
              </div>
              <div className="bnr2-tag-item">
                <strong>3 KM distance</strong>
                <span>Easy and accessible</span>
              </div>
            </div>

            <span className="bnr2-section-kicker" style={{ marginTop: "70px", display: "block" }}>
              The course
            </span>
            <h2 className="bnr2-section-title">
              A night course like never before
            </h2>
            <p className="bnr2-section-desc">
              Both distances feature fully illuminated, beginner-friendly
              courses across the RRU campus and Gandhinagar, creating an
              encouraging environment for new runners, families, and
              school groups.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default BCORENightRun2Details;
