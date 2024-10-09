import React, { Component } from 'react'
import './OnboardingA.css'
import Header from '../../../components/Header/Header'

export class OnboardingA extends Component {
    render() {
        return (<>
            <div className='OnboardingA'>
                <Header />
                <div className="avatar-container">
                    <div className="avatar-circle">
                        <img src="./src/images/Roundelipse.png" alt="" />
                    </div>
                </div>
                <div className="content-card">
                    <h2>Welcome to Web3 School</h2>
                    <h3>Learn about Web3 in one place</h3>
                    <p>Hey newbie! It's time to learn Web3 from the list of our curated video and guides from global experts.</p>
                </div>

                <button className="next-button">Next</button>
            </div>
        </>
        )
    }
}

export default OnboardingA