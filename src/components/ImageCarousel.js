import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./imageCarousel.css";

import page1 from '../pages/Slider/Page 1.jpg';
import page2 from '../pages/Slider/Page 2.jpg';
import page3 from '../pages/Slider/Page 3.jpg';
import page4 from '../pages/Slider/Page 4.jpg';
import page5 from '../pages/Slider/Page 5.jpeg';

import slider1 from '../pages/Slider/2nd IORC 1.jpg';
import slider2 from '../pages/Slider/2nd IORC 2.jpg';
import slider3 from '../pages/Slider/2nd IORC 3.jpg';

const ImageCarousel = () => {
  const images = [
    { src: slider1, alt: "Slide 1" },
    { src: slider2, alt: "Slide 2" },
    { src: slider3, alt: "Slide 3" },
    { src: "https://rru.ac.in/wp-content/uploads/2026/01/BCORE-Night-Run-Web-SM-scaled.jpg", alt: "Slide 1" },
    { src: page5, alt: "Slide 1" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/11/IMG_0935.jpeg", alt: "Slide 1" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/06/1.png", alt: "Slide 1" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/06/2-1.png", alt: "Slide 2" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/06/3.png", alt: "Slide 3" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/06/4.png", alt: "Slide 4" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/06/5.png", alt: "Slide 5" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/06/Hyperlab-MoU-Webslider.jpg", alt: "Hyperlab MoU" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/05/BCORE-Slider-2-scaled.jpg", alt: "BCORE 2" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/05/BCORE-Slider-scaled.jpg", alt: "BCORE" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/04/Slider-2-1.png", alt: "Event Slider" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/03/Visit-to-Rashtriya-Raksha-University-by-COE-in-Sports-Science-Sports-Management-TransStadia-Institute-Mumbai.png", alt: "RRU Visit" },
    { src: page1, alt: "Page 1" },
    { src: page2, alt: "Page 2" },
    { src: page3, alt: "Page 3" },
    { src: page4, alt: "Page 4" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/01/International-Olympic-Research-Conference-Guest-Banner-16.png", alt: "Olympic Conference" },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}   // 🔥 Prevents height jump (important)
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img.src}
              alt={img.alt}
              loading="eager"             // 🔥 No lazy-load on hero slider (prevents CLS)
              decoding="async"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
