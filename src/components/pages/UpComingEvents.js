// Import dependencies
import React, { useState } from 'react';
import './UpcomingEvents.css';

export const UpComing = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Sample event data
    const events = [
        {
            name: '1st International Olympic Research Academy',
            date: '13-18 January 2025',
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
            registrationLink: 'https://registration-link.com',
        },
        
    ];

    // Handle modal open and close
    const openModal = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedEvent(null);
    };

    return (
        <div className="events-page">
            <h2 className="events-title">Upcoming Events</h2>
            <div className="events-grid">
                {events.map((event, index) => (
                    <div className="event-card" key={index}>
                        <h3>{event.name}</h3>
                        <p>{event.date}</p>
                        <p>{event.place}</p>
                        <button onClick={() => openModal(event)} className="know-more-btn">Know More</button>
                    </div>
                ))}
            </div>

            {/* Modal for event details */}
            {showModal && selectedEvent && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>{selectedEvent.name}</h2>
                        <p><strong>Date:</strong> {selectedEvent.date}</p>
                        <p><strong>Location:</strong> {selectedEvent.place}</p>
                        <p>{selectedEvent.description}</p>
                        <ul>
                            {selectedEvent.subpoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                        <a href={selectedEvent.brochure} target="_blank" rel="noopener noreferrer" className="modal-link">View Brochure</a>
                        <a href={selectedEvent.registrationLink} target="_blank" rel="noopener noreferrer" className="modal-link">Register Now</a>
                        <button onClick={closeModal} className="close-btn">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};
