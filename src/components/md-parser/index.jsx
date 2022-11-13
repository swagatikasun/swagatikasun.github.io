import React from 'react';
import ReactMarkdown from 'react-markdown';

import './react-markdown.css';

const Component = (props) => {
    const { content } = props;
    return <ReactMarkdown className="reactMarkdown">{content}</ReactMarkdown>;
};

export default Component;
