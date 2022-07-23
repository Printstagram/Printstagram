import React from 'react';
import { useState, useEffect } from 'react';
import { useDataContext } from '../DataProvider';
import AnimalsList from './AnimalsList';
import { fetchAllAnimals } from '../services/fetch-utils';

export default function SearchAnimalsList() {
  //context
  const {
    animals,
    setAnimals,
    token,
  } = useDataContext();

  //local state
  const [typeQuery, setTypeQuery] = useState('dog');
  const [page, setPage] = useState(1);

  useEffect(() => {
    // console.log(typeQuery);
    // console.log(token);
    const fetchData = async () => {
      const result = await fetchAllAnimals(token, typeQuery, page);
      setAnimals(result.animals);
    };
    fetchData();
    if (token) fetchData();
  }, [token]); //eslint-disable-line

  async function handleGetAnimalsByType() {
    const { animals } = await fetchAllAnimals(token, typeQuery, page);
    // console.log('animals', animals);
    setAnimals(animals);

  }

  

  return (
    <div className='search-form'>
      <div className='search-div'>
        <p>What kind of animal are you looking for?</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleGetAnimalsByType(typeQuery);
          }}>
  
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
      </div>
      <AnimalsList animals={animals} />
      {/* <button className='prev-button' disabled={page <= 1} onClick={() => setPage(page - 1)}><span className="material-symbols-sharp">
arrow_back
      </span></button>
      <button className='next-button' onClick={() => setPage(page + 1)} ><span className="material-symbols-sharp">
arrow_forward
      </span></button> */}
    </div>
  );
}
