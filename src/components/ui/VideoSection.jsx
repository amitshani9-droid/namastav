import React, { useState } from 'react';
import { Play } from 'lucide-react';
import './VideoSection.css';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <section className="video-section animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="video-container glass">
                <div className="video-header">
                    <h2>רגע של נשימה</h2>
                    <p>הצצה לקסם שקורה במפגשים שלנו</p>
                </div>

                <div className="video-wrapper">
                    {!isPlaying ? (
                        <div className="video-thumbnail-container" onClick={handlePlay}>
                            <img
                                src="/video_thumbnail.png"
                                alt="ילדים מתרגלים יוגה - סרטון הדרכה"
                                className="video-thumbnail"
                            />
                            <div className="play-button-overlay">
                                <button className="play-button" aria-label="נגן סרטון">
                                    <Play className="play-icon" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="video-placeholder-active">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                                title="Namastav Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
