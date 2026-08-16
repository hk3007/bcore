import React from "react";

const objectives = [
  {
    ring: "blue",
    tag: "Values",
    text:
      "Promoting Olympic values and ethics as the foundation of a values-driven sporting ecosystem, placing the athlete at the centre of every safety and safe sport commitment.",
  },
  {
    ring: "yellow",
    tag: "Research",
    text:
      "Encouraging interdisciplinary research that speaks directly to the athlete, working across the multidisciplinary challenges of safe sport, performance and athlete welfare together, rather than treating them as separate concerns.",
  },
  {
    ring: "green",
    tag: "Representation",
    text:
      "Building a platform for athlete representation and empowerment, with particular attention to young, women and para-athletes within Indian sport.",
  },
  {
    ring: "red",
    tag: "Governance",
    text:
      "Bringing every stakeholder in the sporting ecosystem — physical education teachers, coaches, administrators and organizations — into one shared, values-driven conversation on governance and safeguarding.",
  },
];

const ringColor = {
  blue: "#0085C7",
  yellow: "#F4C300",
  green: "#009F3D",
  red: "#DF0024",
};

export default function VisionObjectives() {
  return (
    <section className="irc-section" id="about">
      <span className="irc-section__eyebrow">Theme, Vision &amp; Objectives</span>
      <h2 className="irc-section__title">
        The Athlete at the Heart — A Value-Driven Olympic Ecosystem
      </h2>
      <p className="irc-vision-text">
        To build a safe, ethical and value-driven athlete-centred sporting ecosystem,
        bringing research, policy, education and practice together to address the
        safeguarding challenges facing the Olympic Movement and the wider sporting
        landscape today.
      </p>

      <p className="irc-section__lead">Strategic Objectives</p>
      <div className="irc-objectives-grid">
        {objectives.map((item) => (
          <article className="irc-objective-card" key={item.tag}>
            <span
              className="irc-objective-card__ring"
              style={{ borderColor: ringColor[item.ring] }}
              aria-hidden="true"
            ></span>
            <span
              className="irc-objective-card__tag"
              style={{ color: ringColor[item.ring] }}
            >
              {item.tag}
            </span>
            <p className="irc-objective-card__text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
