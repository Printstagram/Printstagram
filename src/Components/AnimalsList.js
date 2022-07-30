import React, { useEffect } from 'react';
import { useDataContext } from '../DataProvider';
import { Link } from 'react-router-dom';

export default function AnimalsList({ animals }) {
  const { handleAddToLikedList, handleDeleteFromLikedList, handleFetchFromLikedList, likedList, isAlreadyLiked } =
    useDataContext();

  useEffect(() => {
    if (!likedList) handleFetchFromLikedList();
  }, []); //eslint-disable-line
  if (!animals) return null;
  return (
    <div className="animals-list">
      {animals && animals.map((animal) => {
        const alreadyOnLikedList = isAlreadyLiked(animal);
        return (
          <div key={animal.id}>
            {animal.photos[0]?.full && (
              <div className="animal-card" key={animal.id + animal.url}>
                <h2>
                  <Link to={`/animal-details/${animal.id}`} ><img className="prof-pic-main" src={animal.photos[0].full} />{animal.name}</Link>
                </h2>
                <img className='main-img' src={animal.photos[0].full} />

                <button
                  className={`material-symbols-${alreadyOnLikedList ? 'sharp' : 'outlined'}`}
                  onClick={() =>
                    alreadyOnLikedList
                    // nice ternary!
                      ? handleDeleteFromLikedList(alreadyOnLikedList.id)
                      // if all the property names are the same, it seems like you could just pass in the animal?
                      : handleAddToLikedList(animal)
                    }
                >
                  {/* i'd like to see whatever you're fixing with this {' '} solved in another way */}
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
