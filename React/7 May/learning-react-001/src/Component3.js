import React from 'react';
import CommentComponent from './CommentComponent';

function Component3() {
    return (
        <div>
            <CommentComponent 
                author="Akshay"
                commentTime="6:30PM"
                comment="Wow!"
            />
            <CommentComponent 
                author="Manisha"
                commentTime="8:30PM"
                comment="Wow LMN!"
            />
            <CommentComponent 
                author="Akhil"
                commentTime="6:0AM"
                comment="Wow XYZ!"
            />
            <CommentComponent 
                author="Roshan"
                commentTime="4:00PM"
                comment="Wow DEF!"
            />
            <CommentComponent 
                author="Arpit"
                commentTime="7:00AM"
                comment="Wow ABC!"
            />
        </div>
    );
}

export default Component3;
