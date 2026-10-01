import React from "react";
import Brochure from "../../../pages/PDF/National Safe Sport Brochure.pdf";

export default function HeroShowcase() {
  return (
    <section className="hs-showcase">
      <div className="hs-showcase__panel hs-showcase__panel--copy">
        <span className="hs-eyebrow">
          BCORE · Rashtriya Raksha University
        </span>

        <h2 className="hs-headline">
          Every athlete deserves a{" "}
          <span className="hs-headline__accent">
            safe field of play.
          </span>
        </h2>

        <p className="hs-lead">
          A three-day foundation Programme built on Olympic values, Indian
          safeguarding law and international best practice — designed to turn
          policy into everyday practice across India’s sporting ecosystem.
        </p>

        <div className="hs-cta-row">
          <a
            href="https://rise.rru.ac.in/Course/688/779"
            target="_blank"
            rel="noopener noreferrer"
            className="hs-btn hs-btn--primary"
          >
            Register Now
            <span>↗</span>
          </a>

          <a
            href={Brochure}
            download
            className="hs-btn hs-btn--ghost"
          >
            Download Brochure
            <span>↓</span>
          </a>
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
        <div className="hs-visual-orbit hs-visual-orbit--outer" />
        <div className="hs-visual-orbit hs-visual-orbit--middle" />
        <div className="hs-visual-orbit hs-visual-orbit--inner" />

        <div className="hs-visual-center">
          <span className="hs-visual-center__small">
            BCORE
          </span>

          <strong>
            SAFE
            <br />
            SPORT
          </strong>

          <span className="hs-visual-center__line" />
        </div>

        <div className="hs-visual-card hs-visual-card--1">
          <span className="hs-visual-dot hs-visual-dot--blue" />
          <p>Athlete-centred design</p>
        </div>

        <div className="hs-visual-card hs-visual-card--2">
          <span className="hs-visual-dot hs-visual-dot--yellow" />
          <p>Observer-based learning</p>
        </div>

        <div className="hs-visual-card hs-visual-card--3">
          <span className="hs-visual-dot hs-visual-dot--green" />
          <p>Policy &amp; legal grounding</p>
        </div>

        <div className="hs-visual-card hs-visual-card--4">
          <span className="hs-visual-dot hs-visual-dot--red" />
          <p>Athlete safeguarding</p>
        </div>
      </div>
    </section>
  );
}