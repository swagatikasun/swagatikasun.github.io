import React from 'react';
import ReactMarkdown from 'react-markdown';

// import './index.css';

const Component = (props) => {
    const { content } = props;
    return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default Component;
