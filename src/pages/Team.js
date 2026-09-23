import React, { useEffect } from "react";
import { TeamMember } from "./TeamMember";
import "./Team.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { Helmet } from "react-helmet";

// =========================================================
// IMAGE IMPORTS
// =========================================================

import image2 from "../pages/Images/TEAM/Bimal Patel.jpeg";
import image3 from "../pages/Images/TEAM/Gaurav Singh Khushwah.jpg";
import image12 from "../pages/Images/TEAM/Utsav Chaware.jpg";
import image4 from "../pages/Images/TEAM/Krishna Ramani.jpeg";
import image6 from "../pages/Images/TEAM/Sonika Bisht.jpeg";
import image7 from "../pages/Images/TEAM/Tonmoy Paul.png";
import image8 from "../pages/Images/TEAM/Dr. Debraj Bhattacharya.jpeg";

// =========================================================
// CORE LEADERSHIP
// =========================================================

const teamMembers = [
  {
    name: "Prof. (Dr.) Bimal N. Patel",
    designation: "Vice-Chancellor",
    photo: image2,
    info:
      "Member, UN International Law Commission (2023-2027). Member, National Security Advisory Board of India.",
  },

  {
    name: "Dr. Jasbirkaur Thadhani",
    designation: "University Dean (I/c)",
    photo:
      "https://legacy.rru.ac.in/wp-content/uploads/2025/02/Jasbir-img-2-scaled-1.jpg",
    info:
      "University Dean (I/c) & Assistant Professor at SBSFI.",
  },

  {
    name: "Lt. (Dr.) Gaurav Singh Kushwah",
    designation: "Associate University Dean",
    photo: image3,
    info:
      "Associate University Dean & Director School of NCC and Police Martial Music Band & Senior Assistant Director (Physical Education and Sports)",
  },

  {
    name: "Dr. Utsav Chaware",
    designation: "Director BCORE",
    photo: image12,
    info:
      "Expert in Olympic Studies, Talent Identification, and Sports Sciences.",
  },

  {
    name: "Mr. Yash Sharma",
    designation: "I/c Director & Assistant Prof.",
    photo:
      "https://legacy.rru.ac.in/wp-content/uploads/2023/05/Yash-Sharma-scaled.jpg",
    info:
      "Specializing in sports science and physical education.",
  },
  {
    name: "Dr. Debraj Bhattacharya",
    designation: "Assistant Professor",
    photo: image8,
    info: "Specializes in Olympic education, sports management, sports science, and inclusive sports policies, with research spanning transgender inclusion and coach education.",
  },
  {
    name: "Ms. Sonika Bisht",
    designation: "Research Officer BCORE",
    photo: image6,
    info:
      "Research Officer at BCORE.",
  },
  {
    name: "Ms. Khushbu Shah",
    designation: "Administrative Assistant cum Coordinator",
    photo:
      "https://legacy.rru.ac.in/wp-content/uploads/2024/01/Khusbhu-Shah-min-scaled.jpg",
    info:
      "Administrative Assistant Cum Coordinator with Bharat Centre for Olympic Research and Education (BCORE)",
  },
];

// =========================================================
// INTERNS
// =========================================================

const interns = [
  {
    name: "Krishna Ramani",
    designation:
      "School of Internal Security, Defence and Strategic Studies",
    photo: image4,
    info: "Operations and Management",
  },

  {
    name: "Tonmoy Paul",
    designation:
      "School of Internal Security, Defence and Strategic Studies",
    photo: image7,
    info: "Multimedia Content Architect",
  },
];

// =========================================================
// TEAM PAGE
// =========================================================

export const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="tm-futuristic-root">

      {/* =====================================================
          SEO
          ===================================================== */}

      <Helmet>

        <title>
          BCORE Team | Bharat Centre of Olympic Research & Education
        </title>

        <meta
          name="description"
          content="Meet the leadership, research, administrative and intern team of the Bharat Centre of Olympic Research and Education at Rashtriya Raksha University."
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

      </Helmet>

      {/* =====================================================
          DECORATIVE BACKGROUND
          ===================================================== */}

      <div
        className="tm-3d-scene"
        aria-hidden="true"
      >
        <div className="tm-ring tm-ring-1"></div>
        <div className="tm-ring tm-ring-2"></div>

        <div className="tm-cube tm-cube-1"></div>
        <div className="tm-cube tm-cube-2"></div>

        <div className="tm-glow-blob"></div>
      </div>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="tm-team-hero">

        {/* Original BCORE photograph */}
        <div
          className="tm-team-hero-image"
          aria-hidden="true"
        ></div>

        {/* Dark image treatment */}
        <div
          className="tm-team-hero-overlay"
          aria-hidden="true"
        ></div>

        {/* Technical grid */}
        <div
          className="tm-team-hero-grid"
          aria-hidden="true"
        ></div>

        {/* =================================================
            HERO CONTENT
            ================================================= */}

        <div
          className="tm-team-hero-content"
          data-aos="fade-right"
        >

          <h1 className="tm-team-hero-title">

            THE PEOPLE

            <br />

            <span>
              BEHIND
            </span>

            <br />

            <strong>
              BCORE
            </strong>

          </h1>

          <p className="tm-team-hero-description">
            Meet the people shaping Olympic research,
            education, leadership and sporting knowledge
            at the Bharat Centre of Olympic Research
            and Education.
          </p>

          <div className="tm-team-hero-bottom">

            <div className="tm-team-hero-line"></div>

            <span>
              LEADERSHIP · RESEARCH · EDUCATION
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <main className="tm-main-container">

        {/* ===================================================
            CORE LEADERSHIP
            =================================================== */}

        <section
          className="tm-team-section"
          aria-labelledby="leadership-heading"
        >

          <div
            className="tm-section-heading"
            data-aos="fade-right"
          >

            <div className="tm-section-heading-main">

              <span className="tm-section-kicker">
                THE PEOPLE BEHIND BCORE
              </span>

              <h2 id="leadership-heading">

                CORE{" "}

                <span className="tm-gold-text">
                  LEADERSHIP
                </span>

              </h2>

            </div>

            <span
              className="tm-section-number"
              aria-hidden="true"
            >
              01
            </span>

          </div>

          <div className="tm-grid-v2">

            {teamMembers.map((member, index) => (

              <article
                key={member.name}
                className="tm-glass-card"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >

                <TeamMember
                  name={member.name}
                  designation={member.designation}
                  photo={member.photo}
                />

                <div className="tm-card-footer">

                  <p>
                    {member.info}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* ===================================================
    INTERNS
    =================================================== */}

        <section
          className="tm-team-section tm-margin-top"
          aria-labelledby="interns-heading"
        >
          <div
            className="tm-section-heading"
            data-aos="fade-right"
          >
            <div className="tm-section-heading-main">
              <span className="tm-section-kicker">
                LEARNING · CONTRIBUTING · GROWING
              </span>

              <h2 id="interns-heading">
                BCORE{" "}
                <span className="tm-gold-text">
                  INTERNS
                </span>
              </h2>
            </div>

            <span
              className="tm-section-number"
              aria-hidden="true"
            >
              02
            </span>
          </div>

          {/* Same grid as Core Leadership */}
          <div className="tm-grid-v2">

            {interns.map((intern, index) => (
              <article
                key={intern.name}
                className="tm-glass-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <TeamMember
                  name={intern.name}
                  designation={intern.designation}
                  photo={intern.photo}
                />

                <div className="tm-card-footer">
                  <p>
                    {intern.info}
                  </p>
                </div>
              </article>
            ))}

          </div>
        </section>

      </main>

    </div>
  );
};

export default Team;