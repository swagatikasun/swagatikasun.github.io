import React, { useState, useEffect } from 'react';

import './index.css';

const Component = () => {
    const URL = `${process.env.PUBLIC_URL}/data/interests.json`;

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
        <div className="interests">
            <h4>
                <i className="fas fa-pen-nib" /> Interests
            </h4>
            <ul>
                {content.map((item, index) => {
                    return <li key={index}>{`${item}`}</li>;
                })}
            </ul>
        </div>
    );
};

export default Component;
