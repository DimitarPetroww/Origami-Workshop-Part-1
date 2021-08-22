import './Post.css';
import PostAuthor from './PostAuthor/PostAuthor';

function Post() {
    return (
        <div className="post">
            <img src="/" alt="" />
            <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum quo fuga! Quaerat laboriosam commodi doloribus, earum, reiciendis amet dolorum odit fugit eligendi molestias cupiditate, explicabo iste natus numquam ab.
            </p>
            <PostAuthor />
        </div>
    );
}

export default Post;
