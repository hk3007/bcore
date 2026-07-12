import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingEvents.css';
import { Helmet } from 'react-helmet';

export const UpComing = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const parseEndDate = (dateStr) => {
    const parts = dateStr.split('-').map((s) => s.trim());
    const endPart = parts.length > 1 ? parts[1] : parts[0];
    const cleanDateStr = endPart.replace(/(\d+)(st|nd|rd|th)/, '$1');
    return new Date(cleanDateStr + ' 2025'); // Assume year is 2025 for consistency
  };

  const events = [
    {
      id: 1,
      name: '1st International Olympic Research Conference',
      startDate: new Date('2025-01-27'),
      endDate: new Date('2025-01-30'),
      place:
        'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India',
      description:
        'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
      bookletLink:
        'https://rru.ac.in/wp-content/uploads/2025/03/IORC-Booklet_-05-03-2025-10-MB_compressed.pdf',
    },
    {
      id: 3,
      name: '2nd International Olympic Research Conference',
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
    },
    {
      id: 4,
      name: 'BCORE Night Run',
      startDate: new Date('2026-01-10'),
      endDate: new Date('2026-01-10'),
      place: 'Gandhinagar, India',
    },
    {
      id: 5,
      name: 'Foundation Programme in Safe Sport and Safeguarding',
      startDate: new Date('2026-08-21'),
      endDate: new Date('2026-08-23'),
    },
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events.filter((event) => {
    if (event.endDate) {
      return event.endDate >= today;
    } else if (event.date) {
      const eventEndDate = parseEndDate(event.date);
      return eventEndDate >= today;
    }
    return false;
  });

  return (
    <div className="chrono-events-container">
      <Helmet>
        <title>Upcoming Events – Bharat Centre of Olympic Research & Education</title>
      </Helmet>

      <div className="chrono-banner-header">
        <div className="chrono-banner-content">
          <h2 className="chrono-banner-title">Upcoming Events</h2>
          <div className="chrono-banner-accent">
            <span className="line"></span>
            <span className="diamond"></span>
            <span className="line"></span>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="chrono-banner-bg-text">EVENTS</div>
      </div>

      {upcomingEvents.length > 0 ? (
        <div className="chrono-list">
          {upcomingEvents.map((event) => (
            <div className="chrono-item" key={event.id}>
              <div className="chrono-date-box">
                <span className="chrono-day">
                  {event.date ? new Date(event.date).getDate() : event.startDate.getDate()}
                </span>
                <span className="chrono-month">
                  {event.date
                    ? new Date(event.date).toLocaleString('default', { month: 'short' })
                    : event.startDate.toLocaleString('default', { month: 'short' })}
                </span>
              </div>

              <div className="chrono-content">
                <h3 className="chrono-event-name">{event.name}</h3>
                <div className="chrono-meta">
                  <span><i className="location-icon"></i> {event.place || "TBA"}</span>
                  {event.accomodation && <span className="chrono-badge">{event.accomodation}</span>}
                </div>

                <div className="chrono-actions">
                  <Link to={`/event/${event.id}`} className="chrono-btn-primary">
                    Details
                  </Link>

                  {/* Secondary Actions - Grouped for cleaner look */}
                  <div className="chrono-btn-group">
                    {event.scheduleLink && <Link to={`/event/${event.id}/schedule`}>Schedule</Link>}
                    {event.bookletLink && <a href={event.bookletLink} target="_blank" rel="noreferrer">Booklet</a>}
                    {event.paymentLink && <a href={event.paymentLink} target="_blank" rel="noreferrer">Payment</a>}
                    {event.faQ && <a href={event.faQ} target="_blank" rel="noreferrer">FAQ</a>}
                    {event.guidlines && <a href={event.guidlines} target="_blank" rel="noreferrer">Guidelines</a>}
                    {event.paperPresentation && <a href={event.paperPresentation} target="_blank" rel="noreferrer">Paper Presentation</a>}
                  </div>
                </div>
              </div>

              <div className="chrono-hover-bg"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="chrono-empty">
          <p>Stay tuned for Further Updates</p>
        </div>
      )}
    </div>
  );
};
