import React from "react";
import axios from "axios";
export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: '',
            password2: ''
        }
    }
    register = (e) => {
        e.preventDefault();
        axios
            .post("/api/users/register", this.state)
            .then(res => {
                console.log(res);
            })
            .catch(err =>
                console.log(err.response)
            );
    }
    render() {
        return (
            <form className="test-inner" onSubmit={this.register}>
                {/* <span>error</span> */}
                <input type="text" placeholder="Full Name" onChange={e => this.setState({ fullname: e.target.value })} required />
                <input type="email" placeholder="Email Id" onChange={e => this.setState({ email: e.target.value })} required />
                <input type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} required />
                <input type="password" placeholder="Confirm Password" onChange={e => this.setState({ password2: e.target.value })} required />
                <button type="submit">Register</button>
            </form>
        );
    }
}