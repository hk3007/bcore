import React from "react";
import "./CallForAbstract.css";
import { motion } from "framer-motion";

const CallForAbstract = ({ callForAbstract }) => {
  return (
    <section className="abstract-section">
      {/* LEFT SIDE — Rubik's Cube */}
      <motion.div
        className="abstract-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
         <div className="cube-container">
            <div className="cube">
                <div className="face front">
                {[...Array(9)].map((_, i) => <div key={`f${i}`} />)}
                </div>
                <div className="face back">
                {[...Array(9)].map((_, i) => <div key={`b${i}`} />)}
                </div>
                <div className="face left">
                {[...Array(9)].map((_, i) => <div key={`l${i}`} />)}
                </div>
                <div className="face right">
                {[...Array(9)].map((_, i) => <div key={`r${i}`} />)}
                </div>
                <div className="face top">
                {[...Array(9)].map((_, i) => <div key={`t${i}`} />)}
                </div>
                <div className="face bottom">
                {[...Array(9)].map((_, i) => <div key={`bt${i}`} />)}
                </div>
            </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE TEXT */}
      <motion.div
        className="abstract-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="abstract-heading">Call for Abstract</h3>
        <p className="abstract-text">{callForAbstract.text}</p>

        <div className="abstract-info">
          <div className="abstract-item">
            <h4>Submission Email</h4>
            <a
              href={`mailto:${callForAbstract.submissionEmail}`}
              className="abstract-email"
            >
              {callForAbstract.submissionEmail}
            </a>
          </div>
          <div className="abstract-item">
            <h4>Last Date of Submission</h4>
            <p className="abstract-date">{callForAbstract.deadline}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallForAbstract;
