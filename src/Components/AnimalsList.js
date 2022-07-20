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
            <h2>{animal.name}</h2>
            <img src={animal.photos[0].full} />
            
            <p><b>{animal.name}</b> {animal.description}</p>
            <button>Add to Liked</button>
          </div>
          )}
        </div>
        

        
      ))}
      Certified by: Julie N. (tm)
    </div>
  );
}
