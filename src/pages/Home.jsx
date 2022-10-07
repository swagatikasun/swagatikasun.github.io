import React from 'react';

import Home from '../sections/home';
import Publications from '../sections/publications';

const Component = () => {
    return (
        <div>
            <section id="Home">
                <Home />
            </section>
            <section id="Publications">
                <Publications />
            </section>
        </div>
    );
};

export default Component;
