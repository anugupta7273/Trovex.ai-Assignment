import React from 'react';
import './WhyTrovex.css';

const WhyTrovex = () => {
  return (
    <section className="why-trovex">
      <h2>Why Trovex?</h2>
      <p>Flip to find out</p>
      <div className="features">
        <div className="feature">
          <h3>Encourage Mastery</h3>
        </div>
        <div className="feature">
          <h3>Gain Actionable Insights</h3>
        </div>
        <div className="feature">
          <h3>Inspire Growth</h3>
        </div>
      </div>
      <h2>Don’t just take our word for it!</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            "Trovex has revolutionized our sales training. Its AI-powered simulator, realistic scenarios, and personalized feedback have boosted our skills, confidence, and effectiveness. Highly recommended for noticeable performance improvements and increased revenue!"
          </p>
          <h4>Avinash Saurabh</h4>
          <p>Serial Entrepreneur</p>
        </div>
        <div className="testimonial">
          <p>
            "Trovex has transformed our sales team's performance with its AI-based simulator, realistic scenarios, and valuable feedback. Its customizable platform integrates seamlessly, providing game-changing insights and boosting our team's confidence and success."
          </p>
          <h4>Amar Krishna</h4>
          <p>Founder, Matrize.ai</p>
        </div>
      </div>
      <div className="trusted-brands">
        <p>Trusted by Top Brands</p>
        <div className="brands">
          <img src="path/to/talowiz-logo.png" alt="Talowiz" />
          <img src="path/to/matrice-logo.png" alt="Matrice" />
          <img src="path/to/rentomojo-logo.png" alt="Rentomojo" />
          <img src="path/to/lightbulb-logo.png" alt="Lightbulb" />
          <img src="path/to/onejam-logo.png" alt="Onejam" />
          <img src="path/to/fareye-logo.png" alt="FarEye" />
        </div>
      </div>
    </section>
  );
}

export default WhyTrovex;
