import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';

export const EventDetails = () => {
    const { id } = useParams(); // Get the ID from the URL
    
    const events = [
        {
            id: 1,
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
            registrationLink: 'https://forms.eduqfix.com/bcoreregof/add',
        },
    ];

    const event = events.find((e) => e.id === parseInt(id)); // Find event by ID

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className="event-details-page">
            <h2>{event.name}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.place}</p>
            <p>{event.description}</p>
            <ul>
                {event.subpoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <a href={event.brochure} target="_blank" rel="noopener noreferrer" className="modal-link">View Brochure</a>
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="modal-link">Register Now</a>
        </div>
    );
};
