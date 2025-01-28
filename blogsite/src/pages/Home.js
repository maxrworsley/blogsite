import React from 'react';
import Banner from './Banner';
import PostListPost from '../components/PostListPost';

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
                                <PostListPost postName={postName} />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Home;