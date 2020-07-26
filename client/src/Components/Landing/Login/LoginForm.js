import React from "react";
import axios from "axios";
import setAuthToken from "../../../utils/setAuthToken";
import { login } from "../../../utils/Token";
import { handleToast } from "../../../actions/actions"
import PropTypes from "prop-types";
import { connect } from "react-redux";
class LoginForm extends React.Component {
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
                window.location.href = "/dashboard"
            })
            .catch(error => {
                console.log(error.response);
                if (error.response.data.msg)
                    this.props.handleToast("error", error.response.data.msg);
            });
    }

    render() {
        return (
            <form className="test-inner" onSubmit={this.userLogin}>
                {/* <span>error</span> */}
                <input type="email" placeholder="Email Id" onChange={e => this.setState({ email: e.target.value })} required />
                <input type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} required />
                <button type="submit">Login</button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    handleToast: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    toast: state.toast
});

export default connect(
    mapStateToProps,
    { handleToast }
)(LoginForm);


