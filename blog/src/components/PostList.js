import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
import UserHeader from "./UserHeader";
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPost();
    }

    renderList() {
        return this.props.post.map((posts) => {
            return (
                <div className='item' key={posts.id}>
                    <i className='large middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{posts.title}</h2>
                            <p>{posts.body}</p>
                        </div>
                        <UserHeader userId={posts.userId} />
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className='ui relaxed divided list'>{this.renderList()}</div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        post: state.posts,
    };
};
export default connect(mapStateToProps, { fetchPost })(PostList);
