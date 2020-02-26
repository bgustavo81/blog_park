import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions';
import PostForm from './PostForm';
import "../../styles/PostFormStyles.css";

class PostNew extends React.Component {
    onSubmit = (formValues) => {
        this.props.createPost(formValues);
    }

    render() {
        return (
            <div>
                <h3 className="PostNewTitle">Share your visit</h3>
                <PostForm onSubmit={this.onSubmit} />
            </div>
        );
    };
};

export default connect(
    null, 
    { createPost }
)(PostNew);