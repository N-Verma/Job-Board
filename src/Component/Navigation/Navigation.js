import React from 'react'


const Navigations = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand">OST</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Sign Up</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


export default Navigations;