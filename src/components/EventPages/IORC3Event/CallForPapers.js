import React from "react";
import "./CallForPapers.scss";

const submissionEmail = "olyresearchacademy.submissions@rru.ac.in";

const timeline = [
  {
    number: "01",
    title: "Abstract Submission Deadline",
    date: "30 November 2026",
  },
  {
    number: "02",
    title: "Notification of Acceptance",
    date: "Within 15 working days of abstract submission",
  },
  {
    number: "03",
    title: "Full Paper Submission Deadline",
    date: "31 December 2026",
  },
  {
    number: "04",
    title: "Submission Guidelines",
    date: "Available at bcore.rru.ac.in",
  },
];

const stories = [
  {
    number: "01",
    accent: "blue",
    title: "Share Your Experience",
    text: "Bring your unique perspective as a coach, athlete, or sports professional to the conference.",
  },
  {
    number: "02",
    accent: "yellow",
    title: "Presented at Conference",
    text: "Selected stories will be presented before leaders and decision-makers in the Olympic ecosystem.",
  },
  {
    number: "03",
    accent: "green",
    title: "Featured Widely",
    text: "Your story will be featured on official BCORE platforms and published in the proceedings.",
  },
  {
    number: "04",
    accent: "red",
    title: "Research Support",
    text: "All stories will be published in the proceedings with research support from BCORE.",
  },
];

export default function CallForPapers() {
  return (
    <section className="iorc-cfp">
      {/* ================================================================
          BACKGROUND
      ================================================================ */}
      <div className="iorc-cfp__background" aria-hidden="true">
        <div className="iorc-cfp__glow iorc-cfp__glow--blue" />
        <div className="iorc-cfp__glow iorc-cfp__glow--green" />
        <div className="iorc-cfp__grid" />

        <div className="iorc-cfp__dots">
          <span className="dot dot--blue" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
          <span className="dot dot--red" />
        </div>
      </div>

      {/* ================================================================
          CONTENT
      ================================================================ */}
      <div className="iorc-cfp__container">

        {/* ============================================================
            CALL FOR PAPERS
        ============================================================ */}
        <section className="iorc-cfp__section">

          <div className="iorc-cfp__section-top">
            <div className="iorc-cfp__eyebrow">
              <span className="iorc-cfp__eyebrow-line" />
              <span>03RD INTERNATIONAL OLYMPIC RESEARCH CONFERENCE</span>
            </div>

            <span className="iorc-cfp__section-number">
              01 / 02
            </span>
          </div>

          <div className="iorc-cfp__heading-row">
            <div>
              <h2 className="iorc-cfp__title">
                Call for
                <span>Papers.</span>
              </h2>
            </div>

            <div className="iorc-cfp__heading-side">
              <span>BCORE</span>
              <span>Rashtriya Raksha University</span>
            </div>
          </div>

          <div className="iorc-cfp__intro">
            <div className="iorc-cfp__intro-marker">
              <span />
            </div>

            <p>
              BCORE cordially invites papers for presentation at its 3rd
              International Olympic Research Conference at Rashtriya Raksha
              University, aligned with the four thematic pillars.
            </p>
          </div>

          {/* ============================================================
              TIMELINE
          ============================================================ */}
          <div className="iorc-cfp__timeline">
            <div className="iorc-cfp__timeline-label">
              <span>KEY DATES</span>
              <i />
            </div>

            <div className="iorc-cfp__timeline-list">
              {timeline.map((item) => (
                <article
                  className="iorc-cfp__timeline-item"
                  key={item.number}
                >
                  <div className="iorc-cfp__timeline-number">
                    {item.number}
                  </div>

                  <div className="iorc-cfp__timeline-line">
                    <span />
                  </div>

                  <div className="iorc-cfp__timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ============================================================
              EMAIL
          ============================================================ */}
          <div className="iorc-cfp__submission">
            <div className="iorc-cfp__submission-label">
              <span>SUBMIT ABSTRACTS & PAPERS</span>
              <i />
            </div>

            <a
              href={`mailto:${submissionEmail}`}
              className="iorc-cfp__email"
            >
              {submissionEmail}
              <span className="iorc-cfp__email-arrow">↗</span>
            </a>
          </div>
        </section>

        {/* ================================================================
            DIVIDER
        ================================================================ */}
        <div className="iorc-cfp__divider">
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* ================================================================
            PAPER STORIES
        ================================================================ */}
        <section className="iorc-cfp__section iorc-cfp__section--stories">

          <div className="iorc-cfp__section-top">
            <div className="iorc-cfp__eyebrow">
              <span className="iorc-cfp__eyebrow-line" />
              <span>YOUR EXPERIENCE MATTERS</span>
            </div>

            <span className="iorc-cfp__section-number">
              02 / 02
            </span>
          </div>

          <div className="iorc-cfp__heading-row">
            <div>
              <h2 className="iorc-cfp__title">
                Call for
                <span>Paper Stories.</span>
              </h2>
            </div>

            <div className="iorc-cfp__heading-side">
              <span>SHARE</span>
              <span>INSPIRE · CONNECT · CONTRIBUTE</span>
            </div>
          </div>

          <div className="iorc-cfp__intro">
            <div className="iorc-cfp__intro-marker">
              <span />
            </div>

            <p>
              Not a researcher, but carrying a safe sport experience, a
              coaching insight, or an athlete&apos;s story worth sharing?
              We want to hear from you!
            </p>
          </div>

          {/* ============================================================
              STORY CARDS
          ============================================================ */}
          <div className="iorc-cfp__stories-grid">
            {stories.map((story) => (
              <article
                className={`iorc-cfp__story-card iorc-cfp__story-card--${story.accent}`}
                key={story.number}
              >
                <div className="iorc-cfp__story-top">
                  <span>{story.number}</span>

                  <div className="iorc-cfp__story-dot">
                    <i />
                  </div>
                </div>

                <div className="iorc-cfp__story-body">
                  <h3>{story.title}</h3>

                  <p>{story.text}</p>
                </div>

                <div className="iorc-cfp__story-arrow">
                  ↗
                </div>
              </article>
            ))}
          </div>

          {/* ============================================================
              CTA
          ============================================================ */}
          <div className="iorc-cfp__cta">

            <div className="iorc-cfp__cta-content">
              <span className="iorc-cfp__cta-eyebrow">
                HAVE A STORY TO SHARE?
              </span>

              <h3>
                Your voice can
                <span>shape the conversation.</span>
              </h3>

              <p>
                Bring your experience, insight or story to the Olympic
                ecosystem and contribute to a meaningful conversation around
                sport, athletes and safe sport.
              </p>
            </div>

            <a
              href={`mailto:${submissionEmail}`}
              className="iorc-cfp__cta-button"
            >
              <span>Submit Your Story</span>
              <strong>↗</strong>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}