import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import close from "../../Assets/Icons/close.png"
import { showData } from "../../actions/actions"
import job from "../../Assets/Images/job.jpg"
import internship from "../../Assets/Images/intern2.jpg"
import fellow from "../../Assets/Images/fellowship.jpg"
import scholar from "../../Assets/Images/scholarship.jpg"
const images = {
    "Job": job,
    "Internship": internship,
    "Fellowship": fellow,
    "Scholarship": scholar
}
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const colors = ["#b45dfc", "#e84a5f", "#f8b500"];
class Opmodal extends React.Component {
    copyLink = () => {
        var text = this.props.feed.data.applylink;
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        document.getElementById("copy-clip").className = "modal-show-copy-link";
        setTimeout(() => {
            document.getElementById("copy-clip").className = "modal-copy-link";
        }, 3000);
    }
    render() {
        const data = this.props.feed.data;
        const d = new Date(data.due);
        const date = d.getDate() + " " + months[d.getMonth()]
        const t = data.type ? data.type.split(/[ ,]+/) : [];
        const color = colors[this.props.feed.stack];
        return (
            <div className={this.props.feed.modalon ? "modal-container-on" : "modal-container-off"}>
                <div className={this.props.feed.modalon ? "dashboard-modal-on" : "dashboard-modal-off"}>
                    <span className="modal-close" onClick={() => this.props.showData()}>
                        <img src={close} title="Add to todo" alt="x" style={{ width: "1rem" }} />
                    </span>
                    <div className="modal-left">
                        <div>
                            <h5 style={{ color: color }}>{date}</h5>
                            <h4>{data.position}</h4>
                            <span>@{data.company}</span> <br />
                            <span>{data.category}</span>
                        </div>
                        <div className="modal-type-container">
                            {
                                t.map((type, index) => {
                                    if (type)
                                        return <div className={"modal-type type" + index % 3} key={index}>{type}</div>
                                    return <span id={index}/>
                                })
                            }
                        </div>
                        <p>{data.description}</p>
                    </div>
                    <div className="modal-right">
                        <div className="modal-right-img">
                            <img
                                src={images[data.category]}
                                style={{ height: "80%" }}
                                alt=""
                            />
                        </div>
                        <span>{data.contact}</span>
                        <div>
                            <a href={data.applylink} target="_blank" rel="noopener noreferrer" style={{ color: color, width: "90%" }}>
                                <span className="modal-type" style={{ backgroundColor: color, color: "white", fontSize:"0.9rem" }}>Apply Link</span>
                            </a>
                            <span className="modal-type" onClick={this.copyLink} style={{ backgroundColor: color, color: "white", cursor: "pointer",  fontSize:"0.9rem" }}>
                                <i className="fa fa-clipboard" aria-hidden="true"></i>
                            </span>
                        </div>
                        <small className="modal-copy-link" id="copy-clip" style={{ color: color }}>Link copied to Clipboard!</small>
                        <p>{data.furtherdetails}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Opmodal.propTypes = {
    showData: PropTypes.func.isRequired,
    feed: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    feed: state.feed
});

export default connect(
    mapStateToProps,
    { showData }
)(Opmodal);