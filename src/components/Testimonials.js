import React, { useState, useEffect } from "react";
import Testimonial1 from '../pages/Images/Praskash Singh Parihar.png';
import Testimonial2 from '../pages/Images/Shubham Dhaka.jpg';
import Testimonial3 from '../pages/Images/Praveen Kumar.jpg';
import Testinomial4 from '../pages/Images/Yash Sharma.jpg';
import "./Testimonials.css"; 

const testimonialsData = [
  {
    name: "Praskash Singh Parihar",
    profession: "Profession",
    image: Testimonial1,
    feedback:
      "The program's multidisciplinary approach, combining sports science, history, sociology, and economics, was highly informative and enriching. The lectures were well-structured, and the expertise of the instructors and guest speakers was exceptional. Interactive discussions and case studies greatly enhanced the learning experience.",
  },
  {
    name: "Praveen Kumar",
    profession: "Football Coach",
    image: Testimonial3,
    feedback:
      "As a participant in online certificate program ‘Olympic Panorama: Multidisciplinary Research and Education’, this program offered a deep dive into various dimensions of the Olympics, like what does it mean to be an ‘Olympian’. I appreciated the expertise of the instructors and guest speakers who shared their knowledge and insights throughout the program.",
  },
  {
    name: "Shubham Dhaka",
    profession: "PhD Scholar",
    image: Testimonial2,
    feedback:
      "The certification program comprising five insightful sessions was very comprehensive, covering almost every aspect of the Olympics, special focus on Olympic-related research was particularly impressive, providing invaluable insights into the strategic role of the Olympics in international relations, economic impacts, and educational values. It will help and motivate participants for future Olympic studies and research. Deep gratitude for this enriching and valuable opportunity.",
  },
  {
    name: "Yash Sharma",
    profession: "Commonwealth Karate Champion",
    image: Testinomial4,
    feedback:
      "B-CORE, a center dedicated to Olympic research and affiliated with the International Olympic Committee. B-CORE has been transformative, offering invaluable insights into the profound impact of sports diplomacy and international relations on the global stage. The exposure to Olympic values and the opportunity to contribute to discussions on sports governance have prepared me to actively participate in global discourse.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-4 mx-auto">
          <h2 className="fw-bold text-primary text-uppercase">Testimonials</h2>
        </div>

        <div className="testimonial-carousel">
          <button className="carousel-control-prev" onClick={prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>

          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item ${
                index === currentIndex ? "active" : "d-none"
              }`}
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
                    <small className="text-muted">
                      {testimonial.profession}
                    </small>
                  </div>
                </div>
                <div className="testimonial-body">
                  <p>{testimonial.feedback}</p>
                </div>
              </div>
            </div>
          ))}

          <button className="carousel-control-next" onClick={nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
