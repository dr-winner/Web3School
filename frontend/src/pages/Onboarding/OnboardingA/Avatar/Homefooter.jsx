import { CgProfile } from "react-icons/cg";
import { TiChartBarOutline } from "react-icons/ti";
import { HiClipboardCheck } from "react-icons/hi";
import { GiProgression } from "react-icons/gi";
import { RiHome5Fill } from "react-icons/ri";
import React from "react";

const Homefooter = () => {
  return (
    <div className="footer">
      {/* Home icon */}
      <div className="home">
        <div className="home-icon">
          <RiHome5Fill />
        </div>
        <p className="home-text">Home</p>
      </div>
      {/* Track progress icon */}
      <div className="home">
        <div className="home-icon">
          <TiChartBarOutline />
        </div>
        <p className="track-text">Track progress</p>
      </div>
      {/* Module icon */}
      <div className="home">
        <div className="home-icon">
          <HiClipboardCheck />
        </div>
        <p className="home-text">Module</p>
      </div>
      {/* Profile icon */}
      <div className="home">
        <div className="home-icon">
          <CgProfile />
        </div>
        <p className="home-text">Profile</p>
      </div>
    </div>
  );
};

export default Homefooter;
