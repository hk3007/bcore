import React from 'react';

export const TeamMember = ({ name, designation, photo }) => {
  return (
    <div className="team-member">
      <img src={photo} alt={`${name}'s photo`} />
      <h3>{name}</h3>
      <p>{designation}</p>
    </div>
  );
};
