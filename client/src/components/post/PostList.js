import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import Button from '@material-ui/core/Button';
import { fetchPosts } from '../../actions/index';
import "../../styles/PostListStyles.css";


class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    

    renderAdmin(posts) {
        if (posts.userid === this.props.currentUserId) {
            return (
                <div>
                    <Link to={`/post/edit/${posts.id}`} style={{ textDecoration: 'none' }}>
                        <Button color="primary">
                            Edit
                        </Button>
                    </Link>
                    <Link to={`/post/delete/${posts.id}`} style={{ textDecoration: 'none' }}>
                        <Button color="secondary">
                            Delete
                        </Button>
                    </Link>
                </div>
            )
        }
    }

    renderList() {
        let posts = this.props.posts.filter(post => post !== "");
        return posts.map(posts => {
            return (
                <div key={posts.id} className="PostListCard">
                    <div>
                        <h4 className="PostListCardTitle">
                            <Link to={`post/${posts.id}`} style={{ textDecoration: 'none', color: "black" }}>
                                {posts.title}
                            </Link>
                        </h4>
                        <div className="PostListCardImage"></div>
                        <div className="PostListCardContent">{posts.content}</div>
                    </div>
                    <div className="PostListButtons">
                        <Link to={`/post/${posts.id}`} style={{ textDecoration: 'none' }}>
                            <Button>View</Button>
                        </Link>
                        {this.renderAdmin(posts)}
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div className="PostListCreateButton">
                    <Link to={`post/new`} style={{ textDecoration: 'none'}}>
                        <Button variant="outlined" color="primary">Create Post</Button>
                    </Link>
                </div>
            )
        }
    }

    render() {
        const posts = this.props.posts;
        return (
            <div className="PostListContainer">
            { posts ? (
                <React.Fragment>
                    <h2 className="PostListTitle">Review feed</h2>
                    <div className="PostListCreateButton">
                    {this.renderCreate()}
                    </div>
                    <div className="PostListArticles">{this.renderList()}</div>
                    {this.renderCreate()}
                </React.Fragment>
            ) : (
                <div className="ParkShowSkeletonContainer">
                    <div>
                        <Skeleton variant="text" height={240} />
                        <Skeleton variant="rect" height={640} /> 
                    </div>
                </div>
            )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(Object.values(state.posts));
    return { 
        posts: Object.values(state.posts).reverse(),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(
    mapStateToProps, 
    { fetchPosts }
)(PostList);