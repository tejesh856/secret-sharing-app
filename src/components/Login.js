import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login({ showModal, handleCloseModal, handleSignupClick }) {
    const [credentials, setcredentials] = useState({ email: '', password: '' });
    var navigate = useNavigate();
    async function handlesubmit(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/loginuser',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password: credentials.password, email: credentials.email })
            }

        )
        const json = await response.json();
        //console.log(json);
        //console.log(json.errors[0].msg);
        localStorage.setItem('success', json.success);
        if (json.success) {
            localStorage.setItem('useremail', credentials.email);
            localStorage.setItem('authtoken', json.authtoken);
            handleCloseModal(e);
            alert('Login successful');
            navigate('/');
            window.location.reload();
        } else {
            alert(json.errors[0].msg);
        }

    }
    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <div className={`modal ${showModal ? 'show' : 'fade'} wraps`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h5 className="modal-title w-100 tcolor">Welcome Back, Login</h5>
                            <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handlesubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required={true} autoComplete="off" name='email' value={credentials.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" required={true} autoComplete="off" name='password' value={credentials.password} onChange={handleChange} />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-success">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className='tcolor d-flex justify-content-center mb-5'>
                            <span>Don't have an account?<button className='btn btn-primary btn-2 ms-2' onClick={handleSignupClick}>Sign Up</button></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
