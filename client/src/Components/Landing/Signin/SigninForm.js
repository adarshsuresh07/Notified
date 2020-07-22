import React from "react";

export default class SigninForm extends React.Component {
    goNext=e=>{
        e.preventDefault();
        window.location.href="/dashboard"
    }
    render() {
        return (
            <form className="test-inner" onSubmit={this.goNext}>
                <input type="email" placeholder="Email Id" required/>
                <input type="password" placeholder="Password" required/>
                <button type="submit" >Login</button>
            </form>
        );
    }
}