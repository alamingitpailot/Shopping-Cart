import React from 'react';
import logo from '../../images/Logo.svg';
import './header.css';

const Header = () => {
    return (
        <nav className='header'>
            <a href="/">
                <img src={logo} alt="" />
            </a>
            <div>
                <a href="/order">Order</a>
                <a href="/order Review">Order Review</a>
                <a href="/manage Inventory">Manage Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    )
}
export default Header;