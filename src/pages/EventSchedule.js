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
            name: '1st International Olympic Research Conference',
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
        {
            id: 3,
            name: '2nd International Olympic Research Conference',
            pdfUrl: 'https://drive.google.com/file/d/1_eGqtkwx0gCidaNvjMU_7OFQYeQRtym_/view?usp=sharing',
            schedule: [
                {
                    day: 'Day 1',
                    topic: 'THE EDUCATION – Schools, Universities, and Academies',
                    sessions: [
                        { 
                            time: '08:30 AM - 09:45 AM', 
                            title: 'Registration and Kit Distribution' 
                        },
                        { 
                            time: '10:00 AM - 11:30 AM', 
                            title: 'Opening Ceremony' 
                        },
                        { 
                            time: '11:30 AM - 11:45 AM', 
                            title: 'Special Briefing', 
                            topic: 'Plan for the Research and Education Initiatives in India'
                        },
                        { 
                            time: '11:45 AM - 12:15 PM', 
                            title: 'Refreshment, Networking & Official Photography' 
                        },
                        { 
                            time: '12:15 PM - 01:30 PM', 
                            title: 'Session 1 (Keynote)',
                            topic: 'Education as the Cornerstone: Shaping a Sustainable Future for Sport and Olympism'
                        },
                        { 
                            time: '01:30 PM - 02:30 PM', 
                            title: 'Lunch Break' 
                        },
                        { 
                            time: '02:30 PM - 03:15 PM', 
                            title: 'Expert Session',
                            topic: 'The Role of NOAs in Olympic Education: From Values to Action'
                        },
                        { 
                            time: '03:15 PM - 04:00 PM', 
                            title: 'Expert Session',
                            topic: 'Architecting Sports Management Education Excellence in Emerging Markets'
                        },
                        { 
                            time: '04:00 PM - 04:30 PM', 
                            title: 'Refreshment and Networking Break' 
                        },
                        { 
                            time: '04:30 PM - 05:30 PM', 
                            title: 'Panel Discussion',
                            topic: 'Building a Sustainable Athlete Development Ecosystem Through Institutional Integration: Schools,Universities, and High-Performance Academies'
                        },
                        { 
                            time: '07:30 PM - 09:00 PM', 
                            title: 'Dinner' 
                        }
                    ]
                },
                {
                    day: 'Day 2',
                    topic: 'THE GOVERNANCE – Policy & Anti-Doping (Auditorium) Parallel Paper Presentation Sessions (Seminar Hall)',
                    sessions: [
                        { time: '09:30 AM - 10:00 AM', title: 'Reporting & Registration', topic: 'Opening Circle: Session Introductions | Meet & Greet' },
                        { time: '10:00 AM - 10:45 AM', title: 'Session 1', topic: 'Sports Governance Outlook: Global Alignment for an Olympic Future' },
                        { time: '10:45 AM - 11:15 AM', title: 'Refreshment and Networking Break' },
                        { time: '11:15 AM - 12:00 PM', title: 'Keynote Session', topic: 'Transparency, Accountability, and Anti-Corruption strategies in mega-events' },
                        { time: '12:00 PM - 01:00 PM', title: 'Joint Session', topic: 'Sports Governance in India; Role of NOCs in Governance & insights from the Sports Governance Act 2025' },
                        { time: '01:00 PM - 02:00 PM', title: 'Lunch Break' },
                        { time: '02:00 PM - 03:00 PM', title: 'Special Keynote', topic: 'Building a Holistic Anti-doping Model; 3Ps for a Credible Anti-doping System' },
                        { time: '03:00 PM - 04:00 PM', title: 'Workshop Session 1', topic: 'Promoting Clean Sports; NADA\'s Role, Awareness, Education and Research Initiatives' },
                        { time: '04:00 PM - 04:30 PM', title: 'Refreshment and Networking Break' },
                        { time: '04:30 PM - 05:30 PM', title: 'Workshop Session 2', topic: 'Building a Holistic Anti-doping Model; 3Ps for a Credible Anti-doping System' },
                        { time: '05:30 PM - 06:00 PM', title: 'Paper Presentations (Main Hall)', topic: 'Research Presentations of Selected articles on Governance & Anti-Doping' },
                        { time: '08:00 PM Onwards', title: 'Gala Dinner & Cultural Performances' }
                    ]
                },
                {
                    day: 'Day 3',
                    topic: 'THE RESEARCH – Academia and Coaches (Auditorium) | Parallel Paper Presentation Sessions (Seminar Hall)',
                    sessions: [
                            { time: '09:30 AM - 09:45 AM', title: 'Reporting', topic: 'Opening Circle: Session Introductions | Meet & Greet' },
                            { time: '09:45 AM - 11:00 AM', title: 'Joint Session', topic: 'Bridging the Research–Coach Divide: Translating Research into Practice' },
                            { time: '11:00 AM - 11:30 AM', title: 'Refreshment and Networking Break' },
                            { time: '11:30 AM - 12:15 PM', title: 'Expert Session', topic: 'High-Performance Models: Training & Monitoring in Academies' },
                            { time: '12:15 PM - 01:00 PM', title: 'Demonstration & Panel', topic: 'Indigenous & Affordable Technologies; Evidence-Based Coaching Practices' },
                            { time: '01:00 PM - 02:00 PM', title: 'Lunch Break' },
                            { time: '02:00 PM - 03:15 PM', title: 'Session 3', topic: 'Anti-Doping Education and Research Workshop: India-Centric AntiIndia-Centric Anti-Doping Research & Education: NADA\'s Priority Needs -Doping Research & Education: NADA\'s Priority Needs' },
                            { time: '03:00 PM - 04:00 PM', title: 'Workshop Session 4', topic: 'Advanced Anti-Doping Topics: Case Studies, TUEs & Whereabouts System' },
                            { time: '04:15 PM - 05:00 PM', title: 'Workshop Session 5', topic: 'How to Build Fundable Anti-Doping Research: A Global Orientation and Workshop' },
                            { time: '05:00 PM - 06:00 PM', title: 'Parallel Session (Auditorium)', topic: 'Research Presentations of Selected articles on Sports Science and Anti-Doping' },
                            { time: '05:00 PM - 06:00 PM', title: 'Parallel Session (Expo Area)', topic: 'Research Networking Platform & Technology Expo (Affordable Tech)' },
                            { time: '08:00 PM Onwards', title: 'Dinner' }
                        ]
                },
                {
                    day: 'Day 4',
                    topic: 'CASE STUDIES – Mega Event Organizing Strategies',
                    sessions: [
                            { time: '09:30 - 10:30', title: 'OSRC Presentations', topic: 'Olympic Studies Research Centres\' Sessions | International OSRC Representatives' },
                            { time: '10:30 - 11:15', title: 'Session 1', topic: 'World Police and Fire Games (WPFG) Case Studies: Organising Strategies & Lessons for Ahmedabad 2029' },
                            { time: '11:15 - 11:45', title: 'Refreshment and Networking Break' },
                            { time: '11:45 - 12:30', title: 'Panel Discussion', topic: 'Comparative Analysis of Mega-Sporting Events: Operations, Legacy & Sustainability' },
                            { time: '12:30 - 13:15', title: 'Session 2', topic: 'India´s Olympic Bid – Potential Next Steps' },
                            { time: '13:15 - 14:30', title: 'Closing Ceremony', topic: 'Certificate Distribution, Vote of Thanks & Concluding Remarks' },
                            { time: '14:30', title: 'Lunch' },
                            { time: 'Evening', title: 'Local Sports Infra Visit' }
                            ]
                },
                {
                    day: 'Day 5',
                    topic: ' CULTURAL TOUR FOR INTERNATIONAL PARTICIPANTS AND DELEGATES',
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
<div className="axiom-root">
            {/* Global Header Section */}
            <header className="axiom-main-header">
                <div className="axiom-header-container">
                    <h1 className="axiom-main-title">Event Schedule</h1>
                    
                    <div className="axiom-header-divider">
                        <div className="axiom-gold-dot"></div>
                        <div className="axiom-gold-path"></div>
                        <div className="axiom-gold-dot"></div>
                    </div>

                    <p className="axiom-event-name">{event.name}</p>

                    {/* Conditional Rendering: Only shows if event.pdfUrl exists */}
                    {event.pdfUrl && (
                        <div className="axiom-download-wrapper">
                            <a 
                                href={event.pdfUrl} 
                                download={`${event.name}-Schedule.pdf`} 
                                className="axiom-download-btn"
                            >
                                Download Full Schedule
                            </a>
                        </div>
                    )}
                </div>
            </header>

            <div className="axiom-container">
                {event.schedule.map((day, dIdx) => (
                    <div key={dIdx} className="axiom-day-row">
                        
                        {/* Left Side: Static Day & Topic Pillar */}
                        <div className="axiom-left-pillar">
                            <div className="axiom-sticky-content">
                                <h2 className="axiom-day-text">{day.day}</h2>
                                
                                {/* Topic written directly below Day */}
                                {day.topic && <p className="axiom-day-topic">{day.topic}</p>}
                                
                                <div className="axiom-day-line"></div>
                                <p className="axiom-date-text">{day.date}</p>
                            </div>
                        </div>

                        {/* Right Side: Session Stream */}
                        <div className="axiom-right-stream">
                            {day.sessions.map((session, sIdx) => (
                                <div key={sIdx} className="axiom-session-node">
                                    <div className="axiom-arrow-system">
                                        <div className="axiom-line"></div>
                                        <div className="axiom-arrowhead"></div>
                                    </div>
                                    
                                    <div className="axiom-session-details">
                                        <div className="axiom-time-box">{session.time}</div>
                                        <div className="axiom-content-wrapper">
                                            <h3 className="axiom-session-title">{session.title || session.sessionType}</h3>
                                            {session.topic && (
                                                <div className="axiom-topic-row">
                                                    <span className="axiom-topic-label">OBJECTIVE</span>
                                                    <p className="axiom-topic-desc">{session.topic}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
