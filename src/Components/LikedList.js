import React, { useEffect } from 'react';
import { useDataContext } from '../DataProvider';
import { useParams } from 'react-router-dom';
import AnimalsList from './AnimalsList';

export default function LikedList() {
  const { likedList, handleFetchFromLikedList } = useDataContext();
  const { id } = useParams();

  useEffect(() => {
    handleFetchFromLikedList(id);
  }, [id]); // eslint-disable-line

  return (
    <div className="animals-list">
      <p>send help  asap</p>
      {
        <AnimalsList animals={likedList} />
      }
    </div>
  );
}
