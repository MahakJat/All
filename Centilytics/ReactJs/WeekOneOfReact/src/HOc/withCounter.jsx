// const newComponent = withCounter(OldComponent);
// newComponet is the enhanced component
// oldComponent is the function which will be enhanced
// withCounter is the function which will be enchancing the old function

import { useState } from "react";

const withCounter = (OldComponent, entity) => {
  return function enhancedComponent(props) {
    const [value, setValue] = useState(0);
    return (
      <OldComponent
        {...props}
        count={value}
        incrementCount={() => {
          setValue(value + entity);
        }}
      />
    );
  };
};

export default withCounter;
