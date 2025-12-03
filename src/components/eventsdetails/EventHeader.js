import React from "react";
import "./EventHeader.css";

const EventHeader = ({ title, date, location }) => {
  return (
    <section className="event-header-section">
      <div className="vintage-header">
        {/* ===== LEFT SIDE: EVENT TITLE ===== */}
        <div className="vintage-left">
          {title && <h2>{title}</h2>}
        </div>

        {/* ===== RIGHT SIDE: DATE & LOCATION ===== */}
        {(date || location) && (
          <div className="vintage-right">
            {date && (
              <div className="vintage-card">
                <h4>Date</h4>
                <p>{date}</p>
              </div>
            )}
            {location && (
              <div className="vintage-card">
                <h4>Location</h4>
                <p>{location}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventHeader;
