import React from 'react';
import { Buffer } from 'buffer';

// import './email.css';

const Component = ({ address }) => {
    return (
        <a
            href="#"
            // className="email-button"
            // type="button"
            onClick={() => {
                const mailtoURL = `mailto:${Buffer.from(address, 'base64').toString()}`;
                window.open(mailtoURL, '_blank')?.focus();
            }}
        >
            <i className="far fa-envelope-open" />
        </a>
    );
};

export default Component;
