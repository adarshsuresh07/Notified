import React from "react";
import { Form } from "react-bootstrap";

export default class SignupForm extends React.Component {
    render() {
        return (
            <div className="test-inner">
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button onClick={()=>{window.location.href="/dashboard"}}>Signup</button>
            </div>
        );
    }
}