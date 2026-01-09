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

    // Countdown setup
    const countdownDate = new Date("27 January 2026 00:00:00").getTime();
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

    return (
        <div>
             <Helmet>
                <title>Bharat Centre of Olympic Research & Education</title>
                <meta name="description" content="Home page of BCORE..." />
            </Helmet>
            <ImageCarousel />
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


            <section className="logo-section-1">
                <div className="logos-1">
                    <img src={logo1} alt="Logo 3" className="logo-1" />
                    <img src={logo5} alt="Logo 5" className="logo-1" />
                </div>
            </section>

            <div className="content-container">
                <h4>
                Rashtriya Raksha University (RRU) is honored to announce the establishment of the Bharat Centre for Olympic Research and Education (BCORE), 
                a landmark initiative that positions India at the forefront of global Olympic scholarship. This groundbreaking center emerged as the 71st Olympic Studies Research Centre (OSRC) 
                globally and the first dedicated Olympic research facility in India and South Asia, officially recognized by the International Olympic Committee (IOC) Olympic Studies Centre and endorsed by the Indian Olympic Association (IOA). 
                BCORE is now an active member in the global network of academic Olympic Studies and Research Centres, contributing to the international discourse on Olympic studies and research.
                </h4>
            </div>

           {events
                .filter((event) => {
                    const { end } = parseDateRange(event.date);
                    return end >= new Date();
                })
                .map((event) => (
                    <WorkshopSection key={event.id} event={event.workshop} />
                ))}

            <div className="bcore-events">
            <h2 className="bcore-events__title">Upcoming Events</h2>



            <div className="bcore-events__grid">
                {events
                .filter((event) => {
                    const { end } = parseDateRange(event.date);
                    return end >= new Date();
                })
                .map((event) => (
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

                        {event.schedule && (
                        <Link
                            to={`/event/${event.id}/schedule`}
                            className="bcore-btn bcore-btn--blue"
                        >
                            View Schedule
                        </Link>
                        )}

                        {event.brochure && (
                        <a
                            href={event.brochure}
                            className="bcore-btn bcore-btn--red"
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
                ))}
            </div>
            </div>

            <section className="bcoreoverview">
                <h2>Overview</h2>
                <p>
                    The Bharat Centre for Olympic Research and Education (BCORE) at Rashtriya Raksha University aims to serve as a hub for disseminating research-based knowledge to scholars, professionals, sports personnel, coaches, and enthusiasts with a focus on promoting Olympism and fostering Olympic ideals within the country. This Centre will offer a wide array of resources and information to support academic pursuits, professional development, and sports management initiatives.
                </p>
            </section>

            <section className="bcore-sections">
            <h2>Explore BCORE</h2>
            <div className="sections-grid">
                <Link to="/olympicresearchgrants" className="section-card card-1" data-aos="fade-up">
                <h3>BCORE Grants</h3>
                </Link>
                <Link to="/HumanPerformanceLab" className="section-card card-2" data-aos="fade-up" data-aos-delay="100">
                <h3>Human Performance Lab</h3>
                </Link>
                <Link to="#" className="section-card card-3" data-aos="fade-up" data-aos-delay="200">
                <h3>Research Activities</h3>
                </Link>
                <Link to="/upcomingevents" className="section-card card-4" data-aos="fade-up" data-aos-delay="300">
                <h3>Events</h3>
                </Link>
                <Link to="#" className="section-card card-5" data-aos="fade-up" data-aos-delay="400">
                <h3>Newsletter</h3>
                </Link>
                <Link to="/careers" className="section-card card-6" data-aos="fade-up" data-aos-delay="500">
                <h3>Work with BCORE</h3>
                </Link>
            </div>
        </section>
        
        <GalleryCarousel />
        
        {/* BCORE Video Section */}
        <section className="bcore-video">
            <h2>Watch BCORE in Action</h2>
            <div className="video-wrapper">
                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/7Mhy_s0Nv7E?autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=1&loop=1&playlist=7Mhy_s0Nv7E"
                    title="BCORE Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
        <PastSpeakers />
        {/* <PartnerSponsorSection showPartners={true} showSponsors={true} /> */}
        </div>
    );
}
