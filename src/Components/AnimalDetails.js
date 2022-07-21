import React from 'react';
import { useEffect, useState } from 'react';
import { useDataContext } from '../DataProvider';
import { useParams } from 'react-router-dom';
import { fetchAnimalById } from '../services/fetch-utils';

export default function AnimalDetails() {
  const { 
    token, 
  } = useDataContext();

  const { id } = useParams();
  
  const [animalById, setAnimalById] = useState([]);
  
  // console.log(animalById);
  // console.log(id);
  // console.log(token);
  
  useEffect(() => {
    if (token) handleFetchAnimalById(token, id);
  }, [token]); //eslint-disable-line

  async function handleFetchAnimalById(token, id) {
    const animalById = await fetchAnimalById(token, id);

    setAnimalById(animalById.animal);
  }

  return (
    <div>
      <h2>{animalById.name}</h2>
      AnimalDetails
    </div>
  );
}
