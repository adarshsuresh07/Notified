import React from 'react'
import job from "../../Assets/Images/job.jpg"
import internship from "../../Assets/Images/intern2.jpg"
import fellow from "../../Assets/Images/fellowship.jpg"
import scholar from "../../Assets/Images/scholarship.jpg"
import close from "../../Assets/Icons/close.png"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleToast, newData } from "../../actions/actions"
const images = {
    "Job": job,
    "Internship": internship,
    "Fellowship": fellow,
    "Scholarship": scholar
}
class Newop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: '',
            company: '',
            category: "Job",
            due: new Date(),
            type: '',
            description: '',
            contact: '',
            applylink: '',
            furtherdetails: '',
            // image: addimage,
            // imageselected: false,
        }
    }

    // fileSelectHandler = e => {
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = (event) => {
    //         this.setState({ image: event.target.result, imageselected: true })
    //     }
    // }

    submit = () => {
        if (this.state.position === "")
            this.props.handleToast("error", "Position should not be empty");
        else if (this.state.company === "")
            this.props.handleToast("error", "Company should not be empty");
        else if (this.state.applylink === "")
            this.props.handleToast("error", "Apply link should not be empty");
        else {
            this.props.newData(this.state);
            setTimeout(() => {
                this.props.closeModal();
            }, 800);
        }
    }

    render() {
        return (
            <div className={this.props.newop ? "modal-container-on" : "modal-container-off"}>
                <div className={this.props.newop ? "dashboard-modal-on" : "dashboard-modal-off"}>
                    <span className="modal-close" onClick={this.props.closeModal}>
                        <img src={close} title="Add to todo" alt="x" style={{ width: "1rem" }} />
                    </span>
                    <div className="modal-left">
                        <input type="text" placeholder="Position" onChange={e => this.setState({ position: e.target.value })} />
                        <input type="text" placeholder="Company" onChange={e => this.setState({ company: e.target.value })} /> <br />
                        <div className="modal-row" onChange={e => this.setState({ category: e.target.value })}>Category: &nbsp;
                        <select style={{ width: "40%" }}>
                                <option value="Job">Job</option>
                                <option value="Internship">Internship</option>
                                <option value="Fellowship">Fellowship</option>
                                <option value="Scholarship">Scholarship</option>
                            </select>
                        </div> <br />
                        <div className="modal-row">
                            Last Date: &nbsp; <input type="date" placeholder="Company" style={{ width: "40%" }} onChange={e => this.setState({ due: e.target.value })} />
                        </div>
                        <div className="modal-type-container">
                            {
                                this.state.type.split(/[ ,]+/).map((type, index) => {
                                    if (type)
                                        return <div className={"modal-type type" + index % 3}>{type}</div>
                                })
                            }
                        </div>
                        <input type="text" placeholder="Requirements" onChange={e => this.setState({ type: e.target.value })} />
                        <textarea placeholder="Description" onChange={e => this.setState({ description: e.target.value })} />
                    </div>
                    <div className="modal-right">
                        <div className="modal-right-img">
                            <img
                                src={images[this.state.category]}
                                style={{ height: "80%" }}
                                alt=""
                            />
                        </div>
                        <input type="text" placeholder="Contact" onChange={e => this.setState({ contact: e.target.value })} />
                        <input type="text" placeholder="Apply link" onChange={e => this.setState({ applylink: e.target.value })} />
                        <textarea placeholder="Further details" onChange={e => this.setState({ furtherdetails: e.target.value })} />
                    </div>
                    <span className="modal-submit" onClick={this.submit}>Add Opportunity</span>
                </div>
            </div>
        )
    }
}


Newop.propTypes = {
    handleToast: PropTypes.func.isRequired,
    newData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    toast: state.toast
});

export default connect(
    mapStateToProps,
    { handleToast, newData }
)(Newop);