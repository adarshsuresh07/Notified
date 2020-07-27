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
        }
    }
    register = (e) => {
        e.preventDefault();
        const data = {
            "email": this.state.email,
        }
        axios
            .post("/api/users/register", this.state)
            .then(res => {
                this.props.handleToast("success", "Email for reseting password sent");
            })
            .catch(error => {
                console.log(error.response);
                if (error.response.data.msg)
                    this.props.handleToast("error", error.response.data.msg);
            });
    }

    render() {
        return (
            <form className="test-inner" onSubmit={this.register}>
                <input type="email" placeholder="Email Id" onChange={e => this.setState({ email: e.target.value })} required />
                <button type="submit">Send Mail</button>
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