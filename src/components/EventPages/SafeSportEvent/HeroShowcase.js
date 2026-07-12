import React from "react";

export default function HeroShowcase() {
  return (
    <section className="hs-showcase">
      <div className="hs-showcase__panel hs-showcase__panel--copy">
        <span className="hs-eyebrow">BCORE &middot; Rashtriya Raksha University</span>
        <h2 className="hs-headline">
          Every athlete deserves a <span className="hs-headline__accent">safe field of play.</span>
        </h2>
        <p className="hs-lead">
          A three-day foundation programme built on Olympic values, Indian
          safeguarding law and international best practice &mdash; designed to turn
          policy into everyday practice across India&rsquo;s sporting ecosystem.
        </p>
        <div className="hs-cta-row">
          <button className="hs-btn hs-btn--primary" type="button">
            Register Now
          </button>
          <button className="hs-btn hs-btn--ghost" type="button">
            Download Brochure
          </button>
        </div>
        <div className="hs-meta-row">
          <div className="hs-meta">
            <strong>3</strong>
            <span>Days of Learning</span>
          </div>
          <div className="hs-meta">
            <strong>12+</strong>
            <span>Core Modules</span>
          </div>
          <div className="hs-meta">
            <strong>13</strong>
            <span>Stakeholder Groups</span>
          </div>
        </div>
      </div>

      <div className="hs-showcase__panel hs-showcase__panel--visual">
        <div className="hs-visual-card hs-visual-card--1">
          <span className="hs-visual-dot hs-visual-dot--blue"></span>
          <p>Athlete-centred design</p>
        </div>
        <div className="hs-visual-card hs-visual-card--2">
          <span className="hs-visual-dot hs-visual-dot--yellow"></span>
          <p>Observer-based learning</p>
        </div>
        <div className="hs-visual-card hs-visual-card--3">
          <span className="hs-visual-dot hs-visual-dot--green"></span>
          <p>Policy &amp; legal grounding</p>
        </div>
        <svg className="hs-visual-mask" viewBox="0 0 480 480" aria-hidden="true">
          <defs>
            <linearGradient id="hsTrackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0085C7" />
              <stop offset="35%" stopColor="#F4C300" />
              <stop offset="70%" stopColor="#009F3D" />
              <stop offset="100%" stopColor="#DF0024" />
            </linearGradient>
          </defs>
          <circle cx="240" cy="240" r="190" fill="none" stroke="url(#hsTrackGradient)" strokeWidth="2" strokeDasharray="6 10" />
          <circle cx="240" cy="240" r="150" fill="none" stroke="#0085C7" strokeOpacity="0.15" strokeWidth="36" />
          <circle cx="240" cy="240" r="150" fill="none" stroke="url(#hsTrackGradient)" strokeWidth="3" strokeDasharray="120 822" />
        </svg>
      </div>
    </section>
  );
}