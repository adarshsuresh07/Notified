import React from "react";
import axios from "axios";
import { handleToast } from "../../actions/actions"
import close from "../../Assets/Icons/close.png"
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            feedback: '',
        }
    }
    feedback = (e) => {
        e.preventDefault();
        const data = {
            "email": this.state.email,
            "feedback": this.state.feedback
        }
        axios
            .post("/api/feedback/", data)
            .then(res => {
                console.log(res);
                this.props.handleToast("success", "Feedback sent successful");
            })
            .catch(error => {
                console.log(error.response);
                this.props.handleToast("error", "Feedback couldn't send");
            }).finally(() => {
                setTimeout(() => {
                    this.props.closeModal();
                }, 1000);
            })
    }

    render() {
        const modalStyle = {
            alignItems: "center",
            flexWrap: "nowrap",
            justifyContent: "space-evenly"
        }
        return (
            <div className="modal-container-on">
                <div className="dashboard-modal-on" style={modalStyle}>
                    <span className="modal-close" onClick={this.props.closeModal}>
                        <img src={close} title="Add to todo" alt="x" style={{ width: "1rem" }} />
                    </span>
                    <h1 className="landing-name">Notified</h1>
                    <form className="feedback-container" onSubmit={this.feedback}>
                        <input type="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} required />
                        <textarea placeholder="Feedback" onChange={e => this.setState({ feedback: e.target.value })} required />
                        <button type="submit">Submit Feedback</button>
                    </form>
                </div >
            </div>
        );
    }
}

Feedback.propTypes = {
    handleToast: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    toast: state.toast
});

export default connect(
    mapStateToProps,
    { handleToast }
)(Feedback);