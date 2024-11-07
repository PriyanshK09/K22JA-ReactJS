import React, { useState } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import './App.css';

// Redux Slice for champions
const championsSlice = createSlice({
  name: 'champions',
  initialState: [],
  reducers: {
    addChampion: (state, action) => {
      state.push(action.payload);
    },
    updateChampion: (state, action) => {
      const index = state.findIndex((champ) => champ.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    removeChampion: (state, action) => {
      return state.filter((champ) => champ.id !== action.payload);
    }
  }
});

const { addChampion, updateChampion, removeChampion } = championsSlice.actions;
const store = configureStore({ reducer: championsSlice.reducer });

function ChampionList() {
  const champions = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(null);

  const startEditing = (champion) => {
    setEditing(champion);
  };

  const handleDelete = (id) => {
    dispatch(removeChampion(id));
  };

  return (
    <div>
      <h2>Champion List</h2>
      <ul>
        {champions.map((champ) => (
          <li key={champ.id}>
            {champ.name} (Level: {champ.level}) - {champ.abilities}
            <button onClick={() => startEditing(champ)}>Edit</button>
            <button onClick={() => handleDelete(champ.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <ChampionForm editing={editing} setEditing={setEditing} />
    </div>
  );
}

function ChampionForm({ editing, setEditing }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(editing ? editing.name : '');
  const [level, setLevel] = useState(editing ? editing.level : 1);
  const [abilities, setAbilities] = useState(editing ? editing.abilities : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      dispatch(updateChampion({ id: editing.id, name, level, abilities }));
      setEditing(null);
    } else {
      dispatch(addChampion({ id: Date.now(), name, level, abilities }));
    }
    setName('');
    setLevel(1);
    setAbilities('');
  };

  return (
    <div>
      <h2>{editing ? 'Edit Champion' : 'Add Champion'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Level"
          value={level}
          onChange={(e) => setLevel(parseInt(e.target.value))}
          min="1"
          required
        />
        <input
          type="text"
          placeholder="Abilities"
          value={abilities}
          onChange={(e) => setAbilities(e.target.value)}
          required
        />
        <button type="submit">{editing ? 'Update' : 'Add'} Champion</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Champion Management System</h1>
        <ChampionList />
      </div>
    </Provider>
  );
}

export default App;
