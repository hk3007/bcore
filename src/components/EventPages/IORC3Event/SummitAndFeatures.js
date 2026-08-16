import React from "react";

const features = [
  {
    ring: "blue",
    title: "Asian National Olympic Academy Summit",
    text:
      "The first dedicated platform bringing Asian NOAs together to share Olympic education initiatives.",
  },
  {
    ring: "yellow",
    title: "The India Safe Sport Charter",
    text:
      "Opened for endorsement by participating federations and institutions across the three days.",
  },
  {
    ring: "green",
    title: "National Sports Good Governance Award",
    text: "Presented under the NSGO framework.",
  },
  {
    ring: "red",
    title: "The Coach's Corner",
    text:
      "An informal networking space for coaching staff running through all three days.",
  },
  {
    ring: "black",
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
  black: "#101828",
};

export default function SummitAndFeatures() {
  return (
    <section className="irc-section irc-section--tint" id="summit">
      <span className="irc-section__eyebrow">28–29 January 2027</span>
      <h2 className="irc-section__title">
        Asian National Olympic Academy &amp; OSRCs Summit
      </h2>
      <div className="irc-section__body">
        <p>
          Asia remains one of the few regions without an active, functioning National
          Olympic Academy network, even as the continent now hosts an expanding
          calendar of mega sporting events, including the Asian Games, the return of
          the Commonwealth Games to the region, and India's own pipeline through the
          World Police and Fire Games 2029 and a prospective 2036 Olympic bid. Without a
          shared platform, individual academies across Asia continue to build their
          Olympic education programs largely in isolation, with little visibility into
          what neighbouring countries are already doing well or where they are
          struggling.
        </p>
        <p>
          Over two half-days running alongside the main conference, National Olympic
          Academies from across Asia will present their current Olympic education
          initiatives and programs to one another and to the wider conference audience,
          opening the floor for a genuine exchange of practice. The summit's purpose is
          threefold — to channelize research and resource sharing among Asian NOAs, to
          surface opportunities for joint education programming, and to begin the
          conversation on whether a standing Asian NOA network or forum should take
          shape out of this gathering.
        </p>
      </div>

      <p className="irc-section__lead">Key Features and New Initiatives</p>
      <div className="irc-features-grid">
        {features.map((item) => (
          <article className="irc-feature-card" key={item.title}>
            <span
              className="irc-feature-card__ring"
              style={{ borderColor: ringColor[item.ring] }}
              aria-hidden="true"
            ></span>
            <h3 className="irc-feature-card__title">{item.title}</h3>
            <p className="irc-feature-card__text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
