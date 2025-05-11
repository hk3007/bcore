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
            startDate: new Date('2025-01-27'),
            endDate: new Date('2025-01-30'),
            place: 'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India',
            description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
        },
    ];

    // Get today's date without time
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Filter events that are upcoming
    const upcomingEvents = events.filter(event => event.endDate >= today);

    return (
        <div className="events-page">
            <h2 className="events-title">Upcoming Events</h2>
            {upcomingEvents.length > 0 ? (
                <div className="events-grid">
                    {upcomingEvents.map((event) => (
                        <div className="event-card" key={event.id}>
                            <h3>{event.name}</h3>
                            <p>{`${event.startDate.toDateString()} - ${event.endDate.toDateString()}`}</p>
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
            ) : (
                <p className="no-events-message">Stay tuned! More exciting events are coming soon.</p>
            )}
        </div>
    );
};
