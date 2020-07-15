import React from 'react';
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
class Optab extends React.Component {

    render() {
        const d = new Date(this.props.data.due);
        const date = d.getDate() + " " + months[d.getMonth()]
        return (
            <div className="optab-container">
                <div className="optab">
                    <div className="optab-first">
                        <div className="optab-name">{this.props.data.position}<br />&nbsp; <small>@{this.props.data.company} </small></div>
                        <span>{date}</span>
                    </div>
                    <div className="optab-first">
                        <small>{this.props.data.category}</small><br />
                        <small>{this.props.data.type}</small>
                    </div>
                </div>
                <div className="optab-addtodo">
                    <button>{"->"}</button>
                </div>
            </div>
        );
    }
}
export default Optab;