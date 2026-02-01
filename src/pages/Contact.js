import React, { useRef, useState, useEffect } from "react";
import "./ContactForm.css";
import { Helmet } from 'react-helmet';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState({ submitted: false, message: "", error: false });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const Submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formElement = formRef.current;
    const submitFormData = new FormData(formElement);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxI0UNXq4l-8mNr1CeA_jqO3ZplMVrxaQBKh27tFJGi9h3C2reAuMVa8RB8P3zTmBb8/exec",
        {
          method: "POST",
          body: submitFormData,
        }
      );

      if (response.ok) {
        formElement.reset();
        setFormData({ name: "", email: "", message: "" });
        setFormStatus({
          submitted: true,
          message: "Your message has been sent successfully!",
          error: false,
        });

        // Clear message after 3 seconds
        setTimeout(() => {
          setFormStatus({ submitted: false, message: "", error: false });
        }, 3000);
      } else {
        throw new Error("Network error");
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        message: "Failed to submit. Please try again.",
        error: true,
      });

              // Clear message after 3 seconds
        setTimeout(() => {
          setFormStatus({ submitted: false, message: "", error: false });
        }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <div className="contact-grid">
        {/* Left Side: Modern Form */}
        <div className="contact-wrapper">
          <h2>Get In <br />Touch</h2>

          {formStatus.submitted && (
            <div className={formStatus.error ? "error-message" : "success-message"}>
              {formStatus.message}
            </div>
          )}

          <form ref={formRef} className="contact-form" onSubmit={Submit}>
            <div className="input-group">
              <input
                placeholder="NAME"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                disabled={submitting}
                required
              />
            </div>
            
            <div className="input-group">
              <input
                placeholder="EMAIL"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={submitting}
                required
              />
            </div>

            <div className="input-group">
              <textarea
                placeholder="YOUR MESSAGE"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                disabled={submitting}
                required
              />
            </div>

            <button type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>

        {/* Right Side: Royal & Gold Info */}
        <div className="contact-right">
          <div className="contact-info">            
            <div className="info-item">
              <label>Address</label>
              <p>Bharat Centre of Olympic Research and Education, RRU, Lavad, Gandhinagar - 382305</p>
            </div>

            <div className="info-item">
              <label>Email</label>
              <p>bcore.office@rru.ac.in</p>
            </div>
          </div>

          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1qBrfyqNsIAM85EshihXYSfOAKeDYrEA&ehbc=2E312F&noprof=1"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="RRU Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
