import React from "react";
import "./ContactCard.scss";

export default function ContactCard({ contact, isDark }) {
  if (!contact) return null;

  // Get initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Generate consistent color based on name
  const getAvatarColor = (name) => {
    const colors = [
      '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', 
      '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', 
      '#8BC34A', '#CDDC39', '#FFC107', '#FF9800', '#FF5722'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // Format phone number for display
  const formatNumber = (number) => {
    if (!number) return "No number available";
    // Remove any non-digit characters for display
    const cleaned = number.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`;
    }
    return number;
  };

  return (
    <div className={`contact-card ${isDark ? "dark-mode" : ""}`}>
      <div className="contact-content">
        <div 
          className="contact-avatar" 
          style={{ backgroundColor: getAvatarColor(contact.name) }}
        >
          {getInitials(contact.name)}
        </div>
        <div className="contact-details">
          <div className="contact-name">{contact.name}</div>
          <div className="contact-number">
            {formatNumber(contact.number)}
          </div>
        </div>
        <div className="contact-call-button">
          <span className="call-icon">📞</span>
        </div>
      </div>
    </div>
  );
}