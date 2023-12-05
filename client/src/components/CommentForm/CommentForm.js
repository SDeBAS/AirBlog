import { useRef } from "react";
import { useSelector } from "react-redux";
import "./CommentForm.css";
import { axiosInstance } from "../../config";

const CommentForm = (props) => {
    const addComment = useRef();
    const user = useSelector((state) => state.auth.user);
    const userEmail = user.email;

    const commentSubmitHandler = async (e) => {
        e.preventDefault();
        const comment = addComment.current.value;

        console.log("Form submitted");
        console.log("Comment:", comment);
        console.log("User Email:", userEmail);

        try {
            const response = await axiosInstance.post(`/posts/${props.postId}/comments`, {
                text: comment,
                userEmail: userEmail,
            });

            console.log("Response:", response.data);
            window.location.reload();
        } catch (err) {
            console.log("Error:", err);
        }
    };

    return (
        <div className="comment">
            <form onSubmit={commentSubmitHandler}>
                <input
                    ref={addComment}
                    type="text"
                    className="comment__area"
                    placeholder="Add a comment..."
                    required
                />
                <button type="submit" className="comment__add">
                    Add Comment
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
