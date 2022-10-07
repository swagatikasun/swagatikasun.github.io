import React from 'react';

import Home from '../sections/home';
import Publications from '../sections/publications';
import Projects from '../sections/projects';

const Component = () => {
    return (
        <div>
            <section id="Home">
                <Home />
            </section>
            <section id="Publications">
                <Publications />
            </section>
            <section id="#Projects">
                <Projects />
            </section>
        </div>
    );
};

export default Component;
