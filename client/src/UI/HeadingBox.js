import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./HeadingBox.css"

function HeadingBox() {

    const user = useSelector(state => state.auth.user);

    return <div className="headingbox">

        <div className="headingbox__titlebox">
            <h1 className="headingbox__title">Welcome to  <b> AirBlog</b></h1>
            {!user && <Link to="/signup" className="headingbox__btn">Sign Up</Link>}
        </div>
    </div>;
}

export default HeadingBox;