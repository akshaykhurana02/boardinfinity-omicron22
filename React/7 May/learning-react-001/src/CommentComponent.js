import React from 'react';
import './Comments.css';

class CommentComponent extends React.Component {
    render() {
        return (
            <div className="comment-container">
                <div className="commenter-name">
                    {this.props.author}
                </div>
                <div>
                    <span className="comment-time">{this.props.commentTime}</span>
                    <div className="comment-text">{this.props.comment}</div>
                </div>
            </div>
        );
    }
}

CommentComponent.defaultProps = {
    author: "Akshay",
    commentTime: "8:31 PM",
    comment: "Nice blog!"
}

export default CommentComponent;
