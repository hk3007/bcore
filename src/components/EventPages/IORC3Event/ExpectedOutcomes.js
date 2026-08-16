import React from "react";
import { Target } from "lucide-react";

const outcomes = [
  "Conference proceedings, published with research support from BCORE.",
  "Presentation of NSGO India findings — the governance evaluation of 16 National Sports Federations — to policymakers.",
  "Formal opening of the India Safe Sport Charter for institutional endorsement.",
  "A comprehensive policy brief on Safe Sport governance for Indian sports bodies and national federations.",
  "Establishment of collaborative research networks between universities, BCORE, and international Olympic academies.",
  "A Living Archive of Safe Sport Stories contributed by athletes, coaches, and practitioners.",
  "Recommendations for integrating safe sport frameworks into India's national sports policy.",
  "Strengthened institutional partnerships between BCORE, NADA, IOA, and international Olympic committees.",
  "Groundwork toward a standing Asian National Olympic Academy network or forum.",
];

const ringColors = ["#0085C7", "#F4C300", "#009F3D", "#DF0024"];

export default function ExpectedOutcomes() {
  return (
    <section className="irc-eo-section">
      <div className="irc-eo-inner">
        <span className="irc-eo-eyebrow">What We Aim to Achieve</span>
        <h2 className="irc-eo-title">Expected Outcomes</h2>

        <ul className="irc-eo-grid">
          {outcomes.map((outcome, i) => (
            <li className="irc-eo-item" key={i}>
              <span
                className="irc-eo-item__icon"
                style={{ borderColor: ringColors[i % ringColors.length] }}
                aria-hidden="true"
              >
                <Target size={16} strokeWidth={1.8} />
              </span>
              <div>
                <span className="irc-eo-item__num">{String(i + 1).padStart(2, "0")}</span>
                <p className="irc-eo-item__text">{outcome}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
