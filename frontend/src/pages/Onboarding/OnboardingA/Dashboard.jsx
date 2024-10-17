import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  Aos.init();
  return (
    <div className="container">
      <div className="profile-wrapper">
        <div className="telegram-logo">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 2L11 13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <img
          src="/placeholder.svg?height=60&width=60"
          alt="User Avatar"
          className="avatar"
        />
        <div className="username">Bubu Manuel</div>
        <img src="./src/images/web3school.png" alt="logo" />
      </div>
      <div className="sub-container" data-aos="fade-up">
        <p className="text">
          The major Celo network upgrade aimed at improving scalability and
          performance for decentralized applications (dApps) is called the Donut
          Hardfork. This upgrade introduces various enhancements, including The
          majorhis upgrade introduces various enhancements, including The major
          Celo network upgrade aimed at improving scalability and performance
          for decentralized applications (dApps) is called the Donut Hardfork.
          This upgrade introduces various enhancements, including
        </p>
        <Link to="homepage" className="button-container">
          <button className="cta-button">Go to dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
