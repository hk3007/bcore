import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  GraduationCap,
  FlaskConical,
  Handshake,
  Landmark,
  ArrowRight,
  ShieldCheck,
  Target,
  Users,
  BookOpen,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./BCOREServices.css";


// =========================================================
// SERVICE DOMAINS
// =========================================================

const serviceDomains = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Education & Capacity Building",
    description:
      "Design and delivery of customised workshops, training programmes, seminars, conferences, webinars and stakeholder consultations for athletes, coaches, administrators, officials and other sporting stakeholders.",
    areas: [
      "Sports governance",
      "Olympic education",
      "Athlete safeguarding",
      "Sports integrity",
      "Anti-doping",
      "Sports law",
      "Ethics",
      "Emerging issues in sport",
    ],
  },

  {
    number: "02",
    icon: FlaskConical,
    title: "Research & Evidence",
    description:
      "State- and institution-specific research to generate reliable evidence for decision-making and strengthen understanding of contemporary sporting ecosystems.",
    areas: [
      "Sports ecosystem assessments",
      "Surveys",
      "Stakeholder studies",
      "Athlete studies",
      "Gap analyses",
      "Programme evaluations",
      "Policy research",
      "Athlete welfare",
      "Safeguarding studies",
      "Performance analysis",
    ],
  },

  {
    number: "03",
    icon: Handshake,
    title: "Extension & Outreach",
    description:
      "Translation of research and academic knowledge into practical interventions through awareness programmes, community initiatives, athlete education, safeguarding interventions and field-based engagement.",
    areas: [
      "Awareness programmes",
      "Community initiatives",
      "Athlete education",
      "Safeguarding interventions",
      "Stakeholder consultations",
      "Field-based engagement",
      "Research-to-practice",
    ],
  },

  {
    number: "04",
    icon: Landmark,
    title: "Governance & Policy Support",
    description:
      "Academic and technical support for strengthening sports governance and institutional systems through governance reviews, policy analysis, institutional assessments and implementation support.",
    areas: [
      "Governance reviews",
      "Policy analysis",
      "Institutional assessments",
      "Good practices",
      "Programme monitoring",
      "Programme evaluation",
      "Institutional strengthening",
      "Major sporting events",
    ],
  },
];


// =========================================================
// APPROACH ITEMS
// =========================================================

const approachItems = [
  {
    icon: Target,
    title: "Context-Specific",
    text: "Support is tailored to the priorities, needs and sporting environment of each partner.",
  },
  {
    icon: FlaskConical,
    title: "Evidence-Based",
    text: "Research and reliable evidence inform academic, technical and policy support.",
  },
  {
    icon: Users,
    title: "Collaborative",
    text: "BCORE connects researchers, practitioners, institutions and sporting stakeholders.",
  },
  {
    icon: ShieldCheck,
    title: "Impact-Oriented",
    text: "Knowledge is translated into practical interventions that strengthen sporting systems.",
  },
];


// =========================================================
// PAGE
// =========================================================

