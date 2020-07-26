import React from "react";
import axios from "axios";
import { handleToast } from "../../../actions/actions"
import PropTypes from "prop-types";
import { connect } from "react-redux";
class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: '',
            password2: '',
            perror: '',
            cerror: '',
            error: ''
        }
    }
    register = (e) => {
        e.preventDefault();
        const data = {
            "fullname": this.state.fullname,
            "email": this.state.email,
            "password": this.state.password,
            "password2": this.state.password2
        }
        if (!this.state.error)
            axios
                .post("/api/users/register", this.state)
                .then(res => {
                    this.props.handleToast("success", "Verification email sent");
                })
                .catch(error => {
                    console.log(error.response);
                    if (error.response.data.msg)
                        this.props.handleToast("error", error.response.data.msg);
                });
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
                    perror:'',
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
            <form className="test-inner" onSubmit={this.register}>
                <small style={{ color: "red" }}>{this.state.error}</small>
                <input type="text" placeholder="Full Name" onChange={e => this.setState({ fullname: e.target.value })} required />
                <input type="email" placeholder="Email Id" onChange={e => this.setState({ email: e.target.value })} required />
                <input type="password" placeholder="Password" onChange={this.validatePassword} required />
                <input type="password" placeholder="Confirm Password" onChange={this.validateCPassword} required />
                <button type="submit">Register</button>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    handleToast: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    toast: state.toast
});

export default connect(
    mapStateToProps,
    { handleToast }
)(RegisterForm);