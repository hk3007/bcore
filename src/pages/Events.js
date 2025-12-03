import React, { useEffect } from 'react';
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
import { Helmet } from 'react-helmet';

// Events list
const events = [
  {
    id: 1,
    name: '1st International Olympic Research Conference',
    date: '27 - 30 January 2025',
    place: 'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India',
    description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
    booklet: 'https://rru.ac.in/wp-content/uploads/2025/03/IORC-Booklet_-05-03-2025-10-MB_compressed.pdf',
  }
];

// Image galleries for past events
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
    images: [Image3, Image4, Image5, Image6],
  },
  {
    title: "DESIGN COMPETITION Logo/Mascot/Torch",
    images: [Image7],
  },
  {
    title: "KHELO INDIA UNIVERSITY GAMES: RUBY TEAM",
    images: [Image8, Image9],
  },
];

// Clean and parse date string for sorting
const parseStartDate = (dateStr) => {
  // Remove ordinal suffixes like 'st', 'nd', 'rd', 'th'
  const cleaned = dateStr.replace(/(\d{1,2})(st|nd|rd|th)/g, '$1');

  // Match range date e.g. "27 - 30 January 2025"
  const rangeMatch = cleaned.match(/^(\d{1,2})\s*-\s*\d{1,2}\s+([A-Za-z]+)\s+(\d{4})/);
  if (rangeMatch) {
    const [_, day, month, year] = rangeMatch;
    return new Date(`${month} ${day}, ${year}`);
  }

  // Match single date e.g. "23 June 2025"
  const singleMatch = cleaned.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
  if (singleMatch) {
    const [_, day, month, year] = singleMatch;
    return new Date(`${month} ${day}, ${year}`);
  }

  return new Date(cleaned); // fallback
};

// Sort events by parsed date (latest first)
const sortedEvents = [...events].sort((a, b) => parseStartDate(b.date) - parseStartDate(a.date));

export const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
       <Helmet>
          <title>Past Events – Bharat Centre of Olympic Research & Education</title>
          <meta name="description" content="Home page of BCORE..." />
        </Helmet>
      <div className="events-page">
        <h2 className="events-title">Past Events</h2>

        <div className="events-grid">
          {sortedEvents.map((event) => (
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
                {event.booklet && (
                  <a
                    href={event.booklet}
                    className="schedule-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IORC BOOKLET
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <br />

        <div className="EventsContainer">
          {eventsData.map((event, index) => (
            <div key={index} className="EventItem">
              <h2 className="EventSubHeading">{event.title}</h2>
              <div className="EventImages">
                {event.images.map((image, idx) => (
                  <img
                    key={idx}
                    className="EventImage"
                    src={image}
                    alt={`Event ${index + 1} Image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
