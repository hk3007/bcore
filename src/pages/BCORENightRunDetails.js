import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BCORENightRunDetails.css";

// Hero images (auto-fading)
import heroImage1 from "./Images/Bcore Night Run 1.png";
import heroImage2 from "./Images/Bcore Night Run 2.png";

const BCORENightRunDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage1, heroImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="night-run-page">

      {/* 🌃 Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            BCORE Night Run 2026
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Experience Gandhinagar’s night sky come alive with endurance, unity,
            and the Olympic spirit.
          </motion.p>

          <div className="btn-group">
            <motion.a
              href="https://rrulavad.nmediasoft.com/Marathon/MarathonRegistration"
              target="_blank"
              rel="noreferrer"
              className="register-btn"
              whileHover={{ scale: 1.05 }}
            >
              Register Now
            </motion.a>

            <motion.a
              href="https://bcorenightrun.com"
              target="_blank"
              rel="noreferrer"
              className="register-btn"
              whileHover={{ scale: 1.05 }}
            >
              Official Website
            </motion.a>
          </div>
        </div>

        <div className="hero-image-container">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="BCORE Night Run Hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="hero-image"
            />
          </AnimatePresence>
        </div>
      </section>

      {/* 🏃 Enhanced Info Section */}
      <section className="info-section enhanced-info">
        <div className="info-wrapper">

          {/* Overview Card */}
          <div className="info-card">
            <h2>🏁 General Overview</h2>
            <p>
              The <strong>BCORE Run 2026</strong> welcomes thousands of participants,
              spectators, and sponsors — making it one of India’s most remarkable
              night-time running festivals in the heart of Gandhinagar.
            </p>
            <p>
              From <strong>law enforcement officers</strong> to <strong>civilians</strong>,
              <strong>para-abled athletes</strong>, and <strong>under-16 runners</strong>,
              everyone joins together for a night celebrating health, inclusion, and unity.
            </p>
            <div className="highlight-banner">
              <span>✨ Be part of the movement — Register today!</span>
            </div>
          </div>

                    {/* 🎓 BCORE & RRU Section */}
          <div className="info-card">
            <h2>🎓 BCORE and RRU</h2>
            <p>
              RRU, an Institution of National Importance under the Ministry of Home Affairs,
              Government of India, is committed to advancing excellence in the education,
              security, and sport science sectors.
            </p>

            <p>
              Through the <strong>Bharat Centre of Olympic Research and Education (BCORE)</strong>,
              South Asia’s first <strong>Olympic Studies Centre</strong> recognized by the 
              International Olympic Committee, RRU continues to promote the Olympic values.
            </p>

            <p>
              RRU has also played a key role in securing the 
              <strong> 2029 World Police and Fire Games for India</strong> and has been entrusted
              to host nine disciplines in the university.
            </p>
          </div>

          {/* Races Info */}
          <div className="info-card">
            <h2>🏃‍♀️ Races Information</h2>
            <ul className="race-list">
              <li><strong>Half Marathon –</strong> Set new endurance records under IOC guidance.</li>
              <li><strong>10KM Run –</strong> Explore Gandhinagar’s scenic Swarnim Park and Salt Mount.</li>
              <li><strong>5KM Run –</strong> For those chasing their personal running story.</li>
              <li><strong>3KM Run –</strong> Open to under-16 and para-abled participants.</li>
              <li><strong>Team Run “Bhaag Milkar Bhaag” –</strong> 3-person relay symbolizing unity.</li>
            </ul>
          </div>

          {/* 🏆 Event Categories */}
          <div className="info-card">
            <h2>📊 Event Categories & Distances</h2>

            <div className="category-table">
              <h3>General Public (Male & Female)</h3>
              <ul>
                <li>Under 16yr & Para-Abled – 3K</li>
                <li>Under 30yr – 5K | 10K | 21K</li>
                <li>Above 30yr – 5K | 10K | 21K</li>
              </ul>

              <h3>Army & NCC (Male & Female)</h3>
              <ul>
                <li>All Ages – 5K | 10K | 21K</li>
              </ul>

              <h3>Team Run (Male, Female, Mixed)</h3>
              <ul>
                <li>All Ages – 5K</li>
              </ul>
            </div>
          </div>

          {/* 🛡 Safe Section */}
          <div className="info-card">
            <h2>🛡 Safe Sport & Safe Space</h2>
            <p>The Night Run shall be offering exclusive discount for women participants:</p>
            <ul className="discount-list">
              <li><strong>Above 51 years:</strong> 50% Discount</li>
              <li><strong>Between 41 and 50 years:</strong> 25% Discount</li>
              <li><strong>Between 31 and 40 years:</strong> 10% Discount</li>
            </ul>
          </div>

          {/* Awards */}
          <div className="info-card">
            <h2>🏅 Awards & Recognitions</h2>
            <div className="awards-grid">
              {[
                "Best Costume", "Corporate Challenge", "Charity Champion",
                "Super Senior Award", "Super Junior Award", "Inclusivity Award",
                "Best Team Name", "Sponsor Award", "Underprivileged Runners Recognition"
              ].map((award, index) => (
                <div className="award-item" key={index}>{award}</div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BCORENightRunDetails;
