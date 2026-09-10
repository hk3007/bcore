import React from "react";
import "./EventHeader.css";

const EventHeader = ({ title, date, location }) => {
  return (
    <header className="eh-hero">
      <div className="eh-hero-glow eh-hero-glow-1"></div>
      <div className="eh-hero-glow eh-hero-glow-2"></div>

      <div className="eh-hero-content">

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
