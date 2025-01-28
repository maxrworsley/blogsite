import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Home = ({ postNames }) => {
    return (
        <div>
            <header>
                <Banner />
            </header>
            <main>
                <h2 className='latest-posts'>Latest posts</h2>
                <div className='post-list'>
                    <ul>
                        {postNames.map((postName) => (
                            <li key={postName}>
                                <Link className='post-list-post' to={`/posts/${postName}`}>{postName}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Home;