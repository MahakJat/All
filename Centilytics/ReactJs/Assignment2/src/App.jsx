import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPost } from './store/postsSlice';
import { fetchComments } from './store/commentsSlice';
import PostList from './Components/PostList';
import CommentList from './Components/CommentList';

function App() {
  const dispatch = useDispatch();
  const { posts, postsLoading, postsError, selectedPost } = useSelector((state) => state.posts);
  const { comments, commentsLoading, commentsError } = useSelector((state) => state.comments);

  // Filter comments based on selected post
  const filteredComments = selectedPost 
    ? comments.filter(comment => comment.postId === selectedPost.id) 
    : comments;

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1 className="app-title">DummyJSON Demo App</h1>
      
      <div className="content-grid">
        <div className="content-card">
          <h2 className="section-title">Posts</h2>
          {postsLoading && <p className="loading-text">Loading posts...</p>}
          {postsError && <p className="error-text">Error: {postsError}</p>}
          {!postsLoading && !postsError && <PostList posts={posts} />}
        </div>
        
        <div className="content-card">
          <h2 className="section-title">
            {selectedPost ? `Comments for Post #${selectedPost.id}` : 'All Comments'}
            {selectedPost && (
              <button 
                className="view-all-btn" 
                onClick={() => dispatch(selectPost(null))}
              >
                View All
              </button>
            )}
          </h2>
          {commentsLoading && <p className="loading-text">Loading comments...</p>}
          {commentsError && <p className="error-text">Error: {commentsError}</p>}
          {!commentsLoading && !commentsError && (
            <CommentList 
              comments={filteredComments} 
              postId={selectedPost?.id}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;