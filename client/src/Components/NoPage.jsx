import React from "react"
import Typing from 'react-typing-animation';
class NoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "Sorry! Not a Valid Page. Let's go back home!",
        }
    }

    goHome=()=>{
        setTimeout(() => {
            window.location.href="/";            
        }, 1000);
    }

    render() {
        return (
            <div className="verify-container">
                <h1 className="landing-name">Notified</h1>
                <h1 className="verify-content">Hi!</h1>
                <Typing speed={80} onFinishedTyping={this.goHome}>
                    <span>{this.state.data}</span>
                </Typing> 
            </div >
        )
    }
}

export default NoPage;