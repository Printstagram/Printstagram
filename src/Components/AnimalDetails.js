import React from 'react';
import { useEffect, useState } from 'react';
import { useDataContext } from '../DataProvider';
import { useParams } from 'react-router-dom';
import { fetchAnimalById } from '../services/fetch-utils';

export default function AnimalDetails() {
  const { 
    token, 
    likedList,
    handleDeleteFromLikedList,
    handleAddToLikedList, 
    isAlreadyLiked
  } = useDataContext();

  const { id } = useParams();
  
  const [animalById, setAnimalById] = useState({ photos: [{}] });
  
  useEffect(() => {
    if (token) handleFetchAnimalById(token, id);
  }, [token]); //eslint-disable-line

  async function handleFetchAnimalById(token, id) {
    const animalDetailById = await fetchAnimalById(token, id);

    setAnimalById(animalDetailById.animal);
  }

  const alreadyOnLikedList = isAlreadyLiked(animal);
  return (
    <div className='animal-detail'>
      <div>
        <img className='prof-pic' src={animalById.photos[0].full} />
        <button
          className={`material-symbols-${alreadyOnLikedList ? 'sharp' : 'outlined'}`}
          onClick={() =>
            alreadyOnLikedList
              ? handleDeleteFromLikedList(alreadyOnLikedList.id)
              // seems like this is just a recreation of the animal object
              : handleAddToLikedList(animalById)
          }
        >
                  favorite
        </button>
        <h2>{animalById.name} <span>({animalById.age}/{animalById.type})</span></h2>
        <ul>
          <li>{animalById.description}</li>
        </ul>
         
      </div>
      <div className='photos'>
        {/* might be nice to have some fake backups here for the demo */}
        <img src={animalById.photos[0].full} />
        <img src={animalById.photos[0].full} />
        <img src={animalById.photos[0].full} />
        <img src={animalById.photos[0].full} />
        <img src={animalById.photos[0].full} />
        <img src={animalById.photos[0].full} />
        <img src={animalById.photos[0].full} />
        <img src={animalById.photos[0].full} />
      </div>     
    </div>
  );
}