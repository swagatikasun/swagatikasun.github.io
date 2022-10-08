import React, { useState, useEffect } from 'react';

import Social from '../social';

import './index.css';

const Component = (props) => {
    const { largeMode } = props;

    const URL = `${process.env.PUBLIC_URL}/data/bio.json`;

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
        <div>
            <div className="bio row">
                <p className={`designation ${largeMode ? 'd-lg-mode' : ''}`}>
                    {content.designation}
                </p>
                <p className="organization">
                    <i className="far fa-building" />
                    &nbsp;&nbsp;
                    {content.organization}
                </p>
            </div>
            <div className="row">
                <Social />
            </div>
        </div>
    );
};

export default Component;
