import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MessageSquare } from "lucide-react";
import { setSelectedUser } from "../store/reducers/UserSlice";
import { X } from 'lucide-react';
const PostsCart = ({ userId }) => {
  const { postList } = useSelector((state) => state.post);
  const posts = postList.filter((post) => post.id === userId); //filter returns an array
  const dispatch = useDispatch();

  const handleCloseComments = () => {
    dispatch(setSelectedUser(null));
  };

  return (
    <div className="posts-section">
      <div className="posts-header">
        <h3>Posts</h3>
        <button onClick={handleCloseComments} className="close-button">
          <X size={16} />
        </button>
      </div>
      <div key={posts[0].id} className="post-card">
        <h4>{posts[0].title}</h4>
        <p>{posts[0].body.substring(0, 100)}...</p>
        <div className="post-meta">
          <MessageSquare size={12} />
          <span>
            {posts[0].reactions.likes} likes, {posts[0].reactions.dislikes} dislikes
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostsCart;
