import React from "react";
// import NavBarLeft from './NavBarLeft'
// import NavBarRight from './NavBarRight'

const NavBar = ({ selectedUser, onUserClick }) => {
  return (
    <div className="flex justify-between items-center bg-[#075E55] text-white px-4 py-3">
      <div className="flex gap-2 left items-center">
        <i
          onClick={() => {
            onUserClick(null);
          }} //to go back to home page
          class="ri-arrow-left-line text-xl"
        ></i>
        <div className="w-10 h-10 bg-black rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={selectedUser.dp}
            alt=""
          />
        </div>
        <div>
          <h1 className="leading-5 capitalize">{selectedUser.username}</h1>
          <h3 className="text-sm leading-4">{selectedUser.lastseen}</h3>
        </div>
      </div>

      <div className="right flex items-center gap-3 text-xl">
        <i class="ri-phone-fill"></i>
        <i class="ri-more-2-line"></i>
      </div>
    </div>
  );
};

export default NavBar;
