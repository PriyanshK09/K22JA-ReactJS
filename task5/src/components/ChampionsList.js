// src/components/ChampionsList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeChampion } from '../championsSlice';

const ChampionsList = () => {
  const champions = useSelector(state => state.champions.champions);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Champions List</h2>
      <ul>
        {champions.map(champion => (
          <li key={champion.id}>
            {champion.name} (Level: {champion.level})
            <button onClick={() => dispatch(removeChampion(champion.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChampionsList;