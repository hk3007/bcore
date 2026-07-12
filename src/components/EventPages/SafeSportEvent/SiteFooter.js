import React from "react";

export default function SiteFooter() {
  return (
    <footer className="sf-footer">
      <div className="sf-footer__top">
        <div className="sf-footer__brand">
          <span className="sf-footer__rings" aria-hidden="true">
            <span className="sf-ring sf-ring--blue"></span>
            <span className="sf-ring sf-ring--black"></span>
            <span className="sf-ring sf-ring--red"></span>
            <span className="sf-ring sf-ring--yellow"></span>
            <span className="sf-ring sf-ring--green"></span>
          </span>
          <p className="sf-footer__org">
            Bharat Centre of Olympic Research and Education (BCORE)
            <br />
            Rashtriya Raksha University
          </p>
        </div>

        <div className="sf-footer__col">
          <h4>Programme</h4>
          <ul>
            <li><a href="#about">About the Programme</a></li>
            <li><a href="#content">Programme Content</a></li>
            <li><a href="#structure">Programme Structure</a></li>
            <li><a href="#stakeholders">Stakeholders</a></li>
          </ul>
        </div>

        <div className="sf-footer__col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#brochure">Download Brochure</a></li>
            <li><a href="#policy">Safe Sport Policy</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="sf-footer__col">
          <h4>Connect</h4>
          <div className="sf-footer__socials">
            <a href="#linkedin" aria-label="LinkedIn" className="sf-social">in</a>
            <a href="#twitter" aria-label="Twitter / X" className="sf-social">X</a>
            <a href="#instagram" aria-label="Instagram" className="sf-social">ig</a>
            <a href="#youtube" aria-label="YouTube" className="sf-social">yt</a>
          </div>
          <button className="sf-footer__cta" type="button">
            Register for the Programme
          </button>
        </div>
      </div>

      <div className="sf-footer__bottom">
        <p>&copy; 2026 BCORE, Rashtriya Raksha University. All rights reserved.</p>
        <div className="sf-footer__legal">
          <a href="#privacy">Privacy Policy</a>
          <span aria-hidden="true">&middot;</span>
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}