import React from "react";
import axios from "axios";
import setAuthToken from "../../../utils/setAuthToken";
import { login, logout } from "../../../utils/Token";
class SigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    userLogin = e => {
        e.preventDefault();
        axios.post("/api/users/login", this.state)
            .then(res => {
                const token = res.data.token;
                login(token);
                setAuthToken(token);
                window.location.href="/dashboard"
            })
            .catch(err =>
                console.log(err.response)
            );
    }

    render() {
        return (
            <form className="test-inner" onSubmit={this.userLogin}>
                <input type="email" placeholder="Email Id" onChange={e => this.setState({ email: e.target.value })} required />
                <input type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} required />
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default SigninForm;


