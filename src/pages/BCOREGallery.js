import React, { useEffect, useRef, useState } from "react";
import "./BCOREGallery.css";

const BCOREGallery = () => {
  const [filter, setFilter] = useState("all");
  const galleryRefs = useRef([]);

  const photos = [
    { id: 1, category: "race", url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800", title: "The Midnight Start" },
    { id: 2, category: "awards", url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800", title: "Victory Celebration" },
    { id: 3, category: "race", url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", title: "Endurance & Will" },
    { id: 4, category: "crowd", url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800", title: "The Faithful Gathering" },
    { id: 5, category: "race", url: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?auto=format&fit=crop&q=80&w=800", title: "Glow of the Night" },
    { id: 6, category: "awards", url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800", title: "Royal Triumphs" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("bcore-v26-reveal");
        });
      },
      { threshold: 0.1 }
    );
    galleryRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  const filteredPhotos = filter === "all" ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="bcore-v26-wrapper bcore-v26-vintage-theme">
      {/* Subtle Grain Overlay */}
      <div className="bcore-v26-grain"></div>

      <header className="bcore-v26-gallery-header">
        <div className="bcore-v26-container">
          <span className="bcore-v26-ornament">❧</span>
          <span className="bcore-v26-eyebrow">The Photographic Archives</span>
          <h1 className="bcore-v26-gallery-title">Memories in <span className="bcore-v26-gold-text">Motion</span></h1>
          <p className="bcore-v26-vintage-subtitle">Est. 2026 • Gandhinagar, Gujarat</p>
          
          <div className="bcore-v26-filter-bar">
            {["all", "race", "awards", "crowd"].map((cat) => (
              <button 
                key={cat} 
                className={`bcore-v26-filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="bcore-v26-container">
        <div className="bcore-v26-masonry-grid">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              ref={(el) => (galleryRefs.current[index] = el)}
              className="bcore-v26-gallery-item"
            >
              <div className="bcore-v26-polaroid-frame">
                <div className="bcore-v26-img-wrapper">
                  <img src={photo.url} alt={photo.title} />
                  <div className="bcore-v26-sepia-overlay"></div>
                </div>
                <div className="bcore-v26-polaroid-caption">
                  <span className="bcore-v26-handwritten">{photo.title}</span>
                  <span className="bcore-v26-date">Jan '26</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="bcore-v26-vintage-cta">
        <div className="bcore-v26-container">
          <span className="bcore-v26-ornament">❧</span>
          <h3>Write Your Own History</h3>
          <a href="https://rrulavad.nmediasoft.com/Marathon/MarathonRegistration" className="bcore-v26-vintage-btn">
            Secure Your Entry
          </a>
        </div>
      </section>
    </div>
  );
};

export default BCOREGallery;