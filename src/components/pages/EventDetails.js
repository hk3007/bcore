import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';
import QR1 from './Images/qr-code (2).png'
export const EventDetails = () => {
    const { id } = useParams(); // Get the ID from the URL

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
                'The academy welcomes attendees from India and around the globe, fostering international collaboration and knowledge sharing.',
                'BCORE will facilitate accommodation and local support for all participants throughout the academy.',
                'Participants will enjoy a guided tour of the heritage city of Ahmedabad, offering insights into Indian culture and history.',
                "Attendees will have the unique opportunity to visit the Statue of Unity and Vibrant Gujarat Global Summit, India's premier event for collaboration and idea exchange across various sectors.",
            ],
            schedule: [
                {
                    day: 'Day 1: Olympic Host City Selection and Urban Transformation',
                    sessions: [
                        { time: '10:00 AM - 11:00 AM', session: 'Opening Ceremony', description: '' },
                        { time: '11:30 AM - 1:00 PM', session: 'Keynote Speech', description: '2036 Vision: Pathway to Becoming an Olympic Host – Bid process and strategic planning.' },
                        { time: '2:30 PM - 4:30 PM', session: 'Expert Session', description: 'Global Best Practices and Comparative Analysis in Olympic City Selection and Urban Legacy' },
                        { time: '4:30 PM - 5:30 PM', session: 'Panel Discussion', description: 'Urban Development for Mega-Sporting Events: Challenges and Solutions for India – (Urban regeneration, infrastructure needs, and CSR & PPP Model)' },
                    ],
                },
                {
                    day: 'Day 2: Economic Strategies and Technological Innovation',
                    sessions: [
                        { time: '9:30 AM - 11:00 AM', session: 'Keynote Session', description: 'Financing the Future: Innovative Economic Models for Hosting the Olympics in India - Insights into sustainable funding and investment.' },
                        { time: '11:30 AM - 1:00 PM', session: 'Expert Session', description: 'Smart Sports Management - AI and IoT; innovations in Sports, fan engagements and e-sports.' },
                        { time: '2:30 PM - 4:30 PM', session: 'Panel Discussion', description: 'Balancing Costs and Benefits: Financial Strategy for Olympic Ambitions - A look at economic modelling, budgets, and long-term analysis.' },
                        { time: '4:30 PM - 5:30 PM', session: 'High Tea Session with Workshop/Exhibition', description: 'Wearable Technology and Advanced Equipment for Olympics' },
                        { time: '5:30 PM - 6:30 PM', session: 'Paper Presentations', description: 'Topics could include Tech Innovations for Mega Event Operations” and “Economicc Benefits vs. Costs: A developing nation’s perspective.' },
                    ],
                },
                {
                    day: 'Day 3 Sustainability and Environmental Responsibility',
                    sessions: [
                        { time: '9:30 AM - 11:00 AM', session: 'Keynote Session', description: 'Greening the Games: Integrating Sustainability into the Indian Olympic Plan - Strategies aligning with Agenda 2020+5.' },
                        { time: '11:30 AM - 1:00 PM', session: 'Expert Session', description: 'Sustainable Venue Design, Green Infrastructure and Temporary Venues - Building eco-friendly sports complexes.' },
                        { time: '2:30 PM - 4:30 PM', session: 'Panel Discussion', description: 'Climate Resilience in Mega Events: Challenges for India’s 2036 Games - Addressing environmental impacts and solutions.' },
                        { time: '4:30 PM - 5:30 PM', session: 'Paper Presentations', description: 'Include works such as Implementing Green Infrastructure in Indian Sports Venues and Environmental Impact Mitigation Strategies for Mega-events.' },
                    ],
                },
                {
                    day: 'Day 4: Governance, Equity, and Inclusion',
                    sessions: [
                        { time: '9:30 AM - 11:00 AM', session: 'Keynote Session', description: 'Governance in Mega-sporting Events: Ethical and Transparent Practices- Ensuring fairness and integrity in the organization.' },
                        { time: '11:30 AM - 1:00 PM', session: 'Expert Session', description: 'Diversity and Inclusion in Indian Sports: The Road to 2036 - Promoting gender equity and inclusion across disciplines.' },
                        { time: '2:30 PM - 3:30 PM', session: 'Panel Discussion', description: 'Streamlining Governance in Sports Federations: Need of the hour' },
                        { time: '4:00 PM - 5:00 PM', session: 'Closing Ceremony', description: '' },
                    ],
                },
                {
                    day: 'Day 5: Tour to World Heritage City Ahmedabad and Statue of Unity',
                    sessions: [
                    ],
                },            
            ],
            importantDates : [
                { event: 'Last date for Abstract Submission', date: '12 January, 2025' },
                { event: 'Early Bird Registrations closes', date: '20 December, 2024' },
                { event: 'Regular Registrations closes', date: '15 January, 2025' },
                { event: 'Late Registrations till', date: '24 January, 2025' },
            ],
            qrCode: QR1, // Replace with an actual QR code URL
            email: 'olyresearchacademy.registration@rru.ac.in', 
            brochure: 'http://rru.ac.in/wp-content/uploads/2024/11/Brochure-BCORE.pdf',
            Schedule: 'https://rru.ac.in/wp-content/uploads/2024/11/Schedule-1.pdf',
            registrationLink: 'https://forms.eduqfix.com/bcoreregof/add',
        },
    ];

    const event = events.find((e) => e.id === parseInt(id)); // Find event by ID

    if (!event) {
        return <div>Event not found</div>;
    }
    const organizingTeam = [
        {
            role: 'Patron',
            members: ['Professor (Dr.) Bimal N. Patel, Vice-Chancellor, Rashtriya Raksha University'],
        },
        {
            role: 'General Chair',
            members: [
                'Prof.(Dr.) Kalpesh. H. Wandra, Pro Vice-Chancellor, Rashtriya Raksha University',
                'Dr. Dharmeshkumar D. Prajapati, I/c Registrar, Rashtriya Raksha University',
                'Mr. Sushil Goswami, I/c University Dean, Rashtriya Raksha University',
                'Dr. Anand Kumar Tripathi Dean, Research & Publications, Rashtriya Raksha University'
            ],
        },
        {
            role: 'General Co-Chair',
            members: [
                'Lt. (Dr.) Gaurav Singh Kushwah, Director NCC and Head of Sports Fields, RRU',
                'Dr. Purnima Joshi, I/c Director & Assistant Professor, SPES, RRU',
            ],
        },
        {
            role: 'Program Chair',
            members: ['Dr. Utsav Chaware, Director BCORE & Assistant Professor, SPES, RRU'],
        },
        {
            role: 'Program co - Chair',
            members: [
                'Mr. Bhargav Sarmah, Assist. Director & Assist. Professor, SPES, RRU',
                'Mr. Yash Sharma, Assistant Professor, SPES, RRU',
                'Ms. Phurailatpam Laxmikumari Devi, Assistant Professor, SPES, RRU'
            ]
        },
        {
            role: 'Advisory Chair',
            members: [
                'Mr. Pruthvi-Gerben Patel'
            ]
        }
        // Add more members as per your image content
    ];

    return (
        <div className="event-details-page">
            <h2>{event.name}</h2>
            <div className="details-container">
                <div className="details-card">
                    <h4>Date</h4>
                    <p>{event.date}</p>
                </div>
                <div className="details-card">
                    <h4>Location</h4>
                    <p>{event.place}</p>
                </div>
            </div>
            
            <div className="highlights-container">
                <h3>Highlights</h3>
                <ul>
                    {event.subpoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
                </ul>   
            </div>
            <div className="important-dates-container">
                <h3>Important Dates</h3>
                {event.importantDates.map((date, index) => (
                    <div key={index} className="date-card">
                        <h4>{date.event}</h4>
                        <p>{date.date}</p>
                    </div>
                ))}
            </div>
            <h3>Schedule</h3>
            <div className="eventtimeline">
                {event.schedule.map((day, index) => (
                    <div key={index} className="timeline-day">
                        <h4>{day.day}</h4>
                        <ul>
                            {day.sessions.map((session, idx) => (
                                <li key={idx} className="timeline-session">
                                    <span className="timeline-time">{session.time}</span>
                                    <span className="timeline-details">
                                        <strong>{session.session}:</strong> {session.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="organizing-team">
                <h3>Organizing Team</h3>
                {organizingTeam.map((group, index) => (
                    <div key={index} className="team-group">
                        <h4>{group.role}</h4>
                        <ul>
                            {group.members.map((member, idx) => (
                                <li key={idx}>{member}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="additional-info">
                <h3>Contact Information</h3>
                <p>
                    <a href={`mailto:${event.email}`} className="email-link">
                        {event.email}
                    </a>
                </p>
                <h3>Resources</h3>
                <a
                    href={event.Schedule}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                >
                    View Schedule
                </a>
                <a
                    href={event.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                >
                    View Brochure
                </a>
                <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                >
                    Register Now
                </a>
            </div>
            <div className="map-section">
                <h3>Event Location</h3>
+                   <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qBrfyqNsIAM85EshihXYSfOAKeDYrEA&ehbc=2E312F&noprof=1" 
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"></iframe>
            </div>

            <div className="qr-section">
                <h3>Scan QR Code to Register</h3>
                <img src={event.qrCode} alt="QR Code to reach the event location" className="qr-code" />
            </div>
        </div>
    );
};
