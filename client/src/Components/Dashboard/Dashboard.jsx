import React from 'react'
import Opstack from './Opstack'
import Todostack from './Todostack'
import Opmodal from "./Opmodal"
import Appliedstack from "./Appliedstack"
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
                    </div>
                    <div className="second-col-bottom">
                        <div className="second-col-bottom-stack">
                            <Todostack />
                        </div>
                        <div className="second-col-bottom-stack">
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