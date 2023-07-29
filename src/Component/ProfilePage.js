import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

const ProfilePage = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch(); 
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user.id}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SAVE_USER_DETAILS', payload: data });
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, [dispatch, user.id]); 

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;
