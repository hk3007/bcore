import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BCORE } from './pages/BCORE';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { Team } from './pages/Team';
import { Events } from './pages/Events';
import { UpComing } from './pages/UpComingEvents';
import { Ethics_Statement } from './pages/Ethics_Statement';
import { OlympicResearchGrants } from './pages/OlympicResearchGrants';
import { Loader } from './components/Loader';
import './components/loader.css';
import NewsSection from './pages/NewsSection';
import { EventDetails } from './pages/EventDetails';
import { EventSchedule } from './pages/EventSchedule';
import { EventGallery } from './pages/EventGallery';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import Careers from './pages/Careers';
import HumanPerformanceLab from './pages/HumanPerformanceLab';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs only once on mount

  // Conditional rendering for the loader
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
    <div className="App">
        <Navbar />
     <div className="main-content">
     <Routes>
        <Route path="/" element={<BCORE />} />
        <Route path="/bcore" element={<BCORE />} />
        <Route path="/about" element={<About />} />
        <Route path="/upcomingevents" element={<UpComing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<NewsSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ethics" element={<Ethics_Statement />} />
        <Route path="/olympicresearchgrants" element={<OlympicResearchGrants />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/HumanPerformanceLab" element={<HumanPerformanceLab />} />
        <Route path="/event/:id/schedule" element={<EventSchedule />} />
        <Route path="/event/:id/gallery" element={<EventGallery />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
     </div>
     <ScrollToTopButton />
     <div className="footer">
          <Footer />
    </div>
    </div>
    </div>
  );
}

export default App;
