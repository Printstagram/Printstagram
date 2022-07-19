import { useState, createContext, useContext, useEffect } from 'react';
import { getUser, fetchBearerToken, fetchAllAnimals } from './services/fetch-utils';
const DataContext = createContext();

export default function DataProvider({ children }) {
    //set state
  const [user, setUser] = useState(getUser());
  const [animals, setAnimals] = useState([]);
  const [likedAnimals, setLikedAnimals] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  
  //add url state here?

  const stateAndSetters = {
    user, setUser,
    animals, setAnimals,
    likedAnimals, setLikedAnimals,
    token, getAnimals,
    //add more function stuff here
  };
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchBearerToken();
      setToken(data.access_token);
      const resp = await fetchAllAnimals(data.access_token);
      setLoading(false);
      setAnimals(resp);
    };
    fetchData(); 
  }, []);

  //functions here?

  async function getAnimals(token) {
    const animals = await fetchAllAnimals(token);
    console.log('animals', animals);
    setAnimals(animals);
  }

  return <DataContext.Provider value={stateAndSetters}>
    {children}
  </DataContext.Provider>;
}

export function useDataContext(){
  return useContext(DataContext);
}
