import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./imageCarousel.css";

// ✅ Local imports (adjust paths if needed)
import page1 from '../pages/Slider/Page 1.jpg';
import page2 from '../pages/Slider/Page 2.jpg';
import page3 from '../pages/Slider/Page 3.jpg';
import page4 from '../pages/Slider/Page 4.jpg';

const ImageCarousel = () => {
  const images = [
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
    <div style={{ maxWidth: "1900px", margin: "0 auto" }}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}  // 🚀 Hides the dots
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
