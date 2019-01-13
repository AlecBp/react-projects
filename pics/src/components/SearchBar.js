import React, { Component } from "react";

export default class SearchBar extends Component {
   state = { term: "" };

   // Must be an arrow function to prevent undefined error
   onFormSubmit = event => {
      event.preventDefault();
      this.props.onSubmit(this.state.term);
   };

   render() {
      return (
         <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
               <div className="ui fluid action input">
                  <input
                     type="text"
                     placeholder="Search image..."
                     value={this.state.term}
                     onChange={e => this.setState({ term: e.target.value })}
                  />
                  <button className="ui button">Search</button>
               </div>
            </form>
         </div>
      );
   }
}
