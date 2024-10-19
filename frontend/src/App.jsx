// import React from 'react'
import Button from './components/Button/Button' 
import './App.css'
import OnboardingA from './pages/Onboarding/OnboardingA/OnboardingA.jsx'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWallet from './pages/Onboarding/OnboardingA/ConnectWallet.jsx';
import Dashboard from './pages/Onboarding/OnboardingA/Dashboard.jsx';
import Homefooter from './pages/Onboarding/OnboardingA/Avatar/Homefooter.jsx';
import Homepage from './pages/Homepage.jsx';

function App() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', checkMobile);
    checkMobile();

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) {
    return <div className="desktop-message">Please use a mobile device to access this app.</div>;
  }

  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<OnboardingA />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/homepage' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App
