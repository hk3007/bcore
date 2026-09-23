import React from "react";
import ASSN from "../../../pages/Images/ASSN.jpeg"


const partners = [
  {
    name: "ASSN",
    logo: ASSN, // update path to wherever you host the uploaded logo
  },
  // add more partner objects here, e.g.
  // { name: "Partner Name", logo: "/assets/partners/partner-logo.png" },
];

export default function StrategicPartners() {
  return (
    <section className="ss-partners" id="partners">
      <div className="ss-partners-inner">
        <h2 className="ss-partners__title">Strategic Partners</h2>
        <div className="ss-partners__accent" />
        <div className="ss-partners__grid">
          {partners.map((p, i) => (
            <div className="ss-partners__logo" key={i}>
              <img src={p.logo} alt={`${p.name} logo`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}