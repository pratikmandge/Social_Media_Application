import React, { useState } from 'react';

import '../../../src/assets/styles/Comment.css'

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <img src={comment.author.avatarUrl} alt={comment.author.name} className="comment-avatar" />
        <div className="comment-info">
          <div className="comment-author">{comment.author.name}</div>
          <div className="comment-date">{comment.createdAt.toDateString()}</div>
        </div>
      </div>
      <div className="comment-content">{comment.content}</div>
      <div className="comment-actions">
        <button className={`btn btn-secondary btn-sm ${liked ? 'liked' : ''}`} onClick={toggleLike}>
          <i className="far fa-thumbs-up"></i>
          {liked ? ' Liked' : ' Like'}
        </button>
        {comment.replies && (
          <button className="btn btn-secondary btn-sm" onClick={toggleReplies}>
            {showReplies ? 'Hide' : 'View'} Replies ({comment.replies.length})
          </button>
        )}
        <button className="btn btn-secondary btn-sm">Reply</button>
      </div>
      {showReplies && (
        <div className="comment-replies">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="comment-reply">
              <img src={reply.author.avatarUrl} alt={reply.author.name} className="comment-avatar" />
              <div className="comment-info">
                <div className="comment-author">{reply.author.name}</div>
                <div className="comment-date">{reply.createdAt.toDateString()}</div>
              </div>
              <div className="comment-content">{reply.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
