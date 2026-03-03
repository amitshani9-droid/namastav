import React from 'react';
import MasonryGrid from '../components/gallery/MasonryGrid.jsx';
import WhatsAppCTA from '../components/ui/WhatsAppCTA.jsx';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="gallery-page">
            <div className="gallery-header animate-fade-in">
                <h1>רגעים של קסם</h1>
                <p className="gallery-subtitle">
                    הצצה לעשייה שלנו בגנים - נשימות, תנועה וחיוכים של רוגע.
                </p>
            </div>

            <div className="gallery-content">
                <MasonryGrid />
            </div>

            <div className="gallery-cta-section animate-fade-in">
                <h3>רוצים להכניס את הרוגע הזה גם לגן שלכם?</h3>
                <WhatsAppCTA message="היי סתיו, ראיתי את הגלריה המהממת. אשמח לשמוע פרטים על הפעילות בגנים!" />
            </div>

            <div className="ambient-shape shape-3"></div>
        </div>
    );
};

export default Gallery;
