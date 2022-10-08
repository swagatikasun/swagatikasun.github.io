import React, { useState, useEffect } from 'react';

import './index.css';

const Component = () => {
    const URL = `${process.env.PUBLIC_URL}/data/projects.json`;

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
        <div className="project-subsection">
            <ol>
                {content.map((project, index) => {
                    return (
                        <li className="project-content" key={index}>
                            <h5>
                                <a className="h-link" href={project.link} target="blank">
                                    {project.name}
                                </a>
                            </h5>

                            <p className="project-repo">
                                <i className="fab fa-github-square" />
                                &nbsp;
                                <a href={project.link} target="blank">
                                    {project.user} / {project.repository}
                                </a>
                            </p>
                            <p className="project-desc">
                                {project.description}&nbsp;
                                {project.sample || project.sample !== '' ? (
                                    <span>
                                        Sample of this project is available{' '}
                                        <a href={project.sample} target="blank">
                                            here.
                                        </a>
                                    </span>
                                ) : (
                                    ''
                                )}
                            </p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Component;
