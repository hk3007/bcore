import React from 'react';
import './NearbyTransportation.css';

const NearbyTransportation = ({ transportationData }) => {
  if (!transportationData || transportationData.length === 0) return null;

  return (
    <section className="rt-modern-section">
      <div className="rt-inner-container">
        
        <div className="rt-header-center">
          <p className="rt-top-label">Accessibility</p>
          <h3 className="rt-section-title">Nearby Transportation</h3>
          <div className="rt-gold-ornament">
            <span className="rt-gold-line"></span>
            <span className="rt-gold-diamond"></span>
            <span className="rt-gold-line"></span>
          </div>
        </div>

        <div className="rt-flex-display">
          {transportationData.map((item, index) => (
            <div className="rt-flex-column" key={index}>
              <a
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="rt-main-card"
              >
                <div className="rt-img-frame">
                  <img src={item.image} alt={item.name} className="rt-img-element" />
                </div>

                <div className="rt-body-content">
                  <h4 className="rt-item-heading">{item.name}</h4>
                  
                  <div className="rt-info-stack">
                    <span className="rt-info-label">ADDRESS</span>
                    <p className="rt-info-desc">{item.address}</p>
                  </div>

                  {item.contact && (
                    <div className="rt-info-stack">
                      <span className="rt-info-label">CONTACT</span>
                      <p className="rt-info-desc">{item.contact}</p>
                    </div>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyTransportation;