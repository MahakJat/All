import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ImageCart from "./ImageCart";

const VirtualizedImageList = ({
  searchTerm,
  showFavorites,
  containerHeight , 
  itemHeight,
}) => {
  const { photosList, isLoading, favoriteList } = useSelector(
    (state) => state.PhotoReducer
  );
  
  const containerRef = useRef(null);
  const displayList = showFavorites ? favoriteList : photosList;
  
  // Filter the list based on search term
  const filteredList = displayList.filter(photo => 
    photo.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pixel dimensions & grid layout calculations
  const [dims, setDims] = useState({
    containerHeightPx: 0,
    itemHeightPx: 0,
    itemsPerRow: 0,
    totalVisibleRows: 0,
  });

  const [indices, setIndices] = useState({
    startRow: 0,
    endRow: 0,
  });


  // Calculate dimensions and layout on mount and when container height changes
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return; 
      
      const rootFontSize = 16;
      const containerHeightPx = containerHeight * rootFontSize;
      const  itemHeightPx = itemHeight * rootFontSize;
      
      
      const containerWidth = containerRef.current.clientWidth; //hum container ki width ki need hai kyuki hume ye pata kara hai ki kitne element row me ban payege
      const itemWidthPx = 24 * rootFontSize; //24 Image ki width humne set ki hai same with the gapPx
      const gapPx = 1 * rootFontSize;
      
      // Ensure we have at least 1 item per row
      const itemsPerRow = Math.floor((containerWidth + gapPx) / (itemWidthPx + gapPx));
      
      // In the numerator (containerWidth + gapPx):
// This might seem less intuitive at first, but there's a mathematical reason for it.
// The formula accounts for the fact that the last item in a row doesn't need a gapPx after it. If we have N items in a row, we actually only need N-1 gapPxs:
// Total width needed = N×itemWidthPx + (N-1)×gapPx
// When we solve for N (the number of items that fit):
// containerWidth = N×itemWidthPx + (N-1)×gapPx
// containerWidth = N×itemWidthPx + N×gapPx - gapPx
// containerWidth + gapPx = N×(itemWidthPx + gapPx)
// N = (containerWidth + gapPx) / (itemWidthPx + gapPx)

    const totalVisibleRows = Math.ceil(containerHeightPx / itemHeightPx) + 1; //+1 for one row in extra //for buffer
      
      setDims({
        containerHeightPx,
        itemHeightPx,
        itemsPerRow,
        totalVisibleRows,
      });
      
      setIndices({
        startRow: 0,
        endRow: totalVisibleRows,
      });
    };

 
    updateDimensions();
  
  }, [containerHeight, itemHeight, filteredList.length]);

  const onScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const newStartRow = Math.floor(scrollTop / dims.itemHeightPx);//agar itemheight = 200px hai aur hum 200px hi scroll kar gaye matlab ke row upar chali gyi //the height of the row will be same as the height of the item
    const newEndRow = newStartRow + dims.totalVisibleRows;
    
    setIndices({
      startRow: newStartRow,
      endRow: newEndRow,
    });
  };

  
  if (isLoading) {
    return (
      <div className="Image-and-loading">
        <div className="loading">loading</div>
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

  // Use max of 1 for itemsPerRow to avoid division by zero
  const itemsPerRow = Math.max(1, dims.itemsPerRow);
  
  // Calculate total rows needed for the spacer - add small buffer (0.1) to account for rounding errors
  const exactRows = filteredList.length / itemsPerRow;




  const totalRows = Math.ceil(exactRows);
  const spacerHeight = totalRows * dims.itemHeightPx;
  
  
  const startIndex = indices.startRow * itemsPerRow;
  const endIndex = Math.min(indices.endRow * itemsPerRow, filteredList.length);
  const virtualList = filteredList.slice(startIndex, endIndex);

  return (
    <div className="Image-and-loading">
      <div
        ref={containerRef}
        className="virtualList scrollcontainer"
        onScroll={onScroll}
        style={{
          height: `${containerHeight}rem`,
          overflowY: "auto",
          position: "relative",
        }}
      >
        <div
          className="scroll-spacer"
          style={{ height: `${spacerHeight}px` }}
        >
          <div
            className="visible-window"
            style={{
              position: "absolute",
              top: `${indices.startRow * dims.itemHeightPx}px`,
              width: "100%",
              paddingBottom:"2rem"
            }}
          >
            {virtualList.map((photo) => (
              <ImageCart
                key={photo.id}
                id={photo.id}
                imageurl={photo.download_url}
                author={photo.author}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualizedImageList;

