import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => {


  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(process.env.VITE_API_URL);
        const response = await axios.get(import.meta.env.VITE_API_URL); //using the vite bunlder
         
       console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default App;
