import React from 'react';
import Banner from './Banner';

function About() {
    return (
        <>
            <header>
                <Banner />
            </header>
            <div className='about-content'>
                <h1>About Me</h1>
                <p> This site contains blog posts</p>
            </div>
        </>

    );
}

export default About;