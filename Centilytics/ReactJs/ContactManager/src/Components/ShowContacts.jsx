import React from "react";
import Contact from "./Contact";

const ShowContacts = ({
  contactList,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className="showContacts">
      <h1>Contact List</h1>
      {contactList.length === 0?<h3>No contact add yet....</h3>:(<div className="form-and-pagination">
        <div className="pagination-btns">
          <button
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            prev
          </button>
          <h4>
            {currentPage}/{totalPages}
          </h4>
          <button
            disabled={currentPage === totalPages}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            next
          </button>
        </div>
        <div className="contacts-div">

          {contactList.map((elem) => (
            <Contact elem={elem} />
          ))}
          {/* <div className='contact'>
                      <div className='contact-left'>
                          <img src="https://images.unsplash.com/photo-1744754222043-c337f2728640?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                          <div className='details'>
                             <h3 className='name'>mahak</h3>
                             <h4 className='number'>9440660954</h4>
                             <h3 className='email'>mahak@gamil.com</h3>
                          </div>
                      </div>
                      <div className='contact-right'>
                      <i class="ri-phone-line"></i>
                      <i class="ri-mail-line"></i>
                      </div>
                 </div> */}
        </div>
      </div>)}
    </div>
  );
};
export default ShowContacts;
