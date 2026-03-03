import React from 'react';
import ProductGrid from '../components/shop/ProductGrid.jsx';
import './Shop.css';

const Shop = () => {
    return (
        <div className="shop-page">
            <div className="shop-header animate-fade-in">
                <h1>בוטיק נמסתיו</h1>
                <p className="shop-subtitle">
                    כלים דיגיטליים ופיזיים שנוצרו באהבה כדי להביא את קסם המיינדפולנס אליכם לגן ולבית.
                </p>
            </div>

            <div className="shop-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <ProductGrid />
            </div>

            <div className="ambient-shape shape-2"></div>
        </div>
    );
};

export default Shop;
