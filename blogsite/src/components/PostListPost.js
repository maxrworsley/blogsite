import React from 'react';
import { Link } from 'react-router-dom';

function PostListPost({ postName }) {
    var postDate = new Date();
    import(`../posts/${postName}.md`)
        .then((res) => fetch(res.default))
        .then((res) => res.text())
        .then((text) => {
            // Interpret the first line as the date
            var lines = text.split('\n');
            lines[1].replace('Date: ', '');
            postDate = new Date(lines[1]);
        })
        .catch((err) => console.error(err));


    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[postDate.getMonth()];
    const year = postDate.getFullYear().toString().substr(-2);
    const dateString = `${month}, ${year}`;

    return (
        <>
            <Link className='post-list-post' to={`/posts/${postName}`}>
                {postName}
            </Link>
            <p>{dateString}</p>
        </>
    );
}

export default PostListPost;
