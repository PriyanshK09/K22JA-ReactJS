import React from 'react';
// import Stories from './components/Child';
// import Login from './components/Login';
import Get from './components/Get';
import Post from './components/Post';
import Put from './components/Put';
import Delete from './components/Delete';

function App() {
    return (
        <div className="App">
            {/* <Stories /> */}
            {/* <Login /> */}
            <Get />
            <Post />
            <Put />
            <Delete />
        </div>
    );
}

export default App;
