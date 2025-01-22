import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingEvents.css';

export const UpComing = () => {
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const events = [
        {
            id: 1,
            name: '1st International Olympic Research Conference',
            date: '27 - 30 January 2025',
            place: 'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India',
            description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
        },
    ];

    return (
        <div className="events-page">
            <h2 className="events-title">Upcoming Events</h2>
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
