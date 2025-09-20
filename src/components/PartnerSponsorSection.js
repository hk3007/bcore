import { useLocation } from "react-router-dom";
import "./PartnerSponsorSection.css";
import { partners, sponsors } from "./partnersData";

const PartnerSponsorSection = ({ showPartners = true, showSponsors = true }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const filteredPartners = partners.filter(item => item.pages.includes(currentPath));
  const filteredSponsors = sponsors.filter(item => item.pages.includes(currentPath));

  // If nothing to show, return null
  if ((!showPartners || filteredPartners.length === 0) && 
      (!showSponsors || filteredSponsors.length === 0)) {
    return null;
  }

  return (
    <>
      {showPartners && filteredPartners.length > 0 && (
        <section className="partners-section">
          <h2 className="partners-title">Our Partners</h2>
          <div className="partners-grid">
            {filteredPartners.map((partner, index) => (
              <div className="partner-card" key={index}>
                <img src={partner.img} alt={partner.name} />
                <p>{partner.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {showSponsors && filteredSponsors.length > 0 && (
        <section className="partners-section">
          <h2 className="partners-title">Our Sponsors</h2>
          <div className="partners-grid">
            {filteredSponsors.map((sponsor, index) => (
              <div className="partner-card" key={index}>
                <img src={sponsor.img} alt={sponsor.name} />
                <p>{sponsor.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default PartnerSponsorSection;
