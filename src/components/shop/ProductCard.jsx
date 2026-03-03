import React from 'react';
import WhatsAppCTA from '../ui/WhatsAppCTA.jsx';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card glass animate-fade-in">
            <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
                {product.badge && <span className="product-badge">{product.badge}</span>}
            </div>
            <div className="product-info">
                <h3>{product.title}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                    <span className="product-price">₪{product.price}</span>
                    <WhatsAppCTA
                        text="לרכישה"
                        message={`היי סתיו, הגעתי מהאתר. אשמח לרכוש את המוצר: ${product.title}`}
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
