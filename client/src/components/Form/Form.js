import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Form.css';
import write from './write.png';

const Form = ({ onOrder, postId }) => {
    console.log({ postId });

    const dateRef = useRef(null);
    const [picture, setPicture] = useState('');
    const titleRef = useRef();
    const textRef = useRef();
    const catRef = useRef();
    const imageRef = useRef();
    const emailRef = useRef();

    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        if (dateRef.current) {
            dateRef.current.value = currentDate;
        }

        // Set the emailRef value to the user's email if there is a logged-in user
        if (user) {
            emailRef.current.value = user.email || '';
        }
    }, [user]);

    useEffect(() => {
        // If postId is provided, fetch the post data and set the initial state of the form fields
        if (postId) {
            // Fetch the post data based on the postId
            // Replace the following code with your actual API call to get post data
            const fetchPostData = async () => {
                try {
                    // Example API call to fetch post data
                    const response = await fetch(`http://localhost:5000/backend/posts/${postId}`);
                    const postData = await response.json();

                    // Set the initial state of the form fields based on the fetched post data
                    setPicture(postData.image);
                    titleRef.current.value = postData.title;
                    textRef.current.value = postData.desc;
                    catRef.current.value = postData.cat;
                    imageRef.current.value = postData.image;
                    dateRef.current.value = postData.date;
                } catch (error) {
                    console.error('Error fetching post data:', error);
                }
            };

            fetchPostData();
        }
    }, [postId]);

    const onChangePicture = () => {
        setPicture(imageRef.current.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const image = imageRef.current.value;
        const title = titleRef.current.value;
        const desc = textRef.current.value;
        const date = dateRef.current.value;
        const cat = catRef.current.value;
        const email = emailRef.current.value;

        const submitData = {
            image,
            title,
            desc,
            date,
            cat,
            email,
        };

        // If postId is provided, it's an edit operation; otherwise, it's a new post creation
        if (postId) {
            // Pass the postId to update the existing post
            onOrder(submitData, postId);
        } else {
            // Pass null as postId to create a new post
            onOrder(submitData, null);
        }
    };

    if (user) {
        return (
            <div className="write">
                <h2 className="write__heading">Add / Edit a Blog</h2>
                <form onSubmit={formSubmitHandler} className="write__form">
                    <div className="write__inputbox">
                        {picture && <img className="write__showImg" src={picture} alt="blog" />}
                        <input ref={imageRef} onChange={onChangePicture} type="text" className="write__imageLink" placeholder="upload image URL..." required />
                        <input ref={catRef} type="text" className="write__cat" placeholder="Category" required />
                        <input type="text" className="write__text" placeholder="Title" ref={titleRef} required />
                        <textarea ref={textRef} rows="4" type="text" className="write__words" placeholder="Write your Blog..." required />
                        <input type="text" ref={emailRef} className="write__cat write__email" readOnly />
                        <input ref={dateRef} type="date" className="write__date" />
                    </div>
                    <button className="write__submit">Publish</button>
                </form>
            </div>
        );
    } else {
        return (
            <div className="notLog">
                <p className="notLog__message">SIGN IN to write a BLOG</p>
                <img src={write} alt="" className="notLog__img" />
            </div>
        );
    }
};

export default Form;
