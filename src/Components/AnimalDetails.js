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
    const animalDetailById = await fetchAnimalById(token, id);

    setAnimalById(animalDetailById.animal);
  }

  const alreadyOnLikedList =
  likedList && likedList.find((likedList) => likedList.id === animalById.id);
  return (
    <div className='animal-detail'>
      <div>
        <img className='prof-pic' src={animalById.photos[0].full} />
        <button
          className={`material-symbols-${alreadyOnLikedList ? 'sharp' : 'outlined'}`}
          onClick={() =>
            alreadyOnLikedList
              ? handleDeleteFromLikedList(alreadyOnLikedList.id)
              : handleAddToLikedList({
                name: animalById.name,
                photos: [animalById.photos[0]],
                type: animalById.type,
                description: animalById.description,
                age: animalById.age,
                breeds: animalById.breeds,
              })
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