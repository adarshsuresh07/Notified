import React from 'react'
import Opstack from './Opstack';
import Opmodal from "./Opmodal"
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="overlay">
                <Opstack />
                <Opmodal/>
            </div>
        );
    }
}

export default Dashboard;