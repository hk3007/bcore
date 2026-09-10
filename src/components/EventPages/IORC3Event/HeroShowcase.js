import React from "react";

export default function HeroShowcase() {
  return (
    <section className="iorc-showcase">
      {/* Decorative background */}
      <div className="iorc-showcase__background" aria-hidden="true">
        <div className="iorc-showcase__grid" />

        <div className="iorc-showcase__orb iorc-showcase__orb--one" />
        <div className="iorc-showcase__orb iorc-showcase__orb--two" />

        <div className="iorc-showcase__dots">
          {Array.from({ length: 100 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>

      <div className="iorc-showcase__container">

        {/* ============================================================
            LEFT SIDE
        ============================================================ */}
        <div className="iorc-showcase__left">

          <span className="iorc-showcase__eyebrow">
            About the Conference
          </span>

          <h2 className="iorc-showcase__title">
            CARRYING
            <br />
            BCORE'S
            <br />
            <span>LEGACY</span>
            <br />
            FORWARD.
          </h2>

          <div className="iorc-showcase__accent-line">
            <span />
            <span />
            <span />
            <span />
          </div>

          <p className="iorc-showcase__lead">
            A single, focused commitment across research,
            education, policy and practice:
            <strong> safe sport.</strong>
          </p>

          <p className="iorc-showcase__description">
            BCORE's International Olympic Research Conference began
            in January 2025 as BCORE's flagship gathering for Olympic
            studies in India. Its second edition in January 2026,
            under the theme{" "}
            <em>
              Education, Research and Governance, the Sustainable
              Olympic Ecosystem
            </em>
            , brought together athletes, coaches, researchers,
            National Olympic Academies and administrators from India
            and abroad.
          </p>

        </div>

        {/* ============================================================
            RIGHT SIDE
        ============================================================ */}
        <div className="iorc-showcase__right">

          {/* About BCORE */}
          <div className="iorc-showcase__about">

            <div className="iorc-showcase__about-header">
              <span className="iorc-showcase__about-number">
                01
              </span>

              <span className="iorc-showcase__about-label">
                About BCORE
              </span>

              <span className="iorc-showcase__about-arrow">
                ↗
              </span>
            </div>

            <h3>
              INDIA'S OLYMPIC
              <br />
              STUDIES CENTRE.
            </h3>

            <p>
              The Bharat Centre of Olympic Research and Education
              (BCORE), established in June 2024 at Rashtriya Raksha
              University, is India's and South Asia's first Olympic
              Studies Centre recognized by the International Olympic
              Committee.
            </p>

            <p>
              BCORE works at the intersection of research, education
              and governance to advance the Olympic Movement in India.
            </p>

          </div>

          {/* Stats */}
          <div className="iorc-showcase__stats">

            <div className="iorc-stat">
              <strong>03</strong>
              <span>Days of<br />Dialogue</span>
            </div>

            <div className="iorc-stat">
              <strong>03<span>rd</span></strong>
              <span>Conference<br />Edition</span>
            </div>

            <div className="iorc-stat">
              <strong>12<span>+</span></strong>
              <span>Stakeholder<br />Groups</span>
            </div>

          </div>

          {/* CTA */}
          <div className="iorc-showcase__actions">

            <div className="iorc-showcase__status">
              <span className="iorc-showcase__status-dot" />
              Registration opens soon
            </div>

            <a
              href="mailto:olyresearchacademy.submissions@rru.ac.in"
              className="iorc-showcase__cta"
            >
              <span>
                CALL FOR PAPERS
                <small>Closes 30 Nov 2026</small>
              </span>

              <b>↗</b>
            </a>

          </div>

        </div>
      </div>

      {/* Bottom metadata */}
      <div className="iorc-showcase__footer">
        <span>BCORE × RRU</span>

        <span className="iorc-showcase__footer-line" />

        <span>RESEARCH • EDUCATION • GOVERNANCE • SAFE SPORT</span>
      </div>
    </section>
  );
}