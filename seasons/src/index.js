import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';


class App extends React.Component {
    state = { lat: null, errorMessage: null };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <LoadingSpinner message="Getting your position..."/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));