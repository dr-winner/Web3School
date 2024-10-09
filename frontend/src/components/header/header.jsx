import React, { Component } from 'react'
import './header.css'


export class header extends Component {
    render() {
        return (<>
            <div className='headerLogo'>
                <img src="./src/images/web3school.png" alt="" />
            </div>
        </>
        )
    }
}

export default header