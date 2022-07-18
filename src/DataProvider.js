import React from 'react';
import { useState, createContext, useContext } from 'react';

const DataContext = createContext();

export default function DataProvider({ children }) {
    //set state
  const [user, setUser] = useState(getUser());
  const [animals, setAnimals] = useState([]);
  const [likedAnimals, setLikedAnimals] = useState('');
  //add url state here?

  const stateAndSetters = {
    user, setUser,
    animals, setAnimals,
    likedAnimals, setLikedAnimals,
    //add more function stuff here
  };

  //functions here?

  return <DataContext.Provider value={stateAndSetters}>
    {children}
  </DataContext.Provider>;
}

export function useDataContext(){
  return useContext(DataContext);
}
