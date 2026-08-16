import React from "react";
import "./IORC3Event.scss";

import HeroShowcase from "./IORC3Event/HeroShowcase";
import VisionObjectives from "./IORC3Event/VisionObjectives";
import WhySafeSport from "./IORC3Event/WhySafeSport";
import ConferenceStructure from "./IORC3Event/ConferenceStructure";
import SummitAndFeatures from "./IORC3Event/SummitAndFeatures";
import WhoShouldAttend from "./IORC3Event/WhoShouldAttend";
import RegistrationTable from "./IORC3Event/RegistrationTable";
import VenueSection from "./IORC3Event/VenueSection";
import ExpectedOutcomes from "./IORC3Event/ExpectedOutcomes";
import CallForAbstract from "../eventsdetails/CallForAbstract";
import AbstractGuidelines from "../eventsdetails/AbstractGuidelines";
import StepsToRegister from "../eventsdetails/StepsToRegister";

/* =========================================================================
   HEADER
   ========================================================================= */
function Header() {
  return (
    <header className="irc-hero">
      <div className="irc-hero-glow irc-hero-glow-1"></div>
      <div className="irc-hero-glow irc-hero-glow-2"></div>

      <div className="irc-hero-content">
        <span className="irc-hero-kicker">BCORE &middot; Rashtriya Raksha University</span>
        <h1 className="irc-hero-title">
          3rd International Olympic Research Conference
        </h1>
        <p className="irc-hero-subtitle">
          The Athlete at the Heart — A Value-Driven Olympic Ecosystem
        </p>

        <div className="irc-hero-date">
          <span className="date-block">
            <strong>27</strong>
            <em>JAN</em>
          </span>
          <span className="date-sep">–</span>
          <span className="date-block">
            <strong>29</strong>
            <em>JAN</em>
          </span>
          <span className="date-year">2027</span>
        </div>
      </div>
    </header>
  );
}
/* ======================= END HEADER ===================== */

// Same details as the 2nd International Olympic Research Conference (event 3)
const callForAbstract = {
  text: `BCORE cordially invites abstracts for presentation at its International Olympic Research Conference at Rashtriya Raksha University. Submissions addressing hosting and organizing, Olympic education, sustainable development, and technological innovation are particularly welcomed. Early career researchers are encouraged to participate.`,
  submissionEmail: "olyresearchacademy.submissions@rru.ac.in",
  deadline: "30th November 2026",
};

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

const steps = [
  { event: "Step 1", date: " Submit the abstract" },
  { event: "Step 2", date: "Wait For confirmation" },
  { event: "Step 3", date: "Register to the Olympics conference" },
  { event: "Step 4", date: "Fill Google Form" },
];

export default function IORC3Event() {
  return (
    <div className="irc-page">
      <Header />

      <main className="irc-body">
        {/* ABOUT THE CONFERENCE + ABOUT BCORE */}
        <HeroShowcase />

        {/* THEME, VISION & STRATEGIC OBJECTIVES */}
        <VisionObjectives />

        {/* WHY SAFE SPORT */}
        <WhySafeSport />

        {/* CONFERENCE STRUCTURE */}
        <div id="structure">
          <ConferenceStructure />
        </div>

        {/* ASIAN NOA & OSRC SUMMIT + KEY FEATURES */}
        <SummitAndFeatures />

        {/* CALL FOR ABSTRACT */}
        <CallForAbstract callForAbstract={callForAbstract} />

        {/* STEPS TO REGISTER */}
        <StepsToRegister steps={steps} />

        {/* ABSTRACT GUIDELINES */}
        <AbstractGuidelines event={{ abstractGuidelines }} />

        {/* EXPECTED OUTCOMES */}
        <ExpectedOutcomes />

        {/* WHO SHOULD ATTEND */}
        <div id="stakeholders">
          <WhoShouldAttend />
        </div>

        {/* REGISTRATION DETAILS */}
        <RegistrationTable />

        {/* VENUE */}
        <VenueSection />
      </main>
    </div>
  );
}
