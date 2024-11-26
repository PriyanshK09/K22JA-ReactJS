// src/components/ChampionForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChampion, updateChampion } from '../championsSlice';

const ChampionForm = ({ existingChampion }) => {
  const [champion, setChampion] = useState(existingChampion || { name: '', level: '', abilities: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChampion({ ...champion, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (champion.id) {
      dispatch(updateChampion(champion));
    } else {
      dispatch(addChampion({ ...champion, id: Date.now() }));
    }
    setChampion({ name: '', level: '', abilities: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={champion.name} onChange={handleChange} />
      </div>
      <div>
        <label>Level:</label>
        <input type="text" name="level" value={champion.level} onChange={handleChange} />
      </div>
      <div>
        <label>Abilities:</label>
        <input type="text" name="abilities" value={champion.abilities} onChange={handleChange} />
      </div>
      <button type="submit">Save Champion</button>
    </form>
  );
};

export default ChampionForm;