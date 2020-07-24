import React from 'react'
import Optab from './Optab'
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Todostack extends React.Component {

    fetchData = () => {
        if (!this.props.opps.tododata.length)
            return <div className="empty" style={{ color: "#e84a5f" }}>No Opportunities yet!</div>
        return this.props.opps.tododata.map((item, index) => {
            return <Optab data={item} key={index} type={1} />
        })
    }

    render() {
        return (
            <div className="todostack-container">
                {this.fetchData()}
            </div>
        );
    }
}
Todostack.propTypes = {
    opps: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    opps: state.opps,
});

export default connect(
    mapStateToProps,
)(Todostack);