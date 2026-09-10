import React from "react";
import "./WhySafeSport.scss";

const contexts = [
  {
    number: "01",
    label: "Global Context",
    title: "The Global Context",
    accent: "#0085C7",
    text: `Safe sport has moved from a peripheral compliance matter to a central
    governance question across the Olympic Movement. The IOC's own safeguarding
    framework, the rise of dedicated safe sport commissions in several countries,
    and a growing body of international research all point to the same
    conclusion — an athlete's protection and an athlete's performance cannot be
    treated as separate concerns.`,
  },
  {
    number: "02",
    label: "Indian Context",
    title: "The Indian Context",
    accent: "#DF0024",
    text: `India's sporting institutions have expanded rapidly over the past decade, yet
    the safeguarding infrastructure around the athletes carrying that growth
    remains uneven — a gap the IOC's own assessments of the region have pointed to
    directly. Recurring, documented issues give this edition its specific
    starting point: federation governance disputes, the absence of standing
    safeguarding officers at most domestic events, an unregulated supplement
    market that leaves athletes exposed to inadvertent doping, and a culture in
    which junior athletes' dependence on scholarships, quotas and government
    employment keeps grievances unspoken. This edition is built to confront these
    realities directly, rather than address safe sport in the abstract.`,
  },
];

function ContextIcon({ type, color }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "global") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17" />
        <path d="M12 3.5c2.4 2.4 3.7 5.3 3.7 8.5S14.4 18.1 12 20.5" />
        <path d="M12 3.5c-2.4 2.4-3.7 5.3-3.7 8.5s1.3 6.1 3.7 8.5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 3.2 4.5 6v5.4c0 4.8 3 8.1 7.5 9.5 4.5-1.4 7.5-4.7 7.5-9.5V6L12 3.2Z" />
      <path d="M9 12.1 11 14l4-4.2" />
    </svg>
  );
}

export default function WhySafeSport() {
  return (
    <section className="irc-section irc-section--why" id="why-safe-sport">
      {/* Decorative background */}
      <div className="irc-section--why__background" aria-hidden="true">
        <span className="why-orb why-orb--one" />
        <span className="why-orb why-orb--two" />
        <span className="why-orb why-orb--three" />

        <div className="why-grid" />

        <div className="why-dots">
          {Array.from({ length: 100 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>

      <div className="irc-section--why__container">
        {/* Header */}
        <header className="irc-section--why__header">
          <div className="irc-section--why__header-left">
            <span className="irc-section__eyebrow">
              Why Safe Sport
            </span>

            <h2 className="irc-section__title">
              A GOVERNANCE
              <br />
              QUESTION.
            </h2>
          </div>

          <div className="irc-section--why__intro">
            <span className="irc-section--why__intro-line" />

            <p>
              Safe sport is not simply about compliance. It is about building
              a sporting ecosystem where{" "}
              <strong>athlete safety, performance and dignity</strong> are
              treated as connected responsibilities.
            </p>
          </div>
        </header>

        {/* Context Cards */}
        <div className="irc-why-grid">
          {contexts.map((context, index) => (
            <article
              className={`irc-why-block ${
                index === 1 ? "irc-why-block--india" : ""
              }`}
              key={context.number}
              style={{
                "--context-accent": context.accent,
              }}
            >
              <div className="irc-why-block__top">
                <span className="irc-why-block__number">
                  {context.number}
                </span>

                <span className="irc-why-block__label">
                  {context.label}
                </span>

                <span className="irc-why-block__icon">
                  <ContextIcon
                    type={index === 0 ? "global" : "india"}
                    color={context.accent}
                  />
                </span>
              </div>

              <div className="irc-why-block__content">
                <h3>{context.title}</h3>

                <p>{context.text}</p>
              </div>

              <div className="irc-why-block__bottom">
                <span className="irc-why-block__bottom-line" />

                <span className="irc-why-block__bottom-text">
                  {index === 0
                    ? "OLYMPIC MOVEMENT • GLOBAL"
                    : "BCORE • INDIA • SAFE SPORT"}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="irc-section--why__statement">
          <span className="irc-section--why__statement-mark">
            —
          </span>

          <p>
            <strong>Protection and performance cannot be separated.</strong>{" "}
            A safe sporting environment is a foundation for athlete
            development, trust and excellence.
          </p>
        </div>

        {/* Footer */}
        <footer className="irc-section--why__footer">
          <span>BCORE × SAFE SPORT</span>

          <span className="irc-section--why__footer-line" />

          <span>ATHLETE • SAFETY • ETHICS • GOVERNANCE</span>
        </footer>
      </div>
    </section>
  );
}