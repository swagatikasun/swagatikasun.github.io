import React, { useState, useEffect } from 'react';

import './index.css';

const Component = () => {
    const URL = `${process.env.PUBLIC_URL}/data/awards.json`;

    const [content, setContent] = useState([]);

    useEffect(() => {
        // GET QuickLinks
        fetch(URL)
            .then((res) => res.json())
            .then((reply) => {
                setContent(reply);
            });
    }, []);

    return (
        <ul className="awards-entry">
            {content.map((item, index) => {
                return <li key={index}>{`${item}`}</li>;
            })}
        </ul>
    );
};

export default Component;
