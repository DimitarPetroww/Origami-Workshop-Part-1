import './Post.css';
import PostAuthor from './PostAuthor/PostAuthor';

function Post({ post }) {
    return (
        <div className="post" key={post._id}>
            <img src="/blue-origami-bird.png" alt="" />
            <p className="description">
                {post.description}
            </p>
            <PostAuthor>{post.author}</PostAuthor>
        </div>
    );
}

export default Post;
