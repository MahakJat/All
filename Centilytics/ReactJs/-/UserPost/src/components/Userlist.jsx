import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostsCart from "./PostsCart";
import UserCart from "./UserCart";
const Userlist = () => {
  const { userList, isLoadingUser, selectedUser, isError } = useSelector(
    (state) => state.user
  );

  if (isLoadingUser) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-container">
        <p>Error occurred: {isError}</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h1>User Posts Dashboard</h1>

      <div className="user-grid">
        {userList.map((elem) => (
          <div key={elem.id}>
            <UserCart elem={elem} />
            {selectedUser === elem.id && <PostsCart userId={elem.id} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userlist;
