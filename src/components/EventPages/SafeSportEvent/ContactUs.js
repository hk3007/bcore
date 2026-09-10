import React from "react";

const contacts = [
  {
    label: "Programme Enquiries",
    ring: "blue",
    people: [
      { role: "BCORE", email: "bcore@rru.ac.in" },
      { role: "", email: "ro1.bcore@rru.ac.in" },
    ],
  },
  {
    label: "Accommodation",
    ring: "yellow",
    people: [
      { role: "Ms. Khushbu Shah", email: "aacc1.bcore@rru.ac.in" },
    ],
  },
];

const ringColor = { blue: "#0085C7", yellow: "#F4C300", green: "#009F3D" };

export default function ContactUs() {
  return (
    <section className="contact-section" id="contact">
      <div className="tl-heading">
        <span className="tl-heading__eyebrow">Get In Touch</span>
        <h2 className="tl-heading__title">Contact Us</h2>
        <p className="tl-heading__lead">
          For queries related to the Programme or accommodation arrangements,
          please reach out to the concerned contacts below.
        </p>
      </div>

      <div className="contact-grid">
        {contacts.map((group) => (
          <div className="contact-card" key={group.label}>
            <span
              className="contact-card__tag"
              style={{
                color: ringColor[group.ring],
                borderColor: ringColor[group.ring],
              }}
            >
              {group.label}
            </span>

            <ul className="contact-card__list">
              {group.people.map((p) => (
                <li className="contact-card__item" key={p.email}>
                  <span className="contact-card__role">{p.role}</span>
                  <a
                    className="contact-card__email"
                    href={`mailto:${p.email}`}
                  >
                    {p.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}