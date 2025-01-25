import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPost from './pages/BlogPost';
import About from './pages/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posts/:postId" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
