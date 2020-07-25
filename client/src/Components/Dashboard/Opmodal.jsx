import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import close from "../../Assets/Icons/close.png"
import { showData } from "../../actions/actions"
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const colors = ["#b45dfc", "#e84a5f", "#f8b500"];
class Opmodal extends React.Component {
    render() {
        const data = this.props.feed.data;
        const d = new Date(data.due);
        const date = d.getDate() + " " + months[d.getMonth()]
        const t = data.type ? data.type.split(/[ ,]+/) : [];
        const color = colors[this.props.feed.stack];
        return (
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
                                return <div className={"modal-type type" + index % 3}>{type}</div>
                            })
                        }
                    </div>
                    <p>{data.description}</p>
                </div>
                <div className="modal-right">
                    <img src={data.image} alt="" />
                    <span>{data.contact}</span>
                    <a href={data.applylink} target="_blank" rel="noopener noreferrer"  style={{ color: color }}>{data.applylink}</a>
                    <p>{data.furtherdetails}</p>
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