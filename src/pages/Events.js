import React, { useEffect } from 'react';
import './Events.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Image1 from './Images/ANTI DOPING IN SPORTS ETHICAL AND SCIENTIFIC PERSPECTIVES.jpg';
import Image2 from './Images/ATHLETE & COACHES DEVELOPMENT PROGRAM 1.jpg';
import Image3 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 1.png';
import Image4 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 2.png';
import Image5 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 3.png';
import Image6 from './Images/Olympic Paronama Multidiciplinary Research and Education Program 4.png';
import Image7 from './Images/DESIGN COMPETITION.png';
import Image8 from './Images/Khelo India 1.jpg';
import Image9 from './Images/Khelo india 2.jpg';

/* =========================
   EVENTS LIST
========================= */
const events = [
  {
    id: 1,
    name: '1st International Olympic Research Conference',
    date: '27 - 30 January 2025',
    place:
      'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India',
    description:
      'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
    booklet:
      'https://rru.ac.in/wp-content/uploads/2025/03/IORC-Booklet_-05-03-2025-10-MB_compressed.pdf',

    // ✅ Schedule exists only here
    scheduleLink: '/event/1/schedule',
  },
  {
    id: 4,
    name: 'BCORE Night Run',
    date: '10 January 2026',
    startDate: new Date('2026-01-10'),
    endDate: new Date('2026-01-10'),
    place: 'Gandhinagar, India',

    // ✅ Visible ONLY from 11 Jan 2026 onwards
    visibleFrom: new Date('2026-01-11'),
  },
];

/* =========================
   IMAGE GALLERIES (PAST EVENTS)
========================= */
const eventsData = [
  {
    title: 'ANTI - DOPING IN SPORTS: ETHICAL AND SCIENTIFIC PERSPECTIVES',
    images: [Image1],
  },
  {
    title: 'ATHLETE & COACHES DEVELOPMENT PROGRAM',
    images: [Image2],
  },
  {
    title: 'Olympic Paronama: Multidisciplinary Research and Education Program',
    images: [Image3, Image4, Image5, Image6],
  },
  {
    title: 'DESIGN COMPETITION Logo/Mascot/Torch',
    images: [Image7],
  },
  {
    title: 'KHELO INDIA UNIVERSITY GAMES: RUBY TEAM',
    images: [Image8, Image9],
  },
];

/* =========================
   DATE PARSER (SAFE)
========================= */
const parseStartDate = (dateStr) => {
  if (!dateStr) return new Date(0);

  const cleaned = dateStr.replace(/(\d{1,2})(st|nd|rd|th)/g, '$1');

  const rangeMatch = cleaned.match(
    /^(\d{1,2})\s*-\s*\d{1,2}\s+([A-Za-z]+)\s+(\d{4})/
  );
  if (rangeMatch) {
    const [, day, month, year] = rangeMatch;
    return new Date(`${month} ${day}, ${year}`);
  }

  const singleMatch = cleaned.match(
    /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/
  );
  if (singleMatch) {
    const [, day, month, year] = singleMatch;
    return new Date(`${month} ${day}, ${year}`);
  }

  return new Date(cleaned);
};

/* =========================
   FILTER + SORT EVENTS
========================= */
const today = new Date();

// ✅ Show event only if visibleFrom date has passed
const visibleEvents = events.filter((event) => {
  if (!event.visibleFrom) return true;
  return today >= event.visibleFrom;
});

// ✅ Sort latest first
const sortedEvents = [...visibleEvents].sort((a, b) => {
  const dateA = a.date ? parseStartDate(a.date) : a.startDate;
  const dateB = b.date ? parseStartDate(b.date) : b.startDate;
  return dateB - dateA;
});

/* =========================
   COMPONENT
========================= */
export const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Past Events – Bharat Centre of Olympic Research & Education</title>
        <meta
          name="description"
          content="Explore past events conducted by the Bharat Centre of Olympic Research & Education (BCORE)."
        />
      </Helmet>

      <div className="events-page">
        <h2 className="events-title">Past Events</h2>

        {/* ===== EVENTS LIST ===== */}
        <div className="events-grid">
          {sortedEvents.map((event) => (
            <div className="event-card" key={event.id}>
              {event.name && <h3>{event.name}</h3>}
              {event.date && <p>{event.date}</p>}
              {event.place && <p>{event.place}</p>}

              <div className="event-buttons">
                <Link to={`/event/${event.id}`} className="know-more-btn">
                  Know More
                </Link>

                {/* ✅ Schedule button only if link exists */}
                {event.scheduleLink && (
                  <Link
                    to={event.scheduleLink}
                    className="schedule-btn"
                  >
                    View Schedule
                  </Link>
                )}

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

        {/* ===== IMAGE GALLERIES ===== */}
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
                    alt={`${event.title} ${idx + 1}`}
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
