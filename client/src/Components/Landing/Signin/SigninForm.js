import React from "react";

export default class SigninForm extends React.Component {
    render() {
        return (
            <div className="test-inner">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </div>
        );
    }
}