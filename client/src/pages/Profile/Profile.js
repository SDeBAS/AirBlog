import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./Profile.css"; // Import the CSS file

const Profile = () => {
    const user = useSelector((state) => state.auth.user);

    const history = useHistory();

    const handleEdit = (postId) => {
        // Redirect to the edit page with the postId
        history.push(`/Edit/${postId}`);
    };

    const handleDelete = async (postId) => {
        // Show a confirmation dialog
        const isConfirmed = window.confirm('Are you sure you want to delete this post?');

        if (isConfirmed) {
            try {
                // Call your backend to delete the post with the provided postId
                const response = await axios.delete(`https://air-blog-backend.vercel.app/posts/${postId}`);
                console.log('Deleted Post:', response.data);
                window.location.reload();
                // Handle success or update your state accordingly
            } catch (error) {
                console.error('Error deleting post:', error);
                // Handle error
            }
        } else {
            // User clicked "Cancel" in the confirmation dialog
            // You can add additional logic or simply return without performing any action
        }
    };


   
    const [userPosts, setUserPosts] = useState([]);
    useEffect(() => {
        // Fetch user's posts from the backend based on the user's email
        const fetchUserPosts = async () => {
            try {
                // Instead of using user.userId, you can directly use user.id
                const response = await axios.get(`https://air-blog-backend.vercel.app/posts/user/email/${user.email}`);
                setUserPosts(response.data);
            } catch (error) {
                console.error("Error fetching user posts:", error);
            }
        };


        if (user) {
            fetchUserPosts();
        }
    }, [user]);

    
    return (
        <div className="profilepage">
            <div className="usertitle"><h1>Welcome, {user.username}!</h1></div>

            <div className="userinfo">
                <h2>User Information</h2>
                <p>Name: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>

            <div className="border"></div>

            <div className="posts">
                <h2>All Posts</h2>
                <div className="userpostscard">
                    {Array.isArray(userPosts) && userPosts.length > 0 ? (
                        <div className="post-cards">
                            {userPosts.map((post) => (
                                <div key={post._id} className="post-card">
                                    <img src={post.image} alt="" />
                                    <div className="post-details">
                                        <h3>
                                            {/* Use Link to create a clickable link to the post page */}
                                            <Link to={`home/post/${post._id}`} className="profiletitle">{post.title}</Link>
                                        </h3>                                   ````````````
                                        <p>Category: <span id="profilepostinfo">{post.cat}</span></p>
                                        <p>Email: <span id="profilepostinfo">{post.email}</span></p>
                                        <p>Date: <span id="profilepostinfo">{post.date}</span></p>
                                        {/* Add more details about each post as needed */}
                                    </div>
                                    <div className="options">
                                        <h4>
                                            {/* Pass the postId to the handleEdit function */}
                                            <button onClick={() => handleEdit(post._id)}>Edit</button>
                                        </h4>
                                        <h4>
                                            {/* Pass the postId to the handleDelete function */}
                                            <button onClick={() => handleDelete(post._id)}>Delete</button>
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No posts available</p>
                    )}
                </div>
            </div>

        
        </div>
    );
};

export default Profile;
