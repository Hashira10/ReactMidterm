import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import "./Tweet.css"

function Tweet({ tweet, onLike, onComment }) {
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  const addComment = () => {
    if (newComment.trim() === '') return;
    onComment(newComment);
    setNewComment('');
  };

  const toggleLike = () => {
    if (isLiked) {
      onLike(-1); // Убираем лайк
      setIsLiked(false);
    } else {
      onLike(1); // Добавляем лайк
      setIsLiked(true);
    }
  };
  
  return (
    <div className="Tweet">
      <p>{tweet.text}</p>
      <button onClick={toggleLike} className='like'>
        {isLiked ? 'Убрать лайк' : 'Лайк'}
      </button>
      <span>Лайки: {tweet.likes}</span>
      <div>
        <input
          type="text"
          placeholder="New Comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={addComment}>Comment</button>
      </div>
      <div>
        {tweet.comments.map((comment, index) => (
          <Comment key={index} text={comment} />
        ))}
      </div>
    </div>
  );
}

export default Tweet;