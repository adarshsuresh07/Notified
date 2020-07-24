import React from 'react'
import "./Toast.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import delopus from "../../assets/images/logo2.png";
const styles = {
	hrsuccess: {
		borderColor: "green"
	},
	hrwarn: {
		borderColor: "#ffdd00"
	},
	hrerror: {
		borderColor: "#d11411"
	},
	imagesuccess: {
		backgroundColor: "green"
	},
	imagewarn: {
		backgroundColor: "#ffdd00"
	},
	imageerror: {
		backgroundColor: "#d11411"
	},
	closesuccess: {
		color: "green"
	},
	closewarn: {
		color: "#ffdd00"
	},
	closeerror: {
		color: "#d11411"
	},
}
class Toast extends React.Component {
	componentDidMount() {
		setTimeout(function () {
			if (document.getElementById("toast1"))
				document.getElementById("toast1").className = "hrtoast-load"
		}, 500);
		setTimeout(function () {
			if (document.getElementById("toast1"))
				document.getElementById("toast4").className = "vrtoast-load"
		}, 1500);
		setTimeout(function () {
			if (document.getElementById("toast1"))
				document.getElementById("toast2").className = "hrtoast-load"
		}, 2500);
		setTimeout(function () {
			if (document.getElementById("toast1"))
				document.getElementById("toast3").className = "vrtoast-load"
		}, 3500);
		setTimeout(this.turnOff, 5500);
	}

	turnOff = () => {
		if (document.getElementById("toast1") && document.getElementById("toast2") && document.getElementById("toast3") && document.getElementById("toast4"))
			this.props.handleToast();
	}

	render() {
		return (
			<div className="toast-container">
				<FontAwesomeIcon icon={faTimes}
					onClick={() => this.props.handleToast(null, null)}
					cursor={"pointer"} className="close-toast"
					style={this.props.toast == "success" ? styles.closesuccess :
						this.props.toast == "warn" ? styles.closewarn :
							styles.closeerror}
				/>
				<div className="message-container">
					<div
						className="toast-image"
						style={{backgroundColor:"black"}}>
						<img src={delopus} ></img>
					</div>
					<small>{this.props.message}</small>
				</div>
				<hr id="toast1" className="hrtoast" align="left" style={this.props.toast == "success" ? styles.hrsuccess : this.props.toast == "warn" ? styles.hrwarn : styles.hrerror} />
				<hr id="toast2" className="hrtoast" align="left" style={this.props.toast == "success" ? styles.hrsuccess : this.props.toast == "warn" ? styles.hrwarn : styles.hrerror} />
				<div id="toast3" className="vrtoast" align="left" style={this.props.toast == "success" ? styles.hrsuccess : this.props.toast == "warn" ? styles.hrwarn : styles.hrerror}></div>
				<div id="toast4" className="vrtoast" align="left" style={this.props.toast == "success" ? styles.hrsuccess : this.props.toast == "warn" ? styles.hrwarn : styles.hrerror}></div>
			</div>
		)
	}
}

export default Toast;