import React, { useState } from "react";
import "./Legacy.css";

/**
 * LegacyPage — BCORE Legacy Webinar Series
 * ------------------------------------------------------------------
 * ADD A NEW WEBINAR
 * Add a new object to the TOP of `legacyData`. The first item in the
 * array is always treated as "Latest" and opens automatically; every
 * other item collapses to a compact row, so the page stays short even
 * with 10+ sessions.
 *
 * Every field is optional except `title`.
 *
 * {
 *   id: "wb-3",
 *   edition: "Webinar 3",
 *   status: "Upcoming" | "Concluded",
 *   title: "...",
 *   theme: "...",
 *   date: "23 June 2026",
 *   time: "15:30 hr IST",
 *   mode: "Online",
 *   organisers: ["BCORE", "..."],
 *   summary: "One-line teaser shown when collapsed",
 *   recap: "Longer text — what happened / will happen.
 *     You can type real tags directly, e.g. 'Line one. <br> Line two.'
 *     or 'Delivered by <b>Dr. Rao</b>.' A blank line starts a new
 *     paragraph. **bold** also works as a shortcut for <strong>.",
 *   youtubeId: "NncUFlz7NIs",
 *   speakers: [
 *     { name: "Jane Doe", designation: "Paralympian, Athletics",
 *       linkedin: "https://linkedin.com/in/...", photo: "" }
 *   ]
 * }
 */

