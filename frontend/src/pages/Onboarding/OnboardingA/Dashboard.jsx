import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
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
        <div className="school-title">Web3 school</div>
      </div>
      <div className="decorative-element">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#00FFFF"
            d="M47.7,-57.2C59.7,-47.3,66.3,-30.9,68.1,-14.2C69.9,2.5,67,19.4,58.7,32.5C50.4,45.6,36.7,54.8,21.9,59.1C7.1,63.4,-8.8,62.8,-23.5,57.9C-38.2,52.9,-51.7,43.7,-60.1,30.3C-68.5,17,-71.8,-0.5,-67.3,-15.3C-62.8,-30.1,-50.5,-42.3,-37.2,-51.8C-23.9,-61.3,-9.5,-68.1,4.4,-73.1C18.3,-78,36.6,-81.1,47.7,-57.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <button className="cta-button">Go to dashboard</button>
    </div>
  );
}

export default Dashboard;