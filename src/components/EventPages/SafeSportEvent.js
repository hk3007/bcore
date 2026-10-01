import React from "react";
import "./SafeSportEvent.scss";

import HeroShowcase from "./SafeSportEvent/HeroShowcase";
import FeaturesGrid from "./SafeSportEvent/FeaturesGrid";
import Timeline from "./SafeSportEvent/Timeline";
import StatsDashboard from "./SafeSportEvent/StatsDashboard";
import ContactUs from "./SafeSportEvent/ContactUs";
import StrategicPartners from "./SafeSportEvent/StrategicPartners";
import BannerVideo from "../../assets/Safe Sport.mp4"; // adjust path/filename

const dayBreakdown = [
  {
    day: "Day - 1",
    label: "Joint Sessions",
    detail: "Athletes, Coaches & Administrators together",
  },
  {
    day: "Day - 2",
    label: "Athlete-Led Sessions",
    detail: "Athletes lead | Coaches & Administrators Observe",
  },
  {
    day: "Day - 3",
    label: "Coaches & Administrator-Led Sessions",
    detail: "Coaches & Administrators lead | Athletes Observe",
  },
];

function Header() {
  return (
    <header className="ss-hero">

      {/* RIGHT-SIDE CINEMATIC VIDEO */}
      <div className="ss-hero-video-wrap">
        <video
          className="ss-hero-video"
          src={BannerVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <div className="ss-hero-video-fade" />
      </div>

      {/* DESIGN LAYERS */}
      <div className="ss-hero-diagonal" />
      <div className="ss-hero-glow ss-hero-glow-1" />
      <div className="ss-hero-glow ss-hero-glow-2" />
      <div className="ss-hero-grid" />

      {/* CONTENT */}
      <div className="ss-hero-inner">

        <div className="ss-hero-main">

          <div className="ss-hero-tags">
            <span className="ss-hero-tags__bar" />

            <span>Workshop</span>
            <span className="ss-hero-tags__sep">|</span>

            <span>Deliberations</span>
            <span className="ss-hero-tags__sep">|</span>

            <span>Working Groups</span>
          </div>

          <h1 className="ss-hero-title">
            NATIONAL SAFE SPORT
            <br />
            <span className="ss-hero-title__accent">
              PROGRAMME
            </span>
          </h1>

          <p className="ss-hero-subtitle">
            Foundations of Safe Sport and Athlete&rsquo;s
            Safeguarding
          </p>

          <div className="ss-hero-facts">

            <div className="ss-hero-fact">
              <span className="ss-hero-fact__icon">
                📅
              </span>

              <div>
                <strong>
                  21 – 23 October 2026
                </strong>

                <span>
                  Event Dates
                </span>
              </div>
            </div>

          </div>

          <div className="ss-hero-org">
            <p>
              BHARAT CENTRE OF OLYMPIC RESEARCH &amp; EDUCATION
            </p>

            <p>
              RASHTRIYA RAKSHA UNIVERSITY
            </p>
          </div>

          <a
            className="ss-hero-cta"
            href="https://rise.rru.ac.in/Course/688/779"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now

            <span className="ss-hero-cta__arrow">
              →
            </span>
          </a>

        </div>

        {/* Floating programme information */}
        <div className="ss-hero-days">
          {dayBreakdown.map((d, i) => (
            <div
              className="ss-hero-day"
              key={i}
            >
              <span className="ss-hero-day__label">
                {d.day}
              </span>

              <span className="ss-hero-day__title">
                {d.label}
              </span>

              <span className="ss-hero-day__detail">
                {d.detail}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* REGISTER QR */}
      <a
        className="ss-hero-register"
        href="https://rise.rru.ac.in/Course/688/779"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="ss-hero-qr">
          <img
            className="ss-hero-qr__img"
            src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=0&data=https%3A%2F%2Frise.rru.ac.in%2FCourse%2F688%2F779"
            alt="QR code to register for the National Safe Sport Programme"
          />
        </div>

        <span className="ss-hero-register__label">
          Scan to Register
        </span>
      </a>

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

/* =========================================================
   SAFE SPORT SURVEYS
========================================================= */

const surveyForms = [
  {
    number: "01",
    audience: "For Coaches",
    title: "National Coaches Survey",
    description:
      "A confidential survey for coaches to share their direct experiences of psychological, physical, and sexual violence in sport, sport safety culture, reporting systems, well-being priorities, and readiness to identify and prevent abuse or misconduct.",
    note:
      "Please answer based on your direct coaching experience. There are no right or wrong answers.",
    action: "Take the Coaches Survey",
    link: "https://forms.gle/JWG84R4E7Hzj8cHA7",
  },
  {
    number: "02",
    audience: "For Sport Participants",
    title: "Safe Sport Experience Survey",
    description:
      "A confidential survey conducted by BCORE to understand experiences of psychological, physical, and sexual violence in sports environments and contribute to a stronger culture of safety and safeguarding.",
    note:
      "Your responses will support the understanding of safe sport experiences and safeguarding needs.",
    action: "Take the Survey",
    link: "https://forms.gle/8KrMTaeL1ijC6GpW9",
  },
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

        {/* =========================================================
    SAFE SPORT SURVEYS
========================================================= */}

        <section className="ss-surveys" id="surveys">
          <div className="ss-surveys__inner">

            <div className="ss-surveys__header">
              <div className="ss-surveys__eyebrow">
                <span className="ss-surveys__eyebrow-line" />
                <span>BCORE Research &amp; Safeguarding</span>
              </div>

              <h2 className="ss-surveys__title">
                Help Us Build
                <br />
                <span>Safer Sport.</span>
              </h2>

              <p className="ss-surveys__intro">
                BCORE is conducting surveys to better understand experiences,
                practices and safeguarding needs within sporting environments.
                Your responses will contribute to evidence-based understanding
                and help identify opportunities for stronger Safe Sport practices.
              </p>
            </div>

            <div className="ss-surveys__cards">

              {surveyForms.map((survey) => (
                <article
                  className="ss-survey-card"
                  key={survey.number}
                >

                  <div className="ss-survey-card__top">
                    <span className="ss-survey-card__number">
                      {survey.number}
                    </span>

                    <span className="ss-survey-card__audience">
                      {survey.audience}
                    </span>
                  </div>

                  <div className="ss-survey-card__body">

                    <h3>{survey.title}</h3>

                    <p className="ss-survey-card__description">
                      {survey.description}
                    </p>

                    <div className="ss-survey-card__note">
                      <span className="ss-survey-card__note-mark">
                        +
                      </span>

                      <p>{survey.note}</p>
                    </div>

                  </div>

                  <div className="ss-survey-card__footer">

                    <span className="ss-survey-card__confidential">
                      <span className="ss-survey-card__dot" />
                      Confidential Survey
                    </span>

                    <a
                      href={survey.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ss-survey-card__button"
                    >
                      <span>{survey.action}</span>

                      <span className="ss-survey-card__arrow">
                        ↗
                      </span>
                    </a>

                  </div>

                </article>
              ))}

            </div>

          </div>
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

        <div id="partners">
          <StrategicPartners />
        </div>

        <div id="contact">
          <ContactUs />
        </div>
      </main>
    </div>
  );
}