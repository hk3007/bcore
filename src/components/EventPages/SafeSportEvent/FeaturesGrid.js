import React from "react";

const features = [
  {
    number: "01",
    ring: "blue",
    tag: "Foundations",
    title: "Principles of Safe Sport",
    text: "Olympic values, athlete rights and the foundations of a safeguarding-first sporting culture.",
  },
  {
    number: "02",
    ring: "yellow",
    tag: "Recognition",
    title: "Abuse, Harassment & Discrimination",
    text: "Identifying the forms safeguarding risks take across training, competition and travel environments.",
  },
  {
    number: "03",
    ring: "green",
    tag: "Duty of Care",
    title: "Ethics & Institutional Responsibility",
    text: "The legal and ethical obligations that sit with coaches, federations and sports organisations.",
  },
  {
    number: "04",
    ring: "red",
    tag: "Well-being",
    title: "Athlete Mental Health",
    text: "Supporting psychological safety, consent, boundaries and respectful communication in sport.",
  },
  {
    number: "05",
    ring: "black",
    tag: "Systems",
    title: "Risk Assessment & Safe Coaching",
    text: "Practical frameworks for building safeguarding into everyday organisational practice.",
  },
  {
    number: "06",
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
        <div className="fg-heading__top">
          <span className="fg-heading__line" />
          <span className="fg-heading__eyebrow">
            Programme Content
          </span>
        </div>

        <div className="fg-heading__content">
          <h2 className="fg-heading__title">
            What Participants
            <br />
            <span>Will Master</span>
          </h2>

          <p className="fg-heading__lead">
            Six focus areas delivered through expert lectures, role plays
            and collaborative case-study work.
          </p>
        </div>
      </div>

      <div className="fg-grid">
        {features.map((item) => (
          <article className="fg-card" key={item.title}>
            <div className="fg-card__top">
              <span className="fg-card__number">
                {item.number}
              </span>

              <span
                className="fg-card__ring"
                style={{ borderColor: ringColor[item.ring] }}
                aria-hidden="true"
              />
            </div>

            <div
              className="fg-card__tag"
              style={{ color: ringColor[item.ring] }}
            >
              {item.tag}
            </div>

            <h3 className="fg-card__title">
              {item.title}
            </h3>

            <p className="fg-card__text">
              {item.text}
            </p>

            <div
              className="fg-card__accent"
              style={{ backgroundColor: ringColor[item.ring] }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}