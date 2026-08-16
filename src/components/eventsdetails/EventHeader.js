import React from "react";
import "./EventHeader.css";

function OlympicRings() {
  return (
    <svg className="eh-rings" viewBox="0 0 400 160" aria-hidden="true">
      <circle className="eh-ring eh-ring-blue" cx="70" cy="60" r="42" />
      <circle className="eh-ring eh-ring-black" cx="160" cy="60" r="42" />
      <circle className="eh-ring eh-ring-red" cx="250" cy="60" r="42" />
      <circle className="eh-ring eh-ring-yellow" cx="115" cy="100" r="42" />
      <circle className="eh-ring eh-ring-green" cx="205" cy="100" r="42" />
    </svg>
  );
}

const EventHeader = ({ title, date, location }) => {
  return (
    <header className="eh-hero">
      <div className="eh-hero-glow eh-hero-glow-1"></div>
      <div className="eh-hero-glow eh-hero-glow-2"></div>

      <div className="eh-hero-content">
        <OlympicRings />

        {title && <h1 className="eh-hero-title">{title}</h1>}

        {(date || location) && (
          <div className="eh-hero-meta">
            {date && (
              <div className="eh-hero-pill">
                <span className="eh-pill-label">Date</span>
                <span className="eh-pill-value">{date}</span>
              </div>
            )}
            {location && (
              <div className="eh-hero-pill">
                <span className="eh-pill-label">Location</span>
                <span className="eh-pill-value">{location}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default EventHeader;
