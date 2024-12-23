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
                'Participants will enjoy a guided tour of the heritage city of Ahmedabad and Statue of Unity offering insights into Indian culture and history.',
                'Attendees will have the unique opportunity to network and collaborate with industry experts and entrepreneurs.',
            ],
            Steps: [
                { event: 'Step 1', date: ' Submit the abstract' },
                { event: 'Step 2', date: 'Wait For confirmation' },
                { event: 'Step 3', date: 'Register to the Olympics conference' },
                { event: 'Step 4', date: 'Fill Google Form' },
            ],
            abstractGuidelines: {
                formatRequirements: [
                    'Abstract should be between 150-250 words.',
                    'Use 12-point Times New Roman font.',
                    'Double-space all text.',
                    'Set 1-inch (2.54 cm) margins on all sides.',
                    'Include page number in the top-right header.',
                    'Center the word "Abstract" as the title (bold).',
                    'Text should be left-aligned and not indented.'
                ],
                contentStructure: [
                    {
                        heading: 'Introduction',
                        description: 'Begin with a brief introduction to the research problem. Clearly state the purpose and objectives of the study.'
                    },
                    {
                        heading: 'Methodology',
                        description: 'Describe the research design. Include information about participants, if applicable. Outline data collection methods and procedures. Mention analytical approaches used.'
                    },
                    {
                        heading: 'Results',
                        description: 'Present key findings concisely. Include statistical significance when relevant. Focus on main outcomes only.'
                    },
                    {
                        heading: 'Conclusions',
                        description: 'State primary conclusions. Address implications of findings. Avoid introducing new information.'
                    },
                    {
                        heading: 'Keywords',
                        description: 'Include 3-5 keywords. Place keywords on a new line below the abstract. Indent the first line of keywords. Begin with "Keywords:" (italicized).'
                    }
                ]
            },
            importantDates: [
                { event: 'Last date for Abstract Submission', date: '12 January, 2025' },
                { event: 'Early Bird Registrations closes', date: '20 December, 2024' },
                { event: 'Regular Registrations closes', date: '15 January, 2025' },
                { event: 'Late Registrations till', date: '24 January, 2025' },
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
            organizingTeam: [
                {
                    name: 'Program Chair',
                    members: [
                        { name: 'Dr Utsav Chaware', email: 'utsav.chaware@rru.ac.in' },
                    ]
                },
                {
                    name: 'Program co - Chair',
                    members: [
                        { name: 'Mr Bhargav Sarmah ', email: 'bhargav.sarmah@rru.ac.in' },
                        { name: 'Mr Yash Sharma ', email: 'yash.sharma@rru.ac.in' },
                        { name: 'Ms. Phurailatpam Laxmikumari Devi', email: 'phurailatpam.laxmikumari@rru.ac.in' },
                    ]
                },
                {
                    name: 'Advisory Chair',
                    members: [
                        { name: 'Mr. Pruthvi-Gerben Patel', email: '' },
                    ]
                },
            ],
            transportation: {
                busRoutes: [
                    {
                        route: 'Ahmedabad to BCORE',
                        details: 'Take a direct bus from Ahmedabad to Gandhinagar. Buses are available every hour. The journey takes approximately 45 minutes.'
                    },
                    {
                        route: 'Gandhinagar to BCORE',
                        details: 'From Gandhinagar, take a local bus or auto-rickshaw to Rashtriya Raksha University. The venue is located near the Bharat Centre of Olympic Research and Education (BCORE).'
                    },
                ]
            },
            accommodations: [
                {
                    name: 'Good Times, Dahegam',
                    address: 'Good Times by Sangath IPL near Rashtriya Raksha University Lavad Dehgam',
                    contact: 'For Bookings Contact - 8175991401 | Mr. Sandeep'
                },
                {
                    name: 'Malhaar Resort, Dahegam',
                    address: 'Malhaar Resort, Uttam Dairy, Behind Dehgam Power Grid, Dahegam, Ahmedabad Gujarat, India.',
                    contact: 'For Bookings Contact - 7575806021 | Mr. Bahadur Singh'
                },
                {
                    name: 'Hotel Neelkanth, Dahegam',
                    address: '5R64+56H, Ahmedabad - Modasa Rd, Vrundavan Society, Nehru Society, Dahegam, Gujarat 382305',
                },
                {
                    name: 'Home World Hostel, Gandhinagar (Economical)',
                    address: '4, 5 & 6 Floor, Times Square, Bhaijipura, Chowk, Gandhinagar, Gujarat 382421',
                    contact: 'For Bookings Contact - +91 7600 476 012 | Mr. Luckyraj Singh'
                },
            ]
        },
    ];
        
    

    const event = events.find((e) => e.id === parseInt(id)); // Find event by ID

    if (!event) {
        return <div>Event not found</div>;
    }

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
                        <li key={index}>
                            <span>{point}</span>
                        </li>
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
            <div className="abstract-guidelines-container">
                <h3>Abstract Submission Guidelines</h3>
                <div className="abstract-guidelines">
                    <h4>Format Requirements</h4>
                    <ul>
                        {event.abstractGuidelines?.formatRequirements?.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                    <h4>Content Structure</h4>
                    {event.abstractGuidelines?.contentStructure?.map((section, index) => (
                        <div key={index} className="guideline-section">
                            <h5>{section.heading}</h5>
                            <p>{section.description}</p>
                        </div>
                    ))}
                </div>
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
            <div className="organizing-team">
                <h3>Organizing Team</h3>
                {events?.[0]?.organizingTeam?.map((group, index) => (
                    <div key={index} className="team-group">
                        <h4>{group.name}</h4>
                        <ul>
                            {group.members?.map((member, idx) => (
                                <li key={idx}>{member.name} - {member.email}</li>
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
            <div className="accommodation-container">
                <h3>Accommodation Options</h3>
                <div className="accommodation-items">
                    {event.accommodations.map((accommodation, index) => (
                    <div key={index} className="accommodation-item">
                        <h4>{accommodation.name}</h4>
                        <p><strong>Address:</strong> {accommodation.address}</p>
                        {accommodation.contact && (
                        <p><strong>Contact:</strong> {accommodation.contact}</p>
                        )}
                    </div>
                    ))}
                </div>
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
