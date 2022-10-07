import React from 'react';

import './index.css';

const Component = () => {
    return (
        <div className="footer">
            <p>&copy; {`${process.env.REACT_APP_NAME}, ${new Date().getFullYear()}`}</p>
            <p className="footer-credits">
                Made with <i className="fas fa-heart footer-heart" /> By{' '}
                <a href="https://mukherjeearnab.github.io/">AM</a>.
            </p>
        </div>
    );
};

export default Component;
