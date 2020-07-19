import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { showData } from "../../actions/actions"
import addtodo from "../../Assets/Icons/add-todo.png"
import applied from "../../Assets/Icons/add-applied.png"
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const types = ["op", "todo", "applied", "expired"];

class Optab extends React.Component {
    render() {
        const type = types[this.props.type];
        const d = new Date(this.props.data.due);
        const date = d.getDate() + " " + months[d.getMonth()]
        return (
            <div className={type + "tab-container"}>
                <div className={type + "tab"} onClick={() => this.props.showData(this.props.data, this.props.type)}>
                    <div className={type + "tab-first"}>
                        <div className={type + "tab-name"}>{this.props.data.position}<br />&nbsp; <small>@{this.props.data.company} </small></div>
                        <span>{date}</span>
                    </div>
                    <div className={type + "tab-first"}>
                        <small>{this.props.data.category}</small><br />
                        <small title={this.props.data.type}>{this.props.data.type}</small>
                    </div>
                </div>
                {this.props.type == 1 ?
                    <div className={type + "tab-addtodo"}>
                        <span className="delete-tab">x</span>
                        <button title="Add to applied">
                            <img src={applied} alt="+" style={{ width: "60%" }} />
                        </button>
                    </div> :
                    <div className={type + "tab-addtodo"}>
                        {this.props.type == 0 ?
                            <button>
                                <img src={addtodo} title="Add to todo" alt="C-" style={{ width: "60%" }} />
                            </button>
                            : this.props.type == 2 ?
                                <span className="delete-tab">x</span>
                                : null
                        }
                    </div>
                }
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