import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSelectedUser } from '../store/reducers/UserSlice';


const UserCart = ({elem}) => {
  const dispatch = useDispatch();
  
  const handleCommentClick = () => {
    dispatch(setSelectedUser(elem.id));
  };
  
  return (
    <div className="user-card">
      <div className="card-content">
        <div className="user-info">
          <div className="user-avatar">
            <img 
              src={elem.image} 
              alt={`${elem.firstName}`}
            />
          </div>
          <div className="user-details">
            <h4>
              {elem.firstName} {elem.middleName} {elem.lastName}
            </h4>
            <h4 className="user-age">age: {elem.age}</h4>
          </div>
        </div>
        <button
          onClick={handleCommentClick}
          className="action-button"
        >
          <MessageSquare size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserCart;