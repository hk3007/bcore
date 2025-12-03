import React, { useEffect } from "react";
import { Briefcase, Mail, Users } from "lucide-react";
import "./Careers.css";
import { Helmet } from 'react-helmet';
// 🔹 Make sure to place your document inside src/Documents/ and adjust the name

const Careers = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careers-page">
       <Helmet>
        <title>Career – Bharat Centre of Olympic Research & Education</title>
        <meta name="description" content="Home page of BCORE..." />
      </Helmet>
      {/* Header */}
      <div className="careers-header">
        <Users className="icon" />
        <h1>Work with BCORE</h1>
        <p>
          We are continually on the lookout for talented and dedicated individuals
          who are interested in joining our team. If you are passionate about keeping
          sport real and believe that you have the right skills and experience to join
          BCORE, we would love to hear from you!
        </p>
      </div>

      {/* Contact */}
      <div className="contact-card compact">
        <Mail className="contact-icon" />
        <span className="contact-text">
          If you're interested in joining our team, please reach out to us at
        </span>
        <a href="mailto:bcore@rru.ac.in" className="contact-email">
          bcore@rru.ac.in
        </a>
      </div>


      {/* Job Section */}
      <div className="job-section">
        <Briefcase className="icon" />
        <h2>Current Job Openings</h2>

        {/* ✅ Job Opening Card */}
        <div className="job-card">
          <div className="job-header">
            <h4>Design and Marketing Trainee</h4>
          </div>

          <div className="job-actions">
            <a
              href='https://rru.ac.in/wp-content/uploads/2025/11/Branding-and-Marketing-Project-Description-BCORE.pdf'
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Details
            </a>
          </div>
        </div>

        {/* Optional message */}
        <p className="no-openings-note">
          Stay tuned for more upcoming opportunities with BCORE.
        </p>
      </div>

      {/* Equality Section */}
      <div className="equality-section">
        <h3>Our Commitment to Equality</h3>
        <p>
          The BCORE does not and shall not discriminate on the basis of race, colour,
          religion (creed), gender, gender expression, age, national origin (ancestry),
          disability, marital status, sexual orientation, or military status, in any of
          its activities or operations.
        </p>
      </div>
    </div>
  );
};

export default Careers;
