import { useState, createContext, useContext, useEffect } from 'react';
import { getUser, fetchBearerToken, fetchAllAnimals, addToLikedList, fetchLikedList, deleteFromLikedList } from './services/fetch-utils';
const DataContext = createContext();

export default function DataProvider({ children }) {
  //set state
  const [user, setUser] = useState(getUser());
  const [animals, setAnimals] = useState([]);
  const [likedList, setLikedList] = useState(null);
  const [token, setToken] = useState('');


  //add url state here?

  const stateAndSetters = {
    user, setUser,
    animals, setAnimals,
    likedList, setLikedList,
    token,
    handleAddToLikedList,
    handleDeleteFromLikedList,
    handleFetchFromLikedList,
    //add more function stuff here
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBearerToken();
      setToken(data.access_token);
      const { animals } = await fetchAllAnimals(data.access_token);
      // console.log(animals);
      setAnimals(animals);
    };
    fetchData();
  }, []);

  //functions here?

  async function handleAddToLikedList(liked) {
    await addToLikedList(liked);
    const updatedLikedList = await fetchLikedList();

    setLikedList(updatedLikedList);
  }

  async function handleDeleteFromLikedList(id) {
    await deleteFromLikedList(id);
    const updatedLikedList = await fetchLikedList();

    setLikedList(updatedLikedList);
  }

  async function handleFetchFromLikedList(id) {
    const likedList = await fetchLikedList(id);

    setLikedList(likedList);
  }

  return <DataContext.Provider value={stateAndSetters}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}
