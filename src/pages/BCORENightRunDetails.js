import React, { useEffect, useRef } from "react";
import "./BCORENightRunDetails.css";

const BCORENightRunDetails = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("bcore-v26-reveal");
        });
      },
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  const partnerLogos = [
    "adc.png", "108.png", "police.png", "GMC.png", "madhuram.png", 
    "radio.png", "sbm.png", "sbm1.png", "smvs.png", "tripur.png", 
    "union-bank.png", "gtpl.png", "hyperlab.png", "decathlon.png", 
    "perfume91.png", "jaswal.png", "gsc.png", "ciss.png"
  ];

  return (
    <div className="bcore-v26-wrapper">
      {/* HERO SECTION */}
      <section ref={addToRefs} className="bcore-v26-hero">
        <div className="bcore-v26-container">
          <h1 className="bcore-v26-hero-title">BCORE Night Run <br /><span className="bcore-v26-gold-text">Gandhinagar</span></h1>
          <p className="bcore-v26-hero-lead">
            Experience Gandhinagar’s night sky come alive with endurance, unity, and the Olympic spirit.
          </p>
          <div className="bcore-v26-btn-group">
            <a href="https://rrulavad.nmediasoft.com/Marathon/MarathonRegistration" className="bcore-v26-btn-solid">Join the Movement</a>
            <a href="https://bcorenightrun.com" className="bcore-v26-btn-outline">Official Website</a>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section ref={addToRefs} className="bcore-v26-stats-strip">
        <div className="bcore-v26-container bcore-v26-grid-3">
          <div className="bcore-v26-stat-item">
            <h2>1,500+</h2>
            <p>Expected Participants</p>
          </div>
          <div className="bcore-v26-stat-item">
            <h2>500+</h2>
            <p>Spectators</p>
          </div>
          <div className="bcore-v26-stat-item">
            <h2>5+</h2>
            <p>Major Sponsors</p>
          </div>
        </div>
      </section>

      {/* RACE SELECTOR */}
      <section ref={addToRefs} className="bcore-v26-race-selector">
        <div className="bcore-v26-container">
          <div className="bcore-v26-section-title">
            <h2>Choose Your Perfect Race Distance</h2>
            <p>From scenic city routes to family-friendly fun runs.</p>
          </div>
          <div className="bcore-v26-race-grid">
            <div className="bcore-v26-race-card">
              <div className="bcore-v26-race-header">10KM</div>
              <h3>The Challenge</h3>
              <p>Traverse Gandhinagar's most beautiful parks – from Swarnim Park to the iconic Salt Mount.</p>
            </div>
            <div className="bcore-v26-race-card bcore-v26-featured">
              <div className="bcore-v26-race-header">5KM</div>
              <h3>The Story</h3>
              <p>Perfect for creating your own running story. Chill vibes suitable for young and old alike.</p>
              <span className="bcore-v26-tag">Most Popular</span>
            </div>
            <div className="bcore-v26-race-card">
              <div className="bcore-v26-race-header">3KM</div>
              <h3>The Inclusive</h3>
              <p>Big smiles and excitement! Celebrating inclusivity, ideal for our next generation of runners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS SECTION */}
      <section ref={addToRefs} className="bcore-v26-logistics-wrapper">
        <div className="bcore-v26-container bcore-v26-grid-2">
          <div className="bcore-v26-glass-panel bcore-v26-navy-panel">
            <h3 className="bcore-v26-gold-text">Where is the Race Route?</h3>
            <p className="bcore-v26-logistics-text">
              <strong>LIC Ground, Sector-11</strong><br />
              Gandhinagar, Gujarat, India
            </p>
            <div className="bcore-v26-map-placeholder">
              <span>📍 Route starts and finishes at Sector-11</span>
            </div>
          </div>
          <div className="bcore-v26-glass-panel">
            <h3>What time is bib collection?</h3>
            <p className="bcore-v26-logistics-text bcore-v26-dark-navy">
              <strong>11:00 AM to 6:00 PM</strong><br />
              on 10th January 2026
            </p>
            <p className="bcore-v26-location-detail">Location: LIC Ground, Sector-11, Gandhinagar.</p>
            <div className="bcore-v26-bib-icon">🎫</div>
          </div>
        </div>
      </section>

      {/* BCORE & RRU */}
      <section ref={addToRefs} className="bcore-v26-split-content">
        <div className="bcore-v26-container bcore-v26-grid-2">
          <div className="bcore-v26-text-block">
            <h2>BCORE & Rashtriya Raksha University</h2>
            <p>
              RRU, under the Ministry of Home Affairs, promotes excellence in 
              security and sport science. Through BCORE, Olympic values reach the next generation.
            </p>
            <ul className="bcore-v26-modern-list">
              <li>✦ Women safety & evening security focus</li>
              <li>✦ Glow-in-the-night run & after-party</li>
              <li>✦ Engraved medals & premium T-shirts</li>
              <li>✦ No 6AM wake-up — Run under the stars</li>
            </ul>
          </div>
          <div className="bcore-v26-discount-block">
            <h3>Safe Sport Discounts</h3>
            <div className="bcore-v26-d-unit"><strong>50%</strong> <span>51+ Yrs</span></div>
            <div className="bcore-v26-d-unit"><strong>25%</strong> <span>41-50 Yrs</span></div>
            <div className="bcore-v26-d-unit"><strong>10%</strong> <span>31-40 Yrs</span></div>
          </div>
        </div>
      </section>

      {/* FOOTER & LOGO SLIDER */}
      <footer ref={addToRefs} className="bcore-v26-royal-footer">
        <div className="bcore-v26-container">
          <div className="bcore-v26-awards-marquee">
            <span>Costume Awards</span> • <span>Corporate Challenge</span> • <span>Charity Champion</span> • <span>Inclusivity Awards</span>
          </div>
          
          <div className="bcore-v26-slider-container">
            <div className="bcore-v26-slider-track">
              {/* Double the array to create seamless loop */}
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div className="bcore-v26-slide" key={index}>
                  <img src={`https://www.bcorenightrun.com/images/logo/${logo}`} alt="Partner" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BCORENightRunDetails;