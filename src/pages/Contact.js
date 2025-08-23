import React, { useRef, useState, useEffect } from "react";
import "./ContactForm.css";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: "",
    error: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
          message: "✅ Your message has been sent successfully!",
          error: false,
        });
      } else {
        throw new Error("Network error");
      }
    } catch (error) {
      console.error(error);
      setFormStatus({
        submitted: true,
        message: "❌ Failed to submit. Please try again.",
        error: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-grid">
        {/* Left Side: Contact Form */}
        <div className="contact-wrapper">
          <h2>Contact Us</h2>

          {formStatus.submitted && (
            <p className={formStatus.error ? "error-message" : "success-message"}>
              {formStatus.message}
            </p>
          )}

          <form ref={formRef} className="contact-form" onSubmit={Submit}>
            <input
              placeholder="Your Name"
              name="name"
              type="text"
              pattern="[A-Za-z ]{2,30}"
              value={formData.name}
              onChange={handleChange}
              disabled={submitting}
              required
            />
            <input
              placeholder="Your Email"
              name="email"
              type="email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              value={formData.email}
              onChange={handleChange}
              disabled={submitting}
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              minLength={10}
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
              disabled={submitting}
              required
            />
            <button type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info + Map */}
        <div className="contact-right">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><strong>Address:</strong> Bharat Centre of Olympic Research and Education, Rashtriya Raksha University, Raksha Shakti Road, Lavad, Gandhinagar - Gujarat 382305</p>
            <p><strong>Email:</strong> bcore.office@rru.ac.in</p>
          </div>

          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1qBrfyqNsIAM85EshihXYSfOAKeDYrEA&ehbc=2E312F&noprof=1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Event location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
