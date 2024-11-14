import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import  {BCORE}  from './components/pages/BCORE';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Footer } from './components/Footer';
import { Team } from './components/pages/Team';
import { Events } from './components/pages/Events';
import { UpComing } from './components/pages/UpComingEvents';
import { Loader } from './components/Loader';
import './components/loader.css';
import NewsSection from './components/pages/NewsSection';
import { EventDetails } from './components/pages/EventDetails';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BCORE />} />
        <Route path="/bcore" element={<BCORE />} />
        <Route path="/about" element={<About />} />
        <Route path="/upcomingevents" element={<UpComing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<NewsSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
