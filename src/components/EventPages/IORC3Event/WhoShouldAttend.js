import React from "react";
import { motion } from "framer-motion";
import { UsersRound, ArrowUpRight } from "lucide-react";
import "./WhoShouldAttend.scss";

const attendees = [
  "Physical education teachers",
  "Coaches and support staff",
  "Athletes and Olympians",
  "Sports administrators and federation officials",
  "National Olympic Committees",
  "National Olympic Academies from across Asia",
  "OCOG officials and representatives",
  "International and national academicians and researchers",
  "Sports management professionals",
  "Safeguarding and child protection practitioners",
  "Sports medicine and mental health professionals",
  "Policymakers and government representatives",
];

const ringColors = [
  "#0085C7",
  "#F4C300",
  "#009F3D",
  "#DF0024",
];

export default function WhoShouldAttend() {
  return (
    <section className="irc-attend-section">
      {/* Background */}
      <div className="irc-attend-grid-bg" aria-hidden="true" />

      <div className="irc-attend-inner">

        {/* HEADER */}
        <motion.div
          className="irc-attend-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="irc-attend-eyebrow">
            Global Participation
          </span>

          <div className="irc-attend-heading-row">
            <span className="irc-attend-heading-line" />

            <h2 className="irc-attend-title">
              Who Should Attend
            </h2>
          </div>

          <p className="irc-attend-lead">
            The conference is designed for stakeholders and global
            participants including:
          </p>
        </motion.div>

        {/* ATTENDEE GRID */}
        <ul className="irc-attend-grid">
          {attendees.map((item, i) => {
            const accent =
              ringColors[i % ringColors.length];

            return (
              <motion.li
                key={i}
                className="irc-attend-item"
                style={{
                  "--attend-accent": accent,
                }}
                initial={{
                  opacity: 0,
                  y: 22,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.045,
                }}
                viewport={{
                  once: true,
                  margin: "-40px",
                }}
              >
                {/* Number */}
                <span className="irc-attend-number">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <span
                  className="irc-attend-icon"
                  aria-hidden="true"
                >
                  <UsersRound
                    size={16}
                    strokeWidth={1.8}
                  />
                </span>

                {/* Text */}
                <span className="irc-attend-text">
                  {item}
                </span>

                {/* Arrow */}
                <span
                  className="irc-attend-arrow"
                  aria-hidden="true"
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.7}
                  />
                </span>

                {/* Accent */}
                <span
                  className="irc-attend-accent"
                  aria-hidden="true"
                />
              </motion.li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}