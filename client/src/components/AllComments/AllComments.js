import { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "../../config";

import SingleComment from "../SingleComment/SingleComment";
import "./AllComments.css";

const AllComments = (props) => {
    const [comments, setComments] = useState([]);

    const fetchComments = useCallback(async () => {
        try {
            const response = await axiosInstance.get(`/posts/${props.postId}/comments`);
            console.log(response.data.comments);
            setComments(response.data.comments);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    }, [props.postId]);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    return (
        <div className="allCommentslist">
            {comments.map((comment) => {
                return <SingleComment key={comment._id} text={comment.text} email={comment.email} />;
            })}
        </div>
    );
};

export default AllComments;
