import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ content }) => {
    return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;