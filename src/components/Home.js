import React, { useState, useEffect } from 'react';
import Tweet from './Tweet';
import "../App.css"


function Home() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem('tweets'));
    if (storedTweets) {
      setTweets(storedTweets);
    }
  }, []);

  const saveTweetsToLocalStorage = (tweets) => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  };

  

  const addTweet = () => {
    if (newTweet.trim() === '') return;
    const tweet = { text: newTweet, likes: 0, comments: [] };
    setTweets([...tweets, tweet]);
    saveTweetsToLocalStorage([...tweets, tweet]);
    setNewTweet('');
  }

  const handleLike = (index) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].likes += updatedTweets[index].isLiked ? -1 : 1;
    updatedTweets[index].isLiked = !updatedTweets[index].isLiked; 
    setTweets(updatedTweets);
    saveTweetsToLocalStorage(updatedTweets);
  }
  const handleComment = (index, comment) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].comments.push(comment);
    setTweets(updatedTweets);
    saveTweetsToLocalStorage(updatedTweets);
  }

  return (
    <div className="App">
      <h1>Twitter Clone</h1>
      <div>
        <input
          type="text"
          placeholder="New tweet"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
          className="newPost"
        />
        <button onClick={addTweet}>post</button>
      </div>
      <div >
        {tweets.map((tweet, index) => (
          <div className='newTweet'>
          <Tweet
            key={index}
            tweet={tweet}
            onLike={() => handleLike(index)}
            onComment={(comment) => handleComment(index, comment)}
          />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;