import React from "react";

const days = [
  {
    ring: "blue",
    day: "Day 1 &middot; 27 Jan 2027",
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
    day: "Day 2 &middot; 28 Jan 2027",
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
    day: "Day 3 &middot; 29 Jan 2027",
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

const ringColor = { blue: "#0085C7", yellow: "#F4C300", green: "#009F3D" };

export default function ConferenceStructure() {
  return (
    <section className="irc-cs-section">
      <div className="irc-cs-heading">
        <span className="irc-cs-heading__eyebrow">Conference Structure</span>
        <h2 className="irc-cs-heading__title">Three Days, One Shared Commitment</h2>
        <p className="irc-cs-heading__lead">
          Each day builds toward a single focus — safe sport — through the lens of a
          different stakeholder group.
        </p>
      </div>

      <ol className="irc-cs-track">
        {days.map((item, i) => (
          <li className="irc-cs-item" key={item.title}>
            <div className="irc-cs-item__rail" aria-hidden="true">
              <span
                className="irc-cs-item__node"
                style={{ borderColor: ringColor[item.ring] }}
              ></span>
              {i !== days.length - 1 && <span className="irc-cs-item__line"></span>}
            </div>
            <div className="irc-cs-item__card">
              <span
                className="irc-cs-item__day"
                style={{ color: ringColor[item.ring] }}
                dangerouslySetInnerHTML={{ __html: item.day }}
              ></span>
              <h3 className="irc-cs-item__title">{item.title}</h3>
              <ul className="irc-cs-item__sessions">
                {item.sessions.map((session, idx) => (
                  <li key={idx}>{session}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
