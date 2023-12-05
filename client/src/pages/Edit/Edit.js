import { useHistory, useParams } from 'react-router-dom';
import { Fragment } from 'react';

import Form from '../../components/Form/Form';
import { axiosInstance } from '../../config';

const Edit = () => {
    const history = useHistory();
    const { postId } = useParams();

    const fetchHandler = async (data) => {
        try {
            // Update the existing post by making a PUT request
            await axiosInstance.put(`posts/${postId}`, data);
            history.replace('/home');
        } catch (error) {
            console.error('Error updating post:', error);
            // Handle the error as needed
        }
    };

    return (
        <Fragment>
            {/* Pass the postId to the Form component */}
            <Form onOrder={fetchHandler} postId={postId} />
        </Fragment>
    );
};

export default Edit;
