import React from 'react'
import AddContacts from './Components/AddContacts'
import ShowContacts from './Components/ShowContacts'
import { useState } from 'react'
import './index.scss'
const App = () => {
  const [contactList, setContactList] = useState([]);
  
  // pagination wala part
  const [currentPage, setCurrentPage] = useState(1);
  const countPerPage = 3;
  const totalPages = Math.ceil(contactList.length / countPerPage)
  const PaginationArr = contactList.slice(
    (currentPage - 1)*countPerPage,
    currentPage*countPerPage
  )


  return (
    <div className='app'>
      <AddContacts contactList={contactList} setContactList={setContactList}/>
      <ShowContacts contactList={PaginationArr} setCurrentPage={setCurrentPage} currentPage = {currentPage} totalPages={totalPages} />
    </div>
  )
}

export default App