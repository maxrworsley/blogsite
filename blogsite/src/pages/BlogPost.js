import React, { useEffect, useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { useParams } from 'react-router-dom';
import Banner from './Banner';

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

    return (
        <>
            <Banner />
            <MarkdownRenderer content={content} />
        </>
    );

};

export default BlogPost;