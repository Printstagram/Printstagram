import React from 'react';
import { useState, useEffect } from 'react';
import { useDataContext } from '../DataProvider';
import AnimalsList from './AnimalsList';
import { fetchAllAnimals } from '../services/fetch-utils';

export default function SearchAnimalsList() {
  //context
  const {
    animals,
    // handleGetAnimalsByType,
    setAnimals,
    token,
  } = useDataContext();

  //local state
  const [typeQuery, setTypeQuery] = useState('cat');

  useEffect(() => {
    // console.log(typeQuery);
    // console.log(token);
    if (token) fetchAllAnimals(token, typeQuery);
  }, [token]); //eslint-disable-line

  async function handleGetAnimalsByType() {
    const { animals } = await fetchAllAnimals(token, typeQuery);
    // console.log('animals', animals);
    setAnimals(animals);
  }

  return (
    <div className='search-form'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGetAnimalsByType(typeQuery);
        }}
      >

        <p>What kind of animal are you looking for?</p>
        <input
          value={typeQuery}
          type="text"
          placeholder="search"
          onChange={(e) => setTypeQuery(e.target.value)}
        />
        <button className='search-btn'>
          <span className="material-symbols-outlined">
  search
          </span>
        </button>
      </form>
      <AnimalsList animals={animals} />
    </div>
  );
}
