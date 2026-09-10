import React from "react";
import "./ContactDetails.scss";

const contactGroups = [
  {
    number: "01",
    label: "Programme Enquiries",
    title: "Programme Enquiries",
    accent: "#0085C7",
    contacts: [
      { name: "", email: "bcore@rru.ac.in" },
      { name: "", email: "ro1.bcore@rru.ac.in" },
    ],
  },
  {
    number: "02",
    label: "Accommodation",
    title: "Accommodation",
    accent: "#DF0024",
    contacts: [
      { name: "Ms. Khushbu Shah", email: "aacc1.bcore@rru.ac.in" },
    ],
  },
];

function ContactIcon({ type, color }) {
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

  if (type === "programme") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
        <path d="M3.5 6.5 12 13l8.5-6.5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1V10.5Z" />
    </svg>
  );
}

export default function ContactDetails() {
  return (
    <section className="irc-section irc-section--why irc-section--contact" id="contact-us">
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
            <span className="irc-section__eyebrow">Contact Us</span>

            <h2 className="irc-section__title">
              GET IN
              <br />
              TOUCH.
            </h2>
          </div>

          <div className="irc-section--why__intro">
            <span className="irc-section--why__intro-line" />

            <p>
              For queries related to the <strong>Programme</strong> or{" "}
              <strong>accommodation arrangements</strong>, please reach out
              to the concerned contacts below.
            </p>
          </div>
        </header>

        {/* Contact Cards */}
        <div className="irc-why-grid">
          {contactGroups.map((group, index) => (
            <article
              className="irc-why-block"
              key={group.number}
              style={{
                "--context-accent": group.accent,
              }}
            >
              <div className="irc-why-block__top">
                <span className="irc-why-block__number">{group.number}</span>

                <span className="irc-why-block__label">{group.label}</span>

                <span className="irc-why-block__icon">
                  <ContactIcon
                    type={index === 0 ? "programme" : "accommodation"}
                    color={group.accent}
                  />
                </span>
              </div>

              <div className="irc-why-block__content">
                <h3>{group.title}</h3>

                <ul className="irc-contact-list">
                  {group.contacts.map((contact) => (
                    <li className="irc-contact-list__item" key={contact.email}>
                      <span className="irc-contact-list__name">
                        {contact.name}
                      </span>
                      <a
                        className="irc-contact-list__email"
                        href={`mailto:${contact.email}`}
                      >
                        {contact.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="irc-why-block__bottom">
                <span className="irc-why-block__bottom-line" />

                <span className="irc-why-block__bottom-text">
                  {index === 0
                    ? "BCORE • PROGRAMME SUPPORT"
                    : "BCORE • ACCOMMODATION SUPPORT"}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="irc-section--why__footer">
          <span>BCORE × CONTACT</span>

          <span className="irc-section--why__footer-line" />

          <span>PROGRAMME • ACCOMMODATION • SUPPORT</span>
        </footer>
      </div>
    </section>
  );
}