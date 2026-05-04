import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaFilePdf, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import BOA1 from '../pages/PDF/Abstract Book IORC1.pdf';
import './Publications.css';

const PUB_DATA = [
  {
    id: 1,
    date: "2026-01-04", // Used for sorting
    displayDate: "04 Jan 2026", // User-friendly format
    type: "Research Article",
    title: "The Critical Imperative of Olympic Education and Research in India: Bridging the Gap from Participation to Excellence in the Quest for 2036",
    authors: "Utsav Chaware, Director, BCORE, RRU, India",
    venue: "",
    link: "https://himjournals.com/hjel/1468/1488/the-critical-imperative-of-olympic-education-and-research-in-india-bridging-the-gap-from-participation-to-excellence-in-the-quest-for-2036-17271/"
  },
  {
    id: 2,
    date: "2026-01-27", // Used for sorting
    displayDate: "27 Jan 2026", // User-friendly format
    type: "Book Of Abstracts",
    title: "2nd International Olympic Research Conference (IORC) 2026: Book of Abstracts",
    authors: "",
    venue: "Rashtriya Raksha University, Gandhinagar, India",
    link: "https://drive.google.com/file/d/1qZYMJwOEf18SVs9RwtpKK2kVRC0bYoa8/view?usp=sharing"
  },
  {
    id: 3,
    date: "2026-01-27", // Used for sorting
    displayDate: "27 Jan 2026", // User-friendly format
    type: "Research Report",
    title: "ANTI-DOPING EDUCATION AND RESEARCH REPORT",
    authors: "Dr. Utsav Chaware, Mr. Nittan Sharma, Mr. Chandra Uday Singh ",
    venue: "",
    link: "https://drive.google.com/file/d/1OVRttarRIuLgBVFJLjdH2mlaP2fx2mUy/view?usp=sharing"
  },
  {
    id: 4,
    date: "2025-01-27", // Used for sorting
    displayDate: "27 Jan 2025", // User-friendly format
    type: "Book Of Abstracts",
    title: "1st International Olympic Research Conference (IORC) 2025: Book of Abstracts",
    authors: "",
    venue: "Rashtriya Raksha University, Gandhinagar, India",
    link: BOA1
  }
];

const Publications = () => {
  const [query, setQuery] = useState("");

  const filteredAndSorted = useMemo(() => {
    return [...PUB_DATA]
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Newest on top
      .filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) || 
        p.authors.toLowerCase().includes(query.toLowerCase())
      );
  }, [query]);

  return (
    <div className="pub-page">
      <Helmet>
        <title>Publications – BCORE</title>
      </Helmet>

      <section className="pub-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title"
          >
            Research & <span className="blue-text">Publications</span>
          </motion.h1>
          
          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search by title, author, or keyword..." 
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="container">
        {/* Table Header - Visible only on Desktop */}
        <div className="pub-table-header">
          <div className="col-date">Date</div>
          <div className="col-main">Title & Source</div>
          <div className="col-type">Category</div>
          <div className="col-actions">Actions</div>
        </div>

        <div className="pub-list">
          <AnimatePresence mode="popLayout">
            {filteredAndSorted.map((pub, idx) => (
              <motion.div 
                layout
                key={pub.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="pub-row"
              >
                {/* Date Column */}
                <div className="col-date">
                  <span className="date-badge">
                    <FaCalendarAlt className="calendar-icon" />
                    {pub.displayDate}
                  </span>
                </div>

                {/* Main Content Column (Title/Authors in one line-focused layout) */}
                <div className="col-main">
                  <h3 className="pub-row-title">{pub.title}</h3>
                  <div className="pub-row-sub">
                    <span className="row-author">{pub.authors}</span>
                    <span className="row-venue">{pub.venue}</span>
                  </div>
                </div>

                {/* Type Column */}
                <div className="col-type">
                  <span className={`type-tag ${pub.type.toLowerCase()}`}>{pub.type}</span>
                </div>

                {/* Actions Column */}
                <div className="col-actions">
                  <a href={pub.link} className="action-link pdf" title="Download PDF">
                    <FaFilePdf /> <span>VIEW</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Publications;