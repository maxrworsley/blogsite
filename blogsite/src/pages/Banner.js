import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <nav className="banner-nav" style={{ textAlign: 'center' }}>
                <ul className="banner-menu">
                    <li><Link to="/" className={"banner-link"}>Home</Link></li>
                    <li><Link to="/about" className={"banner-link"}>About</Link></li>
                    <li><a href="https://map.macpack.site" className={"banner-link"}>Map</a></li>
                </ul>
            </nav>
            <h1 className='title'>Macpack</h1>
        </>
    );
};

export default Banner;