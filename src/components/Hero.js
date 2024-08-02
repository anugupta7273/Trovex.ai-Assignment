import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Master the art of sales<br />
          with realistic AI<br />
          role-play
        </h1>
        <p>
          Watch your sales soar to new heights with our AI-driven virtual pitch partner. 
          Build confident and skilled sales teams with realistic and immersive learning.
        </p>
        <div className="hero-buttons">
          <button className="btn demo">Book a Demo</button>
          <button className="btn watch">Watch Demo</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
