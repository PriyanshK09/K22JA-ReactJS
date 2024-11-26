// src/App.js
import React from 'react';
import './App.css';
import ChampionsList from './components/ChampionsList';
import ChampionForm from './components/ChampionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Champion Management System</h1>
      </header>
      <ChampionForm />
      <ChampionsList />
    </div>
  );
}

export default App;