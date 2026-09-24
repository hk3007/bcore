import React, { useEffect } from "react";
import "./Events.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Image1 from "./Images/ANTI DOPING IN SPORTS ETHICAL AND SCIENTIFIC PERSPECTIVES.jpg";
import Image2 from "./Images/ATHLETE & COACHES DEVELOPMENT PROGRAM 1.jpg";
import Image3 from "./Images/Olympic Paronama Multidiciplinary Research and Education Program 1.png";
import Image4 from "./Images/Olympic Paronama Multidiciplinary Research and Education Program 2.png";
import Image5 from "./Images/Olympic Paronama Multidiciplinary Research and Education Program 3.png";
import Image6 from "./Images/Olympic Paronama Multidiciplinary Research and Education Program 4.png";
import Image7 from "./Images/DESIGN COMPETITION.png";
import Image8 from "./Images/Khelo India 1.jpg";
import Image9 from "./Images/Khelo india 2.jpg";


/* =========================================================
   EVENTS LIST
========================================================= */

const events = [
  {
    id: 1,
    name: "1st International Olympic Research Conference",
    date: "27 - 30 January 2025",

    place:
      "Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India",

    description:
      "A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.",

    booklet:
      "https://rru.ac.in/wp-content/uploads/2025/03/IORC-Booklet_-05-03-2025-10-MB_compressed.pdf",

    scheduleLink: "/event/1/schedule",
  },

  {
    id: 4,
    name: "BCORE Night Run",
    date: "10 January 2026",

    startDate: new Date("2026-01-10"),
    endDate: new Date("2026-01-10"),

    place: "Gandhinagar, India",

    visibleFrom: new Date("2026-01-11"),
  },

  {
    id: 3,
    name: "2nd International Olympic Research Conference",
    date: "27 - 30 January 2026",

    startDate: new Date("2026-01-27"),
    endDate: new Date("2026-01-30"),

    place:
      "Rashtriya Raksha University, Gandhinagar, India",

    description:
      "To address critical Olympic challenges in India's Olympic aspirations and develop long-term, sustainable solutions through integrated research, education, and governance",

    bookletLink:
      "https://drive.google.com/file/d/1166eN6ZlTAL8r2vHmNToTwFrqkXvZb_I/view?usp=sharing",

    paymentLink:
      "https://forms.eduqfix.com/secolycn/add",

    faQ:
      "https://drive.google.com/file/d/1m1xHmHf20D3La7ZMw3ERuKzQIgdmIKfr/view?usp=sharing",

    scheduleLink:
      "/event/3/schedule",

    guidlines:
      "https://drive.google.com/file/d/1J6qexrSRz2iMWlkcfEkLO69GZzRiR3Ph/view?usp=sharing",

    paperPresentation:
      "https://docs.google.com/presentation/d/15_AXdox-V61RCQBT8Ky0xQueT94hklN6/edit?usp=sharing&ouid=114727181775494699337&rtpof=true&sd=true",
  },
];


/* =========================================================
   PAST EVENT GALLERIES
========================================================= */

const eventsData = [
  {
    title:
      "ANTI - DOPING IN SPORTS: ETHICAL AND SCIENTIFIC PERSPECTIVES",

    number: "01",

    images: [Image1],
  },

  {
    title:
      "ATHLETE & COACHES DEVELOPMENT PROGRAM",

    number: "02",

    images: [Image2],
  },

  {
    title:
      "Olympic Paronama: Multidisciplinary Research and Education Program",

    number: "03",

    images: [Image3, Image4, Image5, Image6],
  },

  {
    title:
      "DESIGN COMPETITION — Logo / Mascot / Torch",

    number: "04",

    images: [Image7],
  },

  {
    title:
      "KHELO INDIA UNIVERSITY GAMES: RUBY TEAM",

    number: "05",

    images: [Image8, Image9],
  },
];


/* =========================================================
   DATE PARSER
========================================================= */

const parseStartDate = (dateStr) => {
  if (!dateStr) {
    return new Date(0);
  }

  const cleaned = dateStr.replace(
    /(\d{1,2})(st|nd|rd|th)/g,
    "$1"
  );

  const rangeMatch = cleaned.match(
    /^(\d{1,2})\s*-\s*\d{1,2}\s+([A-Za-z]+)\s+(\d{4})/
  );

  if (rangeMatch) {
    const [, day, month, year] = rangeMatch;

    return new Date(
      `${month} ${day}, ${year}`
    );
  }

  const singleMatch = cleaned.match(
    /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/
  );

  if (singleMatch) {
    const [, day, month, year] = singleMatch;

    return new Date(
      `${month} ${day}, ${year}`
    );
  }

  return new Date(cleaned);
};


/* =========================================================
   FILTER EVENTS
========================================================= */

const today = new Date();

const visibleEvents = events.filter((event) => {
  if (!event.visibleFrom) {
    return true;
  }

  return today >= event.visibleFrom;
});


/* =========================================================
   SORT EVENTS
========================================================= */

const sortedEvents = [...visibleEvents].sort(
  (a, b) => {

    const dateA = a.date
      ? parseStartDate(a.date)
      : a.startDate;

    const dateB = b.date
      ? parseStartDate(b.date)
      : b.startDate;

    return dateB - dateA;
  }
);


/* =========================================================
   COMPONENT
========================================================= */

