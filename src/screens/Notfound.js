import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
export default function Notfound() {
    var navigate=useNavigate();
    return (
        <div>
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
                    </div>
                </nav>
    </div>
            <div className='d-flex flex-column justify-content-center align-items-center text-white' style={{height:'80vh'}}>
                <h2>404 Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <button type='button' className='btn btn-primary' onClick={()=>navigate('/')}>Go Home</button>
            </div>
        </div>
    )
}
