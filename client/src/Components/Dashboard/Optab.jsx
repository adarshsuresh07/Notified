import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { showData } from "../../actions/actions"
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const types = ["op", "todo", "applied"];
class Optab extends React.Component {
    render() {
        const type = types[this.props.type];
        const d = new Date(this.props.data.due);
        const date = d.getDate() + " " + months[d.getMonth()]
        return (
            <div className={type + "tab-container"} onClick={() => this.props.showData(this.props.data,this.props.type)}>
                <div className={type + "tab"}>
                    <div className={type + "tab-first"}>
                        <div className={type + "tab-name"}>{this.props.data.position}<br />&nbsp; <small>@{this.props.data.company} </small></div>
                        <span>{date}</span>
                    </div>
                    <div className={type + "tab-first"}>
                        <small>{this.props.data.category}</small><br />
                        <small title={this.props.data.type}>{this.props.data.type}</small>
                    </div>
                </div>
                <div className={type + "tab-addtodo"}>
                    <button>{"->"}</button>
                </div>
            </div>
        );
    }
}
Optab.propTypes = {
    showData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    feed: state.feed
});

export default connect(
    mapStateToProps,
    { showData }
)(Optab);