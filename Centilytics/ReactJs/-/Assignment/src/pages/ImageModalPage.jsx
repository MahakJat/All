import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePhotoModal } from '../store/reducers/PhotosSlice';

const ImageModalPage = () => {
  const dispatch = useDispatch();
  const {isModalOpen, selectedPhoto } = useSelector((state) => state.PhotoReducer);
   
   console.log(selectedPhoto);

  const handleClose = () => {
    dispatch(closePhotoModal());
  };

  return (
   selectedPhoto && ( <div className={`ImageModalPage ${isModalOpen ? 'open' : ''}`}>
      <i className="close ri-close-large-line" onClick={handleClose}></i>
      <div className='image'>
        <img src={selectedPhoto.download_url} alt={selectedPhoto.author} />
      </div>
    </div>)
  );
};

export default ImageModalPage;