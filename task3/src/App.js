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
import './App.css';

// React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, 
// allows changing the browser URL, and keeps UI in sync with the URL.

// First, you need to install React Router:
// npm install react-router-dom

// Import necessary components from react-router-dom

// Define some basic components for demonstration
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

// Main App component
const App = () => {
    return (
        <Router>
            <div>
                {/* Navigation Links */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Route Definitions */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
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