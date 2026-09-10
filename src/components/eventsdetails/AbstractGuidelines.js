import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpenText } from "lucide-react";
import "./AbstractGuidelines.css";

const AbstractGuidelines = ({ event }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Always calculate these before any conditional return
  const abstractGuidelines = event?.abstractGuidelines;

  const formatRequirements =
    abstractGuidelines?.formatRequirements || [];

  const contentStructure =
    abstractGuidelines?.contentStructure || [];

  // Safe index
  const safeIndex =
    contentStructure.length > 0
      ? Math.min(
          Math.max(activeIndex, 0),
          contentStructure.length - 1
        )
      : 0;

  // Only return after all hooks/calculations
  if (!abstractGuidelines) {
    return null;
  }

  const activeSection = contentStructure[safeIndex];

  return (
    <section className="rg-container">
      {/* =========================================
          HEADER
      ========================================= */}
      <motion.div
        className="rg-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="rg-eyebrow">
          ABSTRACT SUBMISSION
        </span>

        <h3 className="rg-title">
          Abstract Submission
          <br />
          Guidelines
        </h3>

        <p className="rg-intro">
          Follow the structure and formatting requirements below
          when preparing your abstract for submission.
        </p>
      </motion.div>

      {/* =========================================
          MAIN LAYOUT
      ========================================= */}
      <div className="rg-layout">

        {/* =======================================
            LEFT NAVIGATION
        ======================================= */}
        <nav
          className="rg-menu"
          aria-label="Guideline Sections"
        >
          <div className="rg-menu-header">
            <span>CONTENT STRUCTURE</span>
          </div>

          {contentStructure.length > 0 ? (
            contentStructure.map((section, index) => (
              <motion.button
                key={`${section.heading}-${index}`}
                type="button"
                className={`rg-tab ${
                  safeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                whileTap={{ scale: 0.98 }}
              >
                <span className="rg-tab-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rg-tab-icon">
                  <BookOpenText size={17} />
                </span>

                <span className="rg-tab-label">
                  {section.heading}
                </span>

                <span className="rg-tab-arrow">
                  →
                </span>
              </motion.button>
            ))
          ) : (
            <div className="rg-no-sections">
              No sections available
            </div>
          )}
        </nav>

        {/* =======================================
            RIGHT CONTENT
        ======================================= */}
        <div className="rg-content">

          {/* Decorative top line */}
          <div className="rg-color-line">
            <span className="blue"></span>
            <span className="yellow"></span>
            <span className="green"></span>
            <span className="red"></span>
          </div>

          {/* =====================================
              ACTIVE SECTION
          ===================================== */}
          <AnimatePresence mode="wait">
            <motion.div
              key={safeIndex}
              className="rg-body"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <div className="rg-section-meta">
                <span>
                  SECTION
                </span>

                <strong>
                  {String(safeIndex + 1).padStart(2, "0")}
                </strong>
              </div>

              <h4 className="rg-section-title">
                {activeSection?.heading || "Overview"}
              </h4>

              <p className="rg-section-desc">
                {activeSection?.description ||
                  "Details not provided."}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* =====================================
              FORMAT REQUIREMENTS
          ===================================== */}
          {formatRequirements.length > 0 && (
            <motion.div
              className="rg-format"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="rg-format-header">
                <span className="rg-format-line"></span>

                <h5>
                  Format Requirements
                </h5>
              </div>

              <div className="rg-format-grid">
                {formatRequirements.map(
                  (requirement, index) => (
                    <div
                      className="rg-format-item"
                      key={`${requirement}-${index}`}
                    >
                      <span className="rg-format-number">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <p>{requirement}</p>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          )}

          {/* =====================================
              GUIDELINE LINK
          ===================================== */}
          <div className="rg-link">
            <div className="rg-link-content">
              <span className="rg-link-label">
                COMPLETE PAPER GUIDELINES
              </span>

              <p>
                For the complete Paper Guidelines,
                please visit{" "}
                <a
                  href="https://rru.ac.in/wp-content/uploads/2025/10/Guidelines-Full-Paper-Submission.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the official document
                  <span> ↗</span>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbstractGuidelines;