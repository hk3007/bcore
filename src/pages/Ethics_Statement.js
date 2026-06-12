import React, { useEffect } from "react";
import "./ethics.css";
import {
  ShieldCheck, FileText, Search, Users, CheckCircle,
  Award, Globe, Scale, ChevronRight, Mail
} from "lucide-react";
import { Helmet } from "react-helmet";

const Section = ({ title, children, alt }) => (
  <section className={`es-section ${alt ? "es-section--alt" : ""}`}>
    <div className="es-wrap">
      <h2 className="es-section-title">{title}</h2>
      <div className="es-section-body">{children}</div>
    </div>
  </section>
);

const EthicsList = ({ items }) => (
  <ul className="es-list">
    {items.map((item, i) => (
      <li key={i}>
        {typeof item === "string" ? item : (
          <>
            {item.text}
            {item.sub && (
              <ul className="es-list es-list--sub">
                {item.sub.map((s, j) => <li key={j}>{s}</li>)}
              </ul>
            )}
          </>
        )}
      </li>
    ))}
  </ul>
);

const Ethics_Statement = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="es-root">
      <Helmet>
        <title>Ethics Statement – BCORE</title>
        <meta name="description" content="Ethics and integrity statement for the BCORE International Olympics Research Conference." />
      </Helmet>

      {/* ── HERO ── */}
      <header className="es-hero">
        <div className="es-hero__bg" aria-hidden />
        <div className="es-wrap es-hero__inner">
          <div className="es-hero__left">
            <div className="es-hero__eyebrow">
              <span className="es-pill"><ShieldCheck size={12}/> COPE Standards</span>
              <span className="es-pill"><Scale size={12}/> Double-Blind Review</span>
              <span className="es-pill es-pill--hi"><Globe size={12}/> BCORE Conference</span>
            </div>
            <h1 className="es-hero__h1">Conference <em>Ethics</em> &amp; Integrity</h1>
            <p className="es-hero__desc">
              BCORE International Olympics Research Conference is committed to the highest
              standards of publication ethics, following principles established by the
              Committee on Publication Ethics (COPE).
            </p>
          </div>
          <div className="es-hero__cards">
            <div className="es-hcard">
              <ShieldCheck size={20} className="es-hcard__ico"/>
              <div className="es-hcard__t">COPE Aligned</div>
              <div className="es-hcard__d">Global ethics framework</div>
            </div>
            <div className="es-hcard">
              <Users size={20} className="es-hcard__ico"/>
              <div className="es-hcard__t">Double-Blind</div>
              <div className="es-hcard__d">Unbiased peer review</div>
            </div>
            <div className="es-hcard">
              <Award size={20} className="es-hcard__ico"/>
              <div className="es-hcard__t">Open Access</div>
              <div className="es-hcard__d">Research for everyone</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── PROCESS STRIP ── */}
      <div className="es-process">
        <div className="es-wrap es-process__inner">
          <div className="es-process__step">
            <div className="es-process__ico"><Search size={18}/></div>
            <div>
              <div className="es-process__label">01 · Originality Check</div>
              <div className="es-process__desc">Plagiarism and data integrity screening</div>
            </div>
          </div>
          <ChevronRight size={16} className="es-process__arrow"/>
          <div className="es-process__step">
            <div className="es-process__ico"><Users size={18}/></div>
            <div>
              <div className="es-process__label">02 · Double-Blind Review</div>
              <div className="es-process__desc">Objective, merit-based evaluation</div>
            </div>
          </div>
          <ChevronRight size={16} className="es-process__arrow"/>
          <div className="es-process__step">
            <div className="es-process__ico"><CheckCircle size={18}/></div>
            <div>
              <div className="es-process__label">03 · Publication</div>
              <div className="es-process__desc">Acceptance based on transparency</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTENT SECTIONS ── */}
      <Section title="Introduction">
        <p>
          BCORE's International Olympics Research Conference is committed to maintaining
          the highest standards of publication ethics and follows the principles and
          guidelines established by the Committee on Publication Ethics (COPE). All
          participants — authors, reviewers, editors, and conference organizers — are
          expected to adhere to these ethical standards throughout the submission, review,
          and publication processes.
        </p>
      </Section>

      <Section title="Research Integrity" alt>
        <EthicsList items={[
          "Original Research: All submissions must represent original work that has not been previously published or under consideration elsewhere.",
          "Data Integrity: Authors must ensure the accuracy of data presented and be prepared to provide access to raw data if requested by editors or reviewers.",
          "Research Methods: Research methodologies must be clearly described to allow for reproducibility and validation.",
          "Human Subjects Research: All research involving human participants must comply with relevant ethical standards including informed consent, privacy protection, and appropriate IRB approval.",
          "Athletic Performance Data: Research involving Olympic athletes' performance data must respect all applicable data protection regulations and athlete privacy rights.",
        ]}/>
      </Section>

      <Section title="Authorship">
        <EthicsList items={[
          "Authorship Criteria: All listed authors must have made significant contributions to the research and writing of the paper.",
          {
            text: "Author Responsibilities:",
            sub: [
              "All authors share responsibility for the content of the submission.",
              "The corresponding author is responsible for ensuring all co-authors have reviewed and approved the final version.",
              "Any changes to authorship after initial submission must be approved by all authors.",
            ]
          },
          "Acknowledgments: Contributors who do not meet full authorship criteria should be acknowledged appropriately.",
        ]}/>
      </Section>

      <Section title="Plagiarism and Misconduct" alt>
        <EthicsList items={[
          "Plagiarism: All submissions will be checked for plagiarism. The presentation of others' work or ideas as one's own is unacceptable.",
          "Self-Plagiarism: Reusing substantial portions of one's own previously published work without appropriate citation is considered self-plagiarism.",
          "Data Fabrication/Falsification: Manipulating research data with the intention to deceive is considered serious misconduct.",
          "Citation Manipulation: Excessive self-citation or citation arrangements between authors to artificially increase citation metrics is prohibited.",
        ]}/>
      </Section>

      <Section title="Conflicts of Interest">
        <EthicsList items={[
          "Disclosure Requirements: All authors must disclose any financial or personal relationships that might bias their work.",
          "Sports Organization Affiliations: Authors must disclose any affiliations with Olympic organizations, national sports bodies, or sponsoring entities.",
          "Funding Sources: All sources of funding for the research must be clearly stated.",
        ]}/>
      </Section>

      <Section title="Peer Review Process" alt>
        <EthicsList items={[
          "Double-Blind Review: To minimize bias, the BCORE Olympics Research Conference employs a double-blind review process where both authors' and reviewers' identities are concealed.",
          {
            text: "Reviewer Ethics:",
            sub: [
              "Reviewers must maintain confidentiality of all submissions.",
              "Reviewers must declare any conflicts of interest before agreeing to review.",
              "Reviews should be objective, constructive, and timely.",
              "Reviewers should not use information from manuscripts for personal advantage.",
            ]
          },
          "Editorial Independence: Editorial decisions are based solely on academic merit and are independent of commercial or organizational interests.",
        ]}/>
      </Section>

      <Section title="Publication Decisions">
        <EthicsList items={[
          "Acceptance Criteria: Decisions regarding acceptance are based on research quality, originality, clarity, and relevance to Olympic studies.",
          "Appeals Process: Authors may appeal publication decisions through a formal process outlined in the conference guidelines.",
        ]}/>
      </Section>

      <Section title="Post-Publication Practices" alt>
        <EthicsList items={[
          "Corrections and Retractions: The conference proceedings will publish corrections, clarifications, or retractions when necessary.",
          "Reader Feedback: Mechanisms for reader feedback and discussion of published research will be provided.",
        ]}/>
      </Section>

      <Section title="Copyright and Open Access">
        <EthicsList items={[
          "Copyright Policy: Authors retain copyright while granting the conference the right to publish and distribute the work.",
          "Open Access: The conference is committed to open access principles, making research widely available while respecting intellectual property rights.",
        ]}/>
      </Section>

      <Section title="COPE Adherence" alt>
        <p>
          The BCORE Olympics Research Conference follows the guidelines established by
          the Committee on Publication Ethics (COPE). For specific cases not covered in
          these guidelines, we will refer to COPE's flowcharts and recommendations
          (available at{" "}
          <a href="https://publicationethics.org" target="_blank" rel="noopener noreferrer">
            publicationethics.org
          </a>
          ) to ensure ethical handling of all publication matters.
        </p>
      </Section>

      {/* ── CONTACT ── */}
      <div className="es-wrap">
        <div className="es-contact">
          <div className="es-contact__left">
            <Mail size={24} className="es-contact__ico"/>
            <div>
              <h3 className="es-contact__h">Ethics Committee</h3>
              <p>For questions or concerns regarding publication ethics, contact us at</p>
            </div>
          </div>
          <a href="mailto:bcore@rru.ac.in" className="es-btn">
            bcore@rru.ac.in
          </a>
        </div>
      </div>

    </div>
  );
};

export default Ethics_Statement;