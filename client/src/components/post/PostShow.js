import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../../actions/index';
import Skeleton from '@material-ui/lab/Skeleton';
import '../../styles/PostShowStyles.css';
import { Button } from '@material-ui/core';

class PostShow extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    
    render() {
        const post = this.props.posts
        console.log(post);
        if (!this.props.posts) {
            return (
                <div className="PostShowContainer">
                    <div className="ParkShowSkeletonContainer">
                        <div>
                            <Skeleton variant="text" height={240} />
                            <Skeleton variant="rect" height={640} /> 
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="PostShowContainer">
                <React.Fragment>
                    <div className="PostShowHero"></div>
                    <div className="PostShowInfo">
                        <h2 className="PostShowTitle">{post.title}</h2>
                        <div className="PostShowContent">{post.content}</div>
                    <div className="PostShowLink">
                        <Link to="/posts" style={{ textDecoration: 'none'}} >
                        <Button variant="outlined" color="primary">Back</Button>
                        </Link>
                    </div>
                </div>
                </React.Fragment>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        posts: state.posts[ownProps.match.params.id],
    }
}

export default  connect(
    mapStateToProps, 
    {fetchPost}
)(PostShow);