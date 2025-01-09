import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./home.css";
import image1 from '../pages/Images/Manu Bhaker & Sarabjot Singh_Webslider1.jpg';
import Testimonial1 from '../pages/Images/Praskash Singh Parihar.png';
import Testimonial2 from '../pages/Images/Shubham Dhaka.jpg';
import Testimonial3 from '../pages/Images/Praveen Kumar.jpg';
import Testinomial4 from '../pages/Images/Yash Sharma.jpg';
import logo1 from './Images/BCORE Logo.png';
import logo5 from './Images/Indian_Olympic_Association_logo.png'
import sponser1 from './Images/Hyperlab Logo.png';
import sponser2 from './Images/AISTS.png';
import broucher from './Broucher/Broucher.pdf';
export const BCORE = () => {
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
                'The academy welcomes attendees from India and around the globe, fostering international collaboration and knowledge sharing',
                'BCORE will facilitate accommodation and local support for all participants throughout the academy',
                'Participants will enjoy a guided tour of the heritage city of Ahmedabad, offering insights into Indian culture and history',
                "Attendees will have the unique opportunity to visit the Statue of Unity and Vibrant Gujarat Global Summit, India's premier event for collaboration and idea exchange across various sectors.",
            ],
            accomodation: 'BCORE will Provide accommodation for OSRC and NOC Members and facilitate accommodation at a nominal cost for all the other participants.',
            brochure: 'http://rru.ac.in/wp-content/uploads/2024/11/RRU-BCORE-Olympic-research-Academy-Brochure.pdf',
            registrationLink: 'https://forms.eduqfix.com/bcoreregof/add',
            sponser: [sponser1,sponser2]
        },
    ];
    const testimonials = [
        {
          name: "Praskash Singh Parihar",
          profession: "Profession",
          image: [Testimonial1],
          feedback: "The program's multidisciplinary approach, combining sports science, history, sociology, and economics, was highly informative and enriching. The lectures were well-structured, and the expertise of the instructors and guest speakers was exceptional. Interactive discussions and case studies greatly enhanced the learning experience."
        },
        {
          name: "Praveen Kumar",
          profession: "Football Coach",
          image: [Testimonial3],
          feedback: "As a participant in online certificate program ‘Olympic Panorama: Multidisciplinary Research and Education’, this program offered a deep dive into various dimensions of the Olympics, like what does it mean to be an ‘Olympian’. I appreciated the expertise of the instructors and guest speakers who shared their knowledge and insights throughout the program."
        },
        {
          name: "Shubham Dhaka",
          profession: "PhD Scholar",
          image: [Testimonial2],
          feedback: "The certification program comprising five insightful sessions was very comprehensive, covering almost every aspect of the Olympics, special focus on Olympic-related research was particularly impressive, providing invaluable insights into the strategic role of the Olympics in international relations, economic impacts, and educational values. It will help and motivate participants for future Olympic studies and research. Deep gratitude for this enriching and valuable opportunity."
        },
        {
          name: "Yash Sharma",
          profession: "Commonwealth Karate Champion",
          image: [Testinomial4],
          feedback: "B-CORE, a center dedicated to Olympic research and affiliated with the International Olympic Committee. B-CORE has been transformative, offering invaluable insights into the profound impact of sports diplomacy and international relations on the global stage. The exposure to Olympic values and the opportunity to contribute to discussions on sports governance have prepared me to actively participate in global discourse."
        }
      ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
    
        return () => clearInterval(interval);
    }, [testimonials.length]);

    
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
                            href={broucher}
                            style={{ color: '#fff', textDecoration: 'none' }}
                        >
                            1st International Olympic Research Conference
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
                Rashtriya Raksha University (RRU) is honored to announce the establishment of the Bharat Centre for Olympic Research and Education (B-CORE), 
                a landmark initiative that positions India at the forefront of global Olympic scholarship. This groundbreaking center emerged as the 71st Olympic Studies Research Centre (OSRC) 
                globally and the first dedicated Olympic research facility in India and South Asia, officially recognized by the International Olympic Committee (IOC) Olympic Studies Centre and endorsed by the Indian Olympic Association (IOA). 
                B-CORE is now an active member in the global network of academic Olympic Studies and Research Centres, contributing to the international discourse on Olympic studies and research.
                </h4>
            </div>
            <div className="events-page">
                <h2 className="events-title">Upcoming Events</h2>
                <div className="events-grid">
                    {events.map((event) => (
                        <div className="event-card" key={event.id}>
                            <h3>{event.name}</h3>
                            <p>{event.date}</p>
                            <p>{event.place}</p>
                            <p><b>{event.accomodation}</b></p>
                            <Link to={`/event/${event.id}`} className="know-more-btn">Know More</Link>
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
                        <img src={sponser1} alt="Strategic Partner 1" />
                        <p>Innovation and Technology Partner</p>
                    </div>
                    <div className="partner-card">
                        <img src={sponser2} alt="Strategic Partner 2" />
                        <p>Strategic Partner</p>
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
            <h1 class="title">OLYMPIC TIMELINE</h1>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">776 BC</div>
                    <div class="timeline-content">
                        <h3>First Ancient Olympics</h3>
                        <p>The first recorded Olympic Games are held in Olympia, Greece, as part of a religious festival honoring Zeus.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">AD 393</div>
                    <div class="timeline-content">
                        <h3>End of Ancient Olympics</h3>
                        <p>Roman Emperor Theodosius I bans all pagan festivals, marking the end of the games.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">1850</div>
                    <div class="timeline-content">
                        <h3>Wenlock Olympian Games</h3>
                        <p>The Wenlock Olympian Games were founded by Dr. William Penny Brookes in Much Wenlock, England.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">1896</div>
                    <div class="timeline-content">
                        <h3>First Modern Olympics</h3>
                        <p>The inaugural Modern Olympic Games are held in Athens, featuring 241 male athletes from 14 countries.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">1924</div>
                    <div class="timeline-content">
                        <h3>First Winter Olympics</h3>
                        <p>The inaugural Winter Olympic Games are held in Chamonix, France, featuring events like skiing and ice hockey.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">1960</div>
                    <div class="timeline-content">
                        <h3>First Televised Olympics</h3>
                        <p>The Rome Games are the first to be fully televised, increasing global viewership.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">1980</div>
                    <div class="timeline-content">
                        <h3>Moscow Boycott</h3>
                        <p>The United States and several other countries boycott the Moscow Games in protest of the Soviet invasion of Afghanistan.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">2000</div>
                    <div class="timeline-content">
                        <h3>Sydney Olympics</h3>
                        <p>The Sydney Olympics are hailed as the "best ever" by IOC President Juan Antonio Samaranch.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">2021</div>
                    <div class="timeline-content">
                        <h3>Tokyo 2020 (Held in 2021)</h3>
                        <p>The Tokyo Games are postponed due to COVID-19 and held without spectators. New sports like skateboarding are introduced.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">2024</div>
                    <div class="timeline-content">
                        <h3>Upcoming: Paris 2024</h3>
                        <p>Paris will host the Summer Olympics, marking 100 years since it last hosted the Games.</p>
                    </div>
                </div>
            </div>            
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-4 mx-auto">
                        <h2 className="fw-bold text-primary text-uppercase">Testimonials</h2>
                    </div>
                    <div className="testimonial-carousel">
                        <button className="carousel-control-prev" onClick={testimonials}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        {testimonials.map((testimonial, index) => (
                            <div
                            key={index}
                            className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
                            >
                                <div className="testimonial-card">
                                    <div className="testimonial-header">
                                        <img
                                        className="testimonial-img"
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        />
                                        <div className="testimonial-info">
                                            <h4 className="text-dark mb-1">{testimonial.name}</h4>
                                            <small className="text-muted">{testimonial.profession}</small>
                                        </div>
                                    </div>
                                    <div className="testimonial-body">
                                        <p>{testimonial.feedback}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button className="carousel-control-next" onClick={testimonials}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}