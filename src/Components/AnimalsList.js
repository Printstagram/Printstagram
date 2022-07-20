import React from 'react';
// import { useDataContext } from '../DataProvider';

export default function AnimalsList({ animals }) {
  // const {} = useDataContext();
  if (!animals) return null;
  return (
    <div className="animals-list">
      {animals.map((animal) => (
        <>{animal.photos[0]?.full && (
          <div className="animal-card" key={animal.id}>
            <h3>{animal.name}</h3>
            <img src={animal.photos[0].full} />
            
            <p>{animal.description}</p>
          </div>
        )}</>
        

        
      ))}
      Certified by: Julie N. (tm)
    </div>
  );
}
