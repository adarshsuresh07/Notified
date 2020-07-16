import React from 'react'
import Opstack from './Opstack'
import Todostack from './Todostack'
import Opmodal from "./Opmodal"
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="overlay">
                <Opstack />
                <Todostack />
                <Opmodal />
            </div>
        );
    }
}

export default Dashboard;