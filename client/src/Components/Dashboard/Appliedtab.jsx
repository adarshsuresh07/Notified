import React from 'react';
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
class Appliedtab extends React.Component {

    render() {
        const d = new Date(this.props.data.due);
        const date = d.getDate() + " " + months[d.getMonth()]
        return (
            <div className="appliedtab-container">
                <div className="appliedtab">
                    <div className="appliedtab-first">
                        <div className="appliedtab-name">{this.props.data.position}<br />&nbsp; <small>@{this.props.data.company} </small></div>
                        <span>{date}</span>
                    </div>
                    <div className="appliedtab-first">
                        <small>{this.props.data.category}</small><br />
                        <small>{this.props.data.type}</small>
                    </div>
                </div>
                <div className="appliedtab-addapplied">
                    <button>{"->"}</button>
                </div>
            </div>
        );
    }
}
export default Appliedtab;