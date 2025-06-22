import React, { useState } from "react";
import WhatsApp from "./components/WhatsApp";
import UserChat from "./components/UserChat";
import { chatData } from "./components/Data";
import User from "./components/User";
const App = () => {
  const [selectedUser, setSelectedUser] = useState(null); //to store the selected user

  const userClick = (user) => {
    //hum ye function user me pass kiya hai   User.jsx agar user me ki bhi onClick={onUserClick(user)} user will be passed here
    setSelectedUser(user);
  };
  return (
    <div className="flex justify-center items-center  h-screen bg-[#26756d] gap-2">
      {
        selectedUser ? (
          <UserChat selectedUser={selectedUser} onUserClick={userClick} /> //here we are passing this function because agar hum return ana hai whatsapp page pe toh <- icon pe click karpe hum user ke value null karge  //passing the value of selectedUser to the UserChat
        ) : (
          <WhatsApp chatData={chatData} onUserClick={userClick} />
        )
        //agar user selected ki value not null hogi then UserChat chale aur agar null hogi to Whatsapp
      }
    </div>
  );
};

export default App;
