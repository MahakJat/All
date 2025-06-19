import React, { useEffect } from 'react';
import { fetchPost } from './store/reducers/PostSlice';
import { fetchUser } from './store/reducers/UserSlice';
import { useDispatch } from 'react-redux';
import Userlist from './components/Userlist';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPost());
    dispatch(fetchUser());
  }, [dispatch]);
  
  
  return (
    <div className="app-container">
      <Userlist/>
      
    </div>
  );
};

export default App;