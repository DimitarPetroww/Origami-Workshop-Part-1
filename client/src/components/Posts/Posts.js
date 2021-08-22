import React from "react"

import './Posts.css';
import Post from "./Post/Post"

import * as post_service from "../../services/post"

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        post_service.getAll().then(posts => {
            this.setState({ posts })
        })
    }

    render() {
        return (
            <div className="posts">
                {this.state.posts.map(x=> {
                    <Post />
                })}
            </div>
        );
    }
}

export default Posts;
