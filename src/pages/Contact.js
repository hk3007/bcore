import React, { useRef, useState, useEffect, useCallback } from "react";
import "./ContactForm.css";
import { Helmet } from "react-helmet";

/* =========================================================================
   SECURITY CONSTANTS
   ========================================================================= */

const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 1500;

// Simple, safe email pattern (not RFC-exhaustive, but blocks garbage/injection attempts)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Blocks obvious script/HTML injection attempts in text fields
const DANGEROUS_PATTERN = /<script|<\/script|javascript:|onerror=|onload=|<iframe|<img[^>]+src/i;

// Minimum time (ms) a human needs to fill the form — bots submit near-instantly
const MIN_FILL_TIME_MS = 2500;

// Client-side throttle: block resubmission within this window
const RESUBMIT_COOLDOWN_MS = 15000;

/* =========================================================================
   HELPERS
   ========================================================================= */

// Strips any HTML tags and trims — defence in depth, not a substitute for
// server-side sanitization
function sanitizeInput(value) {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>?/gm, "") // strip HTML tags
    .replace(/[<>]/g, "") // strip stray angle brackets
    .trim();
}

function isLikelyMalicious(value) {
  return DANGEROUS_PATTERN.test(value);
}

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef(null);
  const mountTimeRef = useRef(Date.now());
  const lastSubmitRef = useRef(0);

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: "",
    error: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot field — real users never fill this
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    // Enforce max lengths at the state level too (defence in depth beyond maxLength attr)
    const limits = {
      name: MAX_NAME_LENGTH,
      email: MAX_EMAIL_LENGTH,
      message: MAX_MESSAGE_LENGTH,
    };

    const limited =
      limits[name] !== undefined ? value.slice(0, limits[name]) : value;

    setFormData((prev) => ({ ...prev, [name]: limited }));

    // Clear the field-specific error as the user edits
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  }, []);

  const validate = useCallback(() => {
    const errors = {};
    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const message = sanitizeInput(formData.message);

    if (!name || name.length < 2) {
      errors.name = "Please enter your name.";
    } else if (isLikelyMalicious(formData.name)) {
      errors.name = "Invalid characters detected.";
    }

    if (!email || !EMAIL_REGEX.test(email) || email.length > MAX_EMAIL_LENGTH) {
      errors.email = "Please enter a valid email address.";
    } else if (isLikelyMalicious(formData.email)) {
      errors.email = "Invalid characters detected.";
    }

    if (!message || message.length < 5) {
      errors.message = "Please enter a message.";
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      errors.message = `Message must be under ${MAX_MESSAGE_LENGTH} characters.`;
    } else if (isLikelyMalicious(formData.message)) {
      errors.message = "Invalid characters detected.";
    }

    return errors;
  }, [formData]);

  const Submit = async (e) => {
    e.preventDefault();

    // ---- Honeypot check: bots fill every field, humans never see/fill this ----
    if (formData.company) {
      // Silently "succeed" without ever hitting the network — don't tip off bots
      setFormStatus({
        submitted: true,
        message: "Your message has been sent successfully!",
        error: false,
      });
      setTimeout(() => {
        setFormStatus({ submitted: false, message: "", error: false });
      }, 3000);
      return;
    }

    // ---- Timing check: reject submissions that happen implausibly fast ----
    const elapsed = Date.now() - mountTimeRef.current;
    if (elapsed < MIN_FILL_TIME_MS) {
      setFormStatus({
        submitted: true,
        message: "Please take a moment to review your message before sending.",
        error: true,
      });
      setTimeout(() => {
        setFormStatus({ submitted: false, message: "", error: false });
      }, 3000);
      return;
    }

    // ---- Client-side rate limiting ----
    const now = Date.now();
    if (now - lastSubmitRef.current < RESUBMIT_COOLDOWN_MS) {
      setFormStatus({
        submitted: true,
        message: "Please wait a moment before sending another message.",
        error: true,
      });
      setTimeout(() => {
        setFormStatus({ submitted: false, message: "", error: false });
      }, 3000);
      return;
    }

    // ---- Field validation ----
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setSubmitting(true);
    lastSubmitRef.current = now;

    // Build a clean payload — never send raw, unsanitized field values
    const cleanPayload = new FormData();
    cleanPayload.append("name", sanitizeInput(formData.name));
    cleanPayload.append("email", sanitizeInput(formData.email));
    cleanPayload.append("message", sanitizeInput(formData.message));

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxI0UNXq4l-8mNr1CeA_jqO3ZplMVrxaQBKh27tFJGi9h3C2reAuMVa8RB8P3zTmBb8/exec",
        {
          method: "POST",
          body: cleanPayload,
        }
      );

      if (response.ok) {
        formRef.current.reset();
        setFormData({ name: "", email: "", message: "", company: "" });
        mountTimeRef.current = Date.now(); // reset timer for a potential next submission
        setFormStatus({
          submitted: true,
          message: "Your message has been sent successfully!",
          error: false,
        });

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
          <h2>
            Get In <br />
            Touch
          </h2>

          {formStatus.submitted && (
            <div className={formStatus.error ? "error-message" : "success-message"}>
              {formStatus.message}
            </div>
          )}

          <form
            ref={formRef}
            className="contact-form"
            onSubmit={Submit}
            noValidate
            autoComplete="off"
          >
            <div className="input-group">
              <input
                placeholder="NAME"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                disabled={submitting}
                required
                maxLength={MAX_NAME_LENGTH}
                autoComplete="off"
                aria-invalid={!!fieldErrors.name}
              />
              {fieldErrors.name && (
                <span className="field-error">{fieldErrors.name}</span>
              )}
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
                maxLength={MAX_EMAIL_LENGTH}
                autoComplete="off"
                aria-invalid={!!fieldErrors.email}
              />
              {fieldErrors.email && (
                <span className="field-error">{fieldErrors.email}</span>
              )}
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
                maxLength={MAX_MESSAGE_LENGTH}
                aria-invalid={!!fieldErrors.message}
              />
              {fieldErrors.message && (
                <span className="field-error">{fieldErrors.message}</span>
              )}
            </div>

            {/* HONEYPOT FIELD — hidden from real users via CSS, bots fill it in */}
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex="-1"
                autoComplete="off"
                value={formData.company}
                onChange={handleChange}
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
              <p>
                Bharat Centre of Olympic Research and Education, RRU, Lavad,
                Gandhinagar - 382305
              </p>
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
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups"
              title="RRU Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};