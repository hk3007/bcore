import React from "react";

const attendees = [
  "Physical education teachers",
  "Coaches and support staff",
  "Athletes and Olympians",
  "Sports administrators and federation officials",
  "National Olympic Committees",
  "National Olympic Academies from across Asia",
  "OCOG officials and representatives",
  "International and national academicians and researchers",
  "Sports management professionals",
  "Safeguarding and child protection practitioners",
  "Sports medicine and mental health professionals",
  "Policymakers and government representatives",
];

export default function WhoShouldAttend() {
  return (
    <section className="irc-section irc-section--tint">
      <span className="irc-section__eyebrow">Global Participation</span>
      <h2 className="irc-section__title">Who Should Attend</h2>
      <p className="irc-section__lead">
        The conference is designed for stakeholders and global participants including:
      </p>
      <ul className="irc-grid irc-grid--attend">
        {attendees.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
