import React , {useEffect}from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';
import QR1 from './Images/qr-code (2).png';
import brochure from "./Broucher/Broucher.pdf";
import schedule from "./Broucher/Schedule.pdf";
import logo5 from './Images/Indian_Olympic_Association_logo.png'
import sponser1 from './Images/Hyperlab Logo.png';
import sponser2 from './Images/AISTS.png';
import collaborator1 from './Images/Ministry_of_Youth_Affairs_and_Sports.png'
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
                { event: 'Early Bird Registrations closes', date: '30 December, 2024' },
                { event: 'Regular Registrations closes', date: '15 January, 2025' },
                { event: 'Late Registrations till', date: '24 January, 2025' },
            ],
            guests: [
                {
                    id: 1,
                    name: "Shri (Dr.) Mansukh Mandaviya",
                    about: "Shri (Dr.) Mansukh Mandaviya is the current Union Minister of Health and Family Welfare, Chemicals, and Fertilizers, Government of India. Known for his visionary leadership, he has been instrumental in driving key healthcare reforms and fostering India's self-reliance in the pharmaceutical sector.",
                    img: "https://www.gavi.org/sites/default/files/body/2021-10/MANDAVIYA_Mansukh.jpg",
                },
                {
                    id: 2,
                    name: "Shri Harsh Sanghavi",
                    about: "Harsh Sanghavi is the Minister of State for Home, Industries, and Youth Affairs in the Government of Gujarat. A dynamic leader, he is known for his proactive approach to governance and engaging with youth for progressive development initiatives.",
                    img: "https://harshsanghavi.in/img/ss11.png ",
                },
                {
                    id: 3,
                    name: "Dr. PT USHA",
                    about: "PT Usha, fondly known as the 'Golden Girl of India,' is one of the greatest athletes in Indian history. A legendary sprinter, she has won numerous international medals and inspired generations with her dedication to sports and excellence.",
                    img: "https://olympic.ind.in/public/images/news/1160776464.png",
                },
                {
                    id: 4,
                    name: "Smt. Sujata Chaturvedi, IAS, Secretary (Sports)",
                    about: "Smt. Sujata Chaturvedi, an IAS officer from the 1989 Bihar cadre, is the current Secretary of the Department of Sports. She took charge in October 2021, succeeding Ravi Mittal. Prior to this role, she served as an Additional Secretary in the Department of Personnel and Training (DoPT).",
                    img: "https://pbs.twimg.com/media/GQZauq1X0AAbJdi.jpg"
                },
                {
                    id: 5,
                    name: "Prof. Bimal N Patel, VC, RRU",
                    about: "Prof. (Dr.) Bimal N. Patel is the Vice-Chancellor of Rashtriya Raksha University (RRU), a premier security and police university in India. He is also a Member of the National Security Advisory Board (NSAB) of India and the UN International Law Commission (2023-2027)",
                    img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Prof.%28Dr.%29_Bimal_N._Patel.jpg"
                }
            ],
            speakers: [
                {
                    id: 1,
                    name: "Shri Adille Sumariwalla, Vice President, World Athletics",
                    about: "Shri Adille Sumariwalla is currently the President of the Athletics Federation of India (AFI) and a member of the Council of World Athletics. He is a former Olympian and a key figure in advancing athletics in India.",
                    img: "https://static.toiimg.com/thumb/msid-70393719,width-400,resizemode-4/70393719.jpg",
                },
                {
                    id: 2,
                    name: "Mr. Ravneet Gill, Chief Executive Officer, AISTS India",
                    about: "Mr. Ravneet Gill, Chief Executive Officer, AISTS India",
                    img: "https://media.licdn.com/dms/image/v2/D5603AQFCsY7Ong86cg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726402492305?e=2147483647&v=beta&t=BuMi_oa76CiC8VCP2qm6aX-_v-dKQxQYuogoG3-PXQo",
                },
                {
                    id: 3,
                    name: "Shri Gagan Narang, Vice President IOA, Padma Shri",
                    about: "Shri Gagan Narang is a renowned Indian shooter and Olympic medalist. He won a bronze medal in the 10m Air Rifle event at the 2012 London Olympics, making him one of India's celebrated sports icons.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/1/11/XIX_Commonwealth_Games-2010_Delhi_Gagan_Narang_won_the_Gold_medal_in_%28Men%E2%80%99s%29_Shooting_Rifle_50m_pairs_%28cropped%29.jpg",
                },
                {
                    id: 4,
                    name:"Mr. Lambis Konstantinidis, Executive Director, Planning Paris 2024 Games, France",
                    about: "Mr. Lambis Konstantinidis, Executive Director, Planning Paris 2024 Games, France Mr. Lambis Konstantinidis is the Executive Director of Planning and Coordination for the Paris 2024 Olympic and Paralympic Games",
                    img: "https://media.licdn.com/dms/image/v2/C4E34AQGnecSgqp8g-Q/ugc-proxy-shrink_800/ugc-proxy-shrink_800/0/1594194264939?e=2147483647&v=beta&t=q44nWPIpa5DeIponXCRcz9lgLwBAV0vGm_8VSn2tD60"
                },
                {
                    id: 5,
                    name:"Mr. Prasanth Shantakumaran, Head Sports Sector, KPMG, India",
                    about: "Mr. Prasanth Shantakumaran is a Partner at KPMG in India, where he leads the Digital Engineering and Quality (DEQ) practice as well as the Sports sector",
                    img: "https://kpmg.com/content/dam/kpmgsites/in/images/2020/12/prasanth-shanthakumaran.jpg"
                },
                {
                    id: 6,
                    name:"Mr Pranshu Jain, Executive Director, Sports Advisory, PwC India",
                    about: "Mr. Pranshu Jain is the Executive Director of Sports Advisory at PwC India. Pranshu has previously worked with firms like Deloitte and has been involved in various projects related to sports management and digital transformation",
                    img: "https://media.licdn.com/dms/image/v2/C4D03AQH1nThVeWchzQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516893474724?e=1743033600&v=beta&t=0t3h6qlR4DKE_W6zsmmDMDM6zJkmExzBO02Q4jHbhoY"
                },
                {
                    id: 7,
                    name:"Prof.  Rajendra Shrivastav, Novartis Professor of Marketing Strategy",
                    about: "Prof. Rajendra Srivastava is the Novartis Professor of Marketing Strategy and Innovation at the Indian School of Business (ISB). He is also the Executive Director of the Centre for Business Innovation (CBI) at EFPM",
                    img: "https://media.licdn.com/dms/image/v2/C5103AQHE4hB7W4kWwA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517579741419?e=2147483647&v=beta&t=kl-igT0JMeqG9VOx2hu4YWcNkV18jfcUx1AcfJR1TO0"
                },
                {
                    id: 8,
                    name:"Christian Klaue Director, Corporate Communications and Public Affairs, International Olympic Committee (IOC)",
                    about: "Christian Klaue is the Director of Corporate Communications and Public Affairs at the International Olympic Committee (IOC). He joined the IOC in September 2015 and has been leading the department since October 2019",
                    img: "https://img.olympics.com/images/image/private/t_original_380/f_auto/primary/n6bepq6tdifn0jkpnvca"
                },
                {
                    id: 9,
                    name:"Prof Mahesh Panchagnula, Professor of Applied Mechanics, IIT Madras, India",
                    about: "Prof. Mahesh Panchagnula is a Professor of Applied Mechanics at IIT Madras, India. He specializes in fluid dynamics, atomization, and spray nozzle design",
                    img: "https://home.iitm.ac.in/mvp/img/prof-img.png"
                },
                {
                    id: 10,
                    name:"Mr. Ramesh. Kumar, CEO, IIT Madras Center of Excellence in Sports Science & Analytics",
                    about: "Mr. Ramesh Kumar is the CEO of the Center of Excellence in Sports Science and Analytics (CESSA) at IIT Madras, leading innovation in sports technology and research.",
                    img: "https://media.licdn.com/dms/image/sync/v2/D4D27AQES632CHz09iA/articleshare-shrink_800/articleshare-shrink_800/0/1711138359716?e=2147483647&v=beta&t=NalRaBoJGM9-riLKSa-8uyOMtzbnh0UOvEpSTRl79L8"
                },
                {
                    id: 11,
                    name:"Mr. Udit Seth, Founder & Managing Director, Transtadia",
                    about: "Mr. Udit Seth is the Founder and Managing Director of TransStadia, a sports infrastructure company in India. He has been instrumental in developing multi-use sports facilities, including the Arena Stadium in Ahmedabad, through innovative public-private partnerships",
                    img: "https://ekaclub.net/wp-content/uploads/2023/Udit-Photo.jpg.webp"
                },
                {
                    id: 12,
                    name:"Ms. Isha Rathee, Architect, Populous",
                    about: "Ms. Isha Rathee is a Principal Architect at Populous, based in their New Delhi studio. She has over 10 years of experience in designing sports and entertainment venues, including the Narendra Modi Stadium in Ahmedabad",
                    img: "https://populous.com/uploads/2018/01/Isha-Rathee_005_BW_500X500_web.jpg"
                }
            ],
            qrCode: QR1,
            email: 'olyresearchacademy.registration@rru.ac.in',
            brochure: [brochure],
            Schedule: [schedule],
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
                    contact: 'For Bookings Contact - 8175991401 | Mr. Sandeep',
                    image: 'https://goodtimesbysangathipl.com/wp-content/uploads/2022/04/gtl-2.png',
                    link: 'https://goodtimesbysangathipl.com/'
                },
                {
                    name: 'Malhaar Resort, Dahegam',
                    address: 'Malhaar Resort, Uttam Dairy, Behind Dehgam Power Grid, Dahegam, Ahmedabad Gujarat, India.',
                    contact: 'For Bookings Contact - 7575806021 | Mr. Bahadur Singh',
                    image: 'https://r1imghtlak.mmtcdn.com/d8b02df056b711eeb25f0a58a9feac02.jpg',
                    link: 'https://www.makemytrip.com/hotels/malhaar_resorts-details-dahegam.html'
                },
                {
                    name: 'Hotel Neelkanth, Dahegam',
                    address: '5R64+56H, Ahmedabad - Modasa Rd, Vrundavan Society, Nehru Society, Dahegam, Gujarat 382305',
                    image: 'https://lh3.googleusercontent.com/p/AF1QipP9ZAJ0xs9tV2dMSOqfec29It65ZVHO_8ZJINgs=s1360-w1360-h1020',
                    link: ''
                },
                {
                    name: 'University Accomodation, Gandhinagar (Economical)',
                    address: '4, 5 & 6 Floor, Times Square, Bhaijipura, Chowk, Gandhinagar, Gujarat 382421',
                    contact: 'For Bookings Contact - +91 7600 476 012 | Mr. Luckyraj Singh',
                    image: 'https://lh3.googleusercontent.com/p/AF1QipPVsaQosnVl3KS2F_R80QpFiUiFNHKAMZA-OKKZ=s1360-w1360-h1020',
                    link: 'https://www.facebook.com/people/Home-World-Hostel/100083539351879/'
                },
            ],
            NearBytransportation: [
                {
                    name: 'Sardar Vallabhbhai Patel International Airport',
                    address: 'Hansol, Ahmedabad, Gujarat 380003',
                    image: 'https://tds.indianeagle.com/wp-content/uploads/2018/11/Ahmedabad-Airport.jpg',
                    link: 'https://www.adani.com/svpia-ahmedabad-airport'
                },
                {
                    name: 'Kalupur Railway Station',
                    address: 'Kapasia Bazar, Sakar Bazzar, Kalupur, Ahmedabad, Gujarat 380002',
                    image: 'https://static.gujaratsamachar.com/content_image/content_image_87011ab4-1387-4672-b3d0-c2160e24d0b1.jpeg',
                    link: 'https://www.irctc.co.in/nget/train-search'
                },
                {
                    name: 'Gandhinagar Capital',
                    address: 'Footover Bridge, Sector 13C, Sector 14, Gandhinagar, Gujarat 382016',
                    image: 'https://akm-img-a-in.tosshub.com/aajtak/images/assets/202107/gandhinagar-railway-station-night-view.jpg',
                    link: 'https://www.irctc.co.in/nget/train-search'
                },
                {
                    name: 'Geeta Mandir ST Bus Stand',
                    address: 'Gita Mandir, Ahmedabad, Gujarat 380001',
                    image: 'https://content.jdmagicbox.com/comp/ahmedabad/93/079p250393/catalogue/gujarat-state-road-transport-corporation-geeta-mandir-road-ahmedabad-st-bus-depot-2qkhhet.jpg',
                    link: 'https://gsrtc.in/site/'
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
            <section className="partners-section">
                <h2 className="partners-title">Collaboration</h2>
                <div className="partners-grid">
                    <div className="partner-card">
                        <p>Ministry of Youth Affairs and Sports, Goverment of India</p>
                        <img src={collaborator1} alt="collaborator 1" />
                    </div>
                </div>
            </section>
            <section className="partners-section">
                <h2 className="partners-title">Our Partners</h2>
                <div className="partners-grid">
                    <div className="partner-card">
                        <img src={logo5} alt="Tech Partner 2" />
                        <p>Knowledge Partner</p>
                    </div>
                    <div className="partner-card">
                        <img src={sponser1} alt="Strategic Partner 1" />
                        <p>Innovation and Technology Partner</p>
                    </div>
                    <div className="partner-card">
                        <img src={sponser2} alt="Strategic Partner 2" />
                        <p>Strategic Partner</p>
                    </div>
                </div>
            </section>
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
            <section className="chief-guests">
                <h2>Meet Our Guests</h2>
                <div className="chief-guests-grid">
                    {event.guests.map((guest) => (
                        <div className="guest-card" key={guest.id}>
                            <div className="guest-card-inner">
                                <div className="guest-card-front">
                                    <img src={guest.img} alt={guest.name} />
                                    <h3>{guest.name}</h3>
                                </div>
                                <div className="guest-card-back">
                                    <p>{guest.about}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
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
            <section className="chief-guests">
                <h2>Speakers</h2>
                <div className="chief-guests-grid">
                    {event.speakers.map((speaker) => (
                        <div className="guest-card" key={speaker.id}>
                            <div className="guest-card-inner">
                                <div className="guest-card-front">
                                    <img src={speaker.img} alt={speaker.name} />
                                    <h3>{speaker.name}</h3>
                                </div>
                                <div className="guest-card-back">
                                    <p>{speaker.about}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
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
                        <a
                            key={index}
                            href={accommodation.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="accommodation-item"
                            style={{
                                backgroundImage: `url(${accommodation.image})`,
                            }}
                        >
                            <div className="overlay">
                                <h4>{accommodation.name}</h4>
                                <p><strong>Address:</strong> {accommodation.address}</p>
                                {accommodation.contact && (
                                    <p><strong>Contact:</strong> {accommodation.contact}</p>
                                )}
                            </div>
                        </a>
                    ))}
                </div>
                <h5>For Accommodation-related queries - Janak Choudhari - +91 90992 69896</h5>
            </div>
            <div className="accommodation-container">
                <h3>Near By Transportation</h3>
                <div className="accommodation-items">
                    {event.NearBytransportation.map((transportation, index) => (
                        <a
                            key={index}
                            href={transportation.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="accommodation-item"
                            style={{
                                backgroundImage: `url(${transportation.image})`,
                            }}
                        >
                            <div className="overlay">
                                <h4>{transportation.name}</h4>
                                <p><strong>Address:</strong> {transportation.address}</p>
                                {transportation.contact && (
                                    <p><strong>Contact:</strong> {transportation.contact}</p>
                                )}
                            </div>
                        </a>
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
                    loading="lazy"
                    title='Event location'
                    ></iframe>
            </div>

            <div className="qr-section">
                <h3>Scan QR Code to Register</h3>
                <img src={event.qrCode} alt="QR Code to reach the event location" className="qr-code" />
            </div>
        </div>
    );
};
