import React from 'react';
import './Events.css';
import Image1 from './Images/ANTI DOPING IN SPORTS ETHICAL AND SCIENTIFIC PERSPECTIVES.jpg';
import Image2 from './Images/ATHLETE & COACHES DEVELOPMENT PROGRAM 1.jpg';
import Image3 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 1.png';
import Image4 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 2.png';
import Image5 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 3.png'; 
import Image6 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 4.png';
import Image7 from './Images/DESIGN COMPETITION.png'; 
import Image8 from './Images/Khelo India 1.jpg';
import Image9 from './Images/Khelo india 2.jpg';

const eventsData = [
  {
    title: "ANTI - DOPING IN SPORTS: ETHICAL AND SCIENTIFIC PERSPECTIVES",
    images: [Image1],
  },
  {
    title: "ATHLETE & COACHES DEVELOPMENT PROGRAM",
    images: [Image2],
  },
  {
    title: "Olympic Paronama: Multidisciplinary Research and Education Program",
    images: [Image3,Image4,Image5,Image6],
  },
  {
    title: "DESIGN COMPETITION Logo/Mascot/Torch",
    images: [Image7],
  },
  {
    title: "KHELO INDIA UNIVERSITY GAMES: RUBY TEAM",
    images: [Image8,Image9],
  },
];

export const Events = () => {
  return (
    <div className="EventsContainer">
      <h1 className="EventHeading">Past Events</h1>
      {eventsData.map((event, index) => (
        <div key={index} className="EventItem">
          <h2 className="EventSubHeading">{event.title}</h2>
          <div className="EventImages">
            {event.images.map((image, idx) => (
              <img key={idx} className="EventImage" src={image} alt={`Event ${index + 1} Image ${idx + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
