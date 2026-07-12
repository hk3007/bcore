import React from "react";

const stats = [
  { ring: "blue", value: "13", label: "Stakeholder Groups Represented" },
  { ring: "yellow", value: "12+", label: "Core Curriculum Modules" },
  { ring: "green", value: "3", label: "Legal Frameworks Covered (POCSO, POSH, JJ Act)" },
  { ring: "red", value: "100%", label: "Sessions Include Observer-Based Learning" },
];

const stakeholderRows = [
  { name: "Athletes", role: "Primary Participants", ring: "blue" },
  { name: "Coaches", role: "Institutional Practice", ring: "yellow" },
  { name: "Sports Administrators & NSF Officials", role: "Governance & Policy", ring: "green" },
  { name: "Safeguarding & Sports Medicine Professionals", role: "Technical Expertise", ring: "red" },
  { name: "Academics & Research Scholars", role: "Evidence & Research", ring: "black" },
];

const ringColor = {
  blue: "#0085C7",
  yellow: "#F4C300",
  green: "#009F3D",
  red: "#DF0024",
  black: "#101828",
};

export default function StatsDashboard() {
  return (
    <section className="sd-section">
      <div className="sd-heading">
        <span className="sd-heading__eyebrow">Programme at a Glance</span>
        <h2 className="sd-heading__title">Reach &amp; Composition</h2>
      </div>

      <div className="sd-stat-row">
        {stats.map((s) => (
          <div className="sd-stat" key={s.label}>
            <span
              className="sd-stat__bar"
              style={{ background: ringColor[s.ring] }}
              aria-hidden="true"
            ></span>
            <strong className="sd-stat__value">{s.value}</strong>
            <span className="sd-stat__label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="sd-table-wrap">
        <table className="sd-table">
          <thead>
            <tr>
              <th>Stakeholder Group</th>
              <th>Primary Engagement</th>
            </tr>
          </thead>
          <tbody>
            {stakeholderRows.map((row) => (
              <tr key={row.name}>
                <td>
                  <span
                    className="sd-table__dot"
                    style={{ background: ringColor[row.ring] }}
                  ></span>
                  {row.name}
                </td>
                <td>{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}