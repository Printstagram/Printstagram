import React from 'react';
import { useState } from 'react';
import { useDataContext } from '../DataProvider';
import AnimalsList from './AnimalsList';

export default function SearchAnimalsList() {
  const { animals, getAnimals } = useDataContext();
  // const [typeQuery] = useState('dog');

  return (
    <div>
      <AnimalsList animals={animals} getAnimals={getAnimals} />
    </div>
  );
}
