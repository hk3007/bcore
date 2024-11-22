import React , {useEffect}from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';
import QR1 from './Images/qr-code (2).png'
export const EventDetails = () => {
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs only once on mount
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
                'Participants will enjoy a guided tour of the heritage city of Ahmedabad and statue of Unity offerings insights into Indian culture and history',
                "Attendees will have the unique opportunity to network and collaborate with industry experts and entrepreneurs",
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
            importantDates: [
                { event: 'Last date for Abstract Submission', date: '12 January, 2025' },
                { event: 'Early Bird Registrations closes', date: '20 December, 2024' },
                { event: 'Regular Registrations closes', date: '15 January, 2025' },
                { event: 'Late Registrations till', date: '24 January, 2025' },
            ],
            Steps: [
                { event: 'Step 1', date: ' Submit the abstract' },
                { event: 'Step 2', date: 'Wait For confirmation' },
                { event: 'Step 3', date: 'Register to the Olympics conference' },
                { event: 'Step 4', date: 'Fill Google Form' },
            ],
            qrCode: QR1,
            email: 'olyresearchacademy.registration@rru.ac.in',
            brochure: 'https://rru.ac.in/wp-content/uploads/2024/11/Brochure-BCORE.pdf',
            Schedule: 'https://rru.ac.in/wp-content/uploads/2024/11/Schedule-1.pdf',
            registrationLink: 'https://forms.eduqfix.com/bcoreregof/add',
            googleform: 'https://docs.google.com/forms/d/e/1FAIpQLScQw4qS9J-GXwCaMcVa0ZAqcYBgWTCDWWda2uzknElP3KxIWg/viewform?vc=0&c=0&w=1&flr=0',
            callForAbstract: {
                text: `BCORE cordially invites abstracts for presentation at its International Olympic Research Conference at Rashtriya Raksha University. Submissions addressing hosting and organizing, Olympic education, sustainable development, and technological innovation are particularly welcomed. Early career researchers are encouraged to participate.`,
                submissionEmail: 'olyresearchacademy.submissions@rru.ac.in',
                deadline: '12th January 2025',
            },
            organizingCommittee: [
                {
                    name: 'Scientific Committee',
                    members: [
                        { name: 'Dr Gaurav Singh Kushwah (Team Lead)', email: 'gaurav.kushwah@rru.ac.in' },
                        { name: 'Dr Utsav Chaware', email: 'utsav.chaware@rru.ac.in' },
                        { name: 'Department of Research and Publication, RRU' }
                    ]
                },
                {
                    name: 'Finance & Budgeting Committee',
                    members: [
                        { name: 'Mr Bhargav Sarmah (Team Lead)', email: 'bhargav.sarmah@rru.ac.in' },
                        { name: 'Mr Gaurav Shah', email: 'gaurav.shah@rru.ac.in' },
                        { name: 'Mr Nikunj Parmaar', email: 'nikunj.p.parmaar@rru.ac.in' }
                    ]
                },
                {
                    name: 'Promotion and Marketing',
                    members: [
                        { name: 'Mr Yash Sharma (Team Lead)', email: 'yash.sharma@rru.ac.in' },
                        { name: 'Mr Kumar Sabyasachi', email: 'k.sabyasachi@rru.ac.in' },
                        { name: 'Mr Sourav Tomar', email: 'souravsingh.tomar@rru.ac.in' },
                        { name: 'Mrs Jasmika Soni', email: 'jasmika.soni@rru.ac.in' }
                    ]
                },
                {
                    name: 'Query/Registration and Communication',
                    members: [
                        { name: 'Ms Laxmi Devi (Team Lead)', email: 'phurailatpam.laxmikumari@rru.ac.in' },
                        { name: 'Mr Sumit Tomar', email: 'sumit.tomar@rru.ac.in' },
                        { name: 'Mr Avinash', email: 'sto10.spes@rru.ac.in' }
                    ]
                },
            ]
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
            <div className="call-for-abstract-container olympic-theme">
                <h3>Call for Abstract</h3>
                <p className="animated-text">{event.callForAbstract.text}</p>
                <p>
                    <strong>Submission Email:</strong>{" "}
                    <a href={`mailto:${event.callForAbstract.submissionEmail}`} className="email-link">
                        {event.callForAbstract.submissionEmail}
                    </a>
                </p>
                <p>
                    <strong>Last Date of Submission:</strong> {event.callForAbstract.deadline}
                </p>
            </div>
            <div className="important-dates-container">
                <h3>Steps to Register</h3>
                {event.Steps.map((date, index) => (
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
                <h3>Organizing Committee</h3>
                {event.organizingCommittee.map((group, index) => (
                    <div key={index} className="team-group">
                        <h4>{group.name}</h4>
                        <ul>
                            {group.members.map((member, idx) => (
                                <li key={idx}>
                                    {member.name} - <a href={`mailto:${member.email}`}>{member.email}</a>
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
                <h3>Registration Queries</h3>
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
                <a
                    href={event.googleform}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                >
                    Google Form
                </a>
            </div>
            <div className="map-section">
                <h3>Event Location</h3>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qBrfyqNsIAM85EshihXYSfOAKeDYrEA&ehbc=2E312F&noprof=1" 
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
