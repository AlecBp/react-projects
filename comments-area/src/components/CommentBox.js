import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
    state = { comment: "" };
    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: "" });
    };

    handleClear = event => {
        this.props.clearComment();
    };

    render() {
        return (
            <div className="ui grid">
                <div className="sixteen wide column">
                    <form className="ui reply form" onSubmit={this.handleSubmit}>
                        <h3 className="ui dividing header">Create a Comment</h3>
                        <div className="field">
                            <textarea
                                name="textarea"
                                onChange={this.handleChange}
                                value={this.state.comment}
                            />
                        </div>
                        <div>
                            <button
                                onClick={this.handleSubmit}
                                className="ui blue labeled submit icon button"
                            >
                                <i className="icon edit" /> Submit Comment
                            </button>
                        </div>
                    </form>
                </div>
                <div className="sixteen wide column">
                    <button
                        className="fetch-comments ui button secondary"
                        onClick={this.props.fetchComments}
                    >
                        Fetch Comments
                    </button>
                    <button
                        className="clear-comments ui button negative"
                        onClick={this.props.clearComments}
                    >
                        Clear Comments
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(CommentBox);
