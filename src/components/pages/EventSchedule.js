import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EventSchedule.css';

export const EventSchedule = () => {
    useEffect(() => {
            // Scroll to top when the component mounts
            window.scrollTo(0, 0);
          }, []); // Empty dependency array means this runs only once on mount
    const { id } = useParams();

    const events = [
        {
            id: 1,
            schedule: [
                {
                    day: 'Day 1',
                    topic: 'Urban Development for Mega-Sporting Events: Challenges and Solutions for India – (Urban Regeneration, Infrastructure needs, and CSR & PPP Model)',
                    sessions: [
                        { time: '10:00 AM Onwards', title: 'Opening Ceremony' },
                        { time: '11:30 AM - 12:00 PM', title: 'Special Panel: Urban Development for Mega-Sporting Events: Challenges and Solutions for India – (Urban Regeneration, Infrastructure needs, and CSR & PPP Model)' },
                        { time: '12:00 PM - 2:00 PM', title: 'Lunch' },
                        { time: '2:00 PM - 3:00 PM', title: 'Keynote Session: 2036 Vision: Pathway to Becoming an Olympic Host – Bid process and strategic planning' },
                        { time: '3:00 PM - 3:05 PM', title: 'Introductory Statement: Introduction to the International Olympic Study Center' },
                        { time: '3:05 PM - 3:30 PM', title: 'Tea and Coffee Break' },
                        { time: '3:30 PM - 5:00 PM', title: 'Expert Session: Global Best Practices and Comparative Analysis in Olympic City Selection and Strategic Planning' },
                        { time: '5:00 PM - 6:00 PM', title: 'Expert Session: Olympic City Selection: Bid Process and Strategic Planning for India' },
                        { time: '6:00 PM Onwards', title: 'Dinner' }
                    ]
                },
                {
                    day: 'Day 2',
                    topic: 'Economic Strategies and Technological Innovation',
                    sessions: [
                        { time: '9:30 AM - 10:30 AM', title: 'Keynote Session: Financing the Future: Innovative Economic Models for Hosting the Olympics in India - Insights into Sustainable Funding and Investment' },
                        { time: '10:30 AM - 11:00 AM', title: 'Tea and Coffee Break' },
                        { time: '11:00 AM - 11:30 AM', title: 'Special Keynote: Strategic Olympic Communication: Building Global Positioning for Emerging Host Nations' },
                        { time: '11:30 AM - 1:00 PM', title: 'Expert Session: Smart Sports Management - AI and IoT; Innovations in Sports, Fan Engagement and e-sports' },
                        { time: '1:00 PM - 2:30 PM', title: 'Lunch' },
                        { time: '2:30 PM - 3:00 PM', title: 'Olympic Study Centre Presentation: Mr. Cedric Vanden Bogaerde' },
                        { time: '3:00 PM - 3:30 PM', title: 'Olympic Study Centre Presentation: Ms. Urvi Khasnis' },
                        { time: '3:30 PM - 5:00 PM', title: 'Panel Discussion: Balancing Costs and Benefits: Financial Strategy for Olympic Ambitions' },
                        { time: '5:00 PM - 5:30 PM', title: 'Tea and Coffee Break + Showcase of Hyperlab Advanced Sporting Equipment' },
                        { time: '5:30 PM - 6:30 PM', title: 'Paper Presentations: Tech Innovations for Mega Event Operations and Economic Benefits vs. Costs: A Developing Nation’s Perspective' },
                        { time: '6:30 PM - 7:00 PM', title: 'Culture Evening: Cultural Performance by RRU Students at BCORE Premises' },
                        { time: '7:00 PM - 7:30 PM', title: 'Rest' },
                        { time: '7:30 PM Onwards', title: 'Gala Dinner' }
                    ]
                },
                {
                    day: 'Day 3',
                    topic: 'Sustainability and Environmental Responsibility',
                    sessions: [
                        { time: '9:30 AM - 11:00 AM', title: 'Expert Session: Sustainable Venue Design, Green Infrastructure and Temporary Venues - Building eco-friendly sports complexes.' },
                        { time: '11:00 AM - 11:30 AM', title: 'Tea and Coffee Break' },
                        { time: '11:30 AM - 12:00 PM', title: 'Olympic Study Research Center Session: Mr. Yoonkyu Song' },
                        { time: '12:00 PM - 12:30 PM', title: 'Olympic Study Research Center Session: Mr. Charly and Ms. Margaux' },
                        { time: '12:30 PM - 2:00 PM', title: 'Lunch' },
                        { time: '2:30 PM - 4:00 PM', title: 'Special Panel: Multi-Sport Events Moving to a Sustainable Platform – Reframing Commonwealth Games to a New Model' },
                        { time: '4:00 PM - 5:30 PM', title: 'Panel Discussion: Climate Resilience in Mega Events: Challenges for India’s 2036 Games – Addressing Environmental Impacts and Solutions' },
                        { time: '5:30 PM - 6:30 PM', title: 'Paper Presentations: Building a Sustainable Sports Future: India and the Olympics' },
                        { time: '6:30 PM - 7:00 PM', title: 'Plantation of Trees on BCORE Premises' },
                        { time: '7:00 PM Onwards', title: 'Dinner' }
                    ]
                },
                {
                    day: 'Day 4',
                    topic: 'Governance, Equity, and Inclusion',
                    sessions: [
                        { time: '9:30 AM - 10:15 AM', title: 'Olympic Study Research Center Session: Prof. (Dr.) Mariia Bulatova' },
                        { time: '10:15 AM - 10:30 AM', title: 'Olympic Study Research Center Session: Honorary Professor Ian Jobling (VIRTUAL)' },
                        { time: '10:30 AM - 11:00 AM', title: 'Keynote Session: Governance in Mega-Sporting Events: Ethical and Transparent Practices' },
                        { time: '11:00 AM - 12:30 PM', title: 'Expert Session: Diversity and Inclusion in Indian Sports: The Road to 2036 – Promoting Gender Equity and Inclusion Across Disciplines' },
                        { time: '12:30 PM - 2:00 PM', title: 'Lunch' },
                        { time: '2:00 PM - 4:00 PM', title: 'Closing Ceremony and Departure' }
                    ]
                },
                {
                    day: 'Day 5',
                    topic: 'Tour of World Heritage City Ahmedabad and Statue of Unity',
                    sessions: []
                }
            ],
            
        },
    ];

    const event = events.find((e) => e.id === parseInt(id));

    if (!event) {
        return <div className="not-found">Schedule not found for this event.</div>;
    }

    return (
        <div className="event-schedule-container">
            <header className="schedule-header">
                <h1>Event Schedule</h1>
                <p>Explore the sessions of the 1st International Olympic Research Conference</p>
            </header>
            {event.schedule.map((day, index) => (
                <section key={index} className="schedule-section">
                    <h2 className="day-title">
                        <span>{day.day}</span>: {day.topic}
                    </h2>
                    <div className="schedule-list">
                        {day.sessions.map((session, idx) => (
                            <div key={idx} className="schedule-item">
                                <div className="time">{session.time}</div>
                                <div className="details">
                                    <h3>{session.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};
