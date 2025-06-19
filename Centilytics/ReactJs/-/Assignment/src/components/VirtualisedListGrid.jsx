import React, { useRef, useEffect } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import { useSelector } from "react-redux";
import ImageCart from "./ImageCart";

const gap = 16;
const columnCount = 3;
const columnWidth = 24 * 16 + gap; // 24rem in px
const rowHeight = 16.5 * 16 + gap + 24; // 16.5rem in px + gap + extra space for scaling
const height = 36 * 16; // 36rem in px (viewport height)

const VirtualizedListGrid = ({ searchTerm, showFavorites }) => {
  const { photosList, isLoading, favoriteList } = useSelector(
    (state) => state.PhotoReducer
  );

  const displayList = showFavorites ? favoriteList : photosList;

  const filteredList = displayList.filter((photo) =>
    photo.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rowCount = Math.ceil(filteredList.length / columnCount);


  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;

    if (index >= filteredList.length) return null;

    const photo = filteredList[index];

    // Create a new style with padding and without overflow hidden
    const cellStyle = {
      ...style,
      padding: '0.2rem',
      overflow: 'visible', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    return (
      <div style={cellStyle}>
        <ImageCart
          key={photo.id}
          id={photo.id}
          imageurl={photo.download_url}
          author={photo.author}
        />
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="Image-and-loading">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (filteredList.length === 0) {
    return (
      <div className="Image-and-loading">
        <div className="no-favorites">
          {showFavorites ? (
            <p>No favorite images yet</p>
          ) : (
            <p>No images match your search</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="Image-and-loading ">
      <Grid
        columnCount={columnCount}
        columnWidth={columnWidth}
        height={height} //hum props ka name change nhi kar sakte hai
        rowCount={rowCount}
        rowHeight={rowHeight}
        width={columnCount * columnWidth}
        className="grid-container"
        style={{ overflow: 'auto', scrollbarWidth: 'none' }}
      >
        {Cell}
      </Grid>
    </div>
  );
};

export default VirtualizedListGrid;