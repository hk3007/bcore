import React, { useState, useEffect } from "react";
import "./GalleryCarousel.css";

import img2 from "../pages/Images/PT USHA/PT USHA 1.jpeg";
import img3 from "../pages/Images/Lovlina Boxing Academy/Lovlina Boxing Academy 1.jpeg";
import img7 from "../pages/Images/image 4.png";

const images = [
  "https://rru.ac.in/wp-content/uploads/2025/11/Hyperlab-1.png",
  img2,
  img3,
  "https://rru.ac.in/wp-content/uploads/2025/11/Image-1.png",
  "https://rru.ac.in/wp-content/uploads/2025/11/Image-2.png",
  "https://rru.ac.in/wp-content/uploads/2025/11/Image-3.png",
  img7
];

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(2);
  const [popupImage, setPopupImage] = useState(null);

  const nextSlide = () => setCurrent((c) => (c + 1) % images.length);
  const prevSlide = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  const closePopup = () => setPopupImage(null);   // ← FIXED

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="gallery-carousel-wrapper">
        <div className="gallery-carousel">
          {images.map((img, index) => {
            const offset = (index - current + images.length) % images.length;

            let position = "hidden";
            if (offset === 0) position = "center";
            else if (offset === 1) position = "right1";
            else if (offset === 2) position = "right2";
            else if (offset === 3) position = "right3";
            else if (offset === images.length - 1) position = "left1";
            else if (offset === images.length - 2) position = "left2";
            else if (offset === images.length - 3) position = "left3";

            return (
              <div
                key={index}
                className={`gallery-card ${position}`}
                onClick={() => setPopupImage(img)}
              >
                <img src={img} alt="gallery" />
              </div>
            );
          })}
        </div>

        <div className="gallery-controls">
          <button onClick={prevSlide}>←</button>
          <button onClick={nextSlide}>→</button>
        </div>
      </div>

      {/* POPUP IMAGE VIEWER */}
      {popupImage && (
        <div className="image-popup" onClick={closePopup}>
          <div className="popup-img-container" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn1" onClick={closePopup}>×</span>
            <img src={popupImage} className="popup-img" alt="Full View" />
          </div>
        </div>
      )}
    </>
  );
}
