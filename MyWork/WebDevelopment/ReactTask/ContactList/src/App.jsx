import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    phoneNumber: "",
    email: "",
    imageUrl: "",
  });

  const [contactList, setContactList] = useState([]); //array of contacts
  const [currentPage, setCurrentPage] = useState(1);
  const contactPerPage = 3;
  const totalPages = Math.ceil(contactList.length / contactPerPage);

  const paginationArr = contactList.slice(
    //taking the part from the contactList array
    (currentPage - 1) * contactPerPage, //previous page * contactPerPage because index start with zero if contactPerpage = 5 currentpage = 2 start index will be 5 so that will come 1 * 5
    currentPage * contactPerPage //end index //curr page me 20 element se aageye toh joh curr page hoga usme 20 ko into karge toh last index mil jaye joh is page pe aayega
  ); //this will have the items of the pages dependenting upon the page

  const sumbitHandler = (e) => {
    e.preventDefault();
    const newContact = {
      ...contact,
      id: nanoid(),
    }; // Create a new contact object
    setContactList([...contactList, newContact]); // Add it to the list
    // setContact({
    //   id: "",
    //   name: "",
    //   phoneNumber: "",
    //   email: "",
    //   imageUrl: "",
    // }); // Reset the form
  };
  

  const deleteHandler = (id) => {
    const newArr = contactList.filter((elem) => elem.id !== id);
    setContactList(newArr);
  };




  //agar already contactlist me items hai matlab jab me ek baar localstorage me item set kar dege toh jab kabhi baad me hum pe local host ko run kare toh humare array phir purane wale contact bhi dikhe
  useEffect(() => {
    const storedContants = localStorage.getItem("contactList");
    if (storedContants) {
      //if contacts are there
      setContactList(JSON.parse(storedContants)); //bapas se contant me values dala do
    }
  }, []);

  // Save contacts to local storage whenever the list changes
  useEffect(() => {
    // jab list empty hogi toh update nhi karege agar update kardega toh element local storage se chale jayege  The check if (contactList.length > 0) ensures that an empty list won't overwrite existing data in localStorage.
    if (contactList.length > 0)
      localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);

  return (
    <div className="h-screen flex bg-[#e2e1e1]">
      <div className="addContact bg-[#3B82F6] w-1/2  px-[5vw] py-[4vh] rounded-[5vh]">
        <h1 className="text-3xl font-bold text-center mb-6 text-white mt-10">
          Contact Manager
        </h1>
        <form
          onSubmit={(e) => {
            sumbitHandler(e);
          }}
          className="flex flex-col gap-3"
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name :
          </label>
          <input
            type="text"
            placeholder="Enter name"
            value={contact.name}
            required
            className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            onChange={(object) => {
              console.log(object.target.value);
              setContact({
                ...contact,
                name: object.target.value,
              });
            }}
          />
          <label
            htmlFor="number"
            className="block text-sm font-medium text-white"
          >
            Number :
          </label>

          <input
            type="number"
            name=""
            id=""
            placeholder="Enter phone number"
            className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
            value={contact.phoneNumber}
            onChange={(object) => {
              console.log(object.target.value);

              setContact({
                ...contact, //destructure the contact object all the values will comes as it is
                phoneNumber: object.target.value, //value of previous phone number will be updated
              });
            }}
          />
          <label
            htmlFor="email"
            className="block text-sm text-white font-medium"
          >
            Email :
          </label>

          <input
            type="email"
            name=""
            id=""
            placeholder="Enter email address"
            required
            className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={contact.email}
            onChange={(object) => {
              setContact({
                ...contact,
                email: object.target.value,
              });
            }}
          />
          <label
            htmlFor="image"
            className="block text-sm text-white font-medium"
          >
            Image :
          </label>
          {/* <input
            type="file"
            name=""
            id=""
            placeholder="enter image"
            // onChange={}
            className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          /> */}
          <input
            type="submit"
            className="bg-white cursor-pointer   rounded-xl py-2  uppercase  px-8 mt-4  text-[#3364b4] font-bold text-sm"
          />
        </form>
      </div>


      <div className="contactList w-1/2 px-[10vh] py-[5vh] bg-white rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mt-7 text-[#3e7ada]">
          Contact List
        </h1>
        {contactList.length > 0 ? (
          <div className="page mt-5">
            <div className="pagination_controll flex justify-between items-center mb-5">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="bg-blue-500 text-white px-6 py-2 rounded-xl disabled:bg-gray-400 transition-all hover:bg-blue-600"
              >
                Prev
              </button>
              <span className="text-[2vh] font-medium">
                {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="bg-blue-500 text-white px-6 py-2 rounded-xl disabled:bg-gray-400 transition-all hover:bg-blue-600"
              >
                Next
              </button>
            </div>
            <div className="contactCards">
              {paginationArr.length > 0 ? (
                paginationArr.map((item) => (
                  <div
                    key={item.id}
                    className="contactCard mb-5 flex items-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-1/4 p-4 flex justify-center">
                      {/* <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-[10vh] h-[10vh] rounded-full object-cover"
                      /> */}
                    </div>
                    <div className="w-1/2 px-4">
                      <h1 className="text-2xl font-semibold">{item.name}</h1>
                      <h1 className="text-[#a3a1a1] font-medium text-sm">
                        {item.phoneNumber}
                      </h1>
                      <h1 className="text-[#a3a1a1] font-medium text-sm">
                        {item.email}
                      </h1>
                    </div>
                    <button
                      className="w-1/4 h-[12vh] uppercase text-red-500 font-semibold text-center px-2 py-4"
                      onClick={() =>{ 
                        
                        console.log(item.id)
                        deleteHandler(item.id)
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                "No contacts available"
              )}
            </div>
          </div>
        ) : (
          "No contacts available"
        )}
      </div>
    </div>
  );
};

export default App;