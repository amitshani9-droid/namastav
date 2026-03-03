import React from 'react';
import ProductCard from './ProductCard.jsx';
import './ProductGrid.css';

const products = [
    {
        id: 1,
        title: 'ערכת קלפי הנשימה שלי',
        description: '20 קלפי מיינדפולנס מאוירים להפליא, שעוזרים לילדים לווסת את עצמם דרך נשימה ומשחק.',
        price: 99,
        image: '/mindfulness_cards.png',
        badge: 'הנמכר ביותר'
    },
    {
        id: 2,
        title: 'סדנת הוידאו: "ענן הקסמים"',
        description: 'מנוי דיגיטלי לצוותי חינוך: סדרת סרטוני יוגה קצרים ומעשיים לשילוב בשגרת הגן.',
        price: 250,
        image: '/toddler_yoga.png',
        badge: 'מומלץ לגננות'
    }
];

const ProductGrid = () => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
