// import React from 'react';
// // import Stories from './components/Child';
// // import Login from './components/Login';
// import Get from './components/Get';
// import Post from './components/Post';
// import Put from './components/Put';
// import Delete from './components/Delete';

// function App() {
//     return (
//         <div className="App">
//             {/* <Stories /> */}
//             {/* <Login /> */}
//             <Get />
//             <Post />
//             <Put />
//             <Delete />
//         </div>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, 
// allows changing the browser URL, and keeps UI in sync with the URL.

// First, you need to install React Router:
// npm install react-router-dom

// Import necessary components from react-router-dom

// Define some basic components for demonstration

import './App.css';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Services = () => <h2>Services Page</h2>;
const Blog = () => <h2>Blog Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
    return (
        <Router>
            <div className="app">
                <nav className="navbar">
                    <div className="navbar-logo">MyWebsite</div>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/about">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/services">Services</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/blog">Blog</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

// Explanation:
// 1. BrowserRouter (Router): A <Router> that uses the HTML5 history API to keep your UI in sync with the URL.
// 2. Route: Used to define a path and the component that should be rendered when the path matches the URL.
// 3. Switch: Renders the first child <Route> or <Redirect> that matches the location.
// 4. Link: Used to create links to different routes, which will be rendered by the Route component.