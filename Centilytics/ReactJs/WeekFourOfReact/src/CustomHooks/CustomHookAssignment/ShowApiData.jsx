import React from "react";
import useApiCall from "./useApiCall";

const ShowApiData = () => {
  const result1 = useApiCall("products");
  const result2 = useApiCall("carts");
  const result3 = useApiCall("users");

  console.log(result1);
  console.log(result2);
  console.log(result3);

  return (
    <div>
      <div className="products">
        {result1.map((elem) => (
          <h1>{elem.title}</h1>
        ))}
      </div>
      <div className="carts">
        {result2.map((elem) => (
          <h1>{elem.id}</h1>
        ))}
      </div>
      <div className="users">
        {result3.map((elem) => (
          <h1>{elem.email}</h1>
        ))}
      </div>
    </div>
  );
};

export default ShowApiData;
