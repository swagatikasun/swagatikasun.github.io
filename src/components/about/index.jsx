import React, { useState, useEffect } from 'react';

import MDParser from '../md-parser';

import './index.css';

const Component = () => {
    const URL = `${process.env.REACT_APP_STATIC_URL}/data/about.md`;

    const [content, setContent] = useState('');

    useEffect(() => {
        // GET QuickLinks
        fetch(URL)
            .then((res) => res.text())
            .then((reply) => {
                setContent(reply);
            });
    }, []);

    return (
        <div className="home-about">
            <MDParser content={content} />
        </div>
    );
};

export default Component;
