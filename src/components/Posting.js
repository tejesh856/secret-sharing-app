// Posting.js
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';

export default function Posting({ isLoggedIn }) {
  const [secret, setSecret] = useState({ message: '' });
  const [messages, setMessages] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  //console.log(isLoggedIn);
  useEffect(() => {
    // Fetch all messages when the component mounts
    const fetchMessages = async () => {
      const response = await fetch('https://secret-sharing-api.vercel.app/api/getmessages');
      const json = await response.json();

      if (json.success) {
        setMessages(json.messages);
      } else {
        console.error('Error fetching messages:', json.message);
      }
    };

    fetchMessages();
  }, []);
  const handlePost = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      // If user is not logged in, show the login modal
      setShowLoginModal(true);
      return;
    }

    // Make a POST request to your backend endpoint to save the secret
    const response = await fetch('https://secret-sharing-api.vercel.app/api/postsecret', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: secret.message }),
    });

    const json = await response.json();
    //console.log(json);

    if (json.success) {
      alert('Secret posted successfully');
      setSecret({ message: '' });
      const updatedResponse = await fetch('https://secret-sharing-api.vercel.app/api/getmessages');
      const updatedJson = await updatedResponse.json();

      if (updatedJson.success) {
        setMessages(updatedJson.messages);
      } else {
        console.error('Error fetching updated messages:', updatedJson.message);
      }
      // Optionally, you can update the UI to reflect the new post
    } else {
      alert('Error posting secret');
    }
  };

  function handleChange(e) {
    setSecret({ ...secret, [e.target.name]: e.target.value });
  }
  const handleGetStarted = () => {
    setShowLoginModal(true);
  };
  //console.log(messages);
  return (
    <div>
      {isLoggedIn ? (
        <div className='p-5'>
          <div className='p-4'>
            {messages.slice().reverse().map((msg) => (
              <div key={msg._id} className="text mb-5" style={{width:`${((msg.message.length)+(msg.createdAt.length))*10}px`}}>
                <p className="card-text" >{msg.message}</p>
                <small className='text-muted'>{msg.createdAt}</small>
              </div>
            ))}
          </div>
          <form onSubmit={handlePost}>
            <h2 className='text-white'>Post Your Secret</h2>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="secret"
                name="message"
                rows="3"
                onChange={handleChange}
                value={secret.message}
                required
                placeholder='Enter Your Secret'
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </form>

        </div>
      ) : (
        <div className='wrapw d-flex flex-column justify-content-center align-items-center'>
          <h1 className='text-center text-white'>Welcome To Secret Posting App</h1>
          <button type="button" className='btn btn-info btn4' onClick={handleGetStarted}>Get Started</button>
          <Login
            showModal={showLoginModal}
            handleCloseModal={() => setShowLoginModal(false)}
            handleSignupClick={() => {
              setShowLoginModal(false);
              setShowSignupModal(true);
            }}
          />
          <Signup
            showModal={showSignupModal}
            handleCloseModal={() => setShowSignupModal(false)}
            handleLoginClick={() => {
              setShowSignupModal(false);
              setShowLoginModal(true);
            }}
          />
        </div>
      )}
    </div>
  );
}
