import React from 'react'
import "./Toast.css"
import notified from "../../Assets/Images/notified.png"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleToast } from "../../actions/actions"
const styles = {
	hrsuccess: {
		borderColor: "#f8b500"
	},
	hrwarn: {
		borderColor: "#b45dfc"
	},
	hrerror: {
		borderColor: "#e84a5f"
	},
	imgs:{
		backgroundColor: "#f8b500"
	},
	imgw:{
		backgroundColor: "#b45dfc"
	},
	imge:{
		backgroundColor: "#e84a5f"
	}
}
class Toast extends React.Component {
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.toast.toast !== this.props.toast.toast && nextProps.toast.toast) {
			document.getElementById("toast1").className = "hrtoast"
			document.getElementById("toast2").className = "hrtoast"
			document.getElementById("toast3").className = "vrtoast"
			document.getElementById("toast4").className = "vrtoast"
			setTimeout(function () {
				if (document.getElementById("toast1"))
					document.getElementById("toast1").className = "hrtoast-load"
			}, 400);
			setTimeout(function () {
				if (document.getElementById("toast1"))
					document.getElementById("toast4").className = "vrtoast-load"
			}, 1200);
			setTimeout(function () {
				if (document.getElementById("toast1"))
					document.getElementById("toast2").className = "hrtoast-load"
			}, 2000);
			setTimeout(function () {
				if (document.getElementById("toast1"))
					document.getElementById("toast3").className = "vrtoast-load"
			}, 2800);
			setTimeout(this.turnOff, 3600);
		}
	}

	turnOff = () => {
		if (document.getElementById("toast1") && document.getElementById("toast2") && document.getElementById("toast3") && document.getElementById("toast4"))
			this.props.handleToast();
	}

	render() {
		return (
			<div className={this.props.toast.toast ? "toast-container" : "hidden"}>
				<div className="message-container">
					<div
						className="toast-image"
						style={this.props.toast.type == "success" ? styles.imgs : this.props.toast.type == "warn" ? styles.imgw : styles.imge}>
						<img src={notified} ></img>
					</div>
					<small>{this.props.toast.data}</small>
				</div>
				<hr id="toast1" className="hrtoast" align="left" style={this.props.toast.type == "success" ? styles.hrsuccess : this.props.toast.type == "warn" ? styles.hrwarn : styles.hrerror} />
				<hr id="toast2" className="hrtoast" align="left" style={this.props.toast.type == "success" ? styles.hrsuccess : this.props.toast.type == "warn" ? styles.hrwarn : styles.hrerror} />
				<div id="toast3" className="vrtoast" align="left" style={this.props.toast.type == "success" ? styles.hrsuccess : this.props.toast.type == "warn" ? styles.hrwarn : styles.hrerror}></div>
				<div id="toast4" className="vrtoast" align="left" style={this.props.toast.type == "success" ? styles.hrsuccess : this.props.toast.type == "warn" ? styles.hrwarn : styles.hrerror}></div>
			</div>
		)
	}
}

Toast.propTypes = {
	handleToast: PropTypes.func.isRequired,
	toast: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	toast: state.toast
});

export default connect(
	mapStateToProps,
	{ handleToast }
)(Toast);