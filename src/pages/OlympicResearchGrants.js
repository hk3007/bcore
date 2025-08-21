import React from "react";
import { motion } from "framer-motion";
import "./ethics.css";

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="section"
  >
    <div className="card">
      <div className="card-content">
        <h2 className="section-title">{title}</h2>
        <div className="section-body">{children}</div>
      </div>
    </div>
  </motion.div>
);

export const OlympicResearchGrants = () => {
  return (
    <main className="ethics-page">
      <h1 className="page-title">Olympic Research Grants 2025–26</h1>

      <Section title="Introduction">
        <p>
          The Bharat Centre of Olympic Research & Education (BCORE) aims to support Master’s and PhD scholars in India and South Asia conducting Olympic-specific research that aligns with India's Olympic vision. Eligible topics include Olympic bidding, economic impact, infrastructure development, sustainability in sports, mega-event security, technology, Olympic education and values, and more.
        </p>
      </Section>

      <Section title="Objectives">
        <ol>
          <li>Support high-quality independent research in Olympic studies and allied fields.</li>
          <li>Promote research that informs Olympic strategies, policymaking, and institutional reforms.</li>
          <li>Encourage new theoretical and methodological approaches in Olympic research.</li>
          <li>Develop a network of young scholars advancing Olympic values and development.</li>
          <li>Promote research on Olympic bidding, economic impact, sustainability, and more in the Indian context.</li>
        </ol>
      </Section>

      <Section title="Eligibility">
        <ul>
          <li>Citizens of India or South Asia enrolled in a full-time Master’s or PhD program at a recognized university.</li>
          <li>Research must be Olympic-specific and relevant to India's Olympic goals.</li>
          <li>Applicants must have an approved or ongoing research project with substantial progress.</li>
          <li>Early-stage researchers are encouraged to apply.</li>
        </ul>
      </Section>

      <Section title="How to Apply">
        <p>
            Download and complete the BCORE Olympic Research Grant 2025 Application Form from the link below. Submit the filled form along with your CV and a 300–500 word research proposal summary to <strong><a href="mailto:bcore@rru.ac.in">bcore@rru.ac.in</a></strong>.
        </p>

        <ul>
            <li>
            📄 <strong>Application Form:</strong>{" "}
            <a href="https://rru.ac.in/wp-content/uploads/2025/06/Application-form-Olympic-Grant-BCORE.pdf" target="_blank" rel="noreferrer">
                Download PDF
            </a>
            </li>
            <li>
            📘 <strong>Guidelines Document:</strong>{" "}
            <a href="https://rru.ac.in/wp-content/uploads/2025/06/Guidlines-Olympic-Research-Grant-by-BCORE.pdf" target="_blank" rel="noreferrer">
                Download PDF
            </a>
            </li>
            <li>
            🖼️ <strong>Poster:</strong>{" "}
            <a href="https://rru.ac.in/wp-content/uploads/2025/06/Olympic-Research-Grantby-BCORE.png" target="_blank" rel="noreferrer">
                View Poster
            </a>
            </li>
        </ul>

        <p><strong>Email Subject:</strong> Applicant – Olympic Research Grant – [Your Full Name]</p>
        <p><strong>Last date to apply:</strong> 14th August 2025</p>
        <p><em>Note: If you miss the deadline but are working on a relevant project, you may still reach out for consideration.</em></p>
        </Section>


      <Section title="Review & Selection">
        <ul>
          <li>Applications will be reviewed by experts in sports policy, economics, and Olympic studies.</li>
          <li>Shortlisted candidates may present their research before the committee.</li>
          <li>Selection is based on relevance, impact, and feasibility.</li>
        </ul>
      </Section>

      <Section title="Grant Disbursement">
        <ol>
          <li>Grants disbursed in two phases: post-selection and post-publication.</li>
          <li>Final report submission is mandatory.</li>
          <li>Funds disbursed after verification of progress and documents.</li>
        </ol>
      </Section>

      <Section title="Entitlements">
        <ul>
          <li>Access to BCORE’s national and international resources.</li>
          <li>Use of BCORE’s physical/virtual libraries and Human Performance Lab.</li>
          <li>Assistance in data collection, networking, and collaborations.</li>
          <li>Opportunities to present at BCORE seminars and conferences.</li>
          <li>Certificate of Research Recognition upon successful completion.</li>
        </ul>
      </Section>

      <Section title="Obligations of Grant Recipients">
        <ul>
          <li>Copyright of the final report rests with BCORE. Publishing requires prior permission.</li>
          <li>Acknowledge BCORE support in all outputs.</li>
          <li>Submit progress reports every 3 months.</li>
          <li>Submit final report upon completion or request.</li>
        </ul>
      </Section>

      <Section title="Monitoring and Compliance">
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
      </Section>

      <Section title="Contact">
        <p>
          For queries, contact the BCORE Grants Team at <a href="mailto:bcore.office@gmail.com">bcore.office@gmail.com</a> or visit <a href="https://bcore.rru.ac.in" target="_blank" rel="noreferrer">https://bcore.rru.ac.in</a>.
        </p>
      </Section>
    </main>
  );
};
