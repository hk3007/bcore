import React from 'react';
import { Link } from 'react-router-dom';
import './BentoEcosystem.css';

const CSSShape = ({ type }) => {
  return (
    <div className={`shape-wrapper ${type}`}>
      <div className="shape-container">
        {type === 'grants' && <div className="css-poly-gold"></div>}
        {type === 'lab' && <div className="css-sphere-pulse"></div>}
        {type === 'research' && (
          <div className="css-bars">
            <span></span><span></span><span></span>
          </div>
        )}
        {type === 'events' && <div className="css-wireframe"></div>}
        {type === 'newsletter' && <div className="css-cylinder"></div>}
        {type === 'careers' && <div className="css-ring-sphere"></div>}
      </div>
    </div>
  );
};

const BentoEcosystem = () => {
  const items = [
    { to: "/olympicresearchgrants", type: "grants", title: "BCORE Grants", meta: "Excellence", desc: "Strategic funding for athletes.", size: "span-2" },
    { to: "/HumanPerformanceLab", type: "lab", title: "Human Performance Lab", meta: "Science", desc: "Advanced biomechanics.", size: "span-2" },
    { to: "/publications", type: "research", title: "Publications", meta: "Insights", size: "" },
    { to: "/upcomingevents", type: "events", title: "Events", meta: "Global", size: "" },
    { to: "#", type: "newsletter", title: "Newsletter", meta: "Connect", size: "" },
    { to: "/careers", type: "careers", title: "Careers", meta: "Talent", size: "" }
  ];

  return (
    <section className="olympic-bento-section">
      <div className="bento-header">
        <div className="olympic-badge">EXPLORE</div>
        <h2 className="bento-title">CORE <span className="text-thin">ECOSYSTEM</span></h2>
      </div>

      <div className="bento-grid">
        {items.map((item, idx) => (
          <Link key={idx} to={item.to} className={`bento-item ${item.size} color-${item.type}`}>
            <CSSShape type={item.type} />
            <div className="bento-content">
              <span className="bento-meta">{item.meta}</span>
              <h3>{item.title}</h3>
              {item.desc && <p>{item.desc}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BentoEcosystem;