import React, { useState, useEffect } from 'react';

import './index.css';

const Component = () => {
    const URL = `${process.env.REACT_APP_STATIC_URL}/data/bio.json`;

    const [content, setContent] = useState({
        name: '',
        designation: '',
        organization: '',
        email: {
            username: '',
            domain: ['']
        }
    });

    useEffect(() => {
        // GET QuickLinks
        fetch(URL)
            .then((res) => res.json())
            .then((reply) => {
                setContent(reply);
            });
    }, []);

    return (
        <div className="bio">
            <p className="designation">{content.designation}</p>
            <p className="organization">
                <i className="far fa-building" />
                &nbsp;
                {content.organization}
            </p>
        </div>
    );
};

export default Component;
