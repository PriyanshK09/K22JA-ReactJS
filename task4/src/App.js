import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Todos from './pages/Todos';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
