import React from 'react'
import Optab from './Optab'
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Opstack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            filterexpired: [],
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ filtered: nextProps.opps.opdata, filterexpired: nextProps.opps.exdata });
    }

    filterbyCat = e => {
        var filter1, filter2;
        if (e.target.value !== "All") {
            filter1 = this.props.opps.opdata.filter(item => item.category === e.target.value);
            filter2 = this.props.opps.exdata.filter(item => item.category === e.target.value);
        } else {
            filter1 = this.props.opps.opdata;
            filter2 = this.props.opps.exdata;
        }
        this.setState({ filtered: filter1, filterexpired: filter2 });
    }

    filterbySearch = e => {
        var filter1, filter2;
        if (!e.charCode || e.charCode === 13) {
            const f = document.getElementById("drop-filter").value;
            if (f !== "All") {
                filter1 = this.props.opps.opdata.filter(item => item.category === f);
                filter2 = this.props.opps.exdata.filter(item => item.category === f);
            } else {
                filter1 = this.props.opps.opdata;
                filter2 = this.props.opps.exdata;
            }
            const val = document.getElementById("search-bar").value;
            filter1 = filter1.filter(item => this.checkforVal(item, val));
            filter2 = filter2.filter(item => this.checkforVal(item, val));
            this.setState({ filtered: filter1, filterexpired: filter2 });
        }
    }

    checkforVal = (item, val) => {
        for (const k of Object.values(item)) {
            if (typeof k == "string" && k.toLowerCase().includes(val))
                return true;
        }
        return false;
    }

    fetchOps = () => {
        if (this.state.filtered.length === 0)
            return <div className="empty" style={{color:"#b45dfc"}}>No Opportunities yet!</div>
        return this.state.filtered.map((item, index) => {
            return <Optab data={item} key={index} type={0} />
        })
    }
    fetchExp = () => {
        if (this.state.filterexpired.length === 0)
            return <div className="empty" style={{color:"white"}}>No Opportunities yet!</div>
        return this.state.filterexpired.map((item, index) => {
            return <Optab data={item} key={index} type={3} />
        })
    }
    render() {
        return (
            <div style={{ height: "100%", width: "100%" }}>
                <div className="filters">
                    <select onChange={this.filterbyCat} id="drop-filter" defaultValue="All">
                        <option value="All">All</option>
                        <option value="Job">Job</option>
                        <option value="Internship">Internship</option>
                        <option value="Fellowship">Fellowship</option>
                    </select>
                    <div className="searchBox">
                        <input className="searchInput" type="text" id="search-bar" placeholder="Search" onKeyPress={this.filterbySearch} />
                        <button className="searchButton" onClick={this.filterbySearch}>
                            <i>s</i>
                        </button>
                    </div>
                </div>
                {!this.props.expired ?
                    <div className="opstack-container">
                        {this.fetchOps()}
                    </div> :
                    <div style={{ width: "100%", height: "100%" }}>
                        <h4 className="field-names" style={{ color: "#f7f7f7" }}>Expired</h4>
                        <div className="expiredstack-container">
                            {this.fetchExp()}
                        </div>
                    </div>
                }
            </div>
        );
    }
}
Opstack.propTypes = {
    opps: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    opps: state.opps,
});

export default connect(
    mapStateToProps,
)(Opstack);