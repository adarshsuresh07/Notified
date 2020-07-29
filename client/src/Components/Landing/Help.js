import React from "react";
import close from "../../Assets/Icons/close.png"

class Help extends React.Component {

    render() {
        const modalStyle = {
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            justifyContent: "space-evenly"
        }
        return (
            <div className="modal-container-on">
                <div className="dashboard-modal-on" style={modalStyle}>
                    <span className="modal-close" onClick={this.props.closeModal}>
                        <img src={close} title="Add to todo" alt="x" style={{ width: "1rem" }} />
                    </span>
                    <h1 className="landing-name">Notified</h1>
                    <div className="row">
                        <div className="modal-left">
                            <ul>
                                <li>Register with your email id</li>
                                <li>You will receive a mail (check in promotions also) and click on the link to verify</li>
                                <li>Login with the registered email id and password</li>
                                <li>You will see your dashboard if you login successfully</li>
                                <li>You will be automatically logged out after 10 hours</li>
                                <li>Four stacks
                            <ol>
                                        <li>Opportunity</li>
                                        <li>Todo</li>
                                        <li>Applied</li>
                                        <li>Expired</li>
                                    </ol>
                                </li>
                                <li>Three buttons in the right of the dashboard:
                             <ol>
                                        <li>Add new oppotunity</li>
                                        <li>Show expired stack</li>
                                        <li>Logout</li>
                                    </ol>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-right">
                            <ul>
                                <li>All the oppotunities uploaded by the students will be visible in the opportunity stack</li>
                                <li>Clicking on each opportunity will show you more details about it</li>
                                <li>There are filters in the left top</li>
                                <li>Click on the button shown when you hover it, the opportunity will be added to your Todo stack</li>
                                <li>To add to Applied stack, Click on the button shown when you hover it</li>
                                <li>To remove an opportunity from todo stack, Click on the <b>x</b> button shown when you hover it</li>
                                <li>To move an opportunity from applied stack to todostack, Click on the &nbsp;
                        <i class="fa fa-undo" style={{ fontSize: "1rem", color: "white", textShadow: "none" }} aria-hidden="true" />
                        &nbsp; button shown when you hover it
                         </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}


export default Help;