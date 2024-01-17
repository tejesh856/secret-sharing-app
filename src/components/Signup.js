import React, { useState } from 'react';
export default function Signup({ showModal, handleCloseModal, handleLoginClick }) {
    const [credentials, setcredentials] = useState({ username: '', password: '', email: '' });
    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://secret-sharing-api.vercel.app/api/createuser',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: credentials.username, password: credentials.password, email: credentials.email })
            }

        )
        const json = await response.json()
        //console.log(json)

        if (json.success) {
            alert('user created');
            handleLoginClick(e);
        }
        else {
            alert(json.errors[0].msg);
        }

    }
    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className={`modal ${showModal ? 'show' : 'fade'} wraps`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h5 className="modal-title w-100 tcolor">New User, Sign Up</h5>
                        <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handlesubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" name='username' aria-describedby="userHelp" placeholder="Enter Username" required={true} value={credentials.username} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emails" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="emails" aria-describedby="emailHelp" name='email' placeholder="Enter email" required={true} value={credentials.emaill} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwords" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwords" placeholder="Password" name='password' required={true} value={credentials.password} onChange={handleChange} />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary btn2">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div className='tcolor d-flex justify-content-center mb-5'>
                        <span>Already have an account?<button className='btn btn-success btn-1 ms-2' onClick={handleLoginClick}>Log In</button></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
