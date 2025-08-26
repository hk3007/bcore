import React, { useState, useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./home.css";
import logo1 from './Images/BCORE Logo.png';
import logo5 from './Images/Indian_Olympic_Association_logo.png'
import sponser1 from './Images/Hyperlab Logo.png';
import sponser2 from './Images/AISTS.png';
import Testimonials from "../components/Testimonials";
import Timeline from "../components/Timeline";
import ImageCarousel from "../components/ImageCarousel";
import PartnerSponsorSection from "../components/PartnerSponsorSection";
export const BCORE = () => {
    const events = [
        {
            id: 1,
            name: '1st International Olympic Research Conference',
            date: '27 - 30 January 2025',
            place: 'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India',
            description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
            accomodation: 'BCORE will Provide accommodation for OSRC and NOC Members and facilitate accommodation at a nominal cost for all the other participants.',
            brochure: 'http://rru.ac.in/wp-content/uploads/2024/11/RRU-BCORE-Olympic-research-Academy-Brochure.pdf',
            registrationLink: 'https://forms.eduqfix.com/bcoreregof/add',
            sponser: [sponser1,sponser2]
        },
        {
            id: 2,
            name: 'SPORTS EXCELLENCE SEMINAR',
            date: '23rd June 2025',
            place: 'Rashtriya Raksha University, Gandhinagar, India',
            description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
        },
        {
            id: 3,
            name: '2nd International Olympic Research Conference',
            date: '27 - 30 January 2026',
            place: 'Rashtriya Raksha University, Gandhinagar, India',
            description:
                "To address critical Olympic challenges in India's Olympic aspirations and develop long-term, sustainable solutions through integrated research, education, and governance",
            brochure:
              'https://rru.ac.in/wp-content/uploads/2025/08/2nd-IORC_Booklet.pdf',
        }
    ];

// Parse both start and end date
const parseDateRange = (dateString) => {
  if (!dateString) return { start: new Date(0), end: new Date(0) };

  // Handle range "27 - 30 January 2026"
  const rangeMatch = dateString.match(/(\d+)\s*-\s*(\d+)\s+([A-Za-z]+)\s+(\d{4})/);
  if (rangeMatch) {
    const [, startDay, endDay, month, year] = rangeMatch;
    const start = new Date(`${startDay} ${month} ${year}`);
    const end = new Date(`${endDay} ${month} ${year}`);
    return { start, end };
  }

  // Handle single date "23rd June 2025" → remove suffix like 'st', 'nd', 'rd', 'th'
  const cleaned = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const singleDate = new Date(cleaned);
  return { start: singleDate, end: singleDate };
};

// Display function
const formatDate = (dateString) => {
  const { start, end } = parseDateRange(dateString);
  const options = { day: "numeric", month: "short", year: "numeric" };

  if (start.getTime() !== end.getTime()) {
    return `${start.toLocaleDateString("en-GB", options)} – ${end.toLocaleDateString("en-GB", options)}`;
  }
  return start.toLocaleDateString("en-GB", options);
};


    useEffect(() => {
        // Scroll to top when route changes
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs only once on mount
    return (
        <div>
            <ImageCarousel />
            <div className="marquee-container">
                <div className="marquee-wrapper">
                    <div className="marquee">
                        <a
                            href={'#'}
                            style={{ color: '#fff', textDecoration: 'none' }}
                        >
                            SPORTS EXCELLENCE SEMINAR |
                        </a>
                         <a
                            href={'https://rru.ac.in/wp-content/uploads/2025/06/Application-form-Olympic-Grant-BCORE.pdf'}
                            style={{ color: '#fff', textDecoration: 'none' }}
                        >
                            | Olympic Research Grants 2025-26
                        </a>
                    </div>
                </div>
            </div>
            <section className="logo-section-1">
                <div className="logos-1">
                    <img src={logo1} alt="Logo 3" className="logo-1" />
                    <img src={logo5} alt="Logo 5" className="logo-1" />
                    {/* <img src={logo3} alt="Logo 4" className="logo-1" /> */}
                </div>
            </section>
            <div className="content-container">
                <h4>
                Rashtriya Raksha University (RRU) is honored to announce the establishment of the Bharat Centre for Olympic Research and Education (BCORE), 
                a landmark initiative that positions India at the forefront of global Olympic scholarship. This groundbreaking center emerged as the 71st Olympic Studies Research Centre (OSRC) 
                globally and the first dedicated Olympic research facility in India and South Asia, officially recognized by the International Olympic Committee (IOC) Olympic Studies Centre and endorsed by the Indian Olympic Association (IOA). 
                B-CORE is now an active member in the global network of academic Olympic Studies and Research Centres, contributing to the international discourse on Olympic studies and research.
                </h4>
            </div>
                <div className="events-page">
                <h2 className="events-title">Upcoming Events</h2>
                <div className="events-grid">
                {events.filter((event) => {
                const { end } = parseDateRange(event.date);
                return end >= new Date();
                }).map((event) => (
                <div className="event-card" key={event.id}>
                    <h3>{event.name}</h3>
                    <p>{formatDate(event.date)}</p>   {/* ✅ fixed date display */}
                    {event.place && <p>{event.place}</p>}
                    {event.accomodation && <p><b>{event.accomodation}</b></p>}

                    <div className="event-buttons">
                    <Link to={`/event/${event.id}`} className="know-more-btn">
                        Know More
                    </Link>

                    {event.schedule && (
                        <Link to={`/event/${event.id}/schedule`} className="schedule-btn">
                        View Schedule
                        </Link>
                    )}

                    {event.brochure && (
                        <a
                        href={event.brochure}
                        className="schedule-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {event.name.includes("IORC") ? "IORC Booklet" : "View Brochure"}
                        </a>
                    )}
                    </div>
                </div>
                ))}
                </div>
            </div>
            <PartnerSponsorSection showPartners={true} showSponsors={true} />
            <section className="overview">
                <h2>Overview</h2>
                <p>
                    The Bharat Centre for Olympic Research and Education (B-CORE) at Rashtriya Raksha University aims to serve as a hub for disseminating research-based knowledge to scholars, professionals, sports personnel, coaches, and enthusiasts with a focus on promoting Olympism and fostering Olympic ideals within the country. This Centre will offer a wide array of resources and information to support academic pursuits, professional development, and sports management initiatives.
                </p>
            </section>
            <section className="bcore-overview">
                <div className="text-left">
                    <h2>BCORE's Unique Specialization</h2>
                    <p>
                        BCORE's unique area of specialization lies in the nuanced intersection of Olympic policies and international relations, where it contributes to advancing scholarly understanding and shaping policy discourse in this critical domain. Furthermore, BCORE actively champions the cause of sports for peace, leveraging the universal appeal of sports to bridge divides and promote harmony on both national and global scales.
                    </p>
                </div>
                <img src="https://www.asiaeducationreview.com/uploaded_images/newstransfer/xkpa2Olympic0.jpg" alt="Olympic Policies" className="bcore-image" />
                <div className="text-right">
                    <h2>BCORE's Outreach and Impact</h2>
                    <p>
                        Notably, BCORE, stationed in pioneering national security and police university of India, it extends its outreach to internal security forces, imparting the principles of Olympism to personnel within these essential institutions. Through tailored programs and training initiatives, BCORE initiates a pivotal role in enhancing the physical and mental resilience of security personnel, thereby contributing to the broader goal of national security and well-being.
                    </p>
                </div>
            </section>
            <Timeline />
            <Testimonials />
        </div>
    );
}