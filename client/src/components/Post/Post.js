import { Link } from "react-router-dom"

import "./Post.css"

const SinglePost = (props) => {
    console.log(props.image);
    console.log(props.email);
    return (
        <div className="singlepost">
            <img src={props.image} alt="" className="singlepost__image" />
            <div className="singlepost__info">
                <div className="singlepost__cat">{props.category}</div>
                
                <Link className="singlepost__title" to={`/home/post/${props.id}`}>{props.title}</Link>
                
                <div className="singlepost__email">{props.email}</div>

                <div className="singlepost__date">{props.date}</div>
            </div>
        </div>
    )
}

export default SinglePost;