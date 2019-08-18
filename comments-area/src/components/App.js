import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default () => {
    return (
        <div className="ui container">
            <div className="ui two column stackable grid">
                <div className="column">
                    <CommentBox />
                </div>
                <div className="column">
                    <CommentList />
                </div>
            </div>
        </div>
    );
};