const legacyData = [
  {
    id: "wb-2",
    edition: "Webinar 2",
    status: "Concluded",
    title: "Cities, Venues, and the Next 30 Years of Gujarat Sports",
    theme: "What is the Sustainable and Eco-Friendly Urban Legacy?",
    date: "23 June 2026",
    time: "15:30 hr IST",
    mode: "Online",
    organisers: [
      "Bharat Centre for Olympic Research and Education (BCORE)",
      "Rashtriya Raksha University",
    ],
    summary:
      "Urban planners, sustainability leaders and academics on building an eco-friendly sporting legacy for Gujarat.",
    recap:
      "As part of the celebrations marking Olympic Day 2026 and the second anniversary of the Bharat Centre for Olympic Research and Education (BCORE), Rashtriya Raksha University, BCORE organised the second edition of its Legacy Webinar Series titled <b> 'Cities, Venues, and the Next 30 Years of Gujarat Sports: What is the Sustainable and Eco-Friendly Urban Legacy?'</b> on 23 June 2026. <br><br> The webinar brought together leading international academicians, policymakers, urban planners, sustainability professionals, and industry experts to examine how mega-sporting events can generate lasting environmental, social, and economic benefits. The discussions explored strategies for balancing economic growth with environmental responsibility, with particular emphasis on the future of sports infrastructure and urban development in Gujarat as it prepares to host major national and international sporting events.",
    youtubeId: "",
    speakers: [
      {
        name: "Dr Walker J Ross",
        designation: "Lecturer in Sport Management & Digital Marketing",
        photo:
          "https://www.research.ed.ac.uk/files-asset/620416322/CroppedVersion_copy.jpg/",
      },
      {
        name: "Dr Guilherme Nothen",
        designation: "Teaching Fellow in Social Sciences in Sports",
        photo:
          "https://edwebprofiles.ed.ac.uk/sites/default/files/styles/uoe_profile_picture/public/nothenpic.jpg?itok=rBHKPwdx",
      },
      {
        name: "Kshitij Dimri",
        designation: "Associate Partner — Telecom, Media & Sports",
        photo:
          "https://media.licdn.com/dms/image/v2/D5603AQGuBXqxGUO6CQ/profile-displayphoto-shrink_800_800/B56Zc_pisLHEAc-/0/1749119544589?e=1785369600&v=beta&t=j6h7s-f9mNPgT4EqO-f_khlguG3nEQvyvMpnRKU8Hc0",
      },
      {
        name: "Chris Hadley-Hawley",
        designation:
          "Partnerships, Legacy & Sustainability Manager, Perth 2027 WPFG",
        photo:
          "https://media.licdn.com/dms/image/v2/C5603AQHdIlQehHePHA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517345563351?e=1785369600&v=beta&t=gGhhJJOt8sbfx0K4QAag0VKXEb9CD1pcTiAlLtCuBMU",
      },
      {
        name: "Ramkumar Subramanian",
        designation: "Director, Collage Design",
        photo:
          "https://thf.bing.com/th/id/OIP.7_pZGL7LsRXOjlNR9_uatQHaE7?w=160&h=108&c=7&qlt=90&bgcl=581fb0&r=0&o=6&dpr=1.3&pid=13.1",
      },
    ],
  },
  {
    id: "wb-1",
    edition: "Webinar 1",
    status: "Concluded",
    title:
      "Technology in Para-Sports: Making it Indigenous and Accessible to All",
    theme: "",
    date: "6 April 2026",
    time: "",
    mode: "Online",
    organisers: [
      "Bharat Centre for Olympic Research and Education (BCORE)",
      "Rashtriya Raksha University",
      "International Committee of the Red Cross (ICRC), New Delhi",
    ],
    summary:
      "Paralympians, humanitarian practitioners and innovators on building inclusive, indigenous sporting technology.",
    recap:
      "As part of the observance of the United Nations International Day of Sport for Development and Peace, the Bharat Centre for Olympic Research and Education (BCORE), Rashtriya Raksha University, in collaboration with the International Committee of the Red Cross (ICRC), New Delhi, organised a virtual seminar titled <b> 'Technology in Para-Sports: Making it Indigenous and Accessible to All' </b> on 6 April 2026. <br> <br> The seminar brought together an interdisciplinary audience comprising researchers, para-athletes, policymakers, sports institutions, humanitarian practitioners, technology innovators, healthcare professionals, and educators to explore how technology can be designed, developed, and deployed to make para-sports more accessible, affordable, and culturally relevant, particularly across India, South Asia, and the Global South. <br> <br> The programme featured distinguished Paralympians, experts, researchers, and practitioners who shared their experiences and insights on advancing accessibility through indigenous innovation, adaptive technologies, inclusive design, and evidence-based approaches to athlete development",
    youtubeId: "NncUFlz7NIs",
    speakers: [
      {
        name: "Jess Markt",
        designation: "Wheelchair Rugby Coach & Adaptive Sports Advocate",
        linkedin: "https://www.linkedin.com/in/jessmarkt/",
        photo:
          "https://media.licdn.com/dms/image/v2/C4E03AQEmUcEhExqRhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1551185859976?e=1785369600&v=beta&t=jaCQMqWNl_wIcBawoIeeB1W6YFF4S9ZVXHMRCHEbPqI",
      },
      {
        name: "Dr. Ravinder Singh",
        designation: "Researcher & Practitioner, Para-Sports",
        photo: "",
      },
      {
        name: "Rahul Swami",
        designation: "Policy & Innovation, Sports Ecosystems",
        linkedin: "https://www.linkedin.com/in/rahul-swami-1590a98/",
        photo:
          "https://media.licdn.com/dms/image/v2/C5603AQHDECTclgxzvQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635909566781?e=1785369600&v=beta&t=N4DJMyHBYp6pVuKMhyckDFZeuZYhPirOgur0svBFNyY",
      },
      {
        name: "Shraddha Rout",
        designation: "Practitioner, Inclusive Sports Development",
        photo: "",
      },
      {
        name: "Gagan Bihari Sethy",
        designation: "Humanitarian Practitioner, ICRC",
        linkedin: "https://www.linkedin.com/in/gagan-bihari-sethy-41824563/",
        photo:
          "https://media.licdn.com/dms/image/v2/C5603AQH_g9X4f7-wRw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517590144927?e=1785369600&v=beta&t=6V2-X0b4BRUx5cRck-eEm7feLpBGrvTeWU2rg0ybnTM",
      },
      {
        name: "Ekta Bhyan",
        designation: "Moderator · Paralympian, Discus Throw F51",
        linkedin: "https://www.linkedin.com/in/ekta-bhyan-2bb58b1b8/",
        photo:
          "https://media.licdn.com/dms/image/v2/C4E03AQFO8Cs4jyxFvg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1606659874998?e=1785369600&v=beta&t=E_7meYIs5LSmBGumrzKLbe_tWekN0mNmb51WMvjcBuM",
      },
    ],
  },
];

