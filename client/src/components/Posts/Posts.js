import React from "react"

import './Posts.css';
import Post from "./Post/Post"

import * as postService from "../../services/post"

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        postService.getAll().then(posts => {
            console.log(posts);
            this.setState({ posts })
        })
    }

    render() {
        return (
            <div className="posts">
                {this.state.posts.map(x=> 
                    <Post post={x}/>
                )}
            </div>
        );
    }
}

export default Posts;
