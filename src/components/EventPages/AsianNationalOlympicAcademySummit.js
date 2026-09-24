import React from "react";
import "./AsianNationalOlympicAcademySummit.scss";

const focusAreas = [
  {
    numeral: "I",
    title: "Shared Practice",
    text: "Sharing Olympic education initiatives and institutional practices across Asia.",
  },
  {
    numeral: "II",
    title: "Research Exchange",
    text: "Strengthening research and academic collaboration between institutions.",
  },
  {
    numeral: "III",
    title: "Joint Programmes",
    text: "Creating opportunities for joint programmes, publications and knowledge exchange.",
  },
  {
    numeral: "IV",
    title: "Institutional Bridges",
    text: "Connecting National Olympic Academies with Olympic Studies and Research Centres.",
  },
  {
    numeral: "V",
    title: "A Standing Network",
    text: "Exploring the development of a sustained Asian NOA Network/Forum for continued cooperation.",
  },
];

const pillars = [
  "Olympic Education",
  "Research & Academic Exchange",
  "Institutional Collaboration",
  "Knowledge Networks",
];

function Emblem() {
  return (
    <svg
      className="aos-emblem"
      viewBox="0 0 220 220"
      role="img"
      aria-label="Asian National Olympic Academy Summit emblem"
    >
      <circle className="aos-emblem__ring-outer" cx="110" cy="110" r="102" />
      <circle className="aos-emblem__ring-inner" cx="110" cy="110" r="84" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const x1 = 110 + Math.cos(angle) * 92;
        const y1 = 110 + Math.sin(angle) * 92;
        const x2 = 110 + Math.cos(angle) * 100;
        const y2 = 110 + Math.sin(angle) * 100;
        return (
          <line
            key={i}
            className="aos-emblem__tick"
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
          />
        );
      })}
      {/* five nodes standing in for five sub-regions, linked as a network */}
      <g className="aos-emblem__network">
        <line x1="110" y1="70" x2="150" y2="100" />
        <line x1="150" y1="100" x2="134" y2="146" />
        <line x1="134" y1="146" x2="86" y2="146" />
        <line x1="86" y1="146" x2="70" y2="100" />
        <line x1="70" y1="100" x2="110" y2="70" />
        <line x1="110" y1="70" x2="134" y2="146" />
        <line x1="70" y1="100" x2="150" y2="100" />
        <circle cx="110" cy="70" r="5" />
        <circle cx="150" cy="100" r="5" />
        <circle cx="134" cy="146" r="5" />
        <circle cx="86" cy="146" r="5" />
        <circle cx="70" cy="100" r="5" />
      </g>
      <text x="110" y="196" textAnchor="middle" className="aos-emblem__label">
        EST. 2027
      </text>
    </svg>
  );
}

function Header() {
  return (
    <header className="aos-hero">
      <div className="aos-hero__texture" aria-hidden="true" />
      <div className="aos-hero-inner">
        <div className="aos-hero-meta">
          <span className="aos-hero-meta__org">BCORE</span>
          <span className="aos-hero-meta__rule" />
          <span>Asian Olympic Education Network</span>
        </div>

        <div className="aos-hero-grid">
          <div className="aos-hero-emblem-col">
            <Emblem />
          </div>

          <div className="aos-hero-content-col">
            <div className="aos-hero-kicker">
              <span>National Olympic Academy</span>
              <strong>Summit</strong>
            </div>

            <h1 className="aos-hero-title">
              <span>Building an Asian Network</span>
              <span className="aos-hero-title__accent">
                for Olympic Education &amp; Research
              </span>
            </h1>

            <p className="aos-hero-subtitle">
              A regional forum for Olympic education, research, and academic
              collaboration across Asia.
            </p>

            <div className="aos-info-row">
              <div className="aos-stub">
                <div className="aos-stub__dates">
                  <span>28</span>
                  <em>&mdash;</em>
                  <span>29</span>
                  <small>JAN 2027</small>
                </div>
                <p>Registration opens soon</p>
              </div>

              <div className="aos-info-divider" aria-hidden="true" />

              <div className="aos-venue">
                <span className="aos-venue__label">Venue</span>
                <strong>Rashtriya Raksha University</strong>
                <small>Gandhinagar, Gujarat</small>
              </div>

              <div className="aos-info-divider" aria-hidden="true" />

              <ul className="aos-pillars" aria-label="Summit pillars">
                {pillars.map((pillar) => (
                  <li key={pillar}>{pillar}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function AsianNationalOlympicAcademySummit() {
  return (
    <div className="aos-page">
      <Header />

      <main className="aos-body">
        <section className="aos-manuscript" id="about">
          <div className="aos-manuscript__index">
            <span className="aos-manuscript__numeral">I.</span>
            <span className="aos-manuscript__label">About</span>
          </div>

          <div className="aos-manuscript__copy">
            <p className="aos-dropcap">
              The Asian National Olympic Academy Summit brings together
              National Olympic Academies, Olympic Studies and Research
              Centres, and other institutions from across Asia to strengthen
              collaboration in Olympic education, research and academic
              exchange.
            </p>
            <p>
              The Summit aims to create a sustained platform for sharing
              programmes, research, resources and good practices, while
              opening opportunities for joint research, academic
              collaborations, educational initiatives and capacity-building
              across the region. By connecting institutions that often work
              independently, the Summit seeks to lay the foundation for a
              stronger and more connected Asian Olympic Education Network.
            </p>
            <p>
              This is consistent with the broader role of National Olympic
              Academies as institutions for Olympic education and with the
              growing emphasis on knowledge exchange and education across the
              Olympic Movement.
            </p>
          </div>
        </section>

        <section className="aos-ledger" id="focus">
          <div className="aos-manuscript__index">
            <span className="aos-manuscript__numeral">II.</span>
            <span className="aos-manuscript__label">Focus Areas</span>
          </div>

          <ol className="aos-ledger__list">
            {focusAreas.map((item) => (
              <li className="aos-ledger__row" key={item.numeral}>
                <span className="aos-ledger__badge">{item.numeral}</span>
                <div className="aos-ledger__text">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="aos-footer">
        <span className="aos-footer__rule" />
        <p>Asian National Olympic Academy Summit &middot; Gandhinagar, 28-29 January 2027</p>
        <span className="aos-footer__rule" />
      </footer>
    </div>
  );
}