import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BCORE } from './components/pages/BCORE';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Footer } from './components/Footer';
import { Team } from './components/pages/Team';
import { Events } from './components/pages/Events';
import { UpComing } from './components/pages/UpComingEvents';
import { Ethics_Statement } from './components/pages/Ethics_Statement';
import { Loader } from './components/Loader';
import './components/loader.css';
import NewsSection from './components/pages/NewsSection';
import { EventDetails } from './components/pages/EventDetails';
import { EventSchedule } from './components/pages/EventSchedule';
import { EventGallery } from './components/pages/EventGallery';

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
    <div className="navbar">
        <Navbar />
    </div>
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
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/event/:id/schedule" element={<EventSchedule />} />
        <Route path="/event/:id/gallery" element={<EventGallery />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
     </div>
     <div className="footer">
          <Footer />
    </div>
    </div>
    </div>
  );
}

export default App;
