import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
    renderComments() {
        return this.props.comments.map(comment => {
            return (
                <div className="comment" key={comment}>
                    <a className="avatar">
                        <i className="address card icon"></i>
                    </a>
                    <div className="content">
                        <a className="author">Matt</a>
                        <div className="metadata">
                            <span className="date">Today at 5:42PM</span>
                        </div>
                        <div className="text">{comment}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui comments">
                <h3 className="ui dividing header">Comments</h3>
                {this.renderComments()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
