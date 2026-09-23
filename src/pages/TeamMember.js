import React from "react";

export const TeamMember = ({
  name,
  designation,
  photo,
}) => {

  // Supports both imported images and direct URLs.
  const imgSrc = Array.isArray(photo)
    ? photo[0]
    : photo;

  return (
    <div className="tm-member-wrapper">

      {/* =====================================================
          IMAGE
          ===================================================== */}

      <div className="tm-image-frame">

        <img
          src={imgSrc}
          alt={`${name} - ${designation}`}
          className="tm-profile-img"
          loading="lazy"
          decoding="async"
        />

        {/* Bottom image gradient */}
        <div
          className="tm-image-overlay"
          aria-hidden="true"
        ></div>

        {/* Red frame accent */}
        <div
          className="tm-frame-accent"
          aria-hidden="true"
        ></div>

        {/* Corner indicator */}
        <div
          className="tm-image-corner"
          aria-hidden="true"
        ></div>

      </div>

      {/* =====================================================
          MEMBER INFORMATION
          ===================================================== */}

      <div className="tm-text-content">

        <span className="tm-label">
          {designation}
        </span>

        <h3 className="tm-name">
          {name}
        </h3>

      </div>

    </div>
  );
};

export default TeamMember;