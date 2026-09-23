import React from "react";

const contacts = [
  {
    label: "Programme Enquiries",
    ring: "blue",
    people: [
      {
        name: "Dr. Utsav Chaware",
        role: "BCORE",
        email: "bcore@rru.ac.in",
        phone: "+91-84356 25768",
      },
      {
        name: "Ms. Sonika Bisht",
        role: "",
        email: "ro1.bcore@rru.ac.in",
        phone: "+91-70880 72279",
      },
    ],
  },
  {
    label: "Accommodation",
    ring: "yellow",
    people: [
      {
        name: "Ms. Khushbu Shah",
        role: "",
        email: "aacc1.bcore@rru.ac.in",
        phone: "+91-90167 49850",
      },
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
                  <span className="contact-card__name">{p.name}</span>
                  {p.role && (
                    <span className="contact-card__role">{p.role}</span>
                  )}
                  <a
                    className="contact-card__email"
                    href={`mailto:${p.email}`}
                  >
                    {p.email}
                  </a>
                  <a
                    className="contact-card__phone"
                    href={`tel:${p.phone.replace(/[^+\d]/g, "")}`}
                  >
                    {p.phone}
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