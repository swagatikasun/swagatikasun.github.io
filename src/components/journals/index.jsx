import React, { useState, useEffect } from 'react';

import './index.css';

const Journals = () => {
    const URL = `${process.env.PUBLIC_URL}/data/journals.json`;

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
        <div id="Journals" className="journals">
            <h3>Journals &amp; Book Chapters</h3>
            <ol>
                {content.map((item, index) => {
                    return (
                        <li key={index}>
                            <h5>
                                <a className="journal-title" target="blank" href={item.link}>
                                    {item.title}
                                </a>
                            </h5>
                            <span className="journal-author">
                                <i className="fas fa-user-friends" />
                                &nbsp;
                                {item.authors.map((author, authorIndex, arr) => {
                                    if (authorIndex === 0) return author;
                                    if (authorIndex === arr.length - 1) return ` & ${author}`;
                                    return `, ${author}`;
                                })}
                            </span>
                            <br />
                            <span className="journal-name">
                                <i className="fas fa-newspaper" />
                                &nbsp;&nbsp;&nbsp;
                                {item.journal}
                            </span>
                            &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                            <span className="journal-volume">Volume {item.volume}</span>
                            {item.publisher && item.publisher.length > 0 ? (
                                <span>
                                    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                                    <span className="journal-publisher">{item.publisher}</span>
                                </span>
                            ) : (
                                ''
                            )}
                            {item.year && item.year > 0 ? (
                                <span>
                                    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                                    <span className="journal-year">{item.year}</span>
                                </span>
                            ) : (
                                ''
                            )}
                            &nbsp;
                            <span className="journal-status">
                                {item.status.length > 0 ? `(${item.status})` : ''}
                            </span>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Journals;
