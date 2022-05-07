import React from 'react';
import './Comments.css';

function Component1() {

    return (
        <div>
            <div className="comment-container">
                <div className="commenter-name">
                    Sam
                </div>
                <div>
                    <span className="comment-time">Today at 6:00 PM</span>
                    <div className="comment-text">Nice blog post!</div>
                </div>
            </div>
            <div className="comment-container">
                <div className="commenter-name">
                    Akshay
                </div>
                <div>
                    <span className="comment-time">Yesterday at 6:30 PM</span>
                    <div className="comment-text">Okish!</div>
                </div>
            </div>
            <div className="comment-container">
                <div className="commenter-name">
                    Manisha
                </div>
                <div>
                    <span className="comment-time">Today at 2:00 AM</span>
                    <div className="comment-text">Wow!</div>
                </div>
            </div>
        </div>
    );
}

export default Component1;