export const BCOREServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bcore-services-page">

      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>

        <title>
          BCORE as a Service Provider | Bharat Centre of Olympic Research &
          Education
        </title>

        <meta
          name="description"
          content="BCORE provides research-driven academic, technical and policy support across Olympic education, sports research, outreach, governance and policy."
        />

        <meta
          name="keywords"
          content="BCORE, Olympic Research, Olympic Education, Sports Research, Sports Governance, Sports Policy, Rashtriya Raksha University"
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
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="bsp-background"
        aria-hidden="true"
      >
        <div className="bsp-grid"></div>

        <div className="bsp-ring bsp-ring-one"></div>

        <div className="bsp-ring bsp-ring-two"></div>

        <div className="bsp-red-orb"></div>

        <div className="bsp-gold-orb"></div>
      </div>


      {/* =====================================================
          DARK PAGE HEADER / HERO
      ===================================================== */}

      <header className="bsp-page-header">

        <div className="bsp-header-grid"></div>

        <div className="bsp-header-ring bsp-header-ring-one"></div>

        <div className="bsp-header-ring bsp-header-ring-two"></div>

        <div className="bsp-header-content">

          {/* Top metadata */}

          <div
            className="bsp-header-meta"
            data-aos="fade-down"
          >

            <span className="bsp-header-line"></span>

            <span>BCORE</span>

            <span className="bsp-header-slash">
              /
            </span>

            <span>SERVICE PROVIDER</span>

            <span className="bsp-header-line"></span>

          </div>


          {/* Main title */}

          <h1 data-aos="fade-up">

            BCORE

            <span>
              AS A
            </span>

            SERVICE
            PROVIDER

          </h1>


          {/* Statement */}

          <div
            className="bsp-header-statement"
            data-aos="fade-up"
            data-aos-delay="120"
          >

            <span>
              EVIDENCE
            </span>

            <i></i>

            <span>
              EDUCATION
            </span>

            <i></i>

            <span>
              POLICY
            </span>

            <i></i>

            <span>
              IMPACT
            </span>

          </div>


          {/* Intro */}

          <p
            className="bsp-header-description"
            data-aos="fade-up"
            data-aos-delay="220"
          >
            Research-driven academic, technical and policy support
            for governments, sports organisations, institutions and
            sporting stakeholders.
          </p>


          {/* Bottom indicator */}

          <div
            className="bsp-header-bottom"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <span>
              OLYMPIC RESEARCH
            </span>

            <span>
              /
            </span>

            <span>
              EDUCATION
            </span>

            <span>
              /
            </span>

            <span>
              GOVERNANCE
            </span>

          </div>

        </div>


        {/* Vertical side label */}

        <div className="bsp-side-label">
          BCORE / RRU
        </div>

      </header>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <main>

        <section className="bsp-introduction">

          <div
            className="bsp-section-index"
            data-aos="fade-right"
          >

            <span>
              01
            </span>

            <div></div>

            <p>
              ABOUT
            </p>

          </div>


          <div
            className="bsp-introduction-content"
            data-aos="fade-up"
          >

            <span className="bsp-kicker">
              EVIDENCE-DRIVEN SPORTING SYSTEMS
            </span>

            <h2>

              Knowledge that
              <br />

              <span>
                strengthens sport.
              </span>

            </h2>

            <p>
              The Bharat Centre of Olympic Research and Education
              (BCORE), Rashtriya Raksha University, provides
              research-driven academic, technical and policy support
              to governments, sports organisations, institutions and
              other stakeholders seeking to strengthen sporting
              systems and advance the principles of Olympism.
            </p>

            <p>
              As an IOC Olympic Study Centre, BCORE brings together
              multidisciplinary research, education and field-based
              expertise to address contemporary challenges in sport.
            </p>


            <div className="bsp-audience">

              <span>
                GOVERNMENTS
              </span>

              <span>
                SPORTS ORGANISATIONS
              </span>

              <span>
                INSTITUTIONS
              </span>

              <span>
                ATHLETES & COACHES
              </span>

              <span>
                SPORTING STAKEHOLDERS
              </span>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOUR DOMAINS
        ===================================================== */}

        <section className="bsp-services">

          <div
            className="bsp-section-heading"
            data-aos="fade-up"
          >

            <div>

              <span className="bsp-kicker">
                OUR SERVICE FRAMEWORK
              </span>

              <h2>
                FOUR
                <span>
                  DOMAINS
                </span>
              </h2>

            </div>

            <div className="bsp-heading-number">
              02
            </div>

          </div>


          <div className="bsp-service-grid">

            {serviceDomains.map((service, index) => {

              const Icon = service.icon;

              return (

                <article
                  className="bsp-service-card"
                  key={service.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >

                  {/* Card top */}

                  <div className="bsp-card-top">

                    <span className="bsp-card-number">
                      {service.number}
                    </span>

                    <div className="bsp-card-icon">
                      <Icon
                        size={25}
                        strokeWidth={1.5}
                      />
                    </div>

                  </div>


                  {/* Title */}

                  <h3>
                    {service.title}
                  </h3>


                  {/* Description */}

                  <p className="bsp-service-description">
                    {service.description}
                  </p>


                  <div className="bsp-card-rule"></div>


                  {/* Areas */}

                  <div className="bsp-service-areas">

                    {service.areas.map((area) => (

                      <span key={area}>

                        <ArrowRight
                          size={12}
                        />

                        {area}

                      </span>

                    ))}

                  </div>


                  {/* Decorative number */}

                  <div
                    className="bsp-card-background-number"
                    aria-hidden="true"
                  >
                    {service.number}
                  </div>

                </article>

              );

            })}

          </div>

        </section>


        {/* =====================================================
            APPROACH
        ===================================================== */}

        <section className="bsp-approach">

          <div
            className="bsp-section-index"
            data-aos="fade-right"
          >

            <span>
              03
            </span>

            <div></div>

            <p>
              APPROACH
            </p>

          </div>


          <div className="bsp-approach-content">

            <div
              className="bsp-approach-heading"
              data-aos="fade-up"
            >

              <span className="bsp-kicker">
                OUR APPROACH
              </span>

              <h2>

                Research.

                <span>
                  Education.
                </span>

                Governance.

                <strong>
                  Impact.
                </strong>

              </h2>

            </div>


            <p
              className="bsp-approach-intro"
              data-aos="fade-up"
            >
              BCORE works through a context-specific and
              evidence-based model, tailoring its academic and
              technical support to the priorities of each partner.
            </p>


            <div className="bsp-approach-grid">

              {approachItems.map((item, index) => {

                const Icon = item.icon;

                return (

                  <article
                    className="bsp-approach-card"
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                  >

                    <div className="bsp-approach-icon">

                      <Icon
                        size={22}
                        strokeWidth={1.5}
                      />

                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </article>

                );

              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            IMPACT STRIP
        ===================================================== */}

        <section className="bsp-impact">

          <div className="bsp-impact-inner">

            <div
              className="bsp-impact-title"
              data-aos="fade-right"
            >

              <span>
                CONNECTING
              </span>

              <h2>
                RESEARCH
                <br />
                <strong>
                  TO ACTION.
                </strong>
              </h2>

            </div>


            <div
              className="bsp-impact-content"
              data-aos="fade-left"
            >

              <div className="bsp-impact-line"></div>

              <p>
                By connecting research, education, governance and
                implementation, BCORE seeks to contribute to a
                safe, ethical, inclusive and future-ready sporting
                ecosystem.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section
          className="bsp-cta"
          data-aos="fade-up"
        >

          <div className="bsp-cta-pattern"></div>

          <div className="bsp-cta-content">

            <span className="bsp-kicker">
              WORK WITH BCORE
            </span>

            <h2>

              BUILD STRONGER
              <br />

              <span>
                SPORTING SYSTEMS.
              </span>

            </h2>

            <p>
              BCORE brings together research, education,
              governance and field-based expertise to support
              institutions and organisations working towards
              stronger sporting ecosystems.
            </p>

            <a
              href="/contact"
              className="bsp-cta-button"
            >

              DISCUSS A COLLABORATION

              <ArrowRight size={17} />

            </a>

          </div>

        </section>

      </main>

    </div>
  );
};


export default BCOREServices;