/* ---------------- building blocks ---------------- */

function OlympicRings({ className = "" }) {
  return (
    <svg
      className={`bcl-rings ${className}`}
      viewBox="0 0 400 160"
      aria-hidden="true"
    >
      <circle className="bcl-ring bcl-ring-blue" cx="70" cy="60" r="42" />
      <circle className="bcl-ring bcl-ring-black" cx="160" cy="60" r="42" />
      <circle className="bcl-ring bcl-ring-red" cx="250" cy="60" r="42" />
      <circle className="bcl-ring bcl-ring-yellow" cx="115" cy="100" r="42" />
      <circle className="bcl-ring bcl-ring-green" cx="205" cy="100" r="42" />
    </svg>
  );
}

function initials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function SpeakerCard({ speaker }) {
  const { name, designation, photo, linkedin } = speaker || {};
  const inner = (
    <React.Fragment>
      <div className="bcl-sp-photo-wrap">
        {photo ? (
          <img src={photo} alt={name} className="bcl-sp-photo" loading="lazy" />
        ) : (
          <div
            className="bcl-sp-photo bcl-sp-photo-fallback"
            aria-hidden="true"
          >
            {initials(name)}
          </div>
        )}
        <span className="bcl-sp-ring-dot" aria-hidden="true"></span>
      </div>
      <p className="bcl-sp-name">{name || "Speaker TBA"}</p>
      {designation && <p className="bcl-sp-designation">{designation}</p>}
    </React.Fragment>
  );

  return linkedin ? (
    <a
      className="bcl-speaker-card"
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      {inner}
    </a>
  ) : (
    <div className="bcl-speaker-card">{inner}</div>
  );
}

/**
 * RichText — lets you format the `recap` (or any long text field) two ways,
 * and you can mix both in the same string:
 *
 *   1. Type real HTML tags directly, e.g.:
 *        "The <br> second lecture was held on..."
 *        "Delivered by <b>Dr. Rao</b>."
 *      Supported tags: <br>, <b>, <strong>, <i>, <em>, <u>, <a href="...">, <p>
 *
 *   2. Or use the lighter markdown-style shortcuts:
 *        **bold text**        → becomes <strong>bold text</strong>
 *        a blank line          → starts a new paragraph
 *
 * NOTE: this renders the string as real HTML, so only use it for content
 * you (the site editor) type yourself — not for raw user-submitted text.
 */
function RichText({ text, className }) {
  if (!text) return null;

  // Convert the **bold** shortcut into a real <strong> tag before rendering.
  const withBoldTags = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  // A blank line (two newlines) starts a new paragraph; a single newline
  // inside a paragraph is left as-is so a literal <br> you typed still works.
  const paragraphs = withBoldTags.split(/\n\s*\n/);

  return (
    <React.Fragment>
      {paragraphs.map((para, i) => (
        <p
          className={className}
          key={i}
          dangerouslySetInnerHTML={{ __html: para.trim() }}
        />
      ))}
    </React.Fragment>
  );
}

function StatusBadge({ status }) {
  if (!status) return null;
  const cls =
    status.toLowerCase() === "upcoming"
      ? "bcl-badge-upcoming"
      : "bcl-badge-concluded";
  return <span className={`bcl-status-badge ${cls}`}>{status}</span>;
}

/* ---------------- session card ---------------- */

function SessionCard({ entry, isOpen, onToggle, isLatest }) {
  const {
    edition,
    status,
    title,
    theme,
    date,
    time,
    mode,
    organisers,
    summary,
    recap,
    youtubeId,
    speakers,
  } = entry || {};

  const panelId = `bcl-panel-${entry.id}`;

  return (
    <div className={`bcl-session ${isLatest ? "bcl-session-latest" : ""}`}>
      <div className="bcl-session-node" aria-hidden="true">
        <span
          className={`bcl-node-dot ${isLatest ? "bcl-node-dot-latest" : ""}`}
        ></span>
      </div>

      <div className="bcl-session-card">
        <button
          type="button"
          className="bcl-session-header"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <div className="bcl-session-header-main">
            <div className="bcl-tags-row">
              {edition && <span className="bcl-tag-edition">{edition}</span>}
              {isLatest && <span className="bcl-tag-latest">★ Latest</span>}
              <StatusBadge status={status} />
            </div>

            <h2 className="bcl-session-title">{title}</h2>
            {theme && <p className="bcl-session-theme">{theme}</p>}

            <div className="bcl-session-meta">
              {date && <span className="bcl-meta-item">📅 {date}</span>}
              {time && <span className="bcl-meta-item">🕒 {time}</span>}
              {mode && <span className="bcl-meta-item">📍 {mode}</span>}
            </div>

            {!isOpen && summary && (
              <p className="bcl-session-summary">{summary}</p>
            )}
          </div>

          <span
            className={`bcl-chevron ${isOpen ? "bcl-chevron-open" : ""}`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <div
          className={`bcl-session-panel-outer ${isOpen ? "bcl-panel-open" : ""}`}
        >
          <div className="bcl-session-panel-inner" id={panelId}>
            {organisers && organisers.length > 0 && (
              <div className="bcl-organisers">
                {organisers.map((org, i) => (
                  <span className="bcl-organiser-chip" key={i}>
                    {org}
                  </span>
                ))}
              </div>
            )}

            {recap && <RichText text={recap} className="bcl-recap" />}

            {youtubeId && (
              <div className="bcl-video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={title || "Webinar recording"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {speakers && speakers.length > 0 && (
              <div className="bcl-speakers-block">
                <h3 className="bcl-speakers-heading">Speakers</h3>
                <div className="bcl-speakers-grid">
                  {speakers.map((sp, i) => (
                    <SpeakerCard speaker={sp} key={i} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- page ---------------- */

export default function LegacyPage({ data, heading, subheading }) {
  const entries = Array.isArray(data) && data.length > 0 ? data : legacyData;
  const [openId, setOpenId] = useState(entries[0]?.id ?? null);

  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <div className="bcl-page">
      <section className="bcl-hero">
        <div className="bcl-hero-glow bcl-hero-glow-1"></div>
        <div className="bcl-hero-glow bcl-hero-glow-2"></div>

        <div className="bcl-hero-content">
          <h1 className="bcl-hero-title">
            {heading || "Legacy Webinar Series"}
          </h1>
          <p className="bcl-hero-subtitle">
            {subheading ||
              "A running record of BCORE's dialogues on sport, technology and sustainable legacy — newest session first."}
          </p>
        </div>

        <div className="bcl-hero-torch" aria-hidden="true">
          <div className="bcl-flame">
            <span className="bcl-flame-core"></span>
            <span className="bcl-spark bcl-spark-1"></span>
            <span className="bcl-spark bcl-spark-2"></span>
            <span className="bcl-spark bcl-spark-3"></span>
          </div>
          <div className="bcl-torch-handle"></div>
        </div>
      </section>

      <section className="bcl-timeline-section">
        {entries.length === 0 ? (
          <p className="bcl-empty-state">
            No webinars have been added yet. Check back soon.
          </p>
        ) : (
          <div className="bcl-timeline">
            <div className="bcl-timeline-spine" aria-hidden="true"></div>
            {entries.map((entry, i) => (
              <SessionCard
                entry={entry}
                isLatest={i === 0}
                isOpen={openId === entry.id}
                onToggle={() => toggle(entry.id)}
                key={entry.id ?? i}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
