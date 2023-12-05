import "./SingleComment.css"

import React from "react";

const SingleComment = ({ text, email }) => {

    return (
        <div className="indvcomm">
            <p><span className="icom">{text}</span> by <span className="iem">{email}</span></p>
        </div>
    );
};

export default SingleComment;