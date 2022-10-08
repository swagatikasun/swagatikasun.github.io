import React, { useState, useEffect } from 'react';

import ThemeManager from '../theme';
import Bio from '../bio';

import './index.css';

const Component = () => {
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
        <div className="header row">
            <div className="col-lg-5 header-name">
                <div className="header-photo row d-lg-none d-block">
                    <img src={`${process.env.PUBLIC_URL}/static/img/profile.jpg`} alt="profile" />
                </div>
                <h3>
                    {/* <img
                        className="d-none d-lg-inline-block"
                        src={`${process.env.PUBLIC_URL}/static/img/profile.jpg`}
                        alt="profile"
                    /> */}
                    <a to={`${process.env.PUBLIC_URL}/`} className="header-title">
                        &nbsp;{content.name}
                    </a>
                </h3>
                <div className="header-pos-org d-lg-none d-block">
                    <Bio />
                </div>
            </div>
            <div className="col-lg-7 header-links">
                <h5 className="d-lg-none d-block">
                    <ThemeManager />
                </h5>
                <h3>
                    <span>
                        <a href="#Home">About Me</a>
                    </span>
                    <span>
                        <a href="#Publications">Publications</a>
                    </span>
                    <span>
                        <a href="#Projects">Projects</a>
                    </span>
                    <span>
                        <a href="#Awards">Awards</a>
                    </span>
                    <span>
                        <a
                            href={`${process.env.PUBLIC_URL}/static/${process.env.REACT_APP_NAME}_Resume.pdf`}
                            target="blank"
                        >
                            Resume
                        </a>
                        &nbsp;
                        <i className="fas fa-external-link-alt" />
                    </span>
                    <span className="d-none d-lg-inline-block">
                        <ThemeManager />
                    </span>
                </h3>
            </div>
        </div>
    );
};

export default Component;
