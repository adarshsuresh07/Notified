import React from 'react';
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
class Todotab extends React.Component {

    render() {
        const d = new Date(this.props.data.due);
        const date = d.getDate() + " " + months[d.getMonth()]
        return (
            <div className="todotab-container">
                <div className="todotab">
                    <div className="todotab-first">
                        <div className="todotab-name">{this.props.data.position}<br />&nbsp; <small>@{this.props.data.company} </small></div>
                        <span>{date}</span>
                    </div>
                    <div className="todotab-first">
                        <small>{this.props.data.category}</small><br />
                        <small>{this.props.data.type}</small>
                    </div>
                </div>
                <div className="todotab-addtodo">
                    <button>{"->"}</button>
                </div>
            </div>
        );
    }
}
export default Todotab;