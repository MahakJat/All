import React from "react";
import { FixedSizeList as List } from "react-window";

const SimpleList = () => {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  const Row = ({ index, style }) => (
    <div style={style} className="row">
      {items[index]}
    </div>
  );

  return (
    <List
      height={400}           // container height (px)
      itemCount={items.length}
      itemSize={35}          // each item height (px)
      width={"100%"}
    >
      {Row}
    </List>
  );
};

export default SimpleList;
