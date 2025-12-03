import React, { useEffect } from "react";
import "./ethics.css";
import { Helmet } from 'react-helmet';

const Ethics_Statement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ethics-container">
       <Helmet>
        <title>Ethics Statmeent – Bharat Centre of Olympic Research & Education</title>
        <meta name="description" content="Home page of BCORE..." />
      </Helmet>
      {/* === HEADER === */}
      <header className="ethics-header">
        <div className="ethics-header-content">
          <h1>BCORE Olympics Research Conference</h1>
        </div>
      </header>

      {/* === INTRODUCTION === */}
      <section className="ethics-section">
        <div className="ethics-inner">
          <h2>Introduction</h2>
          <p>
            BCORE's International Olympics Research Conference is committed to maintaining the highest standards of publication ethics and follows the principles and guidelines established by the Committee on Publication Ethics (COPE). All participants—authors, reviewers, editors, and conference organizers—are expected to adhere to these ethical standards throughout the submission, review, and publication processes.
          </p>
        </div>
      </section>

      {/* === RESEARCH INTEGRITY === */}
      <section className="ethics-section alt">
        <div className="ethics-inner">
          <h2>Research Integrity</h2>
          <ul>
            <li>Original Research: All submissions must represent original work that has not been previously published or under consideration elsewhere.</li>
            <li>Data Integrity: Authors must ensure the accuracy of data presented and be prepared to provide access to raw data if requested by editors or reviewers.</li>
            <li>Research Methods: Research methodologies must be clearly described to allow for reproducibility and validation.</li>
            <li>
              Human Subjects Research: All research involving human participants must comply with relevant ethical standards including informed consent, privacy protection, and appropriate institutional review board (IRB) approval.</li>
            <li>Athletic Performance Data: Research involving Olympic athletes' performance data must respect all applicable data protection regulations and athlete privacy rights.</li>
          </ul>
        </div>
      </section>

      {/* === AUTHORSHIP === */}
      <section className="ethics-section">
        <div className="ethics-inner">
          <h2>Authorship</h2>
          <ul>
            <li>
              Authorship Criteria: All listed authors must have made significant contributions to the research and writing of the paper.
            </li>
            <li>
              Author Responsibilities:
              <ul>
                <li>All authors share responsibility for the content of the submission</li>
                <li>The corresponding author is responsible for ensuring all co-authors have reviewed and approved the final version</li>
                <li>Any changes to authorship after initial submission must be approved by all authors</li>
              </ul>
            </li>
            <li>Acknowledgments: Contributors who do not meet full authorship criteria should be acknowledged appropriately.</li>
          </ul>
        </div>
      </section>

      {/* === PLAGIARISM === */}
      <section className="ethics-section alt">
        <div className="ethics-inner">
          <h2>Plagiarism and Misconduct</h2>
          <ul>
            <li>Plagiarism: All submissions will be checked for plagiarism. The presentation of others' work or ideas as one's own is unacceptable.</li>
            <li>Self-Plagiarism: Reusing substantial portions of one's own previously published work without appropriate citation is considered self-plagiarism.</li>
            <li>
              Data Fabrication/Falsification: Manipulating research data with the intention to deceive is considered serious misconduct.
            </li>
            <li>Citation Manipulation: Excessive self-citation or citation arrangements between authors to artificially increase citation metrics is prohibited.</li>
          </ul>
        </div>
      </section>

      {/* === CONFLICTS OF INTEREST === */}
      <section className="ethics-section">
        <div className="ethics-inner">
          <h2>Conflicts of Interest</h2>
          <ul>
            <li>
              Disclosure Requirements: All authors must disclose any financial or personal relationships that might bias their work.
            </li>
            <li>
              Sports Organization Affiliations: Authors must disclose any affiliations with Olympic organizations, national sports bodies, or sponsoring entities.
            </li>
            <li>unding Sources: All sources of funding for the research must be clearly stated.</li>
          </ul>
        </div>
      </section>

      {/* === PEER REVIEW === */}
      <section className="ethics-section alt">
        <div className="ethics-inner">
          <h2>Peer Review Process</h2>
          <ul>
            <li>Double-Blind Review: To minimize bias, the BCORE Olympics Research Conference employs a double-blind review process where both authors' and reviewers' identities are concealed.</li>
            <li>Reviewer Ethics:
              <ul>
                <li>Reviewers must maintain confidentiality of all submissions</li>
                <li>Reviewers must declare any conflicts of interest before agreeing to review</li>
                <li>Reviews should be objective, constructive, and timely</li>
                <li>Reviewers should not use information from manuscripts for personal advantage</li>
              </ul>
            </li>
            <li>Editorial Independence: Editorial decisions are based solely on academic merit and are independent of commercial or organizational interes</li>
          </ul>
        </div>
      </section>

      {/* === PUBLICATION DECISIONS === */}
      <section className="ethics-section">
        <div className="ethics-inner">
          <h2>Publication Decisions</h2>
          <ul>
            <li>
              Acceptance Criteria: Decisions regarding acceptance are based on research quality, originality, clarity, and relevance to Olympic studies.
            </li>
            <li>
              Appeals Process: Authors may appeal publication decisions through a formal process outlined in the conference guidelines.
            </li>
          </ul>
        </div>
      </section>

      {/* === POST PUBLICATION === */}
      <section className="ethics-section alt">
        <div className="ethics-inner">
          <h2>Post-Publication Practices</h2>
          <ul>
            <li>Corrections and Retractions: The conference proceedings will publish corrections, clarifications, or retractions when necessary.</li>
            <li>
              Reader Feedbacks: Mechanisms for reader feedback and discussion of published research will be provided.
            </li>
          </ul>
        </div>
      </section>

      {/* === COPYRIGHT === */}
      <section className="ethics-section">
        <div className="ethics-inner">
          <h2>Copyright and Open Access</h2>
          <ul>
            <li>Copyright Policy: Authors retain copyright while granting the conference the right to publish and distribute the work.</li>
            <li>
              Open Access: The conference is committed to open access principles, making research widely available while respecting intellectual property rights.
            </li>
          </ul>
        </div>
      </section>

      {/* === COPE === */}
      <section className="ethics-section alt">
        <div className="ethics-inner">
          <h2>COPE Adherence</h2>
          <p>
            The BCORE Olympics Research Conference follows the guidelines established by the Committee on Publication Ethics (COPE). For specific cases not covered in these guidelines, we will refer to COPE's flowcharts and recommendations (available at{" "}
            <a
              href="https://publicationethics.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              publicationethics.org
            </a>
           ) to ensure ethical handling of all publication matters.
          </p>
        </div>
      </section>

      {/* === CONTACT === */}
      <section className="ethics-section contact">
        <div className="ethics-inner">
          <h2>Contact</h2>
          <p>
            For any questions or concerns regarding publication ethics, please contact the Ethics Committee of the BCORE Olympics Research Conference at{" "}
            <strong>
              <a href="mailto:bcore@rru.ac.in">bcore@rru.ac.in</a>
            </strong>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Ethics_Statement;
