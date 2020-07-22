import React from "react";
import { Form } from "react-bootstrap";

export default class SignupForm extends React.Component {
    goNext=()=>{
        window.location.href="/dashboard"
    }
    render() {
        return (
            <form className="test-inner" onsubmit={this.goNext}>
                <input type="text" placeholder="Full Name" required/>
                <input type="email" placeholder="Email Id" required/>
                <input type="password" placeholder="Password" required/>
                <input type="password" placeholder="Confirm Password" required/>
                <button type="submit">Signup</button>
            </form>
        );
    }
}