import React from "react";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";

const ConnectWallet = () => {
  return (
    <div className="web3-school">
      <div className="logo">
        <img src="./src/images/web3school.png" alt="logo" />
      </div>
      <div className="outer-certificate">
        <div className="certificate">
          <div className="certificate-content">
            <img src="" alt="User Avatar" className="user-avatar" />
            <div className="user-info">
              <span className="platform">Telegram</span>
              <h2 className="user-name">Bubu Manuel</h2>
            </div>
            <h3 className="course-title">Decentralized Blockchain Tech.</h3>
            <p className="completion-text">
              This is to certify that the above Telegram has complete the Web3
              module.
            </p>
          </div>
          <div className="star-icon">★</div>
        </div>
      </div>
      <div className="sub-container">
        <div className="info-card">
          <h2>Welcome to Web3 School</h2>
          <h3>Get a soul-bound NFT certificate</h3>
          <p>
            We offer you soul-bounded NFT certificate upon each module
            completion.
          </p>
        </div>
        <Link to="/dashboard">
          <button className="connect-button">Connect Telegram account</button>
        </Link>
      </div>
    </div>
  );
};

export default ConnectWallet;
