import React from 'react';
import './MasonryGrid.css';

const MOCK_IMAGES = [
    { id: 1, src: '/toddler_yoga.png', alt: 'Yoga session', className: 'masonry-large' },
    { id: 2, src: '/toddler_yoga.png', alt: 'Mindfulness moment', className: 'masonry-small' },
    { id: 3, src: '/mindfulness_cards.png', alt: 'Breathing exercises', className: 'masonry-medium' },
    { id: 4, src: '/mindfulness_cards.png', alt: 'Cards closeup', className: 'masonry-small' },
    { id: 5, src: '/toddler_yoga.png', alt: 'Group fun', className: 'masonry-medium' },
    // Reusing the generated high-quality assets to build the aesthetic masonry grid layout
];

const MasonryGrid = () => {
    return (
        <div className="masonry-grid-container">
            {MOCK_IMAGES.map((img, index) => (
                <div
                    key={img.id}
                    className={`masonry-item ${img.className} glass animate-fade-in`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                >
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <div className="masonry-overlay">
                        <span>{img.alt}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MasonryGrid;
