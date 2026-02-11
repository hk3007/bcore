import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./home.css";
import logo1 from './Images/BCORE Logo.png';
import logo5 from './Images/Indian_Olympic_Association_logo.png'
import sponser1 from './Images/Hyperlab Logo.png';
import sponser2 from './Images/AISTS.png';
import ImageCarousel from "../components/ImageCarousel";
import PastSpeakers from "../components/PastSpeakers";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import GalleryCarousel from "../components/GalleryCarousel";
import WorkshopSection from "../components/eventsdetails/WorkshopSection";
import NadaLogo from "./Images/NADA Logo.png"
import IORC2 from "./Images/IORC2.png"
import LinkedInHoneycomb from "../components/LinkedInHoneycomb";
import BcoreWork from "../components/BentoEcosystem";


export const BCORE = () => {
    const events = [
        {
            id: 1,
            name: '1st International Olympic Research Conference',
            date: '27 - 30 January 2025',
            place: 'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India',
            description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
            accomodation: 'BCORE will Provide accommodation for OSRC and NOC Members and facilitate accommodation at a nominal cost for all the other participants.',
            brochure: 'https://rru.ac.in/wp-content/uploads/2024/11/RRU-BCORE-Olympic-research-Academy-Brochure.pdf',
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
            scheduleLink: '/event/3/schedule',
            description:
                "To address critical Olympic challenges in India's Olympic aspirations and develop long-term, sustainable solutions through integrated research, education, and governance",
            brochure:
              'https://drive.google.com/file/d/1166eN6ZlTAL8r2vHmNToTwFrqkXvZb_I/view?usp=sharing',
            workshop: {
                background: IORC2,

                // Header / Partner Text
                partnerLine1: "BCORE partners with",
                partnerOrg: "NADA",
                conferenceName: "2nd International Olympic Research Conference",
                venue: "Rashtriya Raksha University",

                // Logos
                leftLogo: logo1,
                rightLogo: NadaLogo,

                // Workshop Title (broken for styling control)
                titleLine1: "ANTI-DOPING &",
                titleLine2: "RESEARCH",
                titleLine3: "METHODOLOGY",
                titleLine4: "WORKSHOP",

                // Dates
                dates: "28–29 Jan 2026",
            },
        }
        ,
        {
            id: 4,
            name: 'BCORE Night Run',
            date: '10 January 2026',
            place: 'Gandhinagar, India',
        }
    ];

        // Countdown setup
    const countdownDate = new Date("27 January 2026 09:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    // Parse both start and end date
    const parseDateRange = (dateString) => {
        if (!dateString) return { start: new Date(0), end: new Date(0) };

        const rangeMatch = dateString.match(/(\d+)\s*-\s*(\d+)\s+([A-Za-z]+)\s+(\d{4})/);
        if (rangeMatch) {
            const [, startDay, endDay, month, year] = rangeMatch;
            const start = new Date(`${startDay} ${month} ${year}`);
            const end = new Date(`${endDay} ${month} ${year}`);
            return { start, end };
        }

        const cleaned = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");
        const singleDate = new Date(cleaned);
        return { start: singleDate, end: singleDate };
    };

    // Format date for display
    // Format date for display
    const formatDate = (dateString) => {
        const { start, end } = parseDateRange(dateString);
        const options = { day: "numeric", month: "long", year: "numeric" }; // month: long

        if (start.getTime() !== end.getTime()) {
            return `${start.toLocaleDateString("en-GB", options)} – ${end.toLocaleDateString("en-GB", options)}`;
        }
        return start.toLocaleDateString("en-GB", options);
    };

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true, // animation only once
    });
    }, []);

    return (
        <div>
             <Helmet>
                <title>Bharat Centre of Olympic Research & Education</title>
                <meta name="description" content="Home page of BCORE..." />
            </Helmet>
            <ImageCarousel />
            {/* Only render if there is time remaining in at least one unit */}
            {(timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0) && (
            <div className="banner-countdown vintage-theme">
                <div className="banner-left">
                <p>Get Ready for the 2nd International Olympic Research Conference</p>
                </div>
                <div className="banner-right">
                <div className="countdown-item">
                    <span>{timeLeft.days}</span>
                    <small>DAYS</small>
                </div>
                <div className="countdown-item">
                    <span>{timeLeft.hours}</span>
                    <small>HOURS</small>
                </div>
                <div className="countdown-item">
                    <span>{timeLeft.minutes}</span>
                    <small>MINUTES</small>
                </div>
                <div className="countdown-item">
                    <span>{timeLeft.seconds}</span>
                    <small>SECONDS</small>
                </div>
                </div>
            </div>
            )}


            <section className="bcore-prestige-section">
            <div className="bcore-prestige-container">
                
                {/* NEW: Integrated Logo Header (Hidden on Mobile) */}
                <div className="prestige-logo-row">
                    <img src={logo1} alt="International Olympic Committee" className="prestige-logo" />
                    <div className="logo-divider"></div>
                    <img src={logo5} alt="Indian Olympic Association" className="prestige-logo" />
                </div>

                <div className="prestige-split-layout">
                    {/* LEFT SIDE: The Achievement Metrics */}
                    <div className="prestige-left">
                        <div className="metric-card" data-aos="fade-right">
                            <span className="metric-num">71<sup>th</sup></span>
                            <span className="metric-label">Global OSRC Hub</span>
                            <div className="metric-progress-line"></div>
                        </div>
                        
                        <div className="metric-card" data-aos="fade-right" data-aos-delay="200">
                            <span className="metric-num">01<sup>st</sup></span>
                            <span className="metric-label">In India & S. Asia</span>
                            <div className="metric-progress-line"></div>
                        </div>

                        <div className="endorsement-badges">
                            <div className="badge-item">IOC Recognized</div>
                            <div className="badge-item">IOA Endorsed</div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: The Narrative Information */}
                    <div className="prestige-right" data-aos="fade-left">
                        <div className="content-glass-box">
                            <h3 className="announcement-title">A Landmark Where Olympism Meets Education</h3>
                            <p className="primary-text">
                                <span className="highlight-rru">Rashtriya Raksha University (RRU)</span> is honored 
                                to announce the establishment of the Bharat Centre for Olympic Research and Education (BCORE).
                            </p>
                            <p className="secondary-text">
                                This groundbreaking center positions India at the forefront of global Olympic scholarship, 
                                officially recognized by the <strong>International Olympic Committee (IOC) </strong> 
                                Olympic Studies Centre. 
                            </p>
                            <p className="secondary-text">
                                As an active member in the global network of academic Olympic Studies, BCORE contributes 
                                to the international discourse, fostering research and Olympic ideals across the region.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>

           {events
                .filter((event) => {
                    const { end } = parseDateRange(event.date);
                    return end >= new Date();
                })
                .map((event) => (
                    <WorkshopSection key={event.id} event={event.workshop} />
                ))}

            {events
                .filter((event) => {
                    const { end } = parseDateRange(event.date);
                    return end >= new Date();
                })
                .map((event) => (
            <div className="bcore-events">
            <h2 className="bcore-events__title">Upcoming Events</h2>
            <div className="bcore-events__grid">
                    <div className="bcore-event-card" key={event.id}>
                    <div className="bcore-event-card__content">
                        <h3 className="bcore-event-card__name">{event.name}</h3>
                        <p className="bcore-event-card__date">{formatDate(event.date)}</p>
                        {event.place && (
                        <p className="bcore-event-card__place">{event.place}</p>
                        )}
                        {event.accomodation && (
                        <p className="bcore-event-card__accommodation">
                            <b>{event.accomodation}</b>
                        </p>
                        )}
                    </div>

                    <div className="bcore-event-card__actions">
                        <Link to={`/event/${event.id}`} className="bcore-btn bcore-btn--gold">
                        Know More
                        </Link>
                        {event.scheduleLink && (
                            <Link 
                            to={`/event/${event.id}/schedule`}
                            className="bcore-btn bcore-btn--gold"
                            >
                            View Schedule
                            </Link>
                        )}
                        {event.schedule && (
                        <Link
                            to={`/event/${event.id}/schedule`}
                            className="bcore-btn bcore-btn--gold"
                        >
                            View Schedule
                        </Link>
                        )}

                        {event.brochure && (
                        <a
                            href={event.brochure}
                            className="bcore-btn bcore-btn--gold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {event.name.includes("IORC")
                            ? "IORC Booklet"
                            : "View Brochure"}
                        </a>
                        )}
                    </div>
                    </div>
            </div>
            </div>
            ))}
            <section className="bcore-overview-main">
             <div className="bcore-overview-v2">
                <div className="bcore-overview-container">
                    <div className="bcore-accent-blob"></div>
                    
                    <div className="bcore-content-wrapper">
                        <header className="bcore-header-area">
                            <span className="bcore-tag">Institutional Hub</span>
                            <h2>Overview</h2>
                            <div className="bcore-olympic-divider">
                                <span className="ring-blue"></span>
                                <span className="ring-yellow"></span>
                                <span className="ring-black"></span>
                                <span className="ring-green"></span>
                                <span className="ring-red"></span>
                            </div>
                        </header>

                        {/* NEW: Impact Numbers Section */}
                        <div className="bcore-stats-row">
                            <div className="stat-item">
                                <span className="stat-number">01</span>
                                <span className="stat-label">Promoting <br/>Olympism</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">02</span>
                                <span className="stat-label">Fostering <br/>Ideals</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">03</span>
                                <span className="stat-label">Academic <br/>Support</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">04</span>
                                <span className="stat-label">Sports <br/>Management</span>
                            </div>
                        </div>

                        <div className="bcore-text-card">
                            <div className="bcore-quote-mark">“</div>
                            <p>
                                The Bharat Centre for Olympic Research and Education (BCORE) at 
                                Rashtriya Raksha University aims to serve as a hub for disseminating 
                                research-based knowledge to scholars, professionals, sports personnel, 
                                coaches, and enthusiasts with a focus on promoting Olympism and 
                                fostering Olympic ideals within the country. 
                            </p>
                            <p>
                                This Centre will offer a wide array of resources and information 
                                to support academic pursuits, professional development, and sports 
                                management initiatives.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <BcoreWork />
            {/* 🏅 OLYMPIC CINEMATIC VIDEO SECTION */}
            <section className="oly-cinema-outer-wrapper">
                {/* Moving Olympic-Themed Background Objects */}
                <div className="oly-bg-shape oly-ring-blue"></div>
                <div className="oly-bg-shape oly-ring-yellow"></div>
                <div className="oly-bg-shape oly-ring-green"></div>
                <div className="oly-bg-shape oly-ring-red"></div>
                
                <div className="oly-cinema-container">
                    <header className="oly-cinema-header">
                        <h2 className="oly-main-title">
                            Watch <span className="oly-text-gradient">BCORE</span> in Action
                        </h2>
                        <p className="oly-subtitle">Experience the next generation of athletic performance</p>
                    </header>

                    <div className="oly-video-projection">
                        {/* The decorative "Hud" frame */}
                        <div className="oly-hud-frame">
                            <div className="oly-corner oly-tl"></div>
                            <div className="oly-corner oly-tr"></div>
                            <div className="oly-corner oly-bl"></div>
                            <div className="oly-corner oly-br"></div>
                        </div>
                        
                        <div className="oly-iframe-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/7Mhy_s0Nv7E?autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=1&loop=1&playlist=7Mhy_s0Nv7E"
                                title="BCORE Video"
                                frameBorder="0"
                                allow="autoplay; encrypted-media; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            {/* Tech Scanline Effect */}
                            <div className="oly-scanline"></div>
                        </div>
                    </div>
                </div>
            </section>
        <LinkedInHoneycomb />

        <GalleryCarousel />
        
        <PastSpeakers />
        {/* <PartnerSponsorSection showPartners={true} showSponsors={true} /> */}
        </div>
    );
}
