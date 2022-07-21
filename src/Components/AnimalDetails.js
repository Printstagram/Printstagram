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
  
  const [animalById, setAnimalById] = useState({ photos: [{}] });
  
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
    <div className='animal-detail'>
      <img className='prof-pic' src={animalById.photos[0].full} />
      <h2>{animalById.name} <span>({animalById.age}/{animalById.type})</span></h2>
      <ul>
        {/* <li>{animalById.breeds[0]}</li> */}
        <li>{animalById.description}</li>
      </ul>
      {
        <div className='photos'><img src={animalById.photos[0].full} /><img src={animalById.photos[0].full} /><img src={animalById.photos[0].full} /><img src={animalById.photos[0].full} /><img src={animalById.photos[0].full} /><img src={animalById.photos[0].full} /><img src={animalById.photos[0].full} /><img src={animalById.photos[0].full} /></div>
      }

      {/* {JSON.stringify(animalById)} */}
    </div>
  );
}
