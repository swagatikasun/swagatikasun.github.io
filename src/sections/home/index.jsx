import React from 'react';

import Bio from '../../components/bio';
import About from '../../components/about';

import './index.css';

const Component = () => {
    return (
        <div className="row home-sec">
            <div className="col-lg-4 col-12 d-lg-block d-none home-bio">
                <div className="home-img">
                    <img src={`${process.env.PUBLIC_URL}/static/img/profile.jpg`} alt="profile" />
                </div>
                <Bio largeMode />
            </div>
            <div className="col-lg-8 col-12 home-about">
                <About />
            </div>
        </div>
    );
};

export default Component;
