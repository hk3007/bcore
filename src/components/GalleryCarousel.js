import React, { useState } from "react";
import "./GalleryCarousel.css";

import img2 from "../pages/Images/PT USHA/PT USHA 1.jpeg";
import img3 from "../pages/Images/Lovlina Boxing Academy/Lovlina Boxing Academy 1.jpeg";
import img7 from "../pages/Images/image 4.png";

const images = [
  { src: img2, title: "1st IORC" },
  { src: img3, title: "Lovlina Academy" },
  { src: img7, title: "1st IORC" }
];

export default function GalleryCarousel() {
  const [popupImage, setPopupImage] = useState(null);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Our Gallery</h2>
        <p>Capturing moments of excellence and dedication.</p>
      </div>

      <div className="bento-grid">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`grid-item item-${index}`}
            onClick={() => setPopupImage(img.src)}
          >
            <img src={img.src} alt={img.title} loading="lazy" />
            <div className="grid-overlay">
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Popup */}
      {popupImage && (
        <div className="gallery-lightbox" onClick={() => setPopupImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-lightbox" onClick={() => setPopupImage(null)}>×</button>
            <img src={popupImage} alt="Full view" />
          </div>
        </div>
      )}
    </section>
  );
}