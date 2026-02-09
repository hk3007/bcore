import React, { useEffect } from "react";
import "./PastSpeakers.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMPORT YOUR LOCAL IMAGES
import Speaker from "../pages/Images/Yoonkyu Song.png";
import speaker1 from "../pages/Images/Col Anant Kumar.png";
import speaker2 from "../pages/Images/Lambis.png";
import speaker3 from "../pages/Images/Maria Bogner.png";

const PastSpeakers = () => {
  const speakers = [
    { id: 1, name: "Mr. Lambis Konstantinidis, Executive Director, Planning Paris 2024 Games, France", about: "Mr. Lambis Konstantinidis is the Executive Director of Planning and Coordination for the Paris 2024 Olympic and Paralympic Games.", img: speaker2 },
    { id: 2, name: "Ms. Maria Bogner, Head of the International Olympic Studies Centre", about: "Ms. Maria Bogner oversees research and educational initiatives focused on the Olympic Movement.", img: speaker3 },
    { id: 3, name: "Mr. Prasanth Shantakumaran, Head Sports Sector, KPMG, India", about: "He leads the Digital Engineering and Quality (DEQ) practice as well as the Sports sector at KPMG India.", img: "https://kpmg.com/content/dam/kpmgsites/in/images/2020/12/prasanth-shanthakumaran.jpg" },
    { id: 4, name: "Mr Pranshu Jain, Executive Director, Sports Advisory, PwC India", about: "Executive Director at PwC India with experience in Deloitte and expertise in sports management.", img: "https://media.licdn.com/dms/image/v2/D4D03AQENRAoXbG35vQ/profile-displayphoto-scale_400_400/B4DZl3qPv_IYAg-/0/1758649188502?e=1766620800&v=beta&t=Etl2dEqWZIfBGuxJ0VgTglX3S4eiXmcWYYRYX3jf0yw" },
    { id: 5, name: "Prof. Wolfgang Maennig, University of Hamburg, Economics, Germany", about: "Distinguished academic specializing in urban and sports economics.", img: "https://assets.rrz.uni-hamburg.de/instance_assets/fakws/14447474/maennig-640x361-75e48055c7df6d3b79ce8663e6e7ae0301cfcc41.jpg" },
    { id: 6, name: "Prof. Rajendra Shrivastav, Novartis Professor of Marketing Strategy", about: "Professor of Marketing Strategy and Innovation at the Indian School of Business.", img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Professor-Rajendra-Srivastava-Wiki.jpg" },
    { id: 7, name: "Christian Klaue, Director Corporate Communications & Public Affairs, IOC", about: "Director at the International Olympic Committee since 2019.", img: "https://img.olympics.com/images/image/private/t_original_380/f_auto/primary/n6bepq6tdifn0jkpnvca" },
    { id: 8, name: "Prof Mahesh Panchagnula, Professor of Applied Mechanics, IIT Madras", about: "Specializes in fluid dynamics, atomization, and spray nozzle design.", img: "https://home.iitm.ac.in/mvp/img/prof-img.png" },
    { id: 9, name: "Mr. Ramesh Kumar, CEO, IIT Madras – Center of Excellence in Sports Science & Analytics", about: "Leads innovation in sports technology and analytics at IIT Madras.", img: "https://www.iitm.ac.in/sites/default/files/styles/img_m4/public/happenings/press_release/pressrelease19_02_2024_13_23.jpg?itok=oTDv7sNE" },
    { id: 10, name: "Mr Cedric Vanden Bogaerde, Executive Director, AISTS", about: "Leads AISTS in global sports innovation, education and research.", img: "https://www.smartcitiesandsport.org/wp-content/uploads/2024/11/Cedric_Vanden_Bogaerde_250x250.png" },
    { id: 11, name: "Ms. Urvi Khasnis, Researcher from Scotland OSRC", about: "Researcher contributing to Olympic Movement academic studies.", img: "https://www.research.ed.ac.uk/files-asset/311454898/Urvi_Photo_GMP.jpg" },
    { id: 12, name: "Mr. Dheeraj Malhotra, General Manager, BCCI", about: "Manages cricket operations and development initiatives at BCCI.", img: "https://fifacies.pimsr.ac.in/wp-content/uploads/2021/01/Dheeraj_Malhotra.jpg" },
    { id: 13, name: "Mr. Udit Seth, Founder & MD, Transtadia", about: "Founder of TransStadia, known for multi-use sports infrastructure.", img: "https://ekaclub.net/wp-content/uploads/2023/Udit-Photo.jpg.webp" },
    { id: 14, name: "Mr. Ravneet Gill, CEO, AISTS India", about: "CEO of AISTS India.", img: "https://media.licdn.com/dms/image/v2/D4D03AQGjYjgUFhgT6A/profile-displayphoto-scale_400_400/B4DZh0YvkdH4Ak-/0/1754299301451?e=2147483647&v=beta&t=IZKq_TNyySUqvF4bXsaERcQiej5uUPTrJxa8XdR8ehA" },
    { id: 15, name: "Ms. Isha Rathee, Architect, Populous", about: "Principal Architect involved in Narendra Modi Stadium design.", img: "https://populous.com/uploads/2018/01/Isha-Rathee_005_BW_500X500_web.jpg" },
    { id: 16, name: "Mr. Yoonkyu Song, PhD Candidate, Willibald Gebhardt Institute e.V.", about: "Researcher working on sports science and Olympic studies.", img: Speaker },
    { id: 17, name: "Mr. Chris Jenkins OBE, President, Commonwealth Games Federation", about: "Provides strategic leadership for the Commonwealth Games Federation.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MnfYs2psF2WqlMuinrBymeUiVunyuVALkA&s" },
    { id: 18, name: "Shri Ajay Patel, Senior Vice-President, Indian Olympic Association", about: "Key contributor to India's Olympic sports promotion.", img: "https://pbs.twimg.com/profile_images/1626188722361466881/-JVeAGRv_400x400.jpg" },
    { id: 19, name: "Shri Adille Sumariwalla, Vice President, World Athletics", about: "Former Olympian and leader of Athletics Federation of India.", img: "https://static.toiimg.com/thumb/msid-70393719,width-400,resizemode-4/70393719.jpg" },
    { id: 20, name: "Nuria Puig Brandes, Head of University Relations - Olympic Studies Centre", about: "Leads major IOC educational initiatives globally.", img: "https://i0.wp.com/www.eoaolympic.org/wp-content/uploads/2024/10/IMG_5886.jpg?resize=1200%2C800&ssl=1" },
    { id: 21, name: "Praveen Nahar, Former Director NID, India", about: "Former Director of NID with 23+ years in design education.", img: "https://nid.edu/public/image/people/xO5xPBl5WK.jpg" },
    { id: 22, name: "Mr. Ramkumar Subramian, Director, Collage Design", about: "Director focusing on innovative design strategies.", img: "https://collagedesign.com/wp-content/uploads/2023/12/Ram-S-With-Backgound-Final-2048x1365.jpg" },
    { id: 23, name: "Prof (Dr.) Mariia Bulatova, President, Olympic Academy of Ukraine", about: "Promotes Olympic education and academic research.", img: "https://rhineruhr2025.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn9ofama2kqg3%2F6tG68nCfZvFHtSwazMXe2a%2Ff2f063b451a4dc7ca601821f416abdbf%2FBulatova.jpg%3Ffm%3Dwebp&w=3840&q=75" },
    { id: 24, name: "Honorary Professor Ian Jobling, Queensland Centre for Olympic & Paralympic Studies", about: "Provides academic expertise on Olympic & Paralympic research.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXz94xDGXP6FffideahbpWDzBNZC9NU8jR6w&s" },
    { id: 25, name: "Grzegorz Botwina, CEO Institute of Sports Governance", about: "Expert in good governance and sports social responsibility.", img: "https://sportacademy.com/wp-content/uploads/2024/09/1634903794601.jpeg" },
    { id: 26, name: "Deepa Malik, Paralympian", about: "First Indian woman to win a Paralympic medal.", img: "https://sportsmatik.com/uploads/world-events/players/deepa-malik_1569244978.jpg" },
    { id: 27, name: "Mr. Nachhatar Singh Johal, CEO TOPS", about: "Leads the Target Olympic Podium Scheme supporting top Indian athletes.", img: "https://d2a3o6pzho379u.cloudfront.net/111671.jpg" },
    { id: 28, name: "Mr. Rishikesh Joshi, Founder SportsforAll", about: "Promotes grassroots sports participation nationwide.", img: "https://d2gjqh9j26unp0.cloudfront.net/profilepic/931b41ebd69907b8c2fc5bbe2140c930" },
    { id: 29, name: "Col Anant Gupta, Mission Olympic Wing, Indian Army", about: "Mentors and guides elite Indian athletes under Mission Olympic Wing.", img: speaker1 },
    { id: 30, name: "Shri (Dr.) Mansukh Mandaviya", about: "Union Minister of Health and Family Welfare", img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Mansukh_Mandaviya_photo_2.png" },
    { id: 31, name: "Shri Harsh Sanghavi", about: "Minister of State for Home, Industries, and Youth Affairs in the Government of Gujarat", img: "https://harshsanghavi.in/img/ss11.png" },
    { id: 32, name: "Dr PT Usha", about: "President of the Indian Olympic Association (IOA) ", img: "https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2FPTUsha_FB_220323_1200.jpg?w=480&auto=format%2Ccompress&fit=max" }
  ];

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
<section className="hall-of-fame-wrapper">
      {/* Background Tech Elements */}
      <div className="hall-grid-overlay"></div>
      
      <div className="hall-container">
        <div className="hall-header" data-aos="fade-down">
          <span className="hall-tag">Global Expertise</span>
          <h2 className="hall-title">Past <span className="gold-text">Speakers</span></h2>
          <div className="hall-divider"></div>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          slidesPerView={1.5}
          loop={true}
          freeMode={true}
          speed={6000} // Ultra smooth crawl
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1440: { slidesPerView: 4.5 },
          }}
          className="hall-swiper"
        >
          {speakers.map((sp) => (
            <SwiperSlide key={sp.id}>
              <div className="fame-card">
                <div className="fame-glow"></div>
                <div className="fame-image-box">
                  <img 
                    src={Array.isArray(sp.img) ? sp.img[0] : sp.img} 
                    alt={sp.name} 
                  />
                </div>
                <div className="fame-content">
                  <h3 className="fame-name">{sp.name.split(',')[0]}</h3>
                  <div className="fame-org-box">
                    <p className="fame-org">{sp.name.split(',').slice(1).join(',')}</p>
                  </div>
                  <p className="fame-about">{sp.about}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PastSpeakers;
