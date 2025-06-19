import React, { useState } from "react";

const withFilteration = (OldComponent, ArrToFilter) => {

    // ye joho function hai woh ek component ka function hi hai you can compare it with veggies function
  return function enhancedComponent(props) {
    // iss function logic likha hoga enhaced component ka 
    const [searchValue, setSearchValue] = useState("");
    const filterArr = ArrToFilter.filter((elem) =>
      elem.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        // aur ye joh return ho raha hai issme joh feature component ke element repeat ho rahe hoge woh hoga aur oldcomponent bhi hoga
      <div>
        <input
          type="text"
          placeholder="enter element"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <OldComponent {...props} filterArr = {filterArr} />
      </div>
    );
  };
};

export default withFilteration;
