import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ImageCart from "./ImageCart";

const ImageList = ({ searchTerm, showFavorites}) => {
  const { photosList, isLoading,  favoriteList } = useSelector(
    (state) => state.PhotoReducer
  );
  

  const displayList = showFavorites ?  favoriteList : photosList;
 
  const filteredArr = displayList.filter(photo=>
    photo.author.toLowerCase().includes(searchTerm.toLowerCase())  
  )
  return (
    <div className="Image-and-loading">
      {isLoading ? (
        <div className="loading">loading</div>
      ) : (
        <div className="ImageList">
          {filteredArr.length > 0 ? (
            filteredArr.map((elem) => (
              <ImageCart
                key={elem.id}
                id={elem.id}
                imageurl={elem.download_url}
                author={elem.author}
              />
            ))
          ) : (
            <div className="no-favorites">
              {showFavorites ? (
                <p>No favorite images yet</p>) : (<p>No images match your search</p>)}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageList;

