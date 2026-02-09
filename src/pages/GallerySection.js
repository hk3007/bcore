import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaCrown, FaFingerprint, FaConnectdevelop, FaMicrochip } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import "./gallery.css";

const GallerySection = () => {
  const containerRef = useRef(null);
  
  // Maps vertical scroll to a 0-1 value
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Transforms that 0-1 value into a horizontal percentage
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  
  // Adds physics/inertia to the scroll for that "unrealistic" smooth feel
  const springX = useSpring(x, { stiffness: 50, damping: 20 });

  const images = [
    { src: "https://rru.ac.in/wp-content/uploads/2025/11/Hyperlab-1.png", id: "B-01", title: "HYPER CORE", cat: "CORE SYSTEM" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/11/Image-1.png", id: "B-02", title: "NEURAL LINK", cat: "INTERFACE" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/11/Image-2.png", id: "B-03", title: "DATA STREAM", cat: "NETWORK" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/11/Image-3.png", id: "B-04", title: "GENESIS", cat: "HARDWARE" },
    { src: "https://rru.ac.in/wp-content/uploads/2025/11/Hyperlab-1.png", id: "B-05", title: "QUANTUM", cat: "LOGIC" },
  ];

  return (
    <div ref={containerRef} className="vault-container">
      <Helmet><title>BCORE | CHRONO-VAULT</title></Helmet>

      {/* Futuristic HUD Background */}
      <div className="fixed-hud">
        <div className="hud-grid"></div>
        <div className="hud-scanner"></div>
        <div className="hud-top-bar">
          <div className="status-item"><FaConnectdevelop className="spin" /> LINK: ACTIVE</div>
          <div className="status-item"><FaMicrochip /> CPU: 12%</div>
        </div>
      </div>

      <div className="vault-sticky">
        <header className="vault-header">
          <FaCrown className="gold-crown" />
          <h1 className="vault-title">THE <span>BCORE</span> ARCHIVE</h1>
          <p>AUTHORIZED ACCESS ONLY // SEC_LEVEL: 09</p>
        </header>

        <motion.div style={{ x: springX }} className="vault-rail">
          {images.map((item, i) => (
            <div key={i} className="vault-card">
              <div className="card-glitch-border"></div>
              
              <div className="card-top">
                <span className="serial-no">{item.id}</span>
                <span className="category-label">{item.cat}</span>
              </div>

              <div className="card-image-outer">
                <img src={item.src} alt={item.title} className="card-img" />
                <div className="image-scan-line"></div>
              </div>

              <div className="card-content">
                <h2 className="card-title">{item.title}</h2>
                <div className="card-divider"></div>
                <div className="card-footer">
                  <p>OBJECT_DATA_ENCRYPTED_...</p>
                  <FaFingerprint className="auth-icon" />
                </div>
              </div>
              
              <div className="card-shadow"></div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Progress HUD */}
      <motion.div 
        className="vault-progress" 
        style={{ scaleX: scrollYProgress }} 
      />
    </div>
  );
};

export default GallerySection;