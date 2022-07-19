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
    user,
    setUser,
    animals,
    setAnimals,
    likedAnimals,
    setLikedAnimals,
    token,
    // handleGetAnimalsByType,
    //add more function stuff here
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBearerToken();
      setToken(data.access_token);
      const { animals } = await fetchAllAnimals(data.access_token);
      console.log(animals);
      setAnimals(animals);
    };
    fetchData();
  }, []);

  //functions here?

  // async function handleGetAnimalsByType(token) {
  //   const animals = await fetchAllAnimals(token);
  //   console.log('animals', animals);
  //   setAnimals(animals);
  // }

  return <DataContext.Provider value={stateAndSetters}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}
