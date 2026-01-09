// WorkshopSection.jsx
import React from "react";
import "./workshop.css";

export default function WorkshopSection({ event }) {
  if (!event) return null;

  return (
    <section
      className="workshop-hero"
      style={{ backgroundImage: `url(${event.background})` }}
    >
      {/* 🔹 Black Transparent Layer */}
      <div className="workshop-dark-layer">

        <div className="workshop-content">

          {/* 🔹 Center Heading */}
          <p className="workshop-sub">
            {event.partnerLine1} {event.partnerOrg} for the<br />
            <strong className="text">{event.conferenceName}</strong><br />
            at {event.venue}
          </p>

          {/* 🔹 LEFT — Logos   🔹 RIGHT — Title + Dates */}
          <div className="workshop-grid">

            {/* LEFT */}
            <div className="left-block">
              <div className="logo-row">
                <div className="logo-item">
                  <img src={event.leftLogo} alt="Left Logo" />
                </div>

                <span className="logo-x">X</span>

                <div className="logo-item">
                  <img src={event.rightLogo} alt="Right Logo" />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="right-block">
              <h1 className="workshop-title">
                {event.titleLine1}<br />
                {event.titleLine2}<br />
                {event.titleLine3}<br />
                {event.titleLine4}
              </h1>

              <p className="workshop-dates">
                JOINT WORKSHOP<br />
                Dates: {event.dates}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
