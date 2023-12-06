// Blogs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./Blogs.css"

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://air-blog-backend.vercel.app/posts/');
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleDateChange = (selectedDate) => {
        setSelectedDate(selectedDate);
    };

    // Filter posts based on search query and selected date
    const filteredPosts = posts.filter((post) => {
        const query = searchQuery.toLowerCase();
        const titleMatch = post.title.toLowerCase().includes(query);
        const categoryMatch = post.cat.toLowerCase().includes(query);
        const emailMatch = post.email.toLowerCase().includes(query);
        const dateMatch = !selectedDate || new Date(post.date).toDateString() === selectedDate.toDateString();

        return (titleMatch || categoryMatch || emailMatch) && dateMatch;
    });


    return (
        <div className='blogpage'>
            <h1 className="blogpage_title">All Articles</h1>
            <div className='search_filter'>
                <input type="text" placeholder="Search by title, category or email" value={searchQuery} onChange={handleSearch} />
                <br /><br />
                <input type="date" placeholder="Filter by Date"  onChange={(e) => handleDateChange(new Date(e.target.value))}  />
            </div>

            <div className='blogposts'>
                {/* Display Filtered Posts */}
                {loading ? (
                    <section className="blogfilter"></section>
                ) : (
                    <div className='blogpostgrid'>
                        {filteredPosts.reverse().map((post) => (
                            <div key={post._id} className="blogsinglepost">
                                {/* You can structure how you want to display the posts here */}
                                <img src={post.image} alt="" className="blogsinglepost__image" />
                                <div className="blogsinglepost__info">
                                    <div className="blogsinglepost__cat">{post.cat}</div>
                                    <Link className="blogsinglepost__title" to={`/home/post/${post._id}`}>
                                        {post.title}
                                    </Link>
                                    <div className="blogsinglepost__email">{post.email}</div>
                                    <div className="blogsinglepost__date">{post.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
