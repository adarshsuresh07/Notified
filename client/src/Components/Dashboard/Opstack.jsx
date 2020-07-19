import React from 'react'
import Optab from './Optab'
class Opstack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        var response = [];
        const temp =
        {
            position: "Position Name",
            company: "Company Name",
            due: new Date(),
            category: "internship",
            type: "react redux node express mongodb",
            description: "nhaskajdj uahdahkdh kiah daihdiahk ksadi whwdiawhdiha wiuahdiwhduwh diuhqiuehawiuedhqai iuhwdiuahdiohii hiodiw whadia uiiahd ioawhdioha ihhiod hhoi hfh datakjncd ioejd jdsckls jsdlcm jsdlc kjslkcvj jsflkkj ljsdflkcjlk kljsdckmslk jsldskld dsklfjkls klsdjflk",
            applylink: "https://www.google.co.in/",
            contact: "Adarsh: 97898912030",
            furtherdetails: "details to be added mdk kjsfkl lsfkljs ksjeflksjf kljseflkjf",
            image: "https://picsum.photos/300/200?grayscale"
        };
        for (var i = 0; i < 10; i++)
            response.push(temp);
        this.setState({ data: response });
    }

    render() {
        return (
            <div style={{ height: "100%", width: "100%" }}>
                <div className="filters">
                    <select>
                        <option>All</option>
                        <option>Job</option>
                        <option>Internship</option>
                        <option>Fellowship</option>
                    </select>
                    <div className="searchBox">
                        <input className="searchInput" type="text" name="" placeholder="Search" />
                        <button className="searchButton">
                            <i>s</i>
                        </button>
                    </div>
                </div>
                {!this.props.expired ?
                    <div className="opstack-container">
                        {
                            this.state.data.map((item, index) => {
                                return <Optab data={item} key={index} type={0} />
                            })
                        }
                    </div> :
                    <div style={{ width: "100%", height: "100%" }}>
                        <h4 className="field-names" style={{ color: "#f7f7f7" }}>Expired</h4>
                        <div className="expiredstack-container">
                            {
                                this.state.data.map((item, index) => {
                                    return <Optab data={item} key={index} type={3} />
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        );
    }
}
export default Opstack; 