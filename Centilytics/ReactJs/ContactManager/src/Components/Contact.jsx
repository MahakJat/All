import React from 'react'

const Contact = ({elem}) => {
  return (
    <div className='contact'>
    <div className='contact-left'>
        <img src={elem.imgUrl} alt="" />
        <div className='details'>
           <h3 className='name'>{elem.name}</h3>
           <h4 className='number'>{elem.number}</h4>
           <h3 className='email'>{elem.email}</h3>
        </div>
    </div>
    <div className='contact-right'>
    <i class="ri-phone-line"></i>
    <i class="ri-mail-line"></i>
    </div>
</div>
  )
}

export default Contact