import React, { useState, useEffect } from 'react';
import { SiResearchgate, SiGooglescholar } from 'react-icons/si';
import Email from './email';

import './index.css';

const Component = () => {
    const URL = `${process.env.PUBLIC_URL}/data/social.json`;

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
            <p className="social-icons">
                <a target="blank" href={content.github}>
                    <i className="fab fa-github" />
                </a>
                <a target="blank" href={content.researchGate}>
                    <SiResearchgate />
                </a>
                <a target="blank" href={content.linkedin}>
                    <i className="fab fa-linkedin" />
                </a>
                <a target="blank" href={content.googleScholar}>
                    <SiGooglescholar />
                </a>
                <Email address={content.mail} />
            </p>
        </div>
    );
};

export default Component;
