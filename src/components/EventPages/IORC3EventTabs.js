import React, { useEffect, useRef, useState } from "react";
import "./IORC3EventTabs.scss";

// Import all section components
import HeroShowcase from "./IORC3Event/HeroShowcase";
import VisionObjectives from "./IORC3Event/VisionObjectives";
import WhySafeSport from "./IORC3Event/WhySafeSport";
import ConferenceStructure from "./IORC3Event/ConferenceStructure";
import SummitAndFeatures from "./IORC3Event/SummitAndFeatures";
import WhoShouldAttend from "./IORC3Event/WhoShouldAttend";
import RegistrationTable from "./IORC3Event/RegistrationTable";
import VenueSection from "./IORC3Event/VenueSection";
import ExpectedOutcomes from "./IORC3Event/ExpectedOutcomes";
import CallForPapers from "./IORC3Event/CallForPapers";
import ContactDetails from "./IORC3Event/ContactDetails";

import CallForAbstract from "../eventsdetails/CallForAbstract";
import AbstractGuidelines from "../eventsdetails/AbstractGuidelines";
import StepsToRegister from "../eventsdetails/StepsToRegister";

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

export default function IORC3EventTabs() {
    const [activeTab, setActiveTab] = useState("overview");
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    const tabs = [
        {
            id: "overview",
            label: "Overview",
            shortLabel: "Overview",
            icon: "◆",
            number: "01",
            component: <HeroShowcase />,
        },
        {
            id: "theme",
            label: "Theme & Vision",
            shortLabel: "Theme & Vision",
            icon: "✦",
            number: "02",
            component: <VisionObjectives />,
        },
        {
            id: "safeport",
            label: "Safe Sport",
            shortLabel: "Safe Sport",
            icon: "★",
            number: "03",
            component: <WhySafeSport />,
        },
        {
            id: "structure",
            label: "Structure",
            shortLabel: "Structure",
            icon: "◈",
            number: "04",
            component: <ConferenceStructure />,
        },
        {
            id: "features",
            label: "Summit & Features",
            shortLabel: "Summit & Features",
            icon: "✧",
            number: "05",
            component: <SummitAndFeatures />,
        },
        {
            id: "abstract",
            label: "Call For Abstract",
            shortLabel: "Call For Abstract",
            icon: "◇",
            number: "06",
            component: <CallForAbstract callForAbstract={callForAbstract} />,
        },
        {
            id: "callforpapers",
            label: "Call For Papers",
            shortLabel: "Call For Papers",
            icon: "📄",
            number: "07",
            component: <CallForPapers />,
        },
        {
            id: "guidelines",
            label: "Guidelines",
            shortLabel: "Guidelines",
            icon: "▲",
            number: "08",
            component: <AbstractGuidelines event={{ abstractGuidelines }} />,
        },
        {
            id: "register",
            label: "Registration Steps",
            shortLabel: "Registration",
            icon: "▼",
            number: "09",
            component: <StepsToRegister steps={steps} />,
        },
        {
            id: "outcomes",
            label: "Expected Outcomes",
            shortLabel: "Outcomes",
            icon: "▶",
            number: "10",
            component: <ExpectedOutcomes />,
        },
        {
            id: "attendees",
            label: "Who Should Attend",
            shortLabel: "Who Should Attend",
            icon: "◄",
            number: "11",
            component: <WhoShouldAttend />,
        },
        {
            id: "pricing",
            label: "REGISTRATION DETAILS",
            shortLabel: "REGISTRATION DETAILS",
            icon: "◉",
            number: "12",
            component: <RegistrationTable />,
        },
        {
            id: "venue",
            label: "Venue",
            shortLabel: "Venue",
            icon: "◎",
            number: "13",
            component: <VenueSection />,
        },
        {
            id: "contact",
            label: "Contact Us",
            shortLabel: "Contact Us",
            icon: "✉",
            number: "14",
            component: <ContactDetails />,
        },
    ];

    const activeTabData =
        tabs.find((tab) => tab.id === activeTab) || tabs[0];

    const handleTabChange = (id) => {
        setActiveTab(id);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    // Close dropdown with Escape
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="irc-tabs-container">

            {/* =====================================================
          MODERN NAVIGATION
      ====================================================== */}

            <header className="irc-tabs-header">
                <div className="irc-tabs-header__inner">

                    {/* Small Event Label */}
                    <div className="irc-tabs-meta">
                        <div className="irc-tabs-meta__text-group">
                            <span className="irc-tabs-meta__eyebrow">IORC 2027</span>
                            <span className="irc-tabs-meta__current">{activeTabData.label}</span>
                        </div>
                    </div>

                    {/* =================================================
              DROPDOWN
          ================================================== */}

                    <div
                        className={`irc-tabs-dropdown ${isOpen ? "is-open" : ""
                            }`}
                        ref={dropdownRef}
                    >

                        {/* Dropdown Trigger */}
                        <button
                            type="button"
                            className="irc-tabs-dropdown__trigger"
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-expanded={isOpen}
                            aria-haspopup="listbox"
                        >
                            <span className="irc-tabs-dropdown__trigger-left">

                                <span className="irc-tabs-dropdown__number">
                                    {activeTabData.number}
                                </span>

                                <span
                                    className="irc-tabs-dropdown__icon"
                                    aria-hidden="true"
                                >
                                    {activeTabData.icon}
                                </span>

                                <span className="irc-tabs-dropdown__label">
                                    {activeTabData.label}
                                </span>

                            </span>

                            <span className="irc-tabs-dropdown__trigger-right">

                                <span className="irc-tabs-dropdown__hint">
                                    SECTIONS
                                </span>

                                <span
                                    className="irc-tabs-dropdown__arrow"
                                    aria-hidden="true"
                                >
                                    ↓
                                </span>

                            </span>
                        </button>

                        {/* Dropdown Menu */}
                        <div
                            className="irc-tabs-dropdown__menu"
                            role="listbox"
                            aria-label="Conference sections"
                        >
                            <div className="irc-tabs-dropdown__menu-header">
                                <span>Conference Sections</span>
                                <span>{tabs.length} Sections</span>
                            </div>

                            <div className="irc-tabs-dropdown__options">
                                {tabs.map((tab) => (
                                    <button
                                        type="button"
                                        role="option"
                                        aria-selected={activeTab === tab.id}
                                        key={tab.id}
                                        className={`irc-tabs-dropdown__option ${activeTab === tab.id ? "active" : ""
                                            }`}
                                        onClick={() => handleTabChange(tab.id)}
                                    >
                                        <span className="irc-tabs-dropdown__option-number">
                                            {tab.number}
                                        </span>

                                        <span className="irc-tabs-dropdown__option-icon">
                                            {tab.icon}
                                        </span>

                                        <span className="irc-tabs-dropdown__option-label">
                                            {tab.label}
                                        </span>

                                        <span className="irc-tabs-dropdown__option-check">
                                            {activeTab === tab.id ? "✓" : "→"}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </header>

            {/* =====================================================
          CONTENT
      ====================================================== */}

            <main className="irc-tabs-content-wrapper">

                {tabs.map((tab) => (
                    <section
                        key={tab.id}
                        className={`irc-tab-content ${activeTab === tab.id ? "active" : ""
                            }`}
                        aria-hidden={activeTab !== tab.id}
                    >
                        <div className="irc-tab-content-inner">

                            <div
                                className="irc-content-background"
                                aria-hidden="true"
                            />

                            <div className="irc-content-body">
                                {tab.component}
                            </div>

                        </div>
                    </section>
                ))}

            </main>

        </div>
    );
}