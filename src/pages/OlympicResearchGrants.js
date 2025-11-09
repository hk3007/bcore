import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./OlympicResearchGrants.css";

const FlowSection = ({ title, children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flow-section"
  >
    <div className="flow-node">{index + 1}</div>
    <div className="flow-card">
      <h2 className="flow-title">{title}</h2>
      <div className="flow-content">{children}</div>
    </div>
  </motion.div>
);

export const OlympicResearchGrants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Introduction",
      content: (
        <p>
          The Bharat Centre of Olympic Research & Education (BCORE) aims to support Master’s and PhD scholars in India and South Asia conducting Olympic-specific research that aligns with India's Olympic vision. Eligible topics include Olympic bidding, economic impact, infrastructure development, sustainability in sports, mega-event security, technology, Olympic education and values, and more.
        </p>
      ),
    },
    {
      title: "Objectives",
      content: (
        <ol>
          <li>Support high-quality independent research in Olympic studies and allied fields.</li>
          <li>Promote research that informs Olympic strategies, policymaking, and institutional reforms.</li>
          <li>Encourage new theoretical and methodological approaches in Olympic research.</li>
          <li>Develop a network of young scholars advancing Olympic values and development.</li>
          <li>Promote research on Olympic bidding, economic impact, sustainability, and more in the Indian context.</li>
        </ol>
      ),
    },
    {
      title: "Eligibility",
      content: (
        <ul>
          <li>Citizens of India or South Asia enrolled in a full-time Master’s or PhD program at a recognized university.</li>
          <li>Research must be Olympic-specific and relevant to India's Olympic goals.</li>
          <li>Applicants must have an approved or ongoing research project with substantial progress.</li>
          <li>Early-stage researchers are encouraged to apply.</li>
        </ul>
      ),
    },
    {
      title: "How to Apply",
      content: (
        <>
          <p>
            Download and complete the BCORE Olympic Research Grant 2025 Application Form from the link below. Submit the filled form along with your CV and a 300–500 word research proposal summary to{" "}
            <a href="mailto:bcore@rru.ac.in">bcore@rru.ac.in</a>.
          </p>
          <ul>
            <li>
              📄{" "}
              <a
                href="https://rru.ac.in/wp-content/uploads/2025/06/Application-form-Olympic-Grant-BCORE.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Application Form (PDF)
              </a>
            </li>
            <li>
              📘{" "}
              <a
                href="https://rru.ac.in/wp-content/uploads/2025/06/Guidlines-Olympic-Research-Grant-by-BCORE.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Guidelines Document
              </a>
            </li>
                        <li>
              🖼️{" "}
              <a
                href="https://rru.ac.in/wp-content/uploads/2025/06/Olympic-Research-Grantby-BCORE.png"
                target="_blank"
                rel="noreferrer"
              >
                Poster
              </a>
            </li>
          </ul>
          <p>
            <strong>Last date to apply:</strong> 14th August 2025
          </p>
          <p><i>Note: If you miss the deadline but are working on a relevant project, you may still reach out for consideration.</i></p>
        </>
      ),
    },
    {
      title: "Review & Selection",
      content: (
        <ul>
          <li>Applications will be reviewed by experts in sports policy, economics, and Olympic studies.</li>
          <li>Shortlisted candidates may present their research before the committee.</li>
          <li>Selection is based on relevance, impact, and feasibility.</li>
        </ul>
      ),
    },
    {
      title: "Grant Disbursement",
      content: (
        <ol>
          <li>Grants disbursed in two phases: post-selection and post-publication.</li>
          <li>Final report submission is mandatory.</li>
          <li>Funds disbursed after verification of progress and documents.</li>
        </ol>
      ),
    },
    {
      title: "Entitlements",
      content: (
        <ul>
          <li>Access to BCORE’s national and international resources.</li>
          <li>Use of BCORE’s physical/virtual libraries and Human Performance Lab.</li>
          <li>Assistance in data collection, networking, and collaborations.</li>
          <li>Opportunities to present at BCORE seminars and conferences.</li>
          <li>Certificate of Research Recognition upon successful completion.</li>
        </ul>
      ),
    },
    {
      title: "Obligations of Grant Recipients",
      content: (
        <ul>
          <li>Copyright of the final report rests with BCORE. Publishing requires prior permission.</li>
          <li>Acknowledge BCORE support in all outputs.</li>
          <li>Submit progress reports every 3 months.</li>
          <li>Submit final report upon completion or request.</li>
        </ul>
      ),
    },
    {
      title: "Monitoring and Compliance",
      content: (
        <ul>
          <li>BCORE will review progress reports, expenditure statements, and utilization certificates.</li>
          <li>Non-compliance may result in termination and refund with 10% interest.</li>
          <li>Disclosure of other grants is mandatory.</li>
          <li>Preference given to applicants without major overlapping grants.</li>
          <li>All outputs must credit BCORE appropriately.</li>
          <li>BCORE may reassign affiliation if necessary for timely completion.</li>
          <li>Final reports undergo expert evaluation before final disbursement.</li>
          <li>BCORE reserves the right to audit and monitor progress anytime.</li>
        </ul>
      ),
    },
    {
      title: "Contact",
      content: (
        <p>
          For queries, email{" "}
          <a href="mailto:bcore.office@gmail.com">bcore.office@gmail.com</a> or
          visit{" "}
          <a href="https://bcore.rru.ac.in" target="_blank" rel="noreferrer">
            bcore.rru.ac.in
          </a>
        </p>
      ),
    },
  ];

  return (
    <main className="olympic-page">
      <motion.div
        className="olympic-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="overlay"></div>
        <h1 className="page-title">Olympic Research Grants 2025–26</h1>
        <p className="page-subtitle">
          Empowering Scholars to Shape India’s Olympic Future
        </p>
      </motion.div>

      <div className="flow-container">
        {sections.map((section, index) => (
          <FlowSection
            key={index}
            title={section.title}
            index={index}
            children={section.content}
          />
        ))}
      </div>
    </main>
  );
};
