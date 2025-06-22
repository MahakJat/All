import React from "react";
import NavBar from "./UserChatParts/NavBar";
import Footer from "./UserChatParts/Footer";

const UserChat = ({ selectedUser, onUserClick }) => {
  console.log(selectedUser);
  return (
    <div className="w-[27vw] h-[39vw] rounded-xl flex flex-col overflow-hidden bg-white">
      <NavBar selectedUser={selectedUser} onUserClick={onUserClick} />

      {/* Chatting section that starts from the bottom */}
      <div className="chatting flex-1 flex flex-col gap-1 justify-end overflow-y-auto p-4 no-scrollBar bg-[url(https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg)] bg-cover">
        {selectedUser.messages.map(function (chat) {
          return (
            <div className={chat.className}>
              <p>{chat.message}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default UserChat;

// flex-1: Allows the chatting section to take up all available space between the NavBar and Footer.
// flex flex-col-reverse: Ensures messages stack from the bottom and grow upwards.
