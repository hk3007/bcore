import React, {useEffect} from 'react';
import './Events.css';
import { Link } from 'react-router-dom';
import Image1 from './Images/ANTI DOPING IN SPORTS ETHICAL AND SCIENTIFIC PERSPECTIVES.jpg';
import Image2 from './Images/ATHLETE & COACHES DEVELOPMENT PROGRAM 1.jpg';
import Image3 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 1.png';
import Image4 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 2.png';
import Image5 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 3.png'; 
import Image6 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 4.png';
import Image7 from './Images/DESIGN COMPETITION.png'; 
import Image8 from './Images/Khelo India 1.jpg';
import Image9 from './Images/Khelo india 2.jpg';

const events = [
  {
      id: 1,
      name: '1st International Olympic Research Conference',
      date: '27 - 30 January 2025',
      place: 'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India',
      description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
  },
];

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
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs only once on mount
  return (
    <div>
        <div className="events-page">
            <h2 className="events-title">Past Events</h2>
            <div className="events-grid">
                {events.map((event) => (
                    <div className="event-card" key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{event.date}</p>
                        <p>{event.place}</p>
                        <div className="event-buttons">
                            <Link to={`/event/${event.id}`} className="know-more-btn">
                                Know More
                            </Link>
                            <Link to={`/event/${event.id}/schedule`} className="schedule-btn">
                                View Schedule
                            </Link>
                            <Link to={`https://rru.ac.in/wp-content/uploads/2025/03/IORC-Booklet_-05-03-2025-10-MB_compressed.pdf`} className="schedule-btn">
                                IORC BOOKLET
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <br></br>
            <div className="EventsContainer">
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
        </div>
  </div>
  );
};
