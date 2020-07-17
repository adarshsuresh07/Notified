import React from 'react'
import Opstack from './Opstack'
import Todostack from './Todostack'
import Opmodal from "./Opmodal"
import Appliedstack from "./Appliedstack"
import defaultimg from "../../Assets/Images/you.jpg"
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="overlay">
                <div className="first-col">
                    <Opstack />
                </div>
                <div className="second-col">
                    <div className="second-col-top">
                        <h1 className="logo">Notified!</h1>
                        <div className="profile">
                            <div className="profile-name">
                                <span>Adarsh S</span>
                                <small>@adarsh</small>
                            </div>
                            <img src={defaultimg} />
                        </div>
                    </div>
                    <div className="second-col-bottom">
                        <div className="second-col-bottom-stack">
                            <h4 className="field-names" style={{ color: "#e84a5f" }}>Todo</h4>
                            <Todostack />
                        </div>
                        <div className="second-col-bottom-stack">
                            <h4 className="field-names" style={{ color: "#f8b500" }}>Applied</h4>
                            <Appliedstack />
                        </div>
                        <div className="second-col-bottom-options">
                            <button className="second-col-bottom-buttons button1">+</button>
                            <button className="second-col-bottom-buttons button2">-</button>
                            <button className="second-col-bottom-buttons button3">*</button>
                        </div>
                    </div>
                </div>
                <Opmodal />
            </div>
        );
    }
}

export default Dashboard;