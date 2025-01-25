import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Home from './pages/Home';


function App() {
  // Generate post names into list from the /posts directory
  var postNames = require.context('./posts', false, /\.md$/).keys();
  // Strip the file extension and path from the post names
  postNames = postNames.map((postName) => postName.replace(/^\.\/|\.md$/g, ''));
  console.log(postNames)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/posts/:postId" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home postNames={postNames} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
