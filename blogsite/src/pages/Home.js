import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({ postNames }) => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Welcome to my Blog</h1>
                <h2>Latest Posts</h2>
                <ul>
                    {postNames.map((postName) => (
                        <li key={postName}>
                            <Link to={`/posts/${postName}`}>{postName}</Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default Home;