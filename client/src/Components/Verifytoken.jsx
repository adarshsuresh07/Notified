import React from "react"
import axios from 'axios'
import Typing from 'react-typing-animation';
class Verifytoken extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            data: "Email Verified Successfully. Now you are a Notified member. So let's go home kid",
            finished: false,
        }
    }
    componentDidMount() {
        const token = this.props.match.params.token;
        axios.post("/api/verification/" + token)
            .then(res => {
                this.setState({
                    user: res.data.user,
                    finished: true
                });
            })
            .catch(error => {
                this.setState({
                    data: "Email not verified due to invalid token. So let's go back home",
                    finished: true,
                });
            })
    }

    goHome=()=>{
        setTimeout(() => {
            this.props.history.push("/")         
        }, 1000);
    }

    render() {
        return (
            <div className="verify-container">
                <h1 className="landing-name">Notified</h1>
                <h1 className="verify-content">Hi {this.state.user}!</h1>
                {this.state.finished ?
                    <Typing speed={80} onFinishedTyping={this.goHome}>
                        <span>{this.state.data}</span>
                    </Typing> : null
                }
            </div >
        )
    }
}

export default Verifytoken;