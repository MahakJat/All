import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite, openPhotoModal } from '../store/reducers/PhotosSlice';

const ImageCart = ({ imageurl, author, id }) => {
  


  const dispatch = useDispatch();
  const { favoriteList } = useSelector(state => state.PhotoReducer);

  const alreadyFavorite = favoriteList.some(elem => elem.id === id);

  const favoriteClick = e => {
    e.stopPropagation();
    alreadyFavorite
      ? dispatch(removeFromFavorite({ id }))
      : dispatch(addToFavorite({ id, download_url: imageurl, author }));
  };

  const handleImageClick = () => {
    // Make sure we're passing the properties in a consistent way
    dispatch(openPhotoModal({ id,download_url:  imageurl, author }));
  };

  return (
    <div className="ImageCart" onClick={handleImageClick} >
      <div
        className="image-container"
        style={{ backgroundImage: `url(${imageurl})` }}
      >
        <div className="details">
          <h5>{author}</h5>
          <i
            onClick={favoriteClick}
            className={`favorite-icon ri-heart-3-fill ${alreadyFavorite ? 'active' : ''}`}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ImageCart;