import React, { useState, useEffect } from 'react';
import { SiResearchgate, SiGooglescholar } from 'react-icons/si';

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
                <a href={content.github}>
                    <i className="fab fa-github" />
                </a>
                <a href={content.researchGate}>
                    <SiResearchgate />
                </a>
                <a href={content.linkedin}>
                    <i className="fab fa-linkedin" />
                </a>
                <a href={content.googleScholar}>
                    <SiGooglescholar />
                </a>
                <a href={`mailto:${content.mail}`}>
                    <i className="far fa-envelope-open" />
                </a>
            </p>
        </div>
    );
};

export default Component;
