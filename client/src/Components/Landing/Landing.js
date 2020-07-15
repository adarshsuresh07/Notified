import React from "react";
import "../../Assets/css/landing/landing.css";

import NavigationBar from './NavigationBar.js';
import SigninModal from "./Signin/SigninModal.js";
import SignupModal from "./Signup/SignupModal.js";

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div className='center'>
                    <center>
                        <SigninModal /> &emsp;
                        <SignupModal />
                    </center>
                    
                </div>
            </div>
        );
    }
}