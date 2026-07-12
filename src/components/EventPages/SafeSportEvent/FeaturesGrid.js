import React from "react";

const features = [
  {
    ring: "blue",
    tag: "Foundations",
    title: "Principles of Safe Sport",
    text: "Olympic values, athlete rights and the foundations of a safeguarding-first sporting culture.",
  },
  {
    ring: "yellow",
    tag: "Recognition",
    title: "Abuse, Harassment & Discrimination",
    text: "Identifying the forms safeguarding risks take across training, competition and travel environments.",
  },
  {
    ring: "green",
    tag: "Duty of Care",
    title: "Ethics & Institutional Responsibility",
    text: "The legal and ethical obligations that sit with coaches, federations and sports organisations.",
  },
  {
    ring: "red",
    tag: "Well-being",
    title: "Athlete Mental Health",
    text: "Supporting psychological safety, consent, boundaries and respectful communication in sport.",
  },
  {
    ring: "black",
    tag: "Systems",
    title: "Risk Assessment & Safe Coaching",
    text: "Practical frameworks for building safeguarding into everyday organisational practice.",
  },
  {
    ring: "blue",
    tag: "Legal Framework",
    title: "Indian & International Law",
    text: "POCSO, POSH, the Juvenile Justice Act and comparative global safeguarding case studies.",
  },
];

const ringColor = {
  blue: "#0085C7",
  yellow: "#F4C300",
  green: "#009F3D",
  red: "#DF0024",
  black: "#101828",
};

export default function FeaturesGrid() {
  return (
    <section className="fg-section">
      <div className="fg-heading">
        <span className="fg-heading__eyebrow">Programme Content</span>
        <h2 className="fg-heading__title">What Participants Will Master</h2>
        <p className="fg-heading__lead">
          Six focus areas, delivered through expert lectures, role plays and
          collaborative case-study work.
        </p>
      </div>

      <div className="fg-grid">
        {features.map((item) => (
          <article className="fg-card" key={item.title}>
            <span
              className="fg-card__ring"
              style={{ borderColor: ringColor[item.ring] }}
              aria-hidden="true"
            ></span>
            <span className="fg-card__tag" style={{ color: ringColor[item.ring] }}>
              {item.tag}
            </span>
            <h3 className="fg-card__title">{item.title}</h3>
            <p className="fg-card__text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}