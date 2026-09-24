import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import "./UpcomingEvents.css";
import { Helmet } from "react-helmet";

export const UpComing = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const parseEndDate = (dateStr) => {
    if (!dateStr) return null;

    const parts = dateStr.split("-").map((s) => s.trim());
    const endPart = parts.length > 1 ? parts[1] : parts[0];

    const cleanDateStr = endPart.replace(
      /(\d+)(st|nd|rd|th)/i,
      "$1"
    );

    const parsed = new Date(cleanDateStr);

    return Number.isNaN(parsed.getTime()) ? null : parsed;
  };

  /*
   * Builds:
   * 27 - 30 JAN 2026
   * 10 JAN 2026
   */
  const formatEventDate = (event) => {
    const start = event.date
      ? new Date(event.date)
      : event.startDate;

    const end = event.date
      ? start
      : event.endDate || start;

    if (
      !start ||
      !end ||
      Number.isNaN(start.getTime()) ||
      Number.isNaN(end.getTime())
    ) {
      return "DATE TBA";
    }

    const startDay = start.getDate();
    const endDay = end.getDate();

    const startMonth = start
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();

    const endMonth = end
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();

    const startYear = start.getFullYear();
    const endYear = end.getFullYear();

    if (
      startDay === endDay &&
      startMonth === endMonth &&
      startYear === endYear
    ) {
      return `${startDay} ${startMonth} ${startYear}`;
    }

    if (
      startMonth === endMonth &&
      startYear === endYear
    ) {
      return `${startDay} - ${endDay} ${startMonth} ${endYear}`;
    }

    if (startYear === endYear) {
      return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${endYear}`;
    }

    return `${startDay} ${startMonth} ${startYear} - ${endDay} ${endMonth} ${endYear}`;
  };

  const events = [
    {
      id: 1,
      name: "1st International Olympic Research Conference",
      startDate: new Date("2025-01-27"),
      endDate: new Date("2025-01-30"),
      place:
        "Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India",
      description:
        "A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.",
      bookletLink:
        "https://rru.ac.in/wp-content/uploads/2025/03/IORC-Booklet_-05-03-2025-10-MB_compressed.pdf",
    },

    {
      id: 3,
      name: "2nd International Olympic Research Conference",
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

    {
      id: 4,
      name: "BCORE Night Run",
      startDate: new Date("2026-01-10"),
      endDate: new Date("2026-01-10"),
      place: "Gandhinagar, India",
    },

    {
      id: 5,
      name: "Foundation Programme in Safe Sport and Safeguarding",
      startDate: new Date("2026-10-21"),
      endDate: new Date("2026-10-23"),
      place:
        "Rashtriya Raksha University, Gandhinagar, Gujarat, India",
    },

    {
      id: 6,
      name: "3rd International Olympic Research Conference",
      startDate: new Date("2027-01-27"),
      endDate: new Date("2027-01-29"),
      place:
        "Rashtriya Raksha University, Gandhinagar, Gujarat, India",
      description:
        "Focused on building a safe, ethical, and athlete-centred Olympic ecosystem by integrating research, policy, education, and governance with a strong emphasis on safe sport and athlete safeguarding.",
      registrationLink:
        "https://rise.rru.ac.in/Course/693/785",
    },
    {
      id: 7,
      name: "Asian National Olympic Academy Summit",
      startDate: new Date("2027-01-28"),
      endDate: new Date("2027-01-29"),
      place:
        "Rashtriya Raksha University, Gandhinagar, Gujarat, India",
      theme: "Building an Asian Network for Olympic Education and Research",
      description:
        "The Summit brings together National Olympic Academies, Olympic Studies and Research Centres, and other institutions from across Asia to strengthen collaboration in Olympic education, research and academic exchange.",
      registrationNotice: "Registration opens soon",
    },
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events
    .filter((event) => {
      if (event.endDate) {
        return event.endDate >= today;
      }

      if (event.date) {
        const eventEndDate = parseEndDate(event.date);

        return eventEndDate && eventEndDate >= today;
      }

      return false;
    })
    .sort((a, b) => {
      const dateA = a.date
        ? new Date(a.date)
        : a.startDate;

      const dateB = b.date
        ? new Date(b.date)
        : b.startDate;

      return dateA - dateB;
    });

  return (
    <div className="chrono-events-container">

      <Helmet>
        <title>
          Upcoming Events – Bharat Centre of Olympic Research & Education
        </title>
      </Helmet>

      {/* =====================================================
          HERO
          Same visual language as Past Events
          CSS GRAPHICS ONLY — NO PHOTO
          ===================================================== */}

      <header className="ue-hero">

        <div className="ue-hero-bg" />

        <div className="ue-hero-grid" />

        {/* Decorative orbital graphics */}
        <div className="ue-hero-orbit ue-hero-orbit-1" />
        <div className="ue-hero-orbit ue-hero-orbit-2" />

        {/* Decorative technical lines */}
        <div className="ue-hero-line ue-hero-line-1" />
        <div className="ue-hero-line ue-hero-line-2" />

        <div className="ue-hero-content">

          <span className="ue-hero-kicker">
            BCORE · Rashtriya Raksha University
          </span>

          <h1 className="ue-hero-title">
            Upcoming <span>Events</span>
          </h1>

          <p className="ue-hero-subtitle">
            Conferences, programmes and gatherings shaping the future of
            Olympic research, athlete welfare and sport development.
          </p>

          <div className="ue-hero-badge">
            <strong>{upcomingEvents.length}</strong>

            <span>
              {upcomingEvents.length === 1
                ? "Event Scheduled"
                : "Events Scheduled"}
            </span>
          </div>

        </div>

        <div className="ue-hero-bottom">
          <span>RESEARCH</span>
          <i />
          <span>EDUCATION</span>
          <i />
          <span>SPORT</span>
        </div>

      </header>

      {/* =====================================================
          EXISTING UPCOMING EVENTS UI
          ===================================================== */}

      <div className="regal-content-wrapper">

        {upcomingEvents.length > 0 ? (

          <div className="ue-grid">

            {upcomingEvents.map((event) => (

              <div
                className="ue-card"
                key={event.id}
              >

                <div className="ue-card-top">

                  <div className="ue-card-date">

                    <span className="ue-card-date__range">
                      {formatEventDate(event)}
                    </span>

                    <span className="ue-card-date__year">
                      {
                        (
                          event.date
                            ? new Date(event.date)
                            : event.startDate
                        ).getFullYear()
                      }
                    </span>

                  </div>

                  {event.accomodation && (
                    <span className="ue-badge">
                      {event.accomodation}
                    </span>
                  )}

                </div>

                <h3 className="ue-card-title">
                  {event.name}
                </h3>

                {event.theme && (
                  <p className="ue-card-theme">
                    <span>Theme</span>
                    {event.theme}
                  </p>
                )}

                {event.description && (
                  <p className="ue-card-summary">{event.description}</p>
                )}

                <p className="ue-venue">

                  <MapPin
                    size={15}
                    className="ue-venue-icon"
                  />

                  {event.place || "TBA"}

                </p>

                {event.registrationNotice && (
                  <p className="ue-registration-note">
                    {event.registrationNotice}
                  </p>
                )}

                <div className="ue-btn-group">

                  <Link
                    to={`/event/${event.id}`}
                    className="ue-btn primary"
                  >
                    View Details
                  </Link>

                  {event.scheduleLink && (
                    <Link
                      to={event.scheduleLink}
                      className="ue-btn secondary"
                    >
                      Schedule
                    </Link>
                  )}

                  {event.bookletLink && (
                    <a
                      href={event.bookletLink}
                      target="_blank"
                      rel="noreferrer"
                      className="ue-btn secondary"
                    >
                      Booklet
                    </a>
                  )}

                  {event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noreferrer"
                      className="ue-btn secondary"
                    >
                      Registration
                    </a>
                  )}

                  {event.paymentLink && (
                    <a
                      href={event.paymentLink}
                      target="_blank"
                      rel="noreferrer"
                      className="ue-btn secondary"
                    >
                      Payment
                    </a>
                  )}

                  {event.faQ && (
                    <a
                      href={event.faQ}
                      target="_blank"
                      rel="noreferrer"
                      className="ue-btn secondary"
                    >
                      FAQ
                    </a>
                  )}

                  {event.guidlines && (
                    <a
                      href={event.guidlines}
                      target="_blank"
                      rel="noreferrer"
                      className="ue-btn secondary"
                    >
                      Guidelines
                    </a>
                  )}

                  {event.paperPresentation && (
                    <a
                      href={event.paperPresentation}
                      target="_blank"
                      rel="noreferrer"
                      className="ue-btn secondary"
                    >
                      Paper Presentation
                    </a>
                  )}

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="chrono-empty">

            <p>
              Stay tuned for Further Updates
            </p>

          </div>

        )}

      </div>

    </div>
  );
};