import React from "react";

const features = [
  {
    ring: "blue",
    number: "01",
    title: "Asian National Olympic Academy Summit",
    text:
      "The first dedicated platform bringing Asian NOAs together to share Olympic education initiatives.",
  },
  {
    ring: "yellow",
    number: "02",
    title: "The India Safe Sport Charter",
    text:
      "Opened for endorsement by participating federations and institutions across the three days.",
  },
  {
    ring: "green",
    number: "03",
    title: "National Sports Good Governance Award",
    text: "Presented under the NSGO framework.",
  },
  {
    ring: "red",
    number: "04",
    title: "The Coach's Corner",
    text:
      "An informal networking space for coaching staff running through all three days.",
  },
  {
    ring: "black",
    number: "05",
    title: "Call for Paper Stories",
    text:
      "A track for practitioners, coaches and athletes to share lived experience alongside the formal academic program.",
  },
];

const ringColor = {
  blue: "#0085C7",
  yellow: "#F4C300",
  green: "#009F3D",
  red: "#DF0024",
  black: "#101B19",
};

export default function SummitAndFeatures() {
  return (
    <section className="irc-summit" id="summit">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="irc-summit__background" aria-hidden="true">
        <div className="irc-summit__grid"></div>
        <div className="irc-summit__orb irc-summit__orb--one"></div>
        <div className="irc-summit__orb irc-summit__orb--two"></div>
      </div>

      <div className="irc-summit__container">
        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="irc-summit__header">
          <div className="irc-summit__header-left">
            <span className="irc-summit__eyebrow">
              28–29 January 2027
            </span>

            <h2 className="irc-summit__title">
              Asian National
              <span> Olympic Academy</span>
              <strong>&amp; OSRCs Summit</strong>
            </h2>
          </div>

          <div className="irc-summit__header-right">
            <span className="irc-summit__header-label">
              REGIONAL PLATFORM
            </span>

            <p>
              Building a shared platform for Olympic education,
              safeguarding, research and institutional collaboration
              across Asia.
            </p>
          </div>
        </header>

        {/* ===================================================
            INTRODUCTION
        =================================================== */}

        <div className="irc-summit__intro">
          <div className="irc-summit__intro-marker">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="irc-summit__body">
            <p>
              Asia remains one of the few regions without an active,
              functioning National Olympic Academy network, even as
              the continent now hosts an expanding calendar of mega
              sporting events, including the Asian Games, the return of
              the Commonwealth Games to the region, and India's own
              pipeline through the World Police and Fire Games 2029 and
              a prospective 2036 Olympic bid. Without a shared platform,
              individual academies across Asia continue to build their
              Olympic education programs largely in isolation, with
              little visibility into what neighbouring countries are
              already doing well or where they are struggling.
            </p>

            <p>
              Over two half-days running alongside the main conference,
              National Olympic Academies from across Asia will present
              their current Olympic education initiatives and programs
              to one another and to the wider conference audience,
              opening the floor for a genuine exchange of practice.
              The summit's purpose is threefold — to channelize research
              and resource sharing among Asian NOAs, to surface
              opportunities for joint education programming, and to begin
              the conversation on whether a standing Asian NOA network
              or forum should take shape out of this gathering.
            </p>
          </div>
        </div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div className="irc-summit__divider">
          <span className="irc-summit__divider-line"></span>

          <span className="irc-summit__divider-label">
            KEY FEATURES
          </span>

          <span className="irc-summit__divider-line"></span>
        </div>

        {/* ===================================================
            FEATURES HEADER
        =================================================== */}

        <div className="irc-summit__features-header">
          <div>
            <span>05 INITIATIVES</span>

            <h3>
              Key Features
              <br />
              <em>&amp; New Initiatives</em>
            </h3>
          </div>

          <p>
            Five dedicated initiatives designed to extend the
            conference beyond discussion and toward practical
            collaboration.
          </p>
        </div>

        {/* ===================================================
            FEATURES GRID
        =================================================== */}

        <div className="irc-features-grid">
          {features.map((item) => (
            <article
              className={`irc-feature-card irc-feature-card--${item.ring}`}
              key={item.title}
            >
              <div className="irc-feature-card__top">
                <span className="irc-feature-card__number">
                  {item.number}
                </span>

                <span
                  className="irc-feature-card__ring"
                  style={{ borderColor: ringColor[item.ring] }}
                  aria-hidden="true"
                ></span>

                <span
                  className="irc-feature-card__arrow"
                  style={{ color: ringColor[item.ring] }}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className="irc-feature-card__content">
                <h4 className="irc-feature-card__title">
                  {item.title}
                </h4>

                <p className="irc-feature-card__text">
                  {item.text}
                </p>
              </div>

              <div
                className="irc-feature-card__accent"
                style={{
                  background: `linear-gradient(
                    90deg,
                    ${ringColor[item.ring]},
                    transparent
                  )`,
                }}
              ></div>
            </article>
          ))}
        </div>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className="irc-summit__footer">
          <span className="irc-summit__footer-mark"></span>

          <span>
            Olympic Education · Safe Sport · Governance · Research
          </span>

          <span className="irc-summit__footer-line"></span>

          <span>2027</span>
        </footer>
      </div>
    </section>
  );
}