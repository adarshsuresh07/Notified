import React from 'react'
import Optab from './Optab'
class Todostack extends React.Component {
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
            description: "datakjncd ioejd jdsckls jsdlcm jsdlc kjslkcvj jsflkkj ljsdflkcjlk kljsdckmslk jsldskld dsklfjkls klsdjflk",
            applylink: "https://www.google.co.in/",
            contact: "Adarsh: 97898912030",
            furtherdetails: "details to be added mdk kjsfkl lsfkljs ksjeflksjf kljseflkjf",
            image:"https://picsum.photos/300/200?grayscale"
        };
        for (var i = 0; i < 10; i++)
            response.push(temp);
        this.setState({ data: response });
    }

    render() {
        return (
            <div className="todostack-container">
                {
                    this.state.data.map((item, index) => {
                        return <Optab data={item} key={index} type={1}/>
                    })
                }
            </div>
        );
    }
}
export default Todostack; 