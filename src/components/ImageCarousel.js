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
import slider4 from '../pages/Slider/SIX LEACIES WEB SLIDER.jpg';
import legacy1 from "../pages/Slider/LEGACY 1.png"
import legacy2 from "../pages/Slider/LEGACY 2.png"

const ImageCarousel = () => {
  const images = [
    { src: legacy2, alt: "Slide 4" },
    { src: legacy1, alt: "Slide 4" },
    { src: slider4, alt: "Slide 4" },
    { src: slider1, alt: "Slide 1" },
    { src: slider2, alt: "Slide 2" },
    { src: slider3, alt: "Slide 3" },
    { src: page5, alt: "Slide 1" },
    { src: page1, alt: "Page 1" },
    { src: page2, alt: "Page 2" },
    { src: page3, alt: "Page 3" },
    { src: page4, alt: "Page 4" },
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
