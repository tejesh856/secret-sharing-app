import React from 'react';
import Header from '../components/Header';
import Posting from '../components/Posting';
export default function Home({ isLoggedIn, handleLogout }) {
  return (
    <div>
      <Header handleLogout={handleLogout} />
      <Posting isLoggedIn={isLoggedIn} />
    </div>
  )
}
