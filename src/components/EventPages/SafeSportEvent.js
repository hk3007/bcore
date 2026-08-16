import React from "react";
import "./SafeSportEvent.scss";

import HeroShowcase from "./SafeSportEvent/HeroShowcase";
import FeaturesGrid from "./SafeSportEvent/FeaturesGrid";
import Timeline from "./SafeSportEvent/Timeline";
import StatsDashboard from "./SafeSportEvent/StatsDashboard";

/* =========================================================================
   HEADER — DO NOT MODIFY STRUCTURE (TEXT UPDATED ONLY)
   ========================================================================= */
function OlympicRings({ className = "" }) {
  return (
    <svg
      className={`ss-rings ${className}`}
      viewBox="0 0 400 160"
      aria-hidden="true"
    >
      <circle className="ss-ring ss-ring-blue" cx="70" cy="60" r="42" />
      <circle className="ss-ring ss-ring-black" cx="160" cy="60" r="42" />
      <circle className="ss-ring ss-ring-red" cx="250" cy="60" r="42" />
      <circle className="ss-ring ss-ring-yellow" cx="115" cy="100" r="42" />
      <circle className="ss-ring ss-ring-green" cx="205" cy="100" r="42" />
    </svg>
  );
}

function Header() {
  return (
    <header className="ss-hero">
      <div className="ss-hero-glow ss-hero-glow-1"></div>
      <div className="ss-hero-glow ss-hero-glow-2"></div>

      <div className="ss-hero-content">
        <h1 className="ss-hero-title">NATIONAL SAFE SPORT & PROGRAMME</h1>
        <p className="ss-hero-subtitle">
          Foundations of Safe Sports and Athlete’s Safeguarding
        </p>

        <div className="ss-hero-date">
          <span className="date-block">
            <strong>21</strong>
            <em>OCT</em>
          </span>
          <span className="date-sep">–</span>
          <span className="date-block">
            <strong>23</strong>
            <em>OCT</em>
          </span>
          <span className="date-year">2026</span>
        </div>
      </div>
    </header>
  );
}
/* ======================= END HEADER ===================== */

const objectives = [
  "To introduce Safe Sport and athlete safeguarding in the Indian sporting ecosystem by building awareness of international frameworks, national developments, and emerging best practices.",
  "Promote a positive, inclusive, and athlete-centred sporting culture by encouraging ethical conduct, respect, dignity, and shared responsibility across the sports ecosystem.",
  "Build practical capacity to recognise and address safeguarding risks by understanding legal, ethical, and institutional responsibilities, and learning effective approaches for prevention, reporting, and response.",
];

const stakeholders = [
  "Athletes",
  "Coaches",
  "Sports Administrators",
  "Officials from Sports Authority of India (SAI) Centres",
  "Representatives of National Sports Federations (NSFs)",
  "Sports Academies and High Performance Centres",
  "Universities and Educational Institutions",
  "Research Scholars and Academicians",
  "Athlete Support Personnel",
  "Child Protection and Safeguarding Professionals",
  "Sports Medicine and Rehabilitation Professionals",
  "NGOs and organisations working in sport and athlete welfare",
  "Other stakeholders committed to safe and inclusive sport",
];

export default function SafeSportEvent() {
  return (
    <div className="ss-page">
      <Header />

      <main className="ss-body">
        {/* HERO SHOWCASE */}
        <HeroShowcase />

        {/* ABOUT */}
        <section className="ss-section" id="about">
          <h2 className="ss-section__title">About the Programme</h2>
          <div className="ss-section__body">
            <p>
              Safe Sport and athlete safeguarding have been declared as one of
              the key strategic priority areas of the International Olympic
              Committee (IOC), reflecting the Olympic Movement’s commitment to
              protecting athletes and promoting safe, respectful, and
              athlete-centred sporting environments. In line with this global
              priority and responding to the evolving needs of India’s growing
              sports ecosystem, this initiative provides a unique platform for
              Programme, international knowledge exchange, and hands-on learning,
              empowering athletes, coaches, and sports administrators to
              strengthen Safe Sport practices and contribute to a safer sporting
              culture in India.
            </p>

            <p>
              Developed by the Bharat Centre of Olympic Research and Education
              (BCORE), Rashtriya Raksha University, the Programme brings together
              international best practices, Olympic values and the evolving
              Indian legal and policy framework to provide participants with a
              comprehensive understanding of Safe Sport and athlete
              safeguarding.
            </p>

            <p>
              Through expert-led sessions, practical exercises, case studies and
              collaborative discussions, the programme aims to facilitate
              Programme, strengthen institutional capacity, and equip
              participants with the knowledge and skills to recognise
              safeguarding risks, respond appropriately and contribute to
              building a culture of safety, respect and dignity across the
              Indian sporting ecosystem.
            </p>
          </div>
        </section>

        {/* WHY */}
        <section className="ss-section ss-section--why">
          <h2 className="ss-section__title">Why This Programme Matters</h2>

          <div className="ss-section__body">
            <p>
              Safe Sport extends beyond preventing abuse. It is about creating
              sporting environments where every athlete is treated with dignity,
              respect and fairness, and where organisations have the knowledge,
              systems and policies necessary to safeguard athlete well-being.
            </p>

            <p>
              Through this Programme, BCORE seeks to contribute to India's
              growing Safe Sport movement by promoting evidence-based learning,
              encouraging collaborative Programme and supporting the development
              of safe, ethical and athlete-centred sporting environments across
              all levels of sport.
            </p>
          </div>
        </section>

        {/* OBJECTIVES */}
        <section className="ss-section ss-section--tint">
          <h2 className="ss-section__title">Programme Objectives</h2>
          <p className="ss-section__lead">The Programme aims to:</p>
          <ul className="ss-list">
            {objectives.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* FEATURES */}
        <div id="content">
          <FeaturesGrid />
        </div>

        {/* TIMELINE */}
        <div id="structure">
          <Timeline />
        </div>

        {/* STATS */}
        <div id="stakeholders">
          <StatsDashboard />
        </div>

        {/* WHO SHOULD ATTEND */}
        <section className="ss-section ss-section--tint">
          <h2 className="ss-section__title">Who Should Attend</h2>
          <p className="ss-section__lead">The Programme is designed for:</p>
          <ul className="ss-grid ss-grid--stakeholders">
            {stakeholders.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
