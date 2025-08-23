import React, { useState, useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./home.css";
import image1 from '../pages/Images/Manu Bhaker & Sarabjot Singh_Webslider1.jpg';
import logo1 from './Images/BCORE Logo.png';
import logo5 from './Images/Indian_Olympic_Association_logo.png'
import sponser1 from './Images/Hyperlab Logo.png';
import sponser2 from './Images/AISTS.png';
import page1 from './Slider/Page 1.jpg';
import page2 from './Slider/Page 2.jpg';
import page3 from './Slider/Page 3.jpg';
import page4 from './Slider/Page 4.jpg';
import Testimonials from "../components/Testimonials";
import Timeline from "../components/Timeline";
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
    ];
    const parseEndDate = (dateStr) => {
        const parts = dateStr.split('-').map(s => s.trim());
        const endPart = parts.length > 1 ? parts[1] : parts[0];

        // Remove suffixes like 'st', 'nd', 'rd', 'th'
        const cleanDateStr = endPart.replace(/(\d+)(st|nd|rd|th)/, '$1');
        return new Date(cleanDateStr);
    };

    const formatDate = (dateStr) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };

        if (dateStr.includes('-')) {
            const [start, end] = dateStr.split('-').map(s => s.trim());
            const cleanStart = start.replace(/(\d+)(st|nd|rd|th)/, '$1');
            const cleanEnd = end.replace(/(\d+)(st|nd|rd|th)/, '$1');

            const startDate = new Date(cleanStart + ' 2025');
            const endDate = new Date(cleanEnd);

            return `${startDate.getDate()}–${endDate.getDate()} ${endDate.toLocaleString('default', { month: 'short' })} ${endDate.getFullYear()}`;
        } else {
            const clean = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
            const date = new Date(clean);
            return date.toLocaleDateString('en-US', options);
        }
    };

    useEffect(() => {
        // Scroll to top when route changes
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs only once on mount
    return (
        <div>
            <div style={{ maxWidth: '1900px', margin: '0 auto' }}>
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={500}
                >
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2025/06/1.png" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2025/06/2-1.png" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2025/06/3.png" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2025/06/4.png" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2025/06/5.png" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2025/06/Hyperlab-MoU-Webslider.jpg" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2025/05/BCORE-Slider-2-scaled.jpg" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2025/05/BCORE-Slider-scaled.jpg" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2025/04/Slider-2-1.png" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2025/03/Visit-to-Rashtriya-Raksha-University-by-COE-in-Sports-Science-Sports-Management-TransStadia-Institute-Mumbai.png" alt="Slide 1" />
                    </div>
                    <div>
                        <img src={page1} alt="Slide 1" />
                    </div>
                    <div>
                        <img src={page2} alt="Slide 1" />
                    </div>
                    <div>
                        <img src={page3} alt="Slide 1" />
                    </div>
                    <div>
                        <img src={page4} alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2025/01/International-Olympic-Research-Conference-Guest-Banner-16.png" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2024/10/COB-Expo-1.jpg" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2024/09/Paralympics_Webslider1-1.jpg" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2024/10/Paralympics_Webslider2.jpg" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2024/10/Hockey_Webslider.jpg" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2024/10/Niraj-Chopra_Webslider.jpg" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2024/10/Swapnil-Kusale_Webslider.jpg" alt="Slide 1" />
                    </div>
                    <div>
                        <img src={image1} alt="Slide 1" />
                    </div>
                </Carousel>
            </div>
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
                        const eventEndDate = parseEndDate(event.date);
                        return eventEndDate >= new Date();
                    }).map((event) => (
                        <div className="event-card" key={event.id}>
                            <h3>{event.name}</h3>
                            <p>{formatDate(event.date)}</p>
                            {event.place && <p>{event.place}</p>}
                            {event.accomodation && <p><b>{event.accomodation}</b></p>}
                            <div className="event-buttons">
                                <Link to={`/event/${event.id}`} className="know-more-btn">
                                    Know More
                                </Link>
                                {event.id === 1 && (
                                    <>
                                        <Link to={`/event/${event.id}/schedule`} className="schedule-btn">
                                            View Schedule
                                        </Link>
                                        <a href="https://rru.ac.in/wp-content/uploads/2025/03/IORC-Booklet_-05-03-2025-10-MB_compressed.pdf" className="schedule-btn" target="_blank" rel="noopener noreferrer">
                                            IORC BOOKLET
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="partners-section">
                <h2 className="partners-title">Our Partners</h2>
                <div className="partners-grid">
                    <div className="partner-card">
                        <img src={logo5} alt="Tech Partner 2" />
                        <p>Knowledge Partner</p>
                    </div>
                    <div className="partner-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2JGH-vII_4QfdvFstjfErRy6CrqXIAcM0A&s" alt="Strategic Partner 2" />
                        <p>Merchandise Partner</p>
                    </div>
                    <div className="partner-card">
                        <img src={sponser1} alt="Strategic Partner 1" />
                        <p>Innovation and Technology Partner</p>
                    </div>
                    <div className="partner-card">
                        <img src={sponser2} alt="Strategic Partner 2" />
                        <p>Strategic Partner</p>
                    </div>
                    <div className="partner-card">
                        <img src="https://www.sportscom.in/wp-content/uploads/2021/11/logo-u1-1.png" alt="Strategic Partner 2" />
                        <p>Industry Partner</p>
                    </div>
                </div>
            </section>
            <section className="partners-section">
                <h2 className="partners-title">Our Sponsers</h2>
                <div className="partners-grid">
                    <div className="partner-card">
                        <img src="https://adcbank.coop/wp-content/uploads/2023/05/logo.png" alt="Strategic Partner 2" />
                        <p>Premium sponser</p>
                    </div>
                    <div className="partner-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvCZCgT7YBn7oemQ6DIZ1jbGwwW_-a3kT2g&s" alt="Strategic Partner 2" />
                        <p>Silver sponser</p>
                    </div>
                </div>
            </section>

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