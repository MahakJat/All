import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectPost } from '../store/postsSlice';

const PostList = ({ posts }) => {
  const dispatch = useDispatch();
  const [expandedPostId, setExpandedPostId] = useState(null);

  const handlePostClick = (post) => {
    dispatch(selectPost(post));
    setExpandedPostId(expandedPostId === post.id ? null : post.id);
  };

  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p className="no-data">No posts available</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className={`post-item ${expandedPostId === post.id ? 'expanded' : ''}`}
            onClick={() => handlePostClick(post)}
          >
            <h3 className="post-title">{post.title}</h3>
            {expandedPostId === post.id && (
              <div className="post-details">
                <p className="post-body">{post.body}</p>
                <div className="post-meta">
                  <span className="post-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="post-tag">
                        {tag}
                      </span>
                    ))}
                  </span>
                  <span className="post-reactions">❤️ {post.reactions}</span>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;