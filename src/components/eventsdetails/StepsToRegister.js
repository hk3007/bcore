import React from "react";
import "./StepsToRegister.css";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
} from "lucide-react";

const stepIcons = [
  FileText,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
];

const StepsToRegister = ({ steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="str-container">
      {/* Background elements */}
      <div className="str-grid-bg" aria-hidden="true" />

      {/* Header */}
      <motion.div
        className="str-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="str-eyebrow">
          REGISTRATION PROCESS
        </span>

        <h3 className="str-title">
          Steps to Register
        </h3>

        <p className="str-intro">
          Follow the registration process below to complete your
          participation in the International Olympic Research Conference.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="str-timeline">
        {steps.map((step, index) => {
          const Icon = stepIcons[index] || ClipboardCheck;

          return (
            <motion.article
              key={`${step.event}-${index}`}
              className={`str-step str-step-${index + 1}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <span
                  className="str-connector"
                  aria-hidden="true"
                />
              )}

              <div className="str-step-number">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="str-card">
                <div className="str-card-top">
                  <div className="str-icon">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <span className="str-step-label">
                    {step.event}
                  </span>
                </div>

                <div className="str-card-divider" />

                <p className="str-step-text">
                  {step.date}
                </p>

                <span className="str-card-accent" />
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Bottom note */}
      <motion.div
        className="str-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        viewport={{ once: true }}
      >
        <span className="str-footer-line" />

        <p>
          Complete each step carefully to ensure successful registration.
        </p>

        <span className="str-footer-dots">
          <i />
          <i />
          <i />
          <i />
        </span>
      </motion.div>
    </section>
  );
};

export default StepsToRegister;