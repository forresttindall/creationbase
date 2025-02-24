import React from 'react';
import './App.css';
import './index.css';
import './HeroSection.css';
import './lavendair.css';
import HeroSection from './HeroSection';
import Header from './Header';
import Lavendair from './Lavendair';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';    
import Contact from './Contact';
import QuantumKeep from './QuantumKeep';
import ClearFeed from './ClearFeed';
import Blog from './Blog';
import Newsletter from './Newsletter';
import QuantumKeepBeta from './articles/quantumkeep-public-beta';
import ClearFeedUpdates from './articles/clearfeed-updates';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <About />
                <ClearFeed />
                <QuantumKeep />
                <Newsletter />
              </>
            } />
            <Route path="/technologies" element={<Lavendair />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/quantumkeep-public-beta" element={<QuantumKeepBeta />} />
            <Route path="/blog/clearfeed-updates" element={<ClearFeedUpdates />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
