import React, { useEffect } from 'react';
import { useDataContext } from '../DataProvider';
import { Link } from 'react-router-dom';

export default function AnimalsList({ animals }) {
  const { handleAddToLikedList, handleDeleteFromLikedList, handleFetchFromLikedList, likedList } =
    useDataContext();

  useEffect(() => {
    if (!likedList) handleFetchFromLikedList();
  }, []); //eslint-disable-line
  if (!animals) return null;
  return (
    <div className="animals-list">
      {animals && animals.map((animal) => {
        const alreadyOnLikedList =
          likedList && likedList.find((likedList) => likedList.id === animal.id);
        return (
          <div key={animal.id}>
            {animal.photos[0]?.full && (
              <div className="animal-card" key={animal.id + animal.url}>
                <h2>
                  <Link to={`/animal-details/${animal.id}`} >{animal.name}</Link>
                </h2>
                <img src={animal.photos[0].full} />

                <button
                  className="material-symbols-outlined"
                  onClick={() =>
                    alreadyOnLikedList
                      ? handleDeleteFromLikedList(alreadyOnLikedList.id)
                      : handleAddToLikedList({
                        id: animal.id,
                        name: animal.name,
                        photos: [animal.photos[0]],
                        type: animal.type,
                        description: animal.description,
                        age: animal.age,
                        breeds: animal.breeds,
                      })
                  }
                >
                  {' '}
                  favorite
                </button>
                <p>
                  <Link to={`/animal-details/${animal.id}`} >{animal.name}</Link> {animal.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
      Certified by: Julie N. (tm)
    </div>
  );
}
