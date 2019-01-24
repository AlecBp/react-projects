import React, { Component } from "react";

export default class GoogleAuth extends Component {
	componentDidMount() {
    // Load "module" you need
    // https://developers.google.com/api-client-library/javascript/reference/referencedocs
		window.gapi.load("client:auth2", () => {
      // Callback function after API is fetched
      window.gapi.client.init({
        clientId: "271292356447-1esofbbk3g7gpet3qlhq517okvb1cjl0.apps.googleusercontent.com",
        scope: "email"
      })
		});
	}
	render() {
		return <div>GoogleAuth</div>;
	}
}
