import React from "react";
import "./Highlights.css";

const Highlights = ({ subpoints }) => {
  if (!subpoints || subpoints.length === 0) return null;

  return (
    <div className="highlights-container">
      <h3>Highlights</h3>
      <ul>
        {subpoints.map((point, index) => (
          <li key={index}>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Highlights;
