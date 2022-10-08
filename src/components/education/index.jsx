import React, { useState, useEffect } from 'react';

import './index.css';

const Component = () => {
    const URL = `${process.env.PUBLIC_URL}/data/education.json`;

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
        <div className="education">
            <h4>
                <i className="fas fa-graduation-cap" /> Education
            </h4>
            {content.map((item, index) => {
                return (
                    <div key={index} className="education-entry">
                        <h5>{`${item.degree} - ${item.major}`}</h5>
                        <p>
                            <i className="fas fa-university" />
                            &nbsp;
                            {item.institute}
                        </p>
                        <p>
                            <i className="far fa-calendar-alt" />
                            &nbsp;
                            {item.duration}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Component;
