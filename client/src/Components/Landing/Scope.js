import React from "react";
import close from "../../Assets/Icons/close.png"

class Scope extends React.Component {

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
                        <img src={close} title="Close" alt="x" style={{ width: "1rem" }} />
                    </span>
                    <h1 className="landing-name">Notified</h1>
                    <div className="row">
                        <div className="modal-left">
                            <ul>
                            <p>We are looking forward to incorporate many more user-friendly and amazing features to Notified in the future. By listing them here, we feel more responsible in implementing them as soon as possible and glad to know what you think about it !</p>
                                <li>Option to share an opportunity to a non user via a link</li>
                                <li>Get notified on new openings based on preferences</li>
                            </ul>

                                
                        </div>
                        <div className="modal-right">
                            <ul>
                                <li>Room concept </li>
                                    - Currently every Notified user belongs to the <b>single room/cluster</b> where there is only one main stack and  any new opening added is public within the cluster.  This doesn't provide much abstraction when a group of users want to create a separate cluster and share openings within their cluster.<br/><br/>
                                    - Under the <b>room concept</b>, a user can initiate a room and invite users to the cluster and share things relevant to their cluster. Thus, there will be many rooms with two or more users belonging to it and is abstracted from other similar rooms.
                            </ul>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default Scope;