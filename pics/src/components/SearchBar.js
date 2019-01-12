import React, { Component } from "react";

export default class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="ui segment">
        <form action="ui form">
          <div className="ui fluid action input">
            <input
              type="text"
              placeholder="Search image..."
              onChange={this.onInputChange}
            />
            <div className="ui button">Search</div>
          </div>
        </form>
      </div>
    );
  }
}
