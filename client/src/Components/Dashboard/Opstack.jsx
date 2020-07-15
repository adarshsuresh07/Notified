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
            type: "react",
            description: "datakjncd ioejd jdsckls jsdlcm jsdlc kjslkcvj jsflkkj ljsdflkcjlk kljsdckmslk jsldskld dsklfjkls klsdjflk",
            applylink: "https://www.google.co.in/",
            contact: "Adarsh: 97898912030",
            furtherdetails: "details to be added mdk kjsfkl lsfkljs ksjeflksjf kljseflkjf",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Flife-style%2Fevents%2Fsurya-grahan-today-annular-solar-eclipse-2019-december-images-photos-pics-video-check-out-these-breathing-pictures-of-the-seasons-last-surya-grahan-of-26-december-2019-india%2Fphotostory%2F72975550.cms&psig=AOvVaw2iKjVJ3zl-BKVUsdd3ZT3X&ust=1594890813080000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjB_bT1zuoCFQAAAAAdAAAAABAD"
        };
        for (var i = 0; i < 10; i++)
            response.push(temp);
        this.setState({ data: response });
    }

    render() {
        return (
            <div className="opstack-container">
                {
                    this.state.data.map((item, index) => {
                        return <Optab data={item} key={index} />
                    })
                }
            </div>
        );
    }
}
export default Opstack; 