import React, { useState } from "react";
import "./VisionObjectives.scss";

const objectives = [
  {
    ring: "blue",
    tag: "Values",
    number: "01",
    text:
      "Promoting Olympic values and ethics as the foundation of a values-driven sporting ecosystem, placing the athlete at the centre of every safety and safe sport commitment.",
  },
  {
    ring: "yellow",
    tag: "Research",
    number: "02",
    text:
      "Encouraging interdisciplinary research that speaks directly to the athlete, working across the multidisciplinary challenges of safe sport, performance and athlete welfare together, rather than treating them as separate concerns.",
  },
  {
    ring: "green",
    tag: "Representation",
    number: "03",
    text:
      "Building a platform for athlete representation and empowerment, with particular attention to young, women and para-athletes within Indian sport.",
  },
  {
    ring: "red",
    tag: "Governance",
    number: "04",
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

function ObjectiveIcon({ tag, color }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (tag) {
    case "Values":
      return (
        <svg {...common}>
          <path d="M12 2.5c2.4 3 3.6 5.4 3.6 8a3.6 3.6 0 1 1-7.2 0c0-1.3.5-2.5 1.2-3.6.2 1 .8 1.7 1.6 1.9-.2-2.4.6-4.4 2.4-6.3Z" />
          <path d="M7 20.5h10" />
          <path d="M9.5 17.5h5" />
        </svg>
      );

    case "Research":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="10" height="13" rx="1.2" />
          <path d="M7 7h4M7 10h4M7 13h2.5" />
          <circle cx="16.5" cy="16.5" r="3.6" />
          <path d="M19 19l2.5 2.5" />
        </svg>
      );

    case "Representation":
      return (
        <svg {...common}>
          <circle cx="12" cy="6" r="2.4" />
          <path d="M7.5 19.5v-2.2a4.5 4.5 0 0 1 9 0v2.2" />
          <circle cx="4.5" cy="9.5" r="1.8" />
          <path d="M2 19.5v-1.6a3 3 0 0 1 3.6-2.9" />
          <circle cx="19.5" cy="9.5" r="1.8" />
          <path d="M22 19.5v-1.6a3 3 0 0 0-3.6-2.9" />
        </svg>
      );

    case "Governance":
      return (
        <svg {...common}>
          <path d="M12 2.8 4.5 5.6v5.6c0 5 3.2 8.3 7.5 10 4.3-1.7 7.5-5 7.5-10V5.6L12 2.8Z" />
          <path d="M8.7 12.2l2.3 2.3 4.3-4.6" />
        </svg>
      );

    default:
      return null;
  }
}

export default function VisionObjectives() {
  const [active, setActive] = useState(0);

  const current = objectives[active];

  return (
    <section
      className="vision-objectives"
      id="about"
      style={{
        "--active-color": ringColor[current.ring],
      }}
    >
      {/* Decorative background */}
      <div className="vision-objectives__background">
        <div className="vision-objectives__orb vision-objectives__orb--one" />
        <div className="vision-objectives__orb vision-objectives__orb--two" />
        <div className="vision-objectives__orb vision-objectives__orb--three" />

        <div className="vision-objectives__grid" />

        <div className="vision-objectives__dots">
          {Array.from({ length: 140 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>

      <div className="vision-objectives__container">
        {/* =========================================
            TOP HEADER
        ========================================== */}
        <div className="vision-objectives__header">
          <div className="vision-objectives__header-left">
            <span className="vision-objectives__eyebrow">
              Theme, Vision &amp; Objectives
            </span>

            <h2 className="vision-objectives__top-title">
              OUR
              <br />
              <span>VISION.</span>
            </h2>
          </div>

          <div className="vision-objectives__intro">
            <span className="vision-objectives__intro-line" />

            <p>
              Building a safe, ethical and value-driven sporting ecosystem
              with the <strong>athlete at the centre</strong> of every
              safeguarding commitment.
            </p>
          </div>
        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================== */}
        <div className="vision-objectives__content">
          {/* LEFT */}
          <div className="vision-objectives__visual">
            <div className="vision-objectives__statement">
              <span>THE ATHLETE</span>
              <span>AT THE</span>
              <span>HEART.</span>
            </div>

            <div className="vision-objectives__shape vision-objectives__shape--one" />
            <div className="vision-objectives__shape vision-objectives__shape--two" />
          </div>

          {/* RIGHT */}
          <div className="vision-objectives__right">
            <div className="vision-objectives__right-heading">
              <span>STRATEGIC OBJECTIVES</span>

              <h3>
                A VALUE-DRIVEN
                <br />
                OLYMPIC ECOSYSTEM.
              </h3>
            </div>

            <div
              className="vision-objectives__list"
              role="tablist"
              aria-label="Strategic objectives"
            >
              {objectives.map((item, index) => {
                const isActive = active === index;
                const color = ringColor[item.ring];

                return (
                  <button
                    key={item.tag}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`vision-objective ${
                      isActive ? "is-active" : ""
                    }`}
                    style={{
                      "--objective-color": color,
                    }}
                    onClick={() => setActive(index)}
                  >
                    <div className="vision-objective__top">
                      <span className="vision-objective__number">
                        {item.number}
                      </span>

                      <span className="vision-objective__icon">
                        <ObjectiveIcon
                          tag={item.tag}
                          color={color}
                        />
                      </span>

                      <span className="vision-objective__title">
                        {item.tag}
                      </span>

                      <span className="vision-objective__arrow">
                        ↗
                      </span>
                    </div>

                    <div className="vision-objective__description">
                      {item.text}
                    </div>

                    <span className="vision-objective__line" />
                  </button>
                );
              })}
            </div>

            {/* Active description */}
            <div className="vision-objectives__active">
              <div
                className="vision-objectives__active-icon"
                style={{
                  borderColor: ringColor[current.ring],
                }}
              >
                <ObjectiveIcon
                  tag={current.tag}
                  color={ringColor[current.ring]}
                />
              </div>

              <div className="vision-objectives__active-content">
                <span
                  style={{
                    color: ringColor[current.ring],
                  }}
                >
                  {current.tag}
                </span>

                <p>{current.text}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom label */}
        <div className="vision-objectives__footer">
          <span>BCORE × SAFE SPORT</span>

          <span className="vision-objectives__footer-line" />

          <span>ATHLETE • SAFETY • ETHICS • GOVERNANCE</span>
        </div>
      </div>
    </section>
  );
}