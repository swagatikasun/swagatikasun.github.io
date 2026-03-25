import React from 'react';

import Bio from '../../components/bio';
import About from '../../components/about';

import './index.css';

const Component = () => {
    return (
        <div className="row home-sec">
            <div className="col-lg-4 col-12 d-lg-block d-none home-bio">
                <div className="home-img">
                    <img src={`${process.env.PUBLIC_URL}/static/img/WhatsApp Image 2026-03-25 at 2.32.09 PM.jpeg`} alt="profile" />
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
