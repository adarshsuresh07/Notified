import React from 'react'
import Optab from './Optab'
class Appliedstack extends React.Component {
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
            type: "react",
            description: "datakjncd ioejd jdsckls jsdlcm jsdlc kjslkcvj jsflkkj ljsdflkcjlk kljsdckmslk jsldskld dsklfjkls klsdjflk",
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
            <div className="appliedstack-container">
                {
                    this.state.data.map((item, index) => {
                        return <Optab data={item} key={index} type={2}/>
                    })
                }
            </div>
        );
    }
}
export default Appliedstack; 