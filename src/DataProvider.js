import { useState, createContext, useContext, useEffect } from 'react';
import { getUser, fetchBearerToken, fetchAllAnimals } from './services/fetch-utils';
const DataContext = createContext();

export default function DataProvider({ children }) {
    //set state
  const [user, setUser] = useState(getUser());
  const [animals, setAnimals] = useState([]);
  const [likedAnimals, setLikedAnimals] = useState('');
  const [token, setToken] = useState('');
  
  //add url state here?

  const stateAndSetters = {
    user, setUser,
    animals, setAnimals,
    likedAnimals, setLikedAnimals,
    token,
    //add more function stuff here
  };
  
  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetchBearerToken();
      setToken(data.access_token);
      await fetchAllAnimals(data.access_token);
    };
    fetchdata(); 
  }, []);

  //functions here?

  return <DataContext.Provider value={stateAndSetters}>
    {children}
  </DataContext.Provider>;
}

export function useDataContext(){
  return useContext(DataContext);
}
