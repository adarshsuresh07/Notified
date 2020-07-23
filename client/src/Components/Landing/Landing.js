import React from "react";
import SigninForm from "./Signin/SigninForm.js";
import SignupForm from "./Signup/SignupForm.js";
import defaultimg from "../../Assets/Images/notified.png"
import defaultteam from "../../Assets/Images/you.jpg"
import Carousel from "./Carousel"
export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signup: false
        }
    }
    render() {
        return (
            <div className="landing-container">
                <div className="landing-first">
                    <div className="landing-left">
                        <img src={defaultimg} className="landing-logo" alt="" />
                        <div>
                            <div className="landing-name">notified</div><br />
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                    <div className="landing-right">
                        <div className="test">
                            <div className="test-outer" />
                            {
                                this.state.signup ?
                                    <SignupForm />
                                    : <SigninForm />
                            }
                        </div>
                        <div className="landing-toggle" onClick={() => this.setState({ signup: !this.state.signup })}>
                            <span className="bell fa fa-bell" /> &nbsp;
                            {
                                this.state.signup ?
                                    "Login"
                                    : "Register"
                            }
                        </div>
                    </div>
                </div>
                <div className="landing-carousel">
                    <Carousel />
                </div>
                <div className="aboutus-container">
                    <div className="aboutus">
                        <h4 className="field-names" style={{ color: "#f8b500", marginLeft: "2px" }}>Source Code</h4>
                        <a className="team-card" href="https://github.com/adarshsuresh07/Notified" target="_blank" rel="noopener noreferrer">
                            <img src={defaultimg} alt="" style={{width:"3rem"}}/>
                            <span>Notified</span>
                        </a>
                    </div>
                    <div className="aboutus">
                        <h4 className="field-names" style={{ color: "#f8b500", marginLeft: "2px" }}>Team</h4>
                        <a className="team-card" href="" target="_blank" rel="noopener noreferrer">
                            <img src={defaultteam} alt="" />
                            <h6>Haseena Hassan</h6>
                        </a>
                        <a className="team-card" href="https://adarshsuresh07.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
                            <img src={defaultteam} alt="" />
                            <h6>Adarsh S</h6>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}