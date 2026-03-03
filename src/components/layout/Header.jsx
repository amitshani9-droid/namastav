import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header glass animate-fade-in">
            <div className="header-container">
                <Link to="/" className="brand-logo">
                    נמסתיו
                </Link>
                <nav className="header-nav">
                    <Link to="/">בית</Link>
                    <Link to="/shop">חנות</Link>
                    <Link to="/gallery">גלריה</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
