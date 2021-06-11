import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../Utility/Configration';

function Navigation() {

    const logoutHnadler=(e)=>{
        e.preventDefault();
        auth.signOut()
        .then(user => localStorage.removeItem('user'))
        .catch(err=> console.log(err));
    }

    return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" to='#'>Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" to='#'>Home</a>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Authantication</NavLink>
                    </li>
                    <form onSubmit={logoutHnadler} className="form-inline me-2">
                        <button className="btn btn-success" type="submit">LogOut</button>
                    </form>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navigation;
