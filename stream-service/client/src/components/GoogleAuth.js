import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
	state = { isSignedIn: null };

	componentDidMount() {
		// Load "module" you need
		// https://developers.google.com/api-client-library/javascript/reference/referencedocs
		window.gapi.load("client:auth2", () => {
			// Callback function after API is fetched
			window.gapi.client
				.init({
					clientId:
						"271292356447-1esofbbk3g7gpet3qlhq517okvb1cjl0.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn();
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return <div />;
		} else if (this.state.isSignedIn) {
			return (
				<button
					className="ui red google button"
					onClick={this.onSignOutClick}
				>
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button
					className="ui red google button"
					onClick={this.onSignInClick}
				>
					<i className="google icon" />
					Sign In with Google
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default connect(
	null,
	{ signIn, signOut }
)(GoogleAuth);
