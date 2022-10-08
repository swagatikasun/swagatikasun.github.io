import React, { useState, useEffect } from 'react';

import MDParser from '../md-parser';
import Education from '../education';
import Interests from '../interests';

import './index.css';

const Component = () => {
    const URL = `${process.env.PUBLIC_URL}/data/about.md`;

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
        <div className="row home-about">
            <MDParser content={content} />
            <div className="col-lg-6">
                <Interests />
            </div>
            <div className="col-lg-6">
                <Education />
            </div>
        </div>
    );
};

export default Component;
