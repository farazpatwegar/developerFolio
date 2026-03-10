import React, { useState, useContext, useEffect } from "react";
import "./Contact.scss";
import ContactCard from "./ContactCard";
import { contactSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Password for accessing contacts
  const CONTACT_PASSWORD = "8484948784"; // You can change this

  useEffect(() => {
    if (isAuthenticated && contactSection.contacts) {
      setFilteredContacts(contactSection.contacts);
    }
  }, [isAuthenticated]);

  if (!contactSection || !contactSection.display) {
    return null;
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === CONTACT_PASSWORD) {
      setIsAuthenticated(true);
      setPassword("");
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSearchQuery("");
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = contactSection.contacts.filter(contact => 
      contact.name.toLowerCase().includes(query) || 
      (contact.number && contact.number.toLowerCase().includes(query))
    );
    setFilteredContacts(filtered);
  };

  return (
    <div className="main" id="contact">
      <div className="contact-header">
        {/* <h1 className="contact-header-text">{contactSection.title}</h1> */}
        <p
          className={
            isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"
          }
        >
          {contactSection.subtitle}
        </p>
      </div>

      {!isAuthenticated ? (
        /* Password Screen - Shown when not authenticated */
        <div className="password-screen">
          <div className={`password-container ${isDark ? "dark-mode" : ""}`}>
            <div className="lock-icon-large">🔒</div>
            <h2 className="password-title">Contacts Locked</h2>
            <p className="password-subtitle">Enter password to access your contacts</p>
            
            <form onSubmit={handlePasswordSubmit} className="password-form">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={`password-input ${isDark ? "dark-mode" : ""}`}
                autoFocus
              />
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="unlock-button">
                <span className="unlock-icon">🔓</span>
                Unlock Contacts
              </button>
            </form>
            
            <p className="password-hint">Hint: The password is "contact123"</p>
          </div>
        </div>
      ) : (
        /* Contacts Screen - Shown after authentication */
        <div className="contacts-screen">
          {/* Search Bar */}
          <div className="search-container">
            <div className={`search-bar ${isDark ? "dark-mode" : ""}`}>
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search contacts by name or number..."
                value={searchQuery}
                onChange={handleSearch}
                className="search-input"
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery("")}>
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Contacts List */}
          <div className="contacts-list">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact, i) => (
                <ContactCard
                  key={i}
                  isDark={isDark}
                  contact={contact}
                />
              ))
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <p className="no-results-title">No contacts found</p>
                <p className="no-results-subtitle">Try searching with a different name or number</p>
              </div>
            )}
          </div>

          {/* Contact Count */}
          <div className="contact-count">
            {filteredContacts.length} {filteredContacts.length === 1 ? 'contact' : 'contacts'} found
          </div>

          {/* Logout Button */}
          <div className="logout-container">
            <button
              onClick={handleLogout}
              className="logout-btn"
            >
              <span className="logout-icon">🔒</span>
              Lock Contacts
            </button>
          </div>
        </div>
      )}
    </div>
  );
}