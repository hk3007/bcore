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
    const parts = dateStr.split("-").map((s) => s.trim());
    const endPart = parts.length > 1 ? parts[1] : parts[0];
    const cleanDateStr = endPart.replace(/(\d+)(st|nd|rd|th)/, "$1");
    return new Date(cleanDateStr + " 2025"); // Assume year is 2025 for consistency
  };

  // Builds a "27 - 30 JAN 2026" / "10 JAN 2026" style range, matching the
  // date formatting used on the Past Events page.
  const formatEventDate = (event) => {
    const start = event.date ? new Date(event.date) : event.startDate;
    const end = event.date ? start : event.endDate || start;

    const startDay = start.getDate();
    const endDay = end.getDate();
    const startMonth = start.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const endMonth = end.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const year = end.getFullYear();

    if (startDay === endDay && startMonth === endMonth) {
      return `${startDay} ${startMonth} ${year}`;
    }
    if (startMonth === endMonth) {
      return `${startDay} - ${endDay} ${startMonth} ${year}`;
    }
    return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${year}`;
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
      place: "Rashtriya Raksha University, Gandhinagar, India",
      description:
        "To address critical Olympic challenges in India's Olympic aspirations and develop long-term, sustainable solutions through integrated research, education, and governance",
      bookletLink:
        "https://drive.google.com/file/d/1166eN6ZlTAL8r2vHmNToTwFrqkXvZb_I/view?usp=sharing",
      paymentLink: "https://forms.eduqfix.com/secolycn/add",
      faQ: "https://drive.google.com/file/d/1m1xHmHf20D3La7ZMw3ERuKzQIgdmIKfr/view?usp=sharing",
      scheduleLink: "/event/3/schedule",
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
    },
    {
      id: 6,
      name: "3rd International Olympic Research Conference",
      startDate: new Date("2027-01-27"),
      endDate: new Date("2027-01-29"),
      place: "Rashtriya Raksha University, Gandhinagar, Gujarat, India",
      description:
        "Focused on building a safe, ethical, and athlete-centred Olympic ecosystem by integrating research, policy, education, and governance with a strong emphasis on safe sport and athlete safeguarding.",
      bookletLink: "https://bcore.rru.ac.in", // placeholder (to be published)
      paymentLink: "https://bcore.rru.ac.in", // placeholder
      faQ: "https://bcore.rru.ac.in", // placeholder
      scheduleLink: "/event/3/schedule",
      guidlines: "https://bcore.rru.ac.in", // submission guidelines to be published
      paperPresentation:
        "Submission details to be announced via official BCORE website",
    },
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events
    .filter((event) => {
      if (event.endDate) {
        return event.endDate >= today;
      } else if (event.date) {
        const eventEndDate = parseEndDate(event.date);
        return eventEndDate >= today;
      }
      return false;
    })
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date) : a.startDate;
      const dateB = b.date ? new Date(b.date) : b.startDate;
      return dateA - dateB;
    });

  return (
    <div className="chrono-events-container">
      <Helmet>
        <title>
          Upcoming Events – Bharat Centre of Olympic Research & Education
        </title>
      </Helmet>

      {/* ================= HERO — Safe Sport style dark showcase header ================= */}
      <header className="ue-hero">
        <div className="ue-hero-glow ue-hero-glow-1"></div>
        <div className="ue-hero-glow ue-hero-glow-2"></div>

        <div className="ue-hero-content">
          <span className="ue-hero-kicker">
            BCORE &middot; Rashtriya Raksha University
          </span>
          <h1 className="ue-hero-title">Upcoming Events</h1>
          <p className="ue-hero-subtitle">
            Conferences, programmes and gatherings shaping the future of
            Olympic research, athlete welfare and sport development.
          </p>

          <div className="ue-hero-badge">
            <strong>{upcomingEvents.length}</strong>
            <span>{upcomingEvents.length === 1 ? "Event Scheduled" : "Events Scheduled"}</span>
          </div>
        </div>
      </header>

      <div className="regal-content-wrapper">
        {upcomingEvents.length > 0 ? (
          <div className="ue-grid">
            {upcomingEvents.map((event) => (
              <div className="ue-card" key={event.id}>
                <div className="ue-card-top">
                  <div className="ue-card-date">
                    <span className="ue-card-date__range">{formatEventDate(event)}</span>
                    <span className="ue-card-date__year">
                      {(event.date ? new Date(event.date) : event.startDate).getFullYear()}
                    </span>
                  </div>
                  {event.accomodation && (
                    <span className="ue-badge">{event.accomodation}</span>
                  )}
                </div>

                <h3 className="ue-card-title">{event.name}</h3>

                <p className="ue-venue">
                  <MapPin size={15} className="ue-venue-icon" />
                  {event.place || "TBA"}
                </p>

                <div className="ue-btn-group">
                  <Link to={`/event/${event.id}`} className="ue-btn primary">
                    View Details
                  </Link>

                  {event.scheduleLink && (
                    <Link to={event.scheduleLink} className="ue-btn secondary">
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
            <p>Stay tuned for Further Updates</p>
          </div>
        )}
      </div>
    </div>
  );
};
