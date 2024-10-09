// import React from 'react'
import Button from './components/Button/Button' 
import './App.css'
import OnboardingA from './pages/Onboarding/OnboardingA/OnboardingA.jsx'
import React, { useEffect, useState } from 'react'

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
      {/* <Button /> */}
      <OnboardingA />
    </div>
  );
}


export default App
