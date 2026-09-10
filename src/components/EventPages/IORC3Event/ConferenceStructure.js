import React from "react";
import "./ConferenceStructure.scss";

const days = [
  {
    ring: "blue",
    day: "Day 1 · 27 Jan 2027",
    title: "Athletes and Sports Performance",
    sessions: [
      "Session 1 — Understanding Safe Sports and Athlete Safeguarding",
      "Session 2 — Athlete Rights, Responsibilities and Representation in Organizations: The Athlete Forum",
      "Session 3 — Women and Young Athletes in Sport: Performance, Inclusion and Sustainability",
      "Session 4 — High Performance Safe Sports Environment",
    ],
  },
  {
    ring: "yellow",
    day: "Day 2 · 28 Jan 2027",
    title: "Coaches and the High-Performance Environment",
    sessions: [
      "First Half — Session 1: Safeguarding Coaches, Support Staff and Actors of the Ecosystem",
      "First Half — Session 2: Research, Ethics and Values in Coaching; Mental Health and Decision-Making",
      "Second Half — Asian National Olympic Academy and OSRCs Summit: Presentations on Olympic Education and Initiatives",
      "Second Half — Research and Paper Presentations",
    ],
  },
  {
    ring: "green",
    day: "Day 3 · 29 Jan 2027",
    title: "Organizations, Governance and Policy",
    sessions: [
      "First Half — Session 1: Building Institutional Responsibilities: Safe and Inclusive Sport Governance",
      "First Half — Session 2: Integrity in Sport (Anti-Doping, Ethical Leadership, Research-Based Solutions) & Research for Better Sport (Evidence-Based Policy, Innovation and Organizational Excellence)",
      "Second Half — Asian National Olympic Academy and OSRCs Summit: Continued Presentations and Discussion",
      "Second Half — Research and Paper Presentations",
      "Second Half — National Sports Good Governance Award (under the NSGO framework)",
      "Second Half — Valedictory Session (evening)",
    ],
  },
];

const ringColor = {
  blue: "#0085C7",
  yellow: "#F4C300",
  green: "#009F3D",
};

export default function ConferenceStructure() {
  return (
    <section className="irc-cs-section" id="conference-structure">
      {/* Background */}
      <div className="irc-cs-section__background" aria-hidden="true">
        <div className="irc-cs-section__grid" />
        <div className="irc-cs-section__orb irc-cs-section__orb--one" />
        <div className="irc-cs-section__orb irc-cs-section__orb--two" />
      </div>

      <div className="irc-cs-container">
        {/* =========================================
            HEADER
        ========================================== */}
        <div className="irc-cs-heading">
          <span className="irc-cs-heading__eyebrow">
            Conference Structure
          </span>

          <h2 className="irc-cs-heading__title">
            THREE DAYS.
            <br />
            <span>ONE SHARED COMMITMENT.</span>
          </h2>

          <div className="irc-cs-heading__lead-wrap">
            <span className="irc-cs-heading__lead-line" />

            <p className="irc-cs-heading__lead">
              Each day builds toward a single focus —{" "}
              <strong>safe sport</strong> — through the lens of a different
              stakeholder group.
            </p>
          </div>
        </div>

        {/* =========================================
            TIMELINE
        ========================================== */}
        <ol className="irc-cs-track">
          {days.map((item, index) => {
            const color = ringColor[item.ring];

            return (
              <li
                className={`irc-cs-item irc-cs-item--${item.ring}`}
                key={item.title}
              >
                {/* Timeline Rail */}
                <div className="irc-cs-item__rail" aria-hidden="true">
                  <span
                    className="irc-cs-item__node"
                    style={{
                      "--node-color": color,
                    }}
                  >
                    <span />
                  </span>

                  {index !== days.length - 1 && (
                    <span className="irc-cs-item__line">
                      <span
                        style={{
                          background: `linear-gradient(to bottom, ${color}, rgba(15,28,25,0.12))`,
                        }}
                      />
                    </span>
                  )}
                </div>

                {/* Day Card */}
                <article className="irc-cs-item__card">
                  {/* Card Header */}
                  <div className="irc-cs-item__card-header">
                    <div className="irc-cs-item__meta">
                      <span
                        className="irc-cs-item__day"
                        style={{
                          color,
                        }}
                      >
                        {item.day}
                      </span>

                      <span
                        className="irc-cs-item__index"
                        style={{
                          borderColor: color,
                          color,
                        }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="irc-cs-item__title">
                      {item.title}
                    </h3>
                  </div>

                  {/* Sessions */}
                  <div className="irc-cs-item__body">
                    <span className="irc-cs-item__body-label">
                      Sessions &amp; Programme
                    </span>

                    <ul className="irc-cs-item__sessions">
                      {item.sessions.map((session, sessionIndex) => (
                        <li key={sessionIndex}>
                          <span
                            className="irc-cs-item__session-marker"
                            style={{
                              backgroundColor: color,
                            }}
                          />

                          <span className="irc-cs-item__session-text">
                            {session}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className="irc-cs-item__accent"
                    style={{
                      background: `linear-gradient(90deg, ${color}, transparent)`,
                    }}
                  />
                </article>
              </li>
            );
          })}
        </ol>

        {/* =========================================
            FOOTER
        ========================================== */}
        <div className="irc-cs-footer">
          <span>BCORE × SAFE SPORT</span>

          <span className="irc-cs-footer__line" />

          <span>ATHLETE • PERFORMANCE • GOVERNANCE</span>
        </div>
      </div>
    </section>
  );
}