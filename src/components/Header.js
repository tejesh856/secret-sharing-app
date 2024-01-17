import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Login from './Login';
import Signup from './Signup';
export default function Header({ handleLogout }) {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('login');
    const handleLoginClick = (e) => {
        e.preventDefault();
        setModalType('login');
        setShowModal(true);
    };

    const handleSignupClick = (e) => {
        e.preventDefault();
        setModalType('signup');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };    
    /*const handleLogoutClick=(e)=>{
        localStorage.removeItem('authtoken');
        localStorage.removeItem('success');
        localStorage.removeItem('useremail');
        handleLoginClick(e);
    }*/
    return (
        <div className='w-100 h-100'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logo}
                            width="100"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        
                        {!localStorage.getItem('authtoken') ? <ul className="navbar-nav me-5">
                            <li className="nav-item me-2 lit">
                                <button className="btn btn-outline-success btn1" onClick={handleLoginClick}>
                                    Login
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-primary btn2" onClick={handleSignupClick}>
                                    Signup
                                </button>
                            </li>
                        </ul> : <ul className="navbar-nav me-5">
                            <li className="nav-item me-2 lit">
                                <button className="btn btn-outline-danger btn3" onClick={() => handleLogout()}>
                                    Logout
                                </button>
                            </li>
                        </ul>}
                    </div>
                </div>
                <Login
                    showModal={showModal && modalType === 'login'}
                    handleCloseModal={handleCloseModal}
                    handleSignupClick={handleSignupClick}
                />
                <Signup
                    showModal={showModal && modalType === 'signup'}
                    handleCloseModal={handleCloseModal}
                    handleLoginClick={handleLoginClick}
                />
            </nav>
        </div>
    );
}
