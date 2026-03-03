import React from 'react';
import WhatsAppCTA from '../components/ui/WhatsAppCTA.jsx';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-content animate-fade-in">
                    <h1>עוגן של רוגע ביום עמוס</h1>
                    <p className="hero-subtitle">
                        יוגה, מיינדפולנס ותנועה מעצימה לפעוטות וילדי גן.
                        כלים התפתחותיים שמביאים שקט, ריכוז ושמחה.
                    </p>
                    <div className="hero-actions">
                        <WhatsAppCTA message="היי סתיו, אשמח לשמוע על הפעלות יוגה ומיינדפולנס לגן שלי!" />
                    </div>
                </div>
                <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <img
                        src="/toddler_yoga.png"
                        alt="Toddler practicing yoga in a serene environment"
                        className="hero-image animate-float"
                    />
                    <div className="hero-image-blur-bg"></div>
                </div>
            </section>

            <section className="about-section animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="about-container glass">
                    <div className="about-text">
                        <h2>הגישה של נמסתיו</h2>
                        <p>
                            בעולם הומה, ילדים זקוקים יותר מתמיד לכלים שיעזרו להם פשוט לנשום.
                            דרך תנועה רכה במשחקיות, התמקדות בנשימה, והרפיה מודרכת,
                            אני מביאה איתי אל הגן ומרחבי הלמידה פילוסופיה של רוגע עוטף.
                        </p>
                        <p className="highlight-text">
                            המטרה שלי: לעזור לילדים לבנות ביטחון, לווסת רגשות וליהנות מהקסם שברגע הזה.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card">
                            <span className="stat-number">200+</span>
                            <span className="stat-label">שעות הדרכה בגנים</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">רוגע ושמחה</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="ambient-shape shape-1"></div>

            {/* Floating global CTA */}
            <WhatsAppCTA variant="floating" text="דברו איתי" message="היי סתיו!" />
        </div>
    );
};

export default Home;
