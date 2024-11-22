import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './UpcomingEvents.css';

export const UpComing = () => {
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs only once on mount
    const events = [
        {
            id: 1,
            name: '1st International Olympic Research Conference',
            date: '27 - 30 January 2025',
            place: 'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India',
            description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
            subpoints: [
                'Renowned researchers and experts in Olympic studies will deliver lectures, conduct workshops, and facilitate discussions on current trends, challenges, and opportunities in the field.',
                'Members of the Olympic Studies Research Centre (OSRC) will have the opportunity to present their research findings and ongoing projects to a diverse, international audience.',
                'The academy welcomes attendees from India and around the globe, fostering international collaboration and knowledge sharing',
                'BCORE will facilitate accommodation and local support for all participants throughout the academy',
                'Participants will enjoy a guided tour of the heritage city of Ahmedabad, offering insights into Indian culture and history',
                "Attendees will have the unique opportunity to visit the Statue of Unity and Vibrant Gujarat Global Summit, India's premier event for collaboration and idea exchange across various sectors.",
            ],
            brochure: 'http://rru.ac.in/wp-content/uploads/2024/11/RRU-BCORE-Olympic-research-Academy-Brochure.pdf',
            registrationLink: 'https://forms.eduqfix.com/bcoreregof/add',
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
                        <Link to={`/event/${event.id}`} className="know-more-btn">Know More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
