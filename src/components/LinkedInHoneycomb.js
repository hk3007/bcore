import React, { useState, useEffect, useRef } from "react";
import "./LinkedInHoneycomb.css";
import postData from "../data/posts.json";

// Sub-component to handle individual post loading
const LinkedInCard = ({ id, index, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once loaded
        }
      },
      { rootMargin: "200px" } // Starts loading 200px before it enters the screen
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="st-ln-flex-item" style={style}>
      <div className="st-ln-card-vessel">
        <div className="st-ln-iframe-wrapper">
          {isVisible ? (
            <>
              <iframe
                src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${id}?collapsed=1`}
                title={`Linked-${index}`}
                className="st-ln-embed"
                loading="lazy" // Native browser optimization
              ></iframe>
              {/* This overlay stops the iframe from capturing scroll gestures */}
              <div className="st-ln-mobile-overlay"></div>
            </>
          ) : (
            <div className="st-ln-placeholder">Loading Post...</div>
          )}
        </div>
        <div className="st-ln-card-meta">
          <span className="st-ln-id">REF_{id.slice(-4)}</span>
          <div className="st-ln-brand-in">in</div>
        </div>
      </div>
    </div>
  );
};

export default function LinkedInHoneycomb() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPosts(postData.latestPostIds);
    setLoading(false);
  }, []);

  return (
    <section className="st-ln-stage">
      <div className="st-ln-central-flow">
        <header className="st-ln-intro">
          <h2 className="st-ln-title">LATEST UPDATES</h2>
          <div className="st-ln-divider"></div>
        </header>

        {loading ? (
          <div className="st-ln-loader">Initialising...</div>
        ) : (
          <div className="st-ln-flex-canvas">
            {posts.map((id, index) => (
              <LinkedInCard
                key={id}
                id={id}
                index={index}
                style={{
                  "--rotation": index % 2 === 0 ? "1.5deg" : "-1.5deg",
                  "--mod-3": index % 3,
                  "--mod-2": index % 2,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}