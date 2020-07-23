import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/actions"
class SigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <form className="test-inner" onSubmit={() => this.props.loginUser(this.state)}>
                <input type="email" placeholder="Email Id" onChange={e => this.setState({ email: e.target.value })} required />
                <input type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} required />
                <button type="submit" >Login</button>
            </form>
        );
    }
}
SigninForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { loginUser }
)(SigninForm);


