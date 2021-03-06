import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { showData, addTodo, addApplied, deleteApplied, deleteTodo, handleToast, editOP } from "../../actions/actions"
import addtodo from "../../Assets/Icons/add-todo.png"
import close from "../../Assets/Icons/close.png"
import applied from "../../Assets/Icons/add-applied.png"
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const types = ["op", "todo", "applied", "expired"];

class Optab extends React.Component {

    render() {
        if (this.props.data) {
            const type = types[this.props.type];
            const d = new Date(this.props.data.due);
            const date = d.getDate() + " " + months[d.getMonth()]
            const owner = this.props.auth.user.id === this.props.data.posted_by;
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
                    {this.props.type === 1 ?
                        <div className={type + "tab-addtodo"}>
                            <span className="delete-tab">
                                <img src={close} title="Delete todo" alt="x" style={{ width: "1rem" }} onClick={() => this.props.deleteTodo(this.props.data._id)} />
                            </span>
                            <button title="Add to applied">
                                <img src={applied} alt="+" style={{ width: "60%" }} onClick={() => this.props.addApplied(this.props.data._id)} />
                            </button>
                        </div> :
                        <div className={type + "tab-addtodo"}>
                            {this.props.type === 0 ?
                                <div className={"editable-optab"}>
                                    <button>
                                        <img src={addtodo} title="Add to todo" alt="C-" style={{ width: "60%" }} onClick={() => this.props.addTodo(this.props.data._id)} />
                                    </button>
                                    {
                                        owner ?
                                            <span className="delete-tab" title="Edit Oppotunity">
                                                <i className="fa fa-edit" style={{ fontSize: "1rem", color: "#393e46", textShadow: "none" }} aria-hidden="true" onClick={() => this.props.editOP(this.props.data,"edit")}></i>
                                            </span>
                                            : null
                                    }
                                </div>
                                : this.props.type === 2 ?
                                    <span className="delete-tab" title="Back to todo">
                                        <i className="fa fa-undo" style={{ fontSize: "1rem", color: "#393e46", textShadow: "none" }} aria-hidden="true" onClick={() => this.props.deleteApplied(this.props.data._id)}></i>
                                    </span>
                                    : this.props.type === 3 ?
                                        <span className="delete-tab" title="Edit opportunity">
                                            <i className="fa fa-edit" style={{ fontSize: "1rem", color: "#393e46", textShadow: "none" }} aria-hidden="true" onClick={() => this.props.editOP(this.props.data, "edit")}></i>
                                        </span> : null
                            }
                        </div>
                    }
                </div>
            );
        }
        else return <div />

    }
}
Optab.propTypes = {
    showData: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    addApplied: PropTypes.func.isRequired,
    deleteApplied: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editOP: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { showData, addTodo, addApplied, deleteApplied, deleteTodo, handleToast, editOP }
)(Optab);