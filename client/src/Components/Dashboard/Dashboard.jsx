import React from 'react'
import Opstack from './Opstack'
import Todostack from './Todostack'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setUserData, setData, logoutUser } from "../../actions/actions"
import Opmodal from "./Opmodal"
import Newop from "./Newop"
import Appliedstack from "./Appliedstack"
import defaultimg from "../../Assets/Images/you.jpg"
import newjob from "../../Assets/Icons/new-job.png"
import expired from "../../Assets/Icons/expired.png"
import expiredactive from "../../Assets/Icons/expired-active.png"
import logout from "../../Assets/Icons/logout.png"
import { getToken } from "../../utils/Token";
import axios from "axios";
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newop: false,
            expired: false,
            opdata: [],
            exdata: []
        }
    }
    componentDidMount() {
        this.props.setUserData();
    }
    render() {
        return (
            <div className="overlay">
                <div className="first-col">
                    <Opstack expired={this.state.expired} />
                </div>
                <div className="second-col">
                    <div className="second-col-top">
                        <h1 className="logo">Notified!</h1>
                        <div className="profile">
                            <div className="profile-name">
                                <span>Adarsh S</span>
                                <small>@adarsh</small>
                            </div>
                            <img src={defaultimg} alt="" />
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
                            <button className="second-col-bottom-buttons button1" title="Add Opportunity" onClick={() => this.setState({ newop: true })}>
                                <img src={newjob} alt="+" style={{ width: "60%" }} />
                            </button>
                            {!this.state.expired ?
                                <button className="second-col-bottom-buttons button2" title="View Expired" onClick={() => this.setState({ expired: !this.state.expired })}>
                                    <img src={expired} alt="x" style={{ width: "60%" }} />
                                </button> :
                                <button className="second-col-bottom-buttonactive" title="View New Opportunities" onClick={() => this.setState({ expired: !this.state.expired })}>
                                    <img src={expiredactive} alt="x" style={{ width: "60%" }} />
                                </button>
                            }
                            <button className="second-col-bottom-buttons button3" title="Logout" onClick={this.props.logoutUser}>
                                <img src={logout} alt="C-" style={{ width: "60%" }} />
                            </button>
                        </div>
                    </div>
                </div>
                <Opmodal />
                {this.state.newop ? <Newop newop={this.state.newop} closeModal={() => this.setState({ newop: false })} /> : null}
            </div>
        );
    }
}

Dashboard.propTypes = {
    feed: PropTypes.object.isRequired,
    setUserData: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    feed: state.feed,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { setUserData, setData, logoutUser }
)(Dashboard);