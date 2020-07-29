import React from "react";
import axios from "axios";
import { handleToast } from "../../../actions/actions"
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Resetpw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            password2: '',
            perror: '',
            cerror: '',
            error: '',
            token: this.props.match.params.token,
            loading: true
        }
    }
    resetPass = (e) => {
        e.preventDefault();
        const data = {
            "token": this.state.token,
            "password": this.state.password,
            "password2": this.state.password2
        }
        if (!this.state.error) {
            this.setState({ loading: true });
            axios
                .post("/api/reset-password/password", data)
                .then(res => {
                    console.log(res);
                    this.props.handleToast("success", "Password Reset successful");
                })
                .catch(error => {
                    console.log(error.response);
                    if (error.response.data.msg)
                        this.props.handleToast("error", error.response.data.msg);
                }).finally(() => {
                    this.setState({ loading: false });
                    setTimeout(() => {
                        this.props.history.push("/");
                    }, 1000);
                })
        }
    }

    validatePassword = (e) => {
        if (e.target.value.length < 8)
            this.setState({
                perror: 'Password: atleast 8 characters',
                error: 'Password: atleast 8 characters'
            });
        else {
            if (e.target.value !== this.state.password2)
                this.setState({
                    perror: '',
                    cerror: 'Passwords should match',
                    error: 'Password should match'
                });
            else
                this.setState({
                    perror: '',
                    cerror: '',
                    error: ''
                });
        }
        this.setState({ password: e.target.value })
    }

    validateCPassword = (e) => {
        if (e.target.value !== this.state.password)
            this.setState({
                cerror: 'Passwords should match',
                error: 'Password should match'
            });
        else
            this.setState({
                cerror: '',
                error: this.state.perror
            });
        this.setState({ password2: e.target.value })
    }

    render() {
        return (
            <div className="verify-container">
                <h1 className="landing-name">Notified</h1>
                <div className="test" style={{ marginTop: "3rem", fontSize: "0.9rem" }}>
                    <div className="test-outer" />
                    <form className="test-inner" onSubmit={this.resetPass}>
                        <small style={{ color: "red" }}>{this.state.error}</small>
                        <input type="password" placeholder="Password" onChange={this.validatePassword} required />
                        <input type="password" placeholder="Confirm Password" onChange={this.validateCPassword} required />
                        <button type="submit" disabled={this.state.loading}>Reset Password</button>
                    </form>
                </div>
            </div >
        );
    }
}

Resetpw.propTypes = {
    handleToast: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    toast: state.toast
});

export default connect(
    mapStateToProps,
    { handleToast }
)(Resetpw);