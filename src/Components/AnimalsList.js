import React from 'react';
// import { useDataContext } from '../DataProvider';

export default function AnimalsList({ animals }) {
  // const {} = useDataContext();
  if (!animals) return null;
  return (
    <div className="animals-list">
      
      {animals.map((animal) => (
        <div key={animal.url + animal.descriptions}>
          {animal.photos[0]?.full && (<div className="animal-card" 
            key={animal.id + animal.url}>
            <h2><a>{animal.name}</a></h2>
            <img src={animal.photos[0].full} />
            
            <button>
              <span className="material-symbols-outlined">
favorite
              </span>
            </button>
            <p><a>{animal.name}</a> {animal.description}</p>
          </div>
          )}
        </div>
        

        
      ))}
      Certified by: Julie N. (tm)
    </div>
  );
}
