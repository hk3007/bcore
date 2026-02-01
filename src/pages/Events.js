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
  {
    id: 3,
    name: '2nd International Olympic Research Conference',
    date: '27 - 30 January 2026',
    startDate: new Date('2026-01-27'),
    endDate: new Date('2026-01-30'),
    place: 'Rashtriya Raksha University, Gandhinagar, India',
    description:
      "To address critical Olympic challenges in India's Olympic aspirations and develop long-term, sustainable solutions through integrated research, education, and governance",
    bookletLink:
      'https://drive.google.com/file/d/1166eN6ZlTAL8r2vHmNToTwFrqkXvZb_I/view?usp=sharing',
    paymentLink: "https://forms.eduqfix.com/secolycn/add",
    faQ: "https://drive.google.com/file/d/1m1xHmHf20D3La7ZMw3ERuKzQIgdmIKfr/view?usp=sharing",
    scheduleLink: '/event/3/schedule',
    guidlines: "https://drive.google.com/file/d/1J6qexrSRz2iMWlkcfEkLO69GZzRiR3Ph/view?usp=sharing",
    paperPresentation: "https://docs.google.com/presentation/d/15_AXdox-V61RCQBT8Ky0xQueT94hklN6/edit?usp=sharing&ouid=114727181775494699337&rtpof=true&sd=true",
  }
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
<div className="regal-archive-container">
  <Helmet>
    <title>Past Events – Bharat Centre of Olympic Research & Education</title>
  </Helmet>

  <div className="past-events-banner-header">
    <div className="past-events-banner-content">
      <h2 className="past-events-banner-title">Past Events</h2>
      <div className="past-events-banner-accent">
        <span className="line"></span>
        <span className="diamond"></span>
        <span className="line"></span>
      </div>
    </div>
    {/* Decorative background element */}
    <div className="past-events-banner-bg-text">EVENTS</div>
  </div>

  <div className="regal-content-wrapper">
    {/* ===== EVENTS LIST ===== */}
    <div className="regal-list">
      {sortedEvents.map((event) => (
        <div className="regal-event-row" key={event.id}>
          <div className="regal-date-col">
            <span className="regal-year">
              {event.date ? event.date.split(" ").pop() : ""}
            </span>
            <span className="regal-full-date">{event.date}</span>
          </div>

          <div className="regal-info-col">
            <h3 className="regal-event-name">{event.name}</h3>
            <p className="regal-venue">{event.place}</p>

            <div className="regal-btn-group">
              <Link to={`/event/${event.id}`} className="regal-btn primary">
                View Details
              </Link>
              {event.scheduleLink && (
                <Link to={event.scheduleLink} className="regal-btn secondary">
                  Schedule
                </Link>
              )}
              {event.booklet && (
                <a href={event.booklet} target="_blank" rel="noreferrer" className="regal-btn secondary">
                  Booklet
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ===== IMAGE GALLERIES ===== */}
    <div className="regal-gallery-container">
      {eventsData.map((event, index) => (
        <div key={index} className="regal-gallery-item">
          <h2 className="regal-gallery-subheading">{event.title}</h2>
          <div className="regal-gallery-grid">
            {event.images.map((image, idx) => (
              <img
                key={idx}
                className="regal-gallery-image"
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
