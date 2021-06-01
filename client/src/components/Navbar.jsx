import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../font/flaticon.css'
const NavBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const cloaseMobileMenu = () => setClick(false)
    return (<>
        <div className="navbar-container">
            <Link to='/' className="navbar-logo">
                DIVO_FRED <i className="flaticon-reload"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "flaticon-chat" : "flaticon-monitor"} />
            </div>
            <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={cloaseMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/services" className="nav-links" onClick={cloaseMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-links" onClick={cloaseMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/sign-up" className="nav-links-mobile" onClick={cloaseMobileMenu}>
                        Sign UP
                    </Link>
                </li>
            </ul>
        </div>
    </>);
}

export default NavBar;