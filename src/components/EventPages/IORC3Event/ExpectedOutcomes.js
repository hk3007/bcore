import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import "./ExpectedOutcomes.scss";

const outcomes = [
  "Conference proceedings, published with research support from BCORE.",
  "Presentation of NSGO India findings — the governance evaluation of 16 National Sports Federations — to policymakers.",
  "Formal opening of the India Safe Sport Charter for institutional endorsement.",
  "A comprehensive policy brief on Safe Sport governance for Indian sports bodies and national federations.",
  "Establishment of collaborative research networks between universities, BCORE, and international Olympic academies.",
  "A Living Archive of Safe Sport Stories contributed by athletes, coaches, and practitioners.",
  "Recommendations for integrating safe sport frameworks into India's national sports policy.",
  "Strengthened institutional partnerships between BCORE, NADA, IOA, and international Olympic committees.",
  "Groundwork toward a standing Asian National Olympic Academy network or forum.",
];

const ringColors = [
  "#0085C7",
  "#F4C300",
  "#009F3D",
  "#DF0024",
];

const ExpectedOutcomes = () => {
  return (
    <section className="irc-eo-section">
      {/* Background decoration */}
      <div className="irc-eo-grid-bg" aria-hidden="true" />

      <div className="irc-eo-inner">
        {/* HEADER */}
        <motion.div
          className="irc-eo-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="irc-eo-eyebrow">
            What We Aim to Achieve
          </span>

          <div className="irc-eo-heading-row">
            <span className="irc-eo-heading-line" />

            <h2 className="irc-eo-title">
              Expected Outcomes
            </h2>
          </div>

          <p className="irc-eo-intro">
            The conference aims to translate dialogue, research and
            collaboration into meaningful outcomes for Safe Sport
            governance and policy.
          </p>
        </motion.div>

        {/* OUTCOMES */}
        <ul className="irc-eo-grid">
          {outcomes.map((outcome, i) => {
            const accent = ringColors[i % ringColors.length];

            return (
              <motion.li
                className="irc-eo-item"
                key={i}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                style={{
                  "--eo-accent": accent,
                }}
              >
                {/* Number */}
                <div className="irc-eo-item__number">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className="irc-eo-item__icon"
                  aria-hidden="true"
                >
                  <Target
                    size={17}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <div className="irc-eo-item__content">
                  <p className="irc-eo-item__text">
                    {outcome}
                  </p>
                </div>

                {/* Bottom accent */}
                <span
                  className="irc-eo-item__accent"
                  aria-hidden="true"
                />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ExpectedOutcomes;