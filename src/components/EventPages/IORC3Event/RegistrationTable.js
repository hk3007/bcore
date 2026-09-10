import React from "react";

const rows = [
  {
    category: "OSRC / NOC / NOA Delegates",
    shortCategory: "OSRC / NOC / NOA",
    earlyBird: "₹7,500",
    regular: "₹8,500",
    late: "₹10,500",
  },
  {
    category: "Foreign Delegates",
    shortCategory: "Foreign Delegates",
    earlyBird: "₹9,500",
    regular: "₹10,500",
    late: "₹12,500",
  },
  {
    category:
      "Indian Faculty / Academicians / Coaches / Administrators",
    shortCategory: "Indian Faculty / Academicians / Coaches / Administrators",
    earlyBird: "₹3,000",
    regular: "₹3,500",
    late: "₹4,500",
  },
  {
    category: "Indian PhD / PG / UG Scholars",
    shortCategory: "Indian PhD / PG / UG Scholars",
    earlyBird: "₹2,500",
    regular: "₹3,000",
    late: "₹4,000",
  },
  {
    category: "RRU Faculty",
    shortCategory: "RRU Faculty",
    earlyBird: "₹1,000",
    regular: "₹1,500",
    late: "₹2,000",
  },
  {
    category: "RRU Scholar",
    shortCategory: "RRU Scholar",
    earlyBird: "₹500",
    regular: "₹1,000",
    late: "₹1,500",
  },
];

const phases = [
  {
    key: "earlyBird",
    number: "01",
    title: "Early Bird",
    date: "Till 15 Nov 2026",
    className: "early",
  },
  {
    key: "regular",
    number: "02",
    title: "Regular",
    date: "Till 31 Dec 2026",
    className: "regular",
  },
  {
    key: "late",
    number: "03",
    title: "Late",
    date: "Till 15 Jan 2027",
    className: "late",
  },
];

export default function RegistrationTable() {
  return (
    <section className="iorc-registration" id="registration">

      {/* ============================================================
          BACKGROUND
      ============================================================ */}
      <div className="iorc-registration__background" aria-hidden="true">
        <div className="iorc-registration__grid" />

        <div className="iorc-registration__glow" />
      </div>

      <div className="iorc-registration__container">

        {/* ============================================================
            HEADER
        ============================================================ */}
        <div className="iorc-registration__header">

          <div className="iorc-registration__header-left">

            <span className="iorc-registration__eyebrow">
              Registration
            </span>

            <div className="iorc-registration__title-row">

              <span className="iorc-registration__section-number">
                07
              </span>

              <h2 className="iorc-registration__title">
                REGISTRATION
                <br />
                <span>DETAILS.</span>
              </h2>

            </div>

          </div>

          <div className="iorc-registration__intro">
            <span className="iorc-registration__intro-label">
              Participation
            </span>

            <p>
              Registration categories have been structured to ensure
              participation across the Olympic research, education,
              governance and sporting ecosystem.
            </p>
          </div>

        </div>

        {/* ============================================================
            PHASE HEADER
        ============================================================ */}
        <div className="iorc-registration__phase-header">

          <div className="iorc-registration__category-heading">
            <span>PARTICIPANT CATEGORY</span>
          </div>

          {phases.map((phase) => (
            <div
              key={phase.key}
              className={`iorc-registration__phase iorc-registration__phase--${phase.className}`}
            >
              <span className="iorc-registration__phase-number">
                {phase.number}
              </span>

              <div>
                <strong>{phase.title}</strong>
                <small>{phase.date}</small>
              </div>
            </div>
          ))}

        </div>

        {/* ============================================================
            REGISTRATION ROWS
        ============================================================ */}
        <div className="iorc-registration__rows">

          {rows.map((row, index) => (
            <div
              className="iorc-registration__row"
              key={row.category}
            >

              {/* Category */}
              <div className="iorc-registration__category">

                <span className="iorc-registration__row-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <strong>{row.category}</strong>

                  <small>
                    Registration category
                  </small>
                </div>

              </div>

              {/* Early Bird */}
              <div className="iorc-registration__price iorc-registration__price--early">

                <span className="mobile-label">
                  Early Bird
                </span>

                <strong>{row.earlyBird}</strong>

              </div>

              {/* Regular */}
              <div className="iorc-registration__price iorc-registration__price--regular">

                <span className="mobile-label">
                  Regular
                </span>

                <strong>{row.regular}</strong>

              </div>

              {/* Late */}
              <div className="iorc-registration__price iorc-registration__price--late">

                <span className="mobile-label">
                  Late
                </span>

                <strong>{row.late}</strong>

              </div>

            </div>
          ))}

        </div>

        {/* ============================================================
            INFORMATION
        ============================================================ */}
        <div className="iorc-registration__information">

          <div className="iorc-registration__note">

            <span className="iorc-registration__note-number">
              NOTE
            </span>

            <p>
              Registration includes expert sessions, paper
              presentation (on acceptance), working lunch and
              evening refreshments, and the gala dinner. Cultural
              tours for interested participants are charged
              separately.
            </p>

          </div>

          <div className="iorc-registration__note">

            <span className="iorc-registration__note-number">
              WAIVER
            </span>

            <p>
              Limited fee waivers are available upon justified
              request. Teams of three or more may receive a group
              registration waiver, with the amount to be confirmed.
            </p>

          </div>

        </div>

        {/* ============================================================
            BOTTOM CTA
        ============================================================ */}
        <div className="iorc-registration__bottom">

          <div className="iorc-registration__bottom-copy">
            <span>
              3RD INTERNATIONAL OLYMPIC RESEARCH CONFERENCE
            </span>

            <strong>
              SECURE YOUR PLACE IN THE CONVERSATION.
            </strong>
          </div>

          <div className="iorc-registration__bottom-date">
            <span>27 — 29</span>
            <small>JANUARY 2027</small>
          </div>

        </div>

      </div>
    </section>
  );
}