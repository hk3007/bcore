import React from 'react';

export const TeamMember = ({ name, designation, photo }) => {
  // Ensure we get a single string for the image src
  const imgSrc = Array.isArray(photo) ? photo[0] : photo;

  return (
    <div className="tm-member-wrapper">
      <div className="tm-image-frame">
        <img src={imgSrc} alt={name} className="tm-profile-img" />
        <div className="tm-frame-accent"></div>
      </div>
      <div className="tm-text-content">
        <span className="tm-label">{designation}</span>
        <h3 className="tm-name">{name}</h3>
      </div>
    </div>
  );
};