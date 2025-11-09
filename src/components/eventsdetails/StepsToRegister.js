import React from "react";
import "./StepsToRegister.css";
import { motion } from "framer-motion";

const StepsToRegister = ({ steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="vintage-steps-container">
      <motion.h3
        className="vintage-steps-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Steps to Register
      </motion.h3>

      <div className="vintage-steps-grid">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="vintage-step-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h4>{step.event}</h4>
            <p>{step.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StepsToRegister;
