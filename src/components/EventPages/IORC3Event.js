import React from "react";
import "./IORC3Event.scss";
import IORC3EventTabs from "./IORC3EventTabs";

/* =========================================================================
   HEADER / HERO
   ========================================================================= */

function Header() {
  return (
    <header className="irc-hero">
      {/* Background decoration */}
      <div className="irc-hero__noise" aria-hidden="true" />
      <div className="irc-hero-glow irc-hero-glow-1" aria-hidden="true" />
      <div className="irc-hero-glow irc-hero-glow-2" aria-hidden="true" />
      <div className="irc-hero__grid" aria-hidden="true" />

      {/* Abstract accent dots */}
      <div className="irc-hero__decor" aria-hidden="true">
        <span className="hero-dot hero-dot--blue" />
        <span className="hero-dot hero-dot--yellow" />
        <span className="hero-dot hero-dot--green" />
        <span className="hero-dot hero-dot--red" />
      </div>

      {/* Main Hero Content — now split into two columns */}
      <div className="irc-hero-content irc-hero-content--split">

        {/* LEFT COLUMN — all existing text content */}
        <div className="irc-hero-content__text">

          {/* Institution */}
          <div className="irc-hero-meta">
            <span>BCORE</span>
            <span className="irc-hero-meta__line" />
            <span>Rashtriya Raksha University</span>
          </div>

          {/* EVENT NAME */}
          <div className="irc-event-label">
            <div className="irc-event-label__ordinal">
              <span className="irc-event-label__number">03</span>
              <span className="irc-event-label__suffix">RD</span>
            </div>

            <div className="irc-event-label__divider" />

            <div className="irc-event-label__content">
              <span className="irc-event-label__eyebrow">
                BCORE International Olympic
              </span>
              <h2 className="irc-event-label__title">
                Research Conference
              </h2>
            </div>
          </div>

          {/* THEME */}
          <h1 className="irc-hero-title">
            <span className="irc-hero-title__line">THE ATHLETE</span>
            <span className="irc-hero-title__line irc-hero-title__accent">
              AT THE HEART.
            </span>
          </h1>

          <p className="irc-hero-subtitle">
            A Value-Driven Olympic Ecosystem
          </p>

          {/* Event information */}
          <div className="irc-hero-bottom">

            {/* Date */}
            {/* Date */}
            <div className="irc-hero-date">
              <div className="irc-hero-date__main">
                <div className="date-block">
                  <strong>27</strong>
                  <em>JAN</em>
                </div>

                <span className="date-sep">—</span>

                <div className="date-block">
                  <strong>29</strong>
                  <em>JAN</em>
                </div>

                <div className="date-year">
                  2027
                </div>
              </div>

              {/* International participants note */}
              <p className="irc-hero-date__note">
                International Participants: <strong>27–30 Jan 2027</strong>
              </p>
            </div>

            {/* Venue */}
            <div className="irc-hero-location">
              <span>VENUE</span>

              <strong>
                Rashtriya Raksha University
              </strong>

              <small>
                Gandhinagar, Gujarat
              </small>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN — video panel */}
        <div className="irc-hero-video" aria-hidden="false">
          <div className="irc-hero-video__frame">
            <iframe
              className="irc-hero-video__iframe"
              src="https://www.youtube-nocookie.com/embed/xqKRRJ3-IT0?autoplay=1&mute=1&loop=1&playlist=xqKRRJ3-IT0&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1"
              title="IORC Conference Highlight"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen={false}
            />
            {/* Transparent overlay to block clicks -> stops redirect to YouTube */}
            <div className="irc-hero-video__shield" />
          </div>

          {/* Small accent chip to tie it into the Olympic ring theme */}
          <div className="irc-hero-video__chip">
            <span className="chip-dot chip-dot--blue" />
            <span className="chip-dot chip-dot--yellow" />
            <span className="chip-dot chip-dot--green" />
            <span className="chip-dot chip-dot--red" />
            <span className="irc-hero-video__chip-text">Conference Glimpse</span>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="irc-hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>
    </header>
  );
}

/* =========================================================================
   CALL FOR ABSTRACT
   ========================================================================= */

const callForAbstract = {
  text: `BCORE cordially invites abstracts for presentation at its International Olympic Research Conference at Rashtriya Raksha University. Submissions addressing hosting and organizing, Olympic education, sustainable development, and technological innovation are particularly welcomed. Early career researchers are encouraged to participate.`,
  submissionEmail: "olyresearchacademy.submissions@rru.ac.in",
  deadline: "30th November 2026",
};

/* =========================================================================
   ABSTRACT GUIDELINES
   ========================================================================= */

const abstractGuidelines = {
  formatRequirements: [
    "Abstract should be between 150-250 words.",
    "Use 12-point Times New Roman font.",
    "Double-space all text.",
    "Set 1-inch (2.54 cm) margins on all sides.",
    "Include page number in the top-right header.",
    'Center the word "Abstract" as the title (bold).',
    "Text should be left-aligned and not indented.",
  ],

  contentStructure: [
    {
      heading: "Introduction",
      description:
        "Begin with a brief introduction to the research problem. Clearly state the purpose and objectives of the study.",
    },
    {
      heading: "Methodology",
      description:
        "Describe the research design. Include information about participants, if applicable. Outline data collection methods and procedures. Mention analytical approaches used.",
    },
    {
      heading: "Results",
      description:
        "Present key findings concisely. Include statistical significance when relevant. Focus on main outcomes only.",
    },
    {
      heading: "Conclusions",
      description:
        "State primary conclusions. Address implications of findings. Avoid introducing new information.",
    },
    {
      heading: "Keywords",
      description:
        'Include 3-5 keywords. Place keywords on a new line below the abstract. Indent the first line of keywords. Begin with "Keywords:" (italicized).',
    },
  ],
};

/* =========================================================================
   REGISTRATION STEPS
   ========================================================================= */

const steps = [
  {
    event: "Step 1",
    date: "Submit the abstract",
  },
  {
    event: "Step 2",
    date: "Wait for confirmation",
  },
  {
    event: "Step 3",
    date: "Register to the Olympic Conference",
  },
  {
    event: "Step 4",
    date: "Fill Google Form",
  },
];

/* =========================================================================
   PAGE
   ========================================================================= */

export default function IORC3Event() {
  return (
    <div className="irc-page">
      <Header />

      <main className="irc-body">
        <IORC3EventTabs />
      </main>
    </div>
  );
}