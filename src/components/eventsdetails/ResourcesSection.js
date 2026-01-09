import React from "react";
import "./ResourcesSection.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ResourcesSection = ({ resources }) => {
if (
    !resources ||
    !(
      resources.schedule ||
      resources.brochure ||
      resources.registrationLink ||
      resources.googleForm ||
      resources.faQ
    )
  )
    return null;

  const resourceLinks = [
    { label: "View Schedule", url: resources.schedule },
    { label: "View Brochure", url: resources.brochure },
    { label: "Register Now", url: resources.registrationLink },
    { label: "Google Form", url: resources.googleForm },
    { label: "FAQ", url: resources.faQ },
  ].filter((res) => res.url);

  return (
    <section className="royal3d-container">
      {/* Floating Shapes */}
      <div className="royal3d-shape royal3d-shape1"></div>
      <div className="royal3d-shape royal3d-shape2"></div>
      <div className="royal3d-shape royal3d-shape3"></div>

      <motion.h3
        className="royal3d-title"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Resources
      </motion.h3>

      <div className="royal3d-resources">
        {resourceLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="royal3d-card"
            initial={{ opacity: 0, rotateY: 45, y: 20 }}
            whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span>{item.label}</span>
            <ArrowRight className="royal3d-arrow" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;
