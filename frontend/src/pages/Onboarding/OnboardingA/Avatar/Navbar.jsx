import { CgCloseR } from "react-icons/cg"; 
import { AiOutlineCloseCircle } from "react-icons/ai";
import React from "react";

const NAvbar = () => {
  return (
    <div className="navbar-container">
      <div className="user-container">
        <img
          src="./src/pages/Onboarding/OnboardingA/BG 1.png"

          alt="user-image"
          className="navbar-img"
        />
        <div className="user-details">
          <p className="user-name">
            Hello, <span className="name-span">telegram</span>
          </p>
          <h3>Bubu Manuel</h3>
        </div>
      </div>
      <div className="navbar-close-button">
        <CgCloseR />
      </div>
    </div>
  );
};

export default NAvbar;
