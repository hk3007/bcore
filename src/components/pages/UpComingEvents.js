import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingEvents.css';

export const UpComing = () => {
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const parseEndDate = (dateStr) => {
        const parts = dateStr.split('-').map(s => s.trim());
        const endPart = parts.length > 1 ? parts[1] : parts[0];
        const cleanDateStr = endPart.replace(/(\d+)(st|nd|rd|th)/, '$1');
        return new Date(cleanDateStr + ' 2025'); // Assume year is 2025 for consistency
    };

    const formatDate = (dateStr) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };

        if (dateStr.includes('-')) {
            const [start, end] = dateStr.split('-').map(s => s.trim());
            const cleanStart = start.replace(/(\d+)(st|nd|rd|th)/, '$1');
            const cleanEnd = end.replace(/(\d+)(st|nd|rd|th)/, '$1');

            const startDate = new Date(cleanStart + ' 2025');
            const endDate = new Date(cleanEnd + ' 2025');

            return `${startDate.getDate()}–${endDate.getDate()} ${endDate.toLocaleString('default', { month: 'short' })} ${endDate.getFullYear()}`;
        } else {
            const clean = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
            const date = new Date(clean + ' 2025');
            return date.toLocaleDateString('en-US', options);
        }
    };

    const events = [
        {
            id: 1,
            name: '1st International Olympic Research Conference',
            startDate: new Date('2025-01-27'),
            endDate: new Date('2025-01-30'),
            place: 'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India',
            description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
        },
        {
            id: 2,
            name: 'SPORTS EXCELLENCE SEMINAR',
            date: '23rd June 2025',
            place: 'Rashtriya Raksha University, Gandhinagar, India',
            description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
        },
    ];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingEvents = events.filter(event => {
        if (event.endDate) {
            return event.endDate >= today;
        } else if (event.date) {
            const eventEndDate = parseEndDate(event.date);
            return eventEndDate >= today;
        }
        return false;
    });

    return (
        <div className="events-page">
            <h2 className="events-title">Upcoming Events</h2>
            {upcomingEvents.length > 0 ? (
                <div className="events-grid">
                    {upcomingEvents.map((event) => (
                        <div className="event-card" key={event.id}>
                            <h3>{event.name}</h3>
                            <p>
                                {event.date
                                    ? formatDate(event.date)
                                    : `${event.startDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}–${event.endDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}`}
                            </p>
                            {event.place && <p>{event.place}</p>}
                            {event.accomodation && <p><b>{event.accomodation}</b></p>}
                            <div className="event-buttons">
                                <Link to={`/event/${event.id}`} className="know-more-btn">
                                    Know More
                                </Link>
                                {event.id === 1 && (
                                    <>
                                        <Link to={`/event/${event.id}/schedule`} className="schedule-btn">
                                            View Schedule
                                        </Link>
                                        <a
                                            href="https://rru.ac.in/wp-content/uploads/2025/03/IORC-Booklet_-05-03-2025-10-MB_compressed.pdf"
                                            className="schedule-btn"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            IORC BOOKLET
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-events-message">Stay tuned! More exciting events are coming soon.</p>
            )}
        </div>
    );
};
