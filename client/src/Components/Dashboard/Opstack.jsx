import React from 'react'
import Optab from './Optab'
class Opstack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filtered: [],
            expired: [],
            filterexpired: []
        }
    }

    componentDidMount() {
        var response = [];
        const temp =
        {
            position: "Position Name",
            company: "Company Name",
            due: new Date(),
            category: "Internship",
            type: "react redux node express mongodb",
            description: "nhaskajdj uahdahkdh kiah daihdiahk ksadi whwdiawhdiha wiuahdiwhduwh diuhqiuehawiuedhqai iuhwdiuahdiohii hiodiw whadia uiiahd ioawhdioha ihhiod hhoi hfh datakjncd ioejd jdsckls jsdlcm jsdlc kjslkcvj jsflkkj ljsdflkcjlk kljsdckmslk jsldskld dsklfjkls klsdjflk",
            applylink: "https://www.google.co.in/",
            contact: "Adarsh: 97898912030",
            furtherdetails: "details to be added mdk kjsfkl lsfkljs ksjeflksjf kljseflkjf",
            image: "https://picsum.photos/300/200?grayscale"
        };
        for (var i = 0; i < 10; i++)
            response.push(temp);
        this.setState({ data: response, filtered: response });
        this.setState({ expired: response, filterexpired: response });
    }

    filterbyCat = e => {
        var filter1, filter2;
        if (e.target.value !== "All") {
            filter1 = this.state.data.filter(item => item.category === e.target.value);
            filter2 = this.state.expired.filter(item => item.category === e.target.value);
        } else {
            filter1 = this.state.data;
            filter2 = this.state.expired;
        }
        this.setState({ filtered: filter1, filterexpired: filter2 });
    }

    filterbySearch = e => {
        var filter1, filter2;
        if (!e.charCode || e.charCode === 13) {
            const f = document.getElementById("drop-filter").value;
            if (f !== "All") {
                filter1 = this.state.data.filter(item => item.category === f);
                filter2 = this.state.expired.filter(item => item.category === f);
            } else {
                filter1 = this.state.data;
                filter2 = this.state.expired;
            }
            const val = document.getElementById("search-bar").value;
            filter1 = filter1.filter(item => this.checkforVal(item, val));
            filter2 = filter2.filter(item => this.checkforVal(item, val));
            this.setState({ filtered: filter1, filterexpired: filter2 });
        }
    }

    checkforVal = (item, val) => {
        for (const k of Object.values(item)) {
            if (typeof k == "string" && k.includes(val))
                return true;
        }
        return false;
    }

    fetchOps = () => {
        if (this.state.filtered.length === 0)
            return <h6>No Opportunities yet!</h6>
        return this.state.filtered.map((item, index) => {
            return <Optab data={item} key={index} type={0} />
        })
    }
    fetchExp = () => {
        if (this.state.filterexpired.length === 0)
            return <h6>No Opportunities yet!</h6>
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
export default Opstack; 