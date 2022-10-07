import React, { useState, useEffect } from 'react';

import './index.css';

const Conferences = () => {
    const URL = `${process.env.PUBLIC_URL}/data/conferences.json`;

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
        <div id="Conferences" className="conferences">
            <h3>International Conference Proceedings</h3>
            <ol>
                {content.map((item, index) => {
                    return (
                        <li key={index}>
                            <h5>
                                <a className="conference-title" target="blank" href={item.link}>
                                    {item.title}
                                </a>
                            </h5>
                            <span className="conference-author">
                                <i className="fas fa-user-friends" />
                                &nbsp;
                                {item.authors.map((author, authorIndex, arr) => {
                                    if (authorIndex === 0) return author;
                                    if (authorIndex === arr.length - 1) return ` & ${author}`;
                                    return `, ${author}`;
                                })}
                            </span>
                            <br />
                            <span className="conference-name">
                                <i className="fas fa-newspaper" />
                                &nbsp;&nbsp;
                                {item.prefix && item.prefix.length > 0 ? (
                                    <span className="text-low-emphasis">{item.prefix}&nbsp;</span>
                                ) : (
                                    ''
                                )}
                                {item.conference}&nbsp;({item.conferenceShort})
                            </span>
                            {(item.pages && item.pages.length > 0) ||
                            (item.publisher && item.publisher.length > 0) ||
                            (item.notes && item.notes.length > 0) ||
                            (item.presentation && item.presentation.length > 0) ? (
                                <span>
                                    <br />
                                    <i className="fas fa-book" />
                                    &nbsp;&nbsp;
                                </span>
                            ) : (
                                ''
                            )}
                            <span className="conference-pages">
                                {(item.pages && item.pages.length) > 0 ? (
                                    <span>Pages {item.pages}</span>
                                ) : (
                                    ''
                                )}
                            </span>
                            <span className="conference-publisher">
                                {(item.publisher && item.publisher.length) > 0 ? (
                                    <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;{item.publisher}</span>
                                ) : (
                                    ''
                                )}
                            </span>
                            {(item.notes && item.notes.length) > 0 ? (
                                <span className="conference-notes">
                                    &nbsp;&nbsp;&bull;&nbsp;&nbsp; ({item.notes})
                                </span>
                            ) : (
                                ''
                            )}
                            {(item.presentation && item.presentation.length) > 0 ? (
                                <span className="conference-ppt">
                                    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                                    <i className="fas fa-chalkboard-teacher">
                                        &nbsp;&nbsp;
                                        <a href={item.presentation} target="blank">
                                            Presentation
                                        </a>
                                    </i>
                                </span>
                            ) : (
                                ''
                            )}
                            <br />
                            <span className="conference-location">
                                <i className="fas fa-map-marker-alt" />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {item.location}
                            </span>
                            &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                            <span className="conference-date">{item.date}</span>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Conferences;
