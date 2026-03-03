import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer animate-fade-in">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>נמסתיו</h3>
                    <p>יוגה ומיינדפולנס לפעוטות שמשנים את האווירה בגן.</p>
                </div>
                <div className="footer-links">
                    <h4>ניווט</h4>
                    <Link to="/">בית</Link>
                    <Link to="/shop">חנות דיגיטלית</Link>
                    <Link to="/gallery">הגלריה שלנו</Link>
                </div>
                <div className="footer-contact">
                    <h4>צרו קשר</h4>
                    <p>info@namastav.co.il</p>
                    <p>פנייה בוואטסאפ מועדפת.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Namastav. כל הזכויות שמורות.</p>
            </div>
        </footer>
    );
};

export default Footer;
