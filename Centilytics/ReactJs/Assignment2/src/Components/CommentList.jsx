import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectComment } from '../store/commentsSlice';


const CommentList = ({ comments }) => {
  const dispatch = useDispatch();
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const handleCommentClick = (comment) => {
    dispatch(selectComment(comment));
    setSelectedCommentId(selectedCommentId === comment.id ? null : comment.id);
  };

  return (
    <div className="comment-list">
      {comments.length === 0 ? (
        <p className="no-data">No comments available</p>
      ) : (
        comments.map((comment) => (
          <div
            key={comment.id}
            className={`comment-item ${selectedCommentId === comment.id ? 'selected' : ''}`}
            onClick={() => handleCommentClick(comment)}
          >
            <div className="comment-header">
              <h3 className="comment-user">@{comment.user.username}</h3>
              <span className="comment-post-id">Post #{comment.postId}</span>
            </div>
            <p className="comment-body">{comment.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;