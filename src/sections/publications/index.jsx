import React from 'react';

import Conferences from '../../components/conferences';
import Journals from '../../components/journals';

import './index.css';

const Component = () => {
    return (
        <div className="publications">
            <h3>Publications</h3>
            <Journals />
            <Conferences />
        </div>
    );
};

export default Component;
