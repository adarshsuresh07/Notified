import React from 'react'
import job from "../../Assets/Images/job.jpg"
import internship from "../../Assets/Images/intern2.jpg"
import fellow from "../../Assets/Images/fellowship.jpg"
import scholar from "../../Assets/Images/scholarship.jpg"
import close from "../../Assets/Icons/close.png"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleToast, newData, editOP, editData, deleteData } from "../../actions/actions"
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
            id: '',
            position: '',
            company: '',
            category: "Job",
            due: new Date(),
            type: '',
            description: '',
            contact: '',
            applylink: '',
            furtherdetails: '',
            posted_by: ''
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.feed.modalon !== this.props.feed.modalon && nextProps.feed.modalon === 3) {
            var data = nextProps.feed.edit;
            var d = new Date(data.due),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            const due = [year, month, day].join('-');
            this.setState({
                id: data._id,
                position: data.position,
                company: data.company,
                category: data.category,
                type: data.type,
                due: due,
                description: data.description,
                contact: data.contact,
                applylink: data.applylink,
                furtherdetails: data.furtherdetails,
                posted_by: data.posted_by,
            });
        }
    }

    submit = () => {
        if (this.state.position === "")
            this.props.handleToast("error", "Position should not be empty");
        else if (this.state.company === "")
            this.props.handleToast("error", "Company should not be empty");
        else if (this.state.applylink === "")
            this.props.handleToast("error", "Apply link should not be empty");
        else {
            if (this.props.feed.modalon === 2)
                this.props.newData(this.state);
            else
                this.props.editData(this.state);
        }
    }

    render() {
        return (
            <div className={this.props.feed.modalon > 1 ? "modal-container-on" : "modal-container-off"}>
                <div className={this.props.feed.modalon > 1 ? "dashboard-modal-on" : "dashboard-modal-off"}>
                    <span className="modal-close" onClick={this.props.editOP}>
                        <img src={close} title="Add to todo" alt="x" style={{ width: "1rem" }} />
                    </span>
                    <div className="modal-left">
                        <input type="text" placeholder="Position" value={this.state.position} onChange={e => this.setState({ position: e.target.value })} />
                        <input type="text" placeholder="Company" value={this.state.company} onChange={e => this.setState({ company: e.target.value })} /> <br />
                        <div className="modal-row" onChange={e => this.setState({ category: e.target.value })}>Category: &nbsp;
                        <select style={{ width: "40%" }} value={this.state.category}>
                                <option value="Job">Job</option>
                                <option value="Internship">Internship</option>
                                <option value="Fellowship">Fellowship</option>
                                <option value="Scholarship">Scholarship</option>
                            </select>
                        </div> <br />
                        <div className="modal-row">
                            Last Date: &nbsp; <input type="date" value={this.state.due} style={{ width: "40%" }} onChange={e => this.setState({ due: e.target.value })} />
                        </div>
                        <div className="modal-type-container">
                            {
                                this.state.type.split(/[ ,]+/).map((type, index) => {
                                    if (type)
                                        return <div className={"modal-type type" + index % 3} key={index}>{type}</div>
                                    return <span id={index} />
                                })
                            }
                        </div>
                        <input type="text" placeholder="Requirements" value={this.state.type} onChange={e => this.setState({ type: e.target.value })} />
                        <textarea placeholder="Description" maxLength="300" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
                    </div>
                    <div className="modal-right">
                        <div className="modal-right-img">
                            <img
                                src={images[this.state.category]}
                                style={{ height: "80%" }}
                                alt=""
                            />
                        </div>
                        <input type="text" placeholder="Contact" value={this.state.contact} onChange={e => this.setState({ contact: e.target.value })} />
                        <input type="text" placeholder="Apply link" value={this.state.applylink} onChange={e => this.setState({ applylink: e.target.value })} />
                        <textarea placeholder="Further details" maxLength="300" value={this.state.furtherdetails} onChange={e => this.setState({ furtherdetails: e.target.value })} />
                    </div>
                    {
                        this.props.feed.modalon === 2 ?
                            <span className="modal-submit" onClick={this.submit}>Add Opportunity</span>
                            :
                            <span className="modal-submit" >
                                <span onClick={()=>this.props.deleteData(this.props.feed.edit._id)}>Delete</span>
                                &emsp;
                                <span onClick={this.submit}>Update</span>
                            </span>
                    }
                </div>
            </div>
        )
    }
}


Newop.propTypes = {
    handleToast: PropTypes.func.isRequired,
    newData: PropTypes.func.isRequired,
    deleteData: PropTypes.func.isRequired,
    editData: PropTypes.func.isRequired,
    editOP: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    toast: state.toast,
    feed: state.feed
});

export default connect(
    mapStateToProps,
    { handleToast, newData, editOP, editData, deleteData }
)(Newop);