// App.js
import './App.css';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './screens/Home';
import Notfound from './screens/Notfound';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('authtoken') !== null);

  const handleLogout = () => {
    localStorage.removeItem('authtoken');
    localStorage.removeItem('success');
    localStorage.removeItem('useremail');
    setIsLoggedIn(false);
  };
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home handleLogout={handleLogout} isLoggedIn={isLoggedIn}  />} />
        <Route path='*' element={<Notfound />} />        
      </Routes>
    </Router>
  );
}

export default App;
