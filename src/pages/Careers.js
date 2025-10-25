import React, {useEffect} from "react";
import { Briefcase, Mail, Users } from "lucide-react";
import "./Careers.css";

const Careers = () => {

     useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

  return (
    <div className="careers-page">
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
        <p>There are currently no open positions. Stay Tuned for further updates.</p>
        <button disabled>No Openings</button>
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
