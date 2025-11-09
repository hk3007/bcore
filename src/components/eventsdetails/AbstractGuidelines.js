import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpenText } from "lucide-react";
import "./AbstractGuidelines.css";

const AbstractGuidelines = ({ event }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!event?.abstractGuidelines) return null;

  const { formatRequirements = [], contentStructure = [] } =
    event.abstractGuidelines;

  const safeIndex = Math.max(0, Math.min(activeIndex, contentStructure.length - 1));

  return (
    <section className="rg-container">
      <motion.h3
        className="rg-title"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Abstract Submission Guidelines
      </motion.h3>

      <div className="rg-layout">
        {/* LEFT MENU */}
        <nav className="rg-menu" aria-label="Guideline Sections">
          {contentStructure.length > 0 ? (
            contentStructure.map((sec, i) => (
              <motion.button
                key={i}
                type="button"
                className={`rg-tab ${safeIndex === i ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              >
                <BookOpenText size={18} />
                <span>{sec.heading}</span>
              </motion.button>
            ))
          ) : (
            <div className="rg-no-sections">No sections available</div>
          )}
        </nav>

        {/* RIGHT CONTENT */}
        <div className="rg-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={safeIndex}
              className="rg-body"
            >
              <h4 className="rg-section-title">
                {contentStructure[safeIndex]?.heading || "Overview"}
              </h4>
              <p className="rg-section-desc">
                {contentStructure[safeIndex]?.description ||
                  "Details not provided."}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* FORMAT REQUIREMENTS */}
          {formatRequirements.length > 0 && (
            <div className="rg-format">
              <h5>Format Requirements</h5>
              <ul>
                {formatRequirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {/* GUIDELINE LINK */}
          <div className="rg-link">
            <p>
              <strong>For the complete Paper Guidelines, please visit&nbsp;</strong>
              <a
                href="https://rru.ac.in/wp-content/uploads/2025/10/Guidelines-Full-Paper-Submission.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                this link
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbstractGuidelines;
