import React from "react";
import "./AsianNationalOlympicAcademySummit.scss";

const focusAreas = [
  {
    numeral: "I",
    title: "Sharing Olympic Education",
    text: "Sharing Olympic education initiatives, programmes and institutional practices from across Asia.",
  },
  {
    numeral: "II",
    title: "Research & Academic Collaboration",
    text: "Strengthening research connections and academic collaboration among Olympic educators, researchers and institutions.",
  },
  {
    numeral: "III",
    title: "Joint Programmes & Publications",
    text: "Creating opportunities for joint programmes, publications, educational initiatives and knowledge exchange.",
  },
  {
    numeral: "IV",
    title: "Connecting Institutions",
    text: "Connecting National Olympic Academies with Olympic Studies and Research Centres, universities and institutions across Asia.",
  },
  {
    numeral: "V",
    title: "A Sustained Asian Network",
    text: "Exploring the development of a sustained Asian NOA Network or Forum for continued cooperation and capacity-building.",
  },
];

const pillars = [
  "Olympic Education",
  "Research & Exchange",
  "Academic Collaboration",
  "Knowledge Networks",
];

function Emblem() {
  return (
    <svg
      className="aos-emblem"
      viewBox="0 0 220 220"
      role="img"
      aria-label="Asian Olympic Education Summit emblem"
    >
      <circle
        className="aos-emblem__ring-outer"
        cx="110"
        cy="110"
        r="102"
      />

      <circle
        className="aos-emblem__ring-inner"
        cx="110"
        cy="110"
        r="84"
      />

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

      {/* Asian institutional network */}
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

      <text
        x="110"
        y="196"
        textAnchor="middle"
        className="aos-emblem__label"
      >
        ASIA
      </text>
    </svg>
  );
}

function Header() {
  return (
    <header className="aos-hero">
      <div className="aos-hero__texture" aria-hidden="true" />

      <div className="aos-hero-inner">
        {/* Top identification */}
        <div className="aos-hero-meta">
          <span className="aos-hero-meta__org">BCORE</span>

          <span
            className="aos-hero-meta__rule"
            aria-hidden="true"
          />

          <span>Rashtriya Raksha University</span>

          <span
            className="aos-hero-meta__dot"
            aria-hidden="true"
          />

          <span>Asian Olympic Education Summit</span>
        </div>

        <div className="aos-hero-grid">
          {/* Emblem */}
          <div className="aos-hero-emblem-col">
            <Emblem />
          </div>

          {/* Main content */}
          <div className="aos-hero-content-col">
            <div className="aos-hero-kicker">
              <span>Asian</span>
              <strong>Olympic Education Summit</strong>
            </div>

            <h1 className="aos-hero-title">
              <span>Connecting Asia</span>

              <span className="aos-hero-title__accent">
                Through Olympic Education &amp; Research
              </span>
            </h1>

            <p className="aos-hero-subtitle">
              Bringing together National Olympic Academies, Olympic Studies
              and Research Centres, universities, institutions and independent
              researchers from across Asia to build a shared platform for
              Olympic education, research and exchange.
            </p>

            <div className="aos-info-row">
              {/* Date */}
              <div className="aos-stub">
                <div className="aos-stub__dates">
                  <span>28</span>
                  <em>&mdash;</em>
                  <span>29</span>

                  <small>JAN 2027</small>
                </div>

                <p>Gandhinagar, India</p>
              </div>

              <div
                className="aos-info-divider"
                aria-hidden="true"
              />

              {/* Venue */}
              <div className="aos-venue">
                <span className="aos-venue__label">
                  Host Institution
                </span>

                <strong>
                  Rashtriya Raksha University
                </strong>

                <small>
                  Gandhinagar, Gujarat, India
                </small>
              </div>

              <div
                className="aos-info-divider"
                aria-hidden="true"
              />

              {/* Pillars */}
              <ul
                className="aos-pillars"
                aria-label="Summit themes"
              >
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
        {/* =========================================
            ABOUT
        ========================================= */}
        <section
          className="aos-manuscript"
          id="about"
        >
          <div className="aos-manuscript__index">
            <span className="aos-manuscript__numeral">
              I.
            </span>

            <span className="aos-manuscript__label">
              About the Summit
            </span>
          </div>

          <div className="aos-manuscript__copy">
            <p className="aos-dropcap">
              The Asian Olympic Education Summit brings together
              National Olympic Academies, Olympic Studies and
              Research Centres, universities, institutions and
              independent researchers from across Asia to present
              their work around Olympic education and create a
              shared platform for collaboration, exchange and
              academic engagement.
            </p>

            <p>
              The Summit aims to create a sustained platform for
              sharing programmes, research, resources and good
              practices, while opening opportunities for joint
              research, academic collaborations, educational
              initiatives and capacity-building across the region.
            </p>

            <p>
              By connecting institutions that often work
              independently, the Summit seeks to lay the
              foundation for a stronger and more connected Asian
              Olympic Education Network — one that encourages
              continued dialogue, institutional cooperation and
              the exchange of knowledge and experience.
            </p>
          </div>
        </section>

        {/* =========================================
            PARTICIPANTS
        ========================================= */}
        <section
          className="aos-participants"
          id="participants"
        >
          <div className="aos-manuscript__index">
            <span className="aos-manuscript__numeral">
              II.
            </span>

            <span className="aos-manuscript__label">
              Who Will Gather
            </span>
          </div>

          <div className="aos-participants__content">
            <p className="aos-participants__lead">
              A meeting point for the institutions and people
              advancing Olympic education and research across Asia.
            </p>

            <div className="aos-participants__grid">
              <div className="aos-participant">
                <span>01</span>
                <h3>National Olympic Academies</h3>
                <p>
                  Institutions advancing Olympic education,
                  values and learning initiatives within their
                  respective countries.
                </p>
              </div>

              <div className="aos-participant">
                <span>02</span>
                <h3>Research Centres</h3>
                <p>
                  Olympic Studies and Research Centres working
                  across research, education and knowledge
                  production.
                </p>
              </div>

              <div className="aos-participant">
                <span>03</span>
                <h3>Universities &amp; Institutions</h3>
                <p>
                  Academic institutions contributing expertise,
                  programmes, resources and opportunities for
                  collaboration.
                </p>
              </div>

              <div className="aos-participant">
                <span>04</span>
                <h3>Independent Researchers</h3>
                <p>
                  Researchers and educators bringing diverse
                  perspectives, experiences and areas of Olympic
                  scholarship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            FOCUS AREAS
        ========================================= */}
        <section
          className="aos-ledger"
          id="focus"
        >
          <div className="aos-manuscript__index">
            <span className="aos-manuscript__numeral">
              III.
            </span>

            <span className="aos-manuscript__label">
              Focus Areas
            </span>
          </div>

          <ol className="aos-ledger__list">
            {focusAreas.map((item) => (
              <li
                className="aos-ledger__row"
                key={item.numeral}
              >
                <span className="aos-ledger__badge">
                  {item.numeral}
                </span>

                <div className="aos-ledger__text">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* =========================================
            NETWORK
        ========================================= */}
        <section
          className="aos-network"
          id="network"
        >
          <div className="aos-network__inner">
            <div className="aos-network__index">
              <span>IV.</span>
              <small>The Long View</small>
            </div>

            <div className="aos-network__content">
              <span className="aos-network__eyebrow">
                Beyond the Summit
              </span>

              <h2>
                From a gathering
                <br />
                to a <em>network.</em>
              </h2>

              <p>
                The Summit seeks to explore the development of a
                sustained Asian NOA Network or Forum — creating
                opportunities for continued cooperation between
                National Olympic Academies, Olympic Studies and
                Research Centres, universities and other
                institutions.
              </p>

              <div className="aos-network__line">
                <span />
                <strong>
                  Education · Research · Exchange · Collaboration
                </strong>
                <span />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CALL TO CONNECT
        ========================================= */}
        <section className="aos-connect">
          <div className="aos-connect__mark">
            <span />
            <span />
            <span />
          </div>

          <div className="aos-connect__content">
            <span className="aos-connect__eyebrow">
              A Shared Platform for Asia
            </span>

            <h2>
              Learn together.
              <br />
              Research together.
              <br />
              <em>Build together.</em>
            </h2>

            <p>
              The Asian Olympic Education Summit invites
              institutions and researchers from across the region
              to contribute to a stronger ecosystem of Olympic
              education, research and academic exchange.
            </p>
          </div>
        </section>
      </main>

      {/* =========================================
          FOOTER
      ========================================= */}
      <footer className="aos-footer">
        <span
          className="aos-footer__rule"
          aria-hidden="true"
        />

        <div className="aos-footer__center">
          <strong>Asian Olympic Education Summit</strong>

          <span>
            Gandhinagar · India · 28–29 January 2027
          </span>
        </div>

        <span
          className="aos-footer__rule"
          aria-hidden="true"
        />
      </footer>
    </div>
  );
}