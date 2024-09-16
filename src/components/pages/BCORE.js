import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./home.css";
import image1 from '../pages/Images/Manu Bhaker & Sarabjot Singh_Webslider1.jpg';
import image2 from '../pages/Images/ANTI DOPING IN SPORTS ETHICAL AND SCIENTIFIC PERSPECTIVES.jpg';
import Testimonial1 from '../pages/Images/Praskash Singh Parihar.png';
import Testimonial2 from '../pages/Images/Shubham Dhaka.jpg';
import Testimonial3 from '../pages/Images/Praveen Kumar.jpg';
import Testinomial4 from '../pages/Images/Yash Sharma.jpg';


export const BCORE = () => {
    const newsArticles = [
        {
            id: 1,
            imgSrc: 'https://cdn.wionews.com/sites/default/files/styles/story_page/public/2024/04/17/425699-olympic-studies-and-research-centre.png?imwidth=400',
            alt: 'RRU set up India\'s first Olympic center',
            source: 'WION',
            date: '17 April 2024',
            title: 'RRU set up India\'s first Olympic center',
            link: 'https://www.wionews.com/sports/indias-first-olympic-studies-and-research-centre-to-open-in-gujarat-712256'
        },
        {
            id: 2,
            imgSrc: 'https://www.newzdaddy.com/wp-content/uploads/2024/04/From-Vision-to-Reality-The-Inauguration-of-B-CORE-at-RRU-1.png',
            alt: 'From Vision to Reality: The Inauguration of B-CORE at RRU',
            source: 'NewzDaddy',
            date: '16 April 2024',
            title: 'From Vision to Reality: The Inauguration of B-CORE at RRU',
            link: 'https://www.newzdaddy.com/from-vision-to-reality-the-inauguration-of-b-core-at-rru/'
        },
        {
            id: 3,
            imgSrc: 'https://images.bhaskarassets.com/webp/thumb/512x0/web2images/960/2024/04/16/local-news-2022730-x-54806new96_1713274503.jpg',
            alt: 'રાષ્ટ્રીય રક્ષા યુનિવર્સિટીમાં BCORE સેન્ટર શરૂ થશે, કોઈપણ ઉંમરના વ્યક્તિ ઓલિમ્પિક પર અભ્યાસ અને રિસર્ચ કરી શકશે',
            source: 'Divya Bhaskar',
            date: '17 April 2024',
            title: 'રાષ્ટ્રીય રક્ષા યુનિવર્સિટીમાં BCORE સેન્ટર શરૂ થશે, કોઈપણ ઉંમરના વ્યક્તિ ઓલિમ્પિક પર અભ્યાસ અને રિસર્ચ કરી શકશે',
            link: 'https://www.divyabhaskar.co.in/local/gujarat/ahmedabad/news/a-bcore-center-will-be-launched-at-the-national-defense-university-where-people-of-any-age-can-study-and-research-on-the-olympics-132884787.html?utm_campaign=132884787&utm_medium=sharing'
        },
        {
            id: 4,
            imgSrc: 'https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/06/26122741/Bharat-Centre-of-Olympic-Research-and-Education-launched.png',
            alt: 'Bharat Centre of Olympic Research and Education launched',
            source: 'Adda 24/7 Current Affairs',
            date: '26 June 2024',
            title: 'Bharat Centre of Olympic Research and Education launched',
            link: 'https://currentaffairs.adda247.com/bharat-centre-of-olympic-research-and-education-launched/'
        },
        {
            id: 5,
            imgSrc: 'https://images.indianexpress.com/2024/04/COLLEGE-1-1-1_d56297.jpeg?w=640',
            alt: 'Specialised centre for research, sports programmes at RRU',
            source: 'The Indian Express',
            date: '17 April 2024',
            title: 'Specialised centre for research, sports programmes at RRU',
            link: 'https://indianexpress.com/article/cities/ahmedabad/specialised-centre-for-research-sports-programmes-at-rru-9274342/'
        },
        {
            id: 6,
            imgSrc: 'https://static.pib.gov.in/WriteReadData/userfiles/image/DSC07473(1)XVCK.JPG',
            alt: 'Gujarat to have Bharat Centre for Olympic Research & Education (BCORE) at RRU, Gandhinagar',
            source: 'DeshGujarat',
            date: '22 June 2024',
            title: 'Gujarat to have Bharat Centre for Olympic Research & Education (BCORE) at RRU, Gandhinagar',
            link: 'https://deshgujarat.com/2024/06/22/gujarat-to-have-bharat-centre-for-olympic-research-education-bcore-at-rru-gandhinagar/'
        },
        {
            id: 7,
            imgSrc: 'https://images.indianexpress.com/2024/06/BECORE.jpg?w=640',
            alt: 'BCORE launched to give wings to India’s 2036 Olympic dreams',
            source: 'The Indian EXPRESS',
            date: '24 June 2024',
            title: 'BCORE launched to give wings to India’s 2036 Olympic dreams',
            link: 'https://indianexpress.com/article/cities/ahmedabad/bcore-launched-to-give-wings-to-indias-2036-olympic-dreams-9410681/'
        },
        {
            id: 8,
            imgSrc: 'https://staticg.sportskeeda.com/editor/2024/06/fc8f7-17192329134062-1920.jpg',
            alt: "IOA launches BCORE to fuel India's 2036 Olympics Dreams",
            source: 'sportskeeda',
            date: '24 June 2024',
            title: "IOA launches BCORE to fuel India's 2036 Olympics Dreams",
            link: 'https://www.sportskeeda.com/summer-olympics/news-ioa-launches-bcore-fuel-india-s-2036-olympics-dreams'
        },
        {
            id: 9,
            imgSrc: 'https://static.toiimg.com/thumb/msid-47529300,imgsize-110164,width-400,height-225,resizemode-72/47529300.jpg',
            alt: "RRU to set up India’s first Olympics study centre",
            source: 'The Times of India',
            date: '17 April 2024',
            title: "RRU to set up India’s first Olympics study centre",
            link: 'https://timesofindia.indiatimes.com/city/ahmedabad/rru-to-set-up-indias-first-olympics-study-centre/articleshow/109359576.cms'
        },
        {
            id: 10,
            imgSrc: 'https://thebridge.in/h-upload/2024/06/22/54348-untitled-design-21.webp',
            alt: "RRU to inaugurate the Bharat Centre for Olympic Research and Education",
            source: 'THE BRIDGE',
            date: '22 June 2024',
            title: "RRU to inaugurate the Bharat Centre for Olympic Research and Education",
            link: 'https://thebridge.in/olympics/rru-inaugurate-bharat-centre-for-olympic-research-47932'
        },
        {
            id: 11,
            imgSrc: 'https://static.pib.gov.in/WriteReadData/userfiles/image/L2,P4SHWB.JPG',
            alt: "Rashtriya Raksha University inaugurated Bharat Centre of Olympic Research and Education (BCORE) on International Olympic Day",
            source: 'PIB',
            date: '23 June 2024',
            title: "Rashtriya Raksha University inaugurated Bharat Centre of Olympic Research and Education (BCORE) on International Olympic Day",
            link: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2028130'
        },
        {
            id: 12,
            imgSrc: 'https://static.toiimg.com/thumb/msid-47529300,imgsize-110164,width-400,height-225,resizemode-72/47529300.jpg',
            alt: "Oly research centre a boost to sports in India, says Usha",
            source: 'The Times of India',
            date: '24 June 2024',
            title: "Oly research centre a boost to sports in India, says Usha",
            link: 'https://timesofindia.indiatimes.com/city/ahmedabad/bharat-centre-of-olympic-research-and-education-inaugurated-at-rashtriya-raksha-university-by-pt-usha/articleshow/111214927.cms'
        },
        {
            id: 13,
            imgSrc: 'https://static.theprint.in/wp-content/uploads/2023/06/theprint_default_image_new-696x392.jpg?compress=true&quality=80&w=800&dpr=1.3',
            alt: "Bharat Centre of Olympic Research and Education launched; momentous occasion for sports, says Usha",
            source: 'ThePrint',
            date: '23 June 2024',
            title: "Bharat Centre of Olympic Research and Education launched; momentous occasion for sports, says Usha",
            link: 'https://theprint.in/sport/bharat-centre-of-olympic-research-and-education-launched-momentous-occasion-for-sports-says-usha/2143763/'
        },
        {
            id: 14,
            imgSrc: 'https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1719177026245.jpg-org',
            alt: "Bharat Centre Of Olympic Research & Education Launched",
            source: 'Ahmedabad Mirror',
            date: '24 June 2024',
            title: "Bharat Centre Of Olympic Research & Education Launched",
            link: 'https://www.ahmedabadmirror.com/bharat-centre-of-olympic-research--education-launched/81869774.html'
        },
        {
            id: 15,
            imgSrc: 'https://www.newsasn.com/sites/default/files/styles/article_detail/public/2024-06/425699-olympic-studies-and-research-centre.jpeg?itok=J4bP2c-p',
            alt: "India’s first Olympic Studies and Research Centre to open in Gujarat",
            source: 'news asn',
            date: '26 June 2024',
            title: "India’s first Olympic Studies and Research Centre to open in Gujarat",
            link: 'https://www.newsasn.com/node/22276'
        },
        {
            id: 16,
            imgSrc: 'https://images.cnbctv18.com/hindicnbctv18/2024/04/Olympic-research-and-education-centre-1.jpg?impolicy=website&width=550&height=300',
            alt: "गांधीनगर में बनेगा साउथ ईस्ट एशिया का पहला ओलंपिक रिसर्च एंड एजुकेशन सेंटर",
            source: 'CNBC AWAAZ',
            date: '16 April 2024',
            title: "गांधीनगर में बनेगा साउथ ईस्ट एशिया का पहला ओलंपिक रिसर्च एंड एजुकेशन सेंटर",
            link: 'https://hindi.cnbctv18.com/photos/india/south-east-asia-first-olympic-research-and-education-centre-in-gandhinagar-104939.htm'
        }
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
    }, []);
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
                        <img src={image1} alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2024/05/Olympic-Panorama-Flyer_page.jpg" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="https://rru.ac.in/wp-content/uploads/2024/04/Website-Slider.jpg" alt="Slide 2" />
                    </div>
                    <div>
                        <img src={image2} alt="Slide 3" />
                    </div>
                </Carousel>
            </div>
            <div className="marquee-container">
                <marquee className="marquee">
                    <span>Latest News: Olympic events update... | New research papers published... | Upcoming events... | Special announcements...</span>
                </marquee>
            </div>

            <div className="content-container">
                <h4>
                    Rashtriya Raksha University (RRU) is proud to announce the upcoming establishment of the Bharat Centre for Olympic Research and Education (B-CORE), slated to open in June 2024. This Centre, is set to be the world’s 71st and India’s & South Asia’s premier facility of its kind, has received official recognition from the International Olympic Committee (IOC) with the official endorsement of the Indian Olympic Association (IOA).
                </h4>
            </div>
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
            <div className="news-section">
                <div className="section-title">
                    <h1>In The News</h1>
                </div>
                <div className="news-container">
                    {newsArticles.map((article) => (
                        <div key={article.id} className="news-item">
                            <div className="news-img">
                                <img src={article.imgSrc} alt={article.alt} />
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <small><i className="far text-primary me-2"></i>{article.source}</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>&nbsp;{article.date}</small>
                                </div>
                                <h4>{article.title}</h4>
                                <a href={article.link} target="_blank" rel="noopener noreferrer">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-4 mx-auto">
                    <h2 className="fw-bold text-primary text-uppercase">Testimonial</h2>
                    </div>
                    <div className="testimonial-carousel">
                    {testimonials.map((testimonial, index) => (
                        <div
                        key={index}
                        className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
                        >
                        <div className="testimonial-header">
                            <img
                            className="testimonial-img"
                            src={testimonial.image}
                            alt={testimonial.name}
                            />
                            <div className="testimonial-info">
                            <h4 className="text-primary mb-1">{testimonial.name}</h4>
                            <small className="text-uppercase">{testimonial.profession}</small>
                            </div>
                        </div>
                        <div className="testimonial-body">
                            {testimonial.feedback}
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}