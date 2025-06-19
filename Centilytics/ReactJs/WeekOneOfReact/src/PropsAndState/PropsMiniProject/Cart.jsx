import React from 'react'

const Cart = ({level,name,position,description,profilePicture}) => {
    console.log(level,name,position,description,profilePicture)
  return (
    <div className='cart'>
          <div className='profile-img'>
            <img src={profilePicture} alt="" />
             {/* <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
          </div>
           <h4 className='level'>{level}</h4>
           <div className="details">
           <h3 className='name'>{name}</h3>
           <h3 className='position'>
            {position}
           </h3>

           </div>
           <p className='description'>{description}</p>

           <div className='social-media'>
           <i class="ri-dribbble-line"></i>
           <i class="ri-instagram-line"></i>
           <i class="ri-linkedin-fill"></i>
           <i class="ri-twitter-fill"></i>
           <i class="ri-facebook-fill"></i>
           </div>
           <div className='btns'>
             <button className='message'>Message</button>
             <button className='connect'>connect</button>
           </div>
    </div>
  )
}

export default Cart