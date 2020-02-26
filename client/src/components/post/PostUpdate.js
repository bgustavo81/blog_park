import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, editPost } from '../../actions';
import Skeleton from '@material-ui/lab/Skeleton';
import PostForm from './PostForm';
import "../../styles/PostFormStyles.css";

class PostUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editPost(this.props.match.params.id, formValues);
    }

    render() {
        const posts = this.props.posts;
        if (!posts) {
            return (
                <div className="ParkShowSkeletonContainer">
                    <div>
                        <Skeleton variant="text" height={240} />
                        <Skeleton variant="rect" height={640} /> 
                    </div>
                </div>
            )
        }
        let items = _.pick(posts, 'title', 'content');
        // console.log(items);
        return (
        <div>
            <h3 className="PostFormTitle">Edit your post</h3>
            <PostForm 
                initialValues={items}
                onSubmit={this.onSubmit} 
            />
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts[ownProps.match.params.id],
    };
};

export default connect(
    mapStateToProps, 
    { fetchPost, editPost }
)(PostUpdate);