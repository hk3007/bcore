import React from "react";

const schedule = [
  {
    ring: "blue",
    day: "Day 1 &middot; 21 Oct",
    title: "Creating a Safe Sporting Culture",
    text: "Athletes, coaches and administrators establish a shared understanding of Safe Sport, Olympic values and athlete safeguarding.",
    audience: "All Stakeholders",
  },
  {
    ring: "yellow",
    day: "Day 2 &middot; 22 Oct",
    title: "Athlete Safe Sport Foundation",
    text: "Athletes lead on rights, consent, boundaries and reporting mechanisms, with coaches and administrators observing to inform policy.",
    audience: "Athlete-Led",
  },
  {
    ring: "green",
    day: "Day 3 &middot; 23 Oct",
    title: "Building Safe Organisations",
    text: "Coaches and administrators focus on duty of care, governance and safeguarding policy, with athletes observing institutional decision-making.",
    audience: "Institution-Led",
  },
];

const ringColor = { blue: "#0085C7", yellow: "#F4C300", green: "#009F3D" };

export default function Timeline() {
  return (
    <section className="tl-section">
      <div className="tl-heading">
        <span className="tl-heading__eyebrow">Programme Structure</span>
        <h2 className="tl-heading__title">Three Days, One Shared Understanding</h2>
        <p className="tl-heading__lead">
          A distinctive observer-based model lets every stakeholder learn from
          the others&rsquo; perspective.
        </p>
      </div>

      <ol className="tl-track">
        {schedule.map((item, i) => (
          <li className="tl-item" key={item.title}>
            <div className="tl-item__rail" aria-hidden="true">
              <span
                className="tl-item__node"
                style={{ borderColor: ringColor[item.ring] }}
              ></span>
              {i !== schedule.length - 1 && <span className="tl-item__line"></span>}
            </div>
            <div className="tl-item__card">
              <span
                className="tl-item__day"
                style={{ color: ringColor[item.ring] }}
                dangerouslySetInnerHTML={{ __html: item.day }}
              ></span>
              <h3 className="tl-item__title">{item.title}</h3>
              <p className="tl-item__text">{item.text}</p>
              <span className="tl-item__audience">{item.audience}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}