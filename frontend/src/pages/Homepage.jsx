import React from "react";
import Homefooter from "./Onboarding/OnboardingA/Avatar/Homefooter";
import NAvbar from "./Onboarding/OnboardingA/Avatar/NAvbar";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="">
          <NAvbar />
        </div>
        Homepage
        <div className="">
          <Homefooter />
        </div>
      </div>
    </>
  );
};

export default Homepage;
