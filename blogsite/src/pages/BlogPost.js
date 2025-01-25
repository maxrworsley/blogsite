import React, { useEffect, useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { postId } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        import(`../posts/${postId}.md`)
            .then((res) => fetch(res.default))
            .then((res) => res.text())
            .then((text) => setContent(text))
            .catch((err) => console.error(err));
    }, [postId]);

    return <MarkdownRenderer content={content} />;
};

export default BlogPost;