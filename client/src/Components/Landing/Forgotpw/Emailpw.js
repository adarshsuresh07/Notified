import React from "react";
import axios from "axios";
import { handleToast } from "../../../actions/actions"
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Emailpw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            loading: false
        }
    }
    sentEmail = (e) => {
        e.preventDefault();
        const data = {
            "email": this.state.email,
        }
        this.setState({ loading: true });
        axios
            .post("/api/reset-password/email", data)
            .then(res => {
                console.log(res);
                this.props.handleToast("success", "Email for reseting password sent");
            })
            .catch(error => {
                console.log(error.response);
                if (error.response.data.msg)
                    this.props.handleToast("error", error.response.data.msg);
            }).finally(() => {
                this.setState({ loading: false });
                this.props.gotoLogin();
            })
    }

    render() {
        return (
            <form className="test-inner" onSubmit={this.sentEmail}>
                <input type="email" placeholder="Email Id" onChange={e => this.setState({ email: e.target.value })} required />
                <button type="submit" disabled={this.state.loading}>Send Mail</button>
            </form>
        );
    }
}

Emailpw.propTypes = {
    handleToast: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    toast: state.toast
});

export default connect(
    mapStateToProps,
    { handleToast }
)(Emailpw);