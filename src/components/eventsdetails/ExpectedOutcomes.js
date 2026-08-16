import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import "./ExpectedOutcomes.css";

/**
 * ExpectedOutcomes
 * Props:
 *   outcomes – string[]
 */
const ExpectedOutcomes = ({ outcomes }) => {
  if (!outcomes?.length) return null;

  return (
    <section className="eo-section">
      <div className="eo-inner">

        {/* Header */}
        <div className="eo-header">
          <span className="eo-eyebrow">What We Aim to Achieve</span>
          <h2 className="eo-title">Expected Outcomes</h2>
        </div>

        {/* Grid */}
        <ul className="eo-grid">
          {outcomes.map((outcome, i) => (
            <motion.li
              key={i}
              className="eo-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="eo-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="eo-item-icon" aria-hidden="true">
                <Target size={16} strokeWidth={1.8} />
              </div>
              <p className="eo-item-text">{outcome}</p>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default ExpectedOutcomes;