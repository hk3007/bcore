import React from "react";

const rows = [
  {
    category: "OSRC / NOC / NOA Delegates",
    earlyBird: "₹7,500",
    regular: "₹8,500",
    late: "₹10,500",
  },
  {
    category: "Foreign Delegates",
    earlyBird: "₹9,500",
    regular: "₹10,500",
    late: "₹12,500",
  },
  {
    category: "Indian Faculty / Academicians / Coaches / Administrators",
    earlyBird: "₹3,000",
    regular: "₹3,500",
    late: "₹4,500",
  },
  {
    category: "Indian PhD / PG / UG Scholars",
    earlyBird: "₹2,500",
    regular: "₹3,000",
    late: "₹4,000",
  },
  {
    category: "RRU Faculty",
    earlyBird: "₹1,000",
    regular: "₹1,500",
    late: "₹2,000",
  },
  {
    category: "RRU Scholar",
    earlyBird: "₹500",
    regular: "₹1,000",
    late: "₹1,500",
  },
];

export default function RegistrationTable() {
  return (
    <section className="irc-section" id="registration">
      <span className="irc-section__eyebrow">Registration</span>
      <h2 className="irc-section__title">Registration Details</h2>

      <div className="irc-reg-table-wrap">
        <table className="irc-reg-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>
                Early Bird
                <span>till 15 Nov 2026</span>
              </th>
              <th>
                Regular
                <span>till 31 Dec 2026</span>
              </th>
              <th>
                Late
                <span>till 15 Jan 2027</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.category}>
                <td>{row.category}</td>
                <td>{row.earlyBird}</td>
                <td>{row.regular}</td>
                <td>{row.late}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="irc-reg-note">
        <strong>Note:</strong> Registration includes expert sessions, paper
        presentation (on acceptance), working lunch and evening refreshments, and the
        gala dinner. Cultural tours for interested participants are charged separately.
        Limited fee waivers are available upon justified request.
      </p>
      <p className="irc-reg-note">
        <strong>Group Registration:</strong> teams of three or more receive a waiver
        per registration, amount to be confirmed.
      </p>
    </section>
  );
}
