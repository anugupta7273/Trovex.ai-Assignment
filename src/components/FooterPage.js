
import React from 'react';
import './FooterPage.css'; // Import your CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>Experience the power of AI-driven sales training</h1>
        <p>Ready to revolutionize your sales team’s performance?</p>
        <button className="demo-button">Book a Demo</button>
      </header>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span>Troves.ai</span>
          </div>
          <nav className="footer-nav">
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact Us</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>©2023 Troves.ai, Inc. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="#instagram"><i className="fa fa-instagram"></i></a>
            <a href="#linkedin"><i className="fa fa-linkedin"></i></a>
            <a href="#twitter"><i className="fa fa-twitter"></i></a>
            <a href="#facebook"><i className="fa fa-facebook"></i></a>
            <a href="#github"><i className="fa fa-github"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;