import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Grid from './components/Grid';
import Page from './components/Page';

const App = () => {
  const [Data, setData] = useState([]);
  const [bgImage, setbgImage] = useState(null);
  const getData = async()=>{
     const response = await axios.get("https://picsum.photos/v2/list");
     setData(response.data); 
  }
  useEffect(function(){
      getData();
  },[])
  
  const chageImage = (image)=>{
    if(image)
    setbgImage(image.download_url); 
    else{
      setbgImage(null)
    }
  }
  return Data.length >0 && (
    <div>
    { bgImage ? <Page value = {bgImage} chageImage = {chageImage} /> :
    <Grid Data = {Data} chageImage = {chageImage}/>
}
    </div>
  )
}

export default App