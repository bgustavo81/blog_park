import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteModal from '../DeleteModal';
import Button from '@material-ui/core/Button';
import history from '../../history';
import { fetchPost, deletePost } from '../../actions';
import "../../styles/DeleteModalStyles.css";

class PostDelete extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }
    renderActions() {
        const id = this.props.match.params.id;
        return (
            <div className="PostDeleteButtons">
                <Button 
                    onClick={() => this.props.deletePost(id)}
                    size="large"
                    variant="outlined"
                    color="secondary"
                >
                    Delete
                </Button>
                <Link to='/posts' style={{ textDecoration: "none" }}>
                    <Button variant="outlined" size="large">
                        Cancel
                    </Button>
                </Link>
            </div>
        );
    };
    
    renderContent() {
        if (!this.props.posts) {
            return 'Are you sure you want to delete this Post?'
        }

        return `Are you sure you want to delete the Post with title "${this.props.posts.title}"`
    }

    render() {
        return (
            <DeleteModal
                title="Delete Post"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/posts')}
            />
        );        
    }
};

const mapStateToProps = (state, ownProps) => {
    return { posts: state.posts[ownProps.match.params.id] } 
}

export default connect(
    mapStateToProps, 
    { fetchPost, deletePost }
)(PostDelete);