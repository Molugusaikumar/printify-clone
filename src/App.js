import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EarningsCalculator from './components/EarningsCalculator';
import SuccessStories from './components/SuccessStories';
import IdeasInspiration from './components/IdeasAndInspiration';
import YourNextBestseller from './components/BestSellers';
import AsSeenIn from './components/AsSeenIn';
import GlobalReach from './components/GlobalReach'; // Import the new component
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <YourNextBestseller />
      <IdeasInspiration />
      <EarningsCalculator />
      <SuccessStories />
      <AsSeenIn />
      <GlobalReach /> {/* Add this line */}
      <Footer />
    </div>
  );
}

export default App;
