import React, { useEffect } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
import "./HumanPerformanceLab.css";

const HumanPerformanceLab = () => {
      useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <div className="hpl-container">
      {/* === HEADER === */}
      <header className="hpl-header">
        <div className="hpl-header-content">
          <h1>Human Performance Lab (HPL)</h1>
          <p>
            The Human Performance Lab (HPL) associated with <strong>BCORE</strong> is a
            state-of-the-art portable sports science facility designed to measure and
            enhance athletic potential through precise physical and psychological
            assessments.
          </p>
        </div>
      </header>

      {/* === ABOUT SECTION === */}
      <section className="hpl-section about">
        <div className="hpl-inner">
          <h2>About the Human Performance Lab</h2>
          <p>
            The lab delivers sport-specific benchmarks that support data-driven recruitment,
            comparison, and training of athletes — helping coaches and selectors make
            evidence-based decisions.
          </p>
          <p>
            Thanks to its portability, the HPL team can set up directly at competition venues,
            offering athletes the flexibility to undergo assessments before, during, or after
            their events. The physical results are shared instantly via a personalized QR code,
            while psychological assessments are delivered within 1–2 days.
          </p>
          <p>
            All collected data is securely stored in a central research database of the{" "}
            <strong>Rashtriya Raksha University</strong>, with options for anonymized reporting
            upon athlete request. The assurance of privacy and zero-error data breach is
            maintained across all levels.
          </p>
          <p>
            For team and coaching purposes, the insights gathered across events feed into annual
            national reports, tracking athlete development and sporting trends across India.
          </p>
          <p>
            Beyond assessment, the HPL drives scientific research on <strong>performance, injury
            prevention, and mental resilience</strong>, helping shape a future where discipline,
            science, and national pride define India’s performance culture.
          </p>
          <p>
            These once-overlooked competitions are evolving into breeding grounds for elite
            talent, laying the foundation for India’s representation at the{" "}
            <strong>World Police Fire Games, Commonwealth Games, Olympics, and beyond.</strong>
          </p>
        </div>
      </section>

      {/* === EQUIPMENT TABLE === */}
      <section className="hpl-section equipment">
        <div className="hpl-inner">
          <h2>HPL Equipment & Athlete Impact</h2>
          <div className="hpl-table-container">
            <table className="hpl-table">
              <thead>
                <tr>
                  <th>Lab Modules</th>
                  <th>Equipment Metric & Functionality</th>
                  <th>Comprehensive Impact on Cluster Game Athletes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BCA Machine</td>
                  <td>Blueprint of internal body health – fat %, muscle mass, BMI, metabolic rate</td>
                  <td>
                    <ul>
                      <li>Instant performance diagnostics via QR code & access to digital profile</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Helios</td>
                  <td>Assesses agility, reflex, and stamina through a laser projected device</td>
                  <td>
                    <ul>
                      <li>Real-time feedback for on-field adjustment</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Jump Mat</td>
                  <td>Measures lower limb explosive power and take-off speed</td>
                  <td>
                    <ul>
                      <li>Personalized improvement tracking of physical parameters</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Push-Up, Core and Squat Mat</td>
                  <td>Counts repetitions, detects movement quality and stability, evaluates endurance and fatigue</td>
                  <td>
                    <ul>
                      <li>Injury risk minimization through red flag alerts and movement analysis</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Laser-Gate Shuttle</td>
                  <td>Tracks reaction time, direction change speed, and agility</td>
                  <td>
                    <ul>
                      <li>Benchmarking performance against national and cluster-level data</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Smart Pad</td>
                  <td>Tests peripheral awareness, visual reflexes, and cognitive reactivity</td>
                  <td>
                    <ul>
                      <li>Awareness of strengths & weaknesses</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Smart Balance</td>
                  <td>Assesses single-leg balance, asymmetries, and neuromuscular control</td>
                  <td>
                    <ul>
                      <li>Mental fitness insight & psychological readiness check</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Isometric Dynamometer and Force Transducer</td>
                  <td>Measures maximum contraction force and muscular output for detailed analysis</td>
                  <td>
                    <ul>
                      <li>Motivation & ownership of fitness journey</li>
                      <li>Helps coaching staff customize training & recovery plans</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Spirometer</td>
                  <td>Measures overall lung capacity</td>
                  <td>
                    <ul>
                      <li>Supports endurance monitoring and recovery strategies</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Cloud Report</td>
                  <td>Generates longitudinal reports, red-flag alerts & individual session summaries</td>
                  <td>
                    <ul>
                      <li>Better team strategy & performance goal setting</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* === PDF SECTION === */}
      <section className="hpl-section pdf">
        <div className="hpl-inner pdf-content">
          <p>
            📘 Explore detailed specifications in the official{" "}
            <a
              href="https://rru.ac.in/wp-content/uploads/2025/07/SPES-HPL-EQUIPMENTS-3.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              HPL Equipment Brochure (PDF)
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HumanPerformanceLab;
