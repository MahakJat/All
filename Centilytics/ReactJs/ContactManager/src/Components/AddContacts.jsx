import { nanoid } from "nanoid";
import React, { useState } from "react";

const AddContacts = ({ contactList, setContactList }) => {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    number: "",
    email: "",
    imgUrl: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const newObject = { ...contact, id: nanoid() };
    setContactList([...contactList, newObject]);
    // console.log(contactList);
    setContact({
      id: "",
      name: "",
      number: "",
      email: "",
      imgUrl: "",
    });
  };

  return (
    <div className="addContacts">
      <h1>Add New Contacts</h1>
      <form action="" onSubmit={submitHandler}>
        <div className="input-holder">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            required
            placeholder="Enter name..... "
            value={contact.name}
            onChange={(e) => {
              setContact({ ...contact, name: e.target.value });
            }}
          />
        </div>
        <div className="input-holder">
          <label htmlFor="">Number:</label>
          <input
            required
            type="phone"
            placeholder="Enter number...."
            value={contact.number}
            onChange={(e) => {
              setContact({ ...contact, number: e.target.value });
            }}
          />
        </div>
        <div className="input-holder">
          <label htmlFor="">Email:</label>
          <input
            required
            type="email"
            placeholder="Enter email...."
            value={contact.email}
            onChange={(e) => {
              setContact({ ...contact, email: e.target.value });
            }}
          />
        </div>
        <div className="input-holder">
          <label htmlFor="">Image url:</label>
          <input
            type="text"
            placeholder="Enter image url...."
            value={contact.imgUrl}
            onChange={(e) => {
              setContact({ ...contact, imgUrl: e.target.value });
            }}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddContacts;
