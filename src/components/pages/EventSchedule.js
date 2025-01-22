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
                    topic: 'Olympic Host City Selection and Urban Transformation',
                    sessions: [
                        { time: '10:00AM - 11:00AM', title: 'Opening Ceremony' },
                        { time: '11:30AM - 1:00PM', title: 'Keynote Session: 2036 Vision: Pathway to Become an Olympic Host- Bid process and Strategic planning.' },
                        { time: '2:30PM - 4:00PM', title: 'Expert Session: Global Best Practices and Comparative Analysis in Olympic City Selection and Urban Legacy' },
                        { time: '4:30PM - 5:30PM', title: 'Panel Discussion: Urban Development for Mega-Sporting Events: Challenges and Solutions for India- (Urban regeneration, infrastructure needs, and CSR, & PPP Model)' },
                    ],
                },
                {
                    day: 'Day 2',
                    topic: 'Economic Strategies and Technological Innovation',
                    sessions: [
                        { time: '9:30AM - 11:00AM', title: 'Keynote Session: Financing the Future, Innovative Economic Models for Hosting the Olympics in India- Iinsights into sustainable funding and investment' },
                        { time: '11:30AM - 1:00PM', title: 'Expert Session: Smart Sports Management- AI and IoT; Innovations in Sports, Fan Engagement and e-sports' },
                        { time: '2:30PM - 4:30PM', title: 'Panel Discussion: Balancing Costs and Benefits: Financial Strategy for Olympic AmbitionsA look at economic modelling, budgets and long-term analysis.' },
                        { time: '4:30PM - 5:30PM', title: 'High Tea Session with Workshop: Wearable Technology and Advanced Equipment for Olympics' },
                        { time: '5:30PM - 6:30PM', title: 'Paper Presentations: Topics could include Tech Innovations for Mega Event Operations and Economic Benefits vs. Costs: A developing nation’s perspective and others' },
                    ],
                },
                {
                    day: 'Day 3',
                    topic: 'Sustainanility and Environmental Responsibility',
                    sessions: [
                        {time: '9:30AM- 11:00AM', title: 'Keynote Session: Greening the Games: Integrating Sustainability into the Indian Olympic Plan Strategies aligning with Agenda 2020+5'},
                        {time: '9:30AM- 11:00AM', title: 'Expert Session: Sustainability Venue Design, Green Infrastructure and Temporary VenuesBuilding eco-friendly sports complexes'},
                        {time: '2:30PM - 4:00PM', title: 'Panel Discussions: Climate Resilience in Mega Events: Challenges for India’s 2036 GamesAddressing environmental impacts and solutions'},
                        {time: '4:30PM - 5:30PM', title: 'Paper Presentations: Greening the Games: Integrating Sustainability into the Indian Olympic Plan Strategies aligning with Agenda 2020+5'}
                    ]
                },
                {
                    day: 'Day 4',
                    topic: ' Governancce, Equity, and Inclusion ',
                    sessions: [
                        {time: '9:30PM - 11:00AM ', title: 'Keynote Session: Governance in Mega-Sporting Events: Ethical and Transparent PracticesEnsuring fairness and integrity in the organisation'},
                        {time: '11:30AM - 1:00PM', title: 'Expert Session: Diversity and Inclusion in Indian Sports: The Road to 2036- Promoting gender equity and inclusion across disciplines'},
                        {time: '2:30PM - 3:30PM', title: 'Panel Discussions: Streamlining Governance in Sports Federations: Need of the hours'},
                        {time: '4:00PM - 5:00PM', title: 'Closing Ceremony'}
                    ]
                },
                {
                    day: 'Day 5',
                    topic: ' Tour of World Heritage City Ahmedabad and Statue of Unity',
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
