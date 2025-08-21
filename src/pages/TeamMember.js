import React, {useEffect} from 'react';

export const TeamMember = ({ name, designation, photo }) => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs only once on mount
  return (
    <div className="team-member">
      <img src={photo} alt={`${name}'s photo`} />
      <h3>{name}</h3>
      <p>{designation}</p>
    </div>
  );
};
