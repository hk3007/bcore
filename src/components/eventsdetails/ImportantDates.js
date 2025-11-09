import React from "react";
import "./ImportantDates.css";

const ImportantDates = ({ importantDates }) => {
  if (!importantDates || importantDates.length === 0) return null;

  return (
    <div className="vintage-timeline-wrapper">
      <h3 className="vintage-timeline-title">Important Dates</h3>

      <div className="vintage-timeline">
        {importantDates.map((date, index) => (
          <div key={index} className="vintage-timeline-item">
            <div className="vintage-timeline-marker"></div>
            <div className="vintage-timeline-content">
              <h4 className="vintage-timeline-event">{date.event}</h4>
              <p className="vintage-timeline-date">{date.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;