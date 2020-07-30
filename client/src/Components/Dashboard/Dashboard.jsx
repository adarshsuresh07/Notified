import React from 'react'
import Opstack from './Opstack'
import Todostack from './Todostack'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setUserData, setData, logoutUser,editOP } from "../../actions/actions"
import Opmodal from "./Opmodal"
import Newop from "./Newop"
import Appliedstack from "./Appliedstack"
import newjob from "../../Assets/Icons/new-job.png"
import expired from "../../Assets/Icons/expired.png"
import expiredactive from "../../Assets/Icons/expired-active.png"
import logout from "../../Assets/Icons/logout.png"
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

    getProfileImg = () => {
        if (this.props.auth.user.fullname) {
            var matches = this.props.auth.user.fullname.match(/\b(\w)/g);
            var str = matches[0];
            if (matches.length > 1) {
                str = str + matches[1];
            }
            return str;
        }
        return '';
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
                                <span>{this.props.auth.user.fullname}</span>
                                <small>{this.props.auth.user.email}</small>
                            </div>
                            <div className="profile-img">
                                {this.getProfileImg()}
                            </div>
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
                            <button className="second-col-bottom-buttons button1" title="Add Opportunity" onClick={()=>this.props.editOP({},"open")}>
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
                <Newop /> 
            </div>
        );
    }
}

Dashboard.propTypes = {
    feed: PropTypes.object.isRequired,
    setUserData: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    editOP: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    feed: state.feed,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { setUserData, setData, logoutUser, editOP }
)(Dashboard);