import React from 'react'
import Optab from './Optab'
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Appliedstack extends React.Component {

    fetchData = () => {
        if (!this.props.opps.applieddata.length)
            return <div className="empty" style={{ color: "#f8b500" }}>No Opportunities yet!</div>
        return this.props.opps.applieddata.map((item, index) => {
            return <Optab data={item} key={index} type={2} />
        })
    }

    render() {
        return (
            <div className="appliedstack-container">
                {this.fetchData()}
            </div>
        );
    }
}
Appliedstack.propTypes = {
    opps: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    opps: state.opps,
});

export default connect(
    mapStateToProps,
)(Appliedstack);