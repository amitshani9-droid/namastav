import React from 'react';
import './WhatsAppCTA.css';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = ({
    text = "דברו איתי בוואטסאפ",
    message = "היי סתיו, הגעתי מהאתר ואשמח לפרטים נוספים!",
    phoneNumber = "972500000000",
    variant = 'primary',
    id
}) => {
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    const buttonId = id || `wa-cta-${variant}-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <a
            id={buttonId}
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`wa-cta wa-cta-${variant} animate-fade-in`}
            aria-label={`שלח הודעת וואטסאפ: ${text}`}
        >
            <MessageCircle className="wa-icon" aria-hidden="true" />
            <span>{text}</span>
        </a>
    );
};

export default WhatsAppCTA;
