import React from "react";
import Homefooter from "./Onboarding/OnboardingA/Avatar/Homefooter";
import NAvbar from "./Onboarding/OnboardingA/Avatar/NAvbar";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="navbar-header">
          <NAvbar />
        </div>
        <div className="Mainpage-container">
          <div className="mainpage-inner">
            <p className="top-paragraph">
              Let's learn Something new about <span>Web3</span>
            </p>
            <div className="user-information">
              <div className="blurred-bg">
                <div className="user-bg">
                  <p className="notice">Ongoing Module</p>
                  <p className="notice-info">No active notice yet</p>
                  <button className="notice-button">Start a module</button>
                </div>
              </div>
            </div>
            <p className="choose">Choose a module</p>
          </div>
          <div className="selection-tab">
            <p className="selection-btn">All</p>
            <p className="selection-btn">Beginner</p>
            <p className="selection-btn">Advance</p>
          </div>
              </div>
              {/* The videos section */}
        <div className="video-container">
          <div className="video-1">
            <p className="topic">Web3 Foundation</p>
            <p className="topic-numbers">5 topics</p>
          </div>
          <div className="video-1">
            <p className="topic">Web3 Foundation</p>
            <p className="topic-numbers">5 topics</p>
          </div>
        </div>
        {/* The footer sectin */}
        <div className="home-footer">
          <Homefooter />
        </div>
      </div>
    </>
  );
};

export default Homepage;
