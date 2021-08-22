import './PostAuthor.css';

function PostAuthor({children}) {
    return (
        <div>
            <span>
                <small>Author:</small> {children}
            </span>
        </div>
    );
}

export default PostAuthor;