export const Events = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="bcore-events-page">

      <Helmet>
        <title>
          Events – Bharat Centre of Olympic Research & Education
        </title>

        <meta
          name="description"
          content="Events, conferences, programmes and activities conducted by the Bharat Centre of Olympic Research and Education."
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="events-hero">

        <div className="events-hero-bg" />

        <div className="events-hero-overlay" />

        <div className="events-hero-grid" />


        <div className="events-hero-content">

          <div className="events-hero-meta">

            <span className="events-meta-line" />

            <span>BCORE / EVENTS</span>

            <span className="events-meta-divider">
              /
            </span>

            <span>01</span>

          </div>


          <h1 className="events-hero-title">

            THE
            <br />

            <span>BCORE</span>

            <br />

            PAST EVENTS

          </h1>


          <p className="events-hero-description">

            Conferences, programmes, research initiatives
            and sporting activities shaping the Olympic
            knowledge ecosystem.

          </p>


          <div className="events-hero-bottom">

            <span className="events-hero-line" />
            <span>
              RESEARCH · EDUCATION · SPORT
            </span>
          </div>
        </div>
      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="events-main">


        {/* =================================================
            UPCOMING / RECENT EVENTS
        ================================================= */}

        <section className="events-section">

          <div className="events-section-heading">

            <div>

              <span className="events-section-kicker">
                EVENTS ARCHIVE
              </span>

              <h2>
                Conferences &
                <br />

                <span>Programmes</span>
              </h2>

            </div>


            <span className="events-section-number">
              01
            </span>

          </div>


          <div className="events-list">

            {sortedEvents.map((event, index) => (

              <article
                className="event-row"
                key={event.id}
              >

                {/* NUMBER */}

                <div className="event-index">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="event-index-line" />

                </div>


                {/* DATE */}

                <div className="event-date">

                  <span className="event-year">

                    {event.date
                      ? event.date
                          .split(" ")
                          .pop()
                      : ""}

                  </span>

                  <span className="event-date-full">

                    {event.date}

                  </span>

                </div>


                {/* INFORMATION */}

                <div className="event-information">

                  <h3>
                    {event.name}
                  </h3>


                  <div className="event-location">

                    <span className="location-marker">
                      +
                    </span>

                    <span>
                      {event.place}
                    </span>

                  </div>


                  {event.description && (

                    <p className="event-description">
                      {event.description}
                    </p>

                  )}


                  {/* BUTTONS */}

                  <div className="event-actions">

                    <Link
                      to={`/event/${event.id}`}
                      className="event-btn event-btn-primary"
                    >
                      <span>View Details</span>
                      <span className="event-btn-arrow">
                        →
                      </span>
                    </Link>


                    {event.scheduleLink && (

                      <Link
                        to={event.scheduleLink}
                        className="event-btn event-btn-outline"
                      >
                        Schedule
                      </Link>

                    )}


                    {event.booklet && (

                      <a
                        href={event.booklet}
                        target="_blank"
                        rel="noreferrer"
                        className="event-btn event-btn-outline"
                      >
                        Booklet
                      </a>

                    )}


                    {event.bookletLink && (

                      <a
                        href={event.bookletLink}
                        target="_blank"
                        rel="noreferrer"
                        className="event-btn event-btn-outline"
                      >
                        Booklet
                      </a>

                    )}


                    {event.guidlines && (

                      <a
                        href={event.guidlines}
                        target="_blank"
                        rel="noreferrer"
                        className="event-btn event-btn-outline"
                      >
                        Guidelines
                      </a>

                    )}


                    {event.faQ && (

                      <a
                        href={event.faQ}
                        target="_blank"
                        rel="noreferrer"
                        className="event-btn event-btn-outline"
                      >
                        FAQ
                      </a>

                    )}


                    {event.paperPresentation && (

                      <a
                        href={event.paperPresentation}
                        target="_blank"
                        rel="noreferrer"
                        className="event-btn event-btn-outline"
                      >
                        Presentations
                      </a>

                    )}


                    {event.paymentLink && (

                      <a
                        href={event.paymentLink}
                        target="_blank"
                        rel="noreferrer"
                        className="event-btn event-btn-red"
                      >
                        Registration
                      </a>

                    )}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =================================================
            PAST EVENT GALLERIES
        ================================================= */}

        <section className="events-section gallery-section">

          <div className="events-section-heading">

            <div>

              <span className="events-section-kicker">
                VISUAL ARCHIVE
              </span>

              <h2>
                Past
                <br />

                <span>Events</span>
              </h2>

            </div>


            <span className="events-section-number">
              02
            </span>

          </div>


          <div className="event-gallery-list">

            {eventsData.map((event, index) => (

              <article
                key={index}
                className="event-gallery-item"
              >

                <div className="gallery-heading">

                  <span className="gallery-number">
                    {event.number}
                  </span>

                  <h3>
                    {event.title}
                  </h3>

                </div>


                <div
                  className={`event-gallery-grid gallery-count-${event.images.length}`}
                >

                  {event.images.map(
                    (image, imageIndex) => (

                      <div
                        className="gallery-image-wrapper"
                        key={imageIndex}
                      >

                        <img
                          src={image}
                          alt={`${event.title} ${
                            imageIndex + 1
                          }`}
                          className="event-gallery-image"
                          loading="lazy"
                        />

                        <div className="gallery-image-overlay">

                          <span>
                            {String(
                              imageIndex + 1
                            ).padStart(2, "0")}
                          </span>

                        </div>

                      </div>

                    )
                  )}

                </div>

              </article>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
};

export default Events;