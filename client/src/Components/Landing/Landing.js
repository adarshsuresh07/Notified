import React from "react";
import NavigationBar from './NavigationBar.js';
import SigninForm from "./Signin/SigninForm.js";
import SignupForm from "./Signup/SignupForm.js";
import defaultimg from "../../Assets/Images/notified.png"
import Carousel from "./Carousel"
export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signup: true
        }
    }
    render() {
        return (
            <div className="landing-container">
                {/* <NavigationBar /> */}
                <div className="landing-first">
                    <div className="landing-left">
                        <img src={defaultimg} className="landing-logo" />
                        <div>
                            <div className="landing-name">notified</div><br />
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                    <div className="landing-right">
                        <div className="test">
                            <div className="test-outer">
                            </div>

                            {
                                this.state.signup ?
                                    <SignupForm />
                                    : <SigninForm />
                            }
                        </div>
                    </div>
                </div>
                <div className="landing-carousel">
                    <Carousel />
                </div>
                <div className="aboutus-container">

                </div>
            </div>
        );
    }
}