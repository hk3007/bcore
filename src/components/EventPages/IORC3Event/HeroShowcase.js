import React from "react";

export default function HeroShowcase() {
  return (
    <section className="irc-showcase">
      <div className="irc-showcase__panel">
        <span className="irc-eyebrow">About the Conference</span>
        <h2 className="irc-headline">
          Carrying BCORE's legacy forward with a{" "}
          <span className="irc-headline__accent">single, focused commitment — safe sport.</span>
        </h2>
        <p className="irc-lead">
          BCORE's International Olympic Research Conference began in January 2025 as
          BCORE's flagship gathering for Olympic studies in India, and returned for a
          second edition in January 2026 under the theme{" "}
          <em>Education, Research and Governance, the Sustainable Olympic Ecosystem</em>,
          bringing together athletes, coaches, researchers, National Olympic Academies
          and administrators from India and abroad. The third edition carries that
          legacy forward with a single, focused commitment across all its sessions:
          safe sport.
        </p>

        <div className="irc-meta-row">
          <div className="irc-meta">
            <strong>3</strong>
            <span>Days of Dialogue</span>
          </div>
          <div className="irc-meta">
            <strong>3rd</strong>
            <span>Conference Edition</span>
          </div>
          <div className="irc-meta">
            <strong>12+</strong>
            <span>Stakeholder Groups</span>
          </div>
        </div>

        <div className="irc-badge-row">
          <span className="irc-badge irc-badge--primary">
            Registration opens soon — details at bcore.rru.ac.in
          </span>
          <a
            href="mailto:olyresearchacademy.submissions@rru.ac.in"
            className="irc-badge irc-badge--ghost"
          >
            Call for Papers · closes 30 Nov 2026
          </a>
        </div>
      </div>

      <div className="irc-showcase__panel irc-showcase__panel--about">
        <h3 className="irc-about-title">About BCORE</h3>
        <p>
          The Bharat Centre of Olympic Research and Education (BCORE), established in
          June 2024 at Rashtriya Raksha University, is India's and South Asia's first
          Olympic Studies Centre recognized by the International Olympic Committee.
          BCORE works at the intersection of research, education and governance to
          advance the Olympic Movement in India.
        </p>
      </div>
    </section>
  );
}
