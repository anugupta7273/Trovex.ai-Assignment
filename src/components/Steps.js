import React from 'react';
import './Steps.css';

const Steps = () => {
  return (
    <section className="steps">
      <h2>How does it work?</h2>
      <div className="step step1">
        <div className="step-image">
          <img src="path/to/step1-image.jpg" alt="Step 1" />
        </div>
        <div className="step-content">
          <h3>Step 1</h3>
          <h4>Create</h4>
          <p>Create role-plays designed to simulate your common or most challenging customer interactions.</p>
        </div>
      </div>
      <div className="step step2">
        <div className="step-image">
          <img src="path/to/step2-image.jpg" alt="Step 2" />
        </div>
        <div className="step-content">
          <h3>Step 2</h3>
          <h4>Simulate</h4>
          <p>Assign role-play tasks to your reps so they can complete them at their convenience or your schedule.</p>
        </div>
      </div>
      <div className="step step3">
        <div className="step-image">
          <img src="path/to/step3-image.jpg" alt="Step 3" />
        </div>
        <div className="step-content">
          <h3>Step 3</h3>
          <h4>Review</h4>
          <p>Evaluate knowledge gaps, tonality, vocab, sentiment, and methodology adherence with ease using our intuitive interface.</p>
        </div>
      </div>
      <div className="step step4">
        <div className="step-image">
          <img src="path/to/step4-image.jpg" alt="Step 4" />
        </div>
        <div className="step-content">
          <h3>Step 4</h3>
          <h4>Instant Feedback</h4>
          <p>Accept the results or ask to re-attempt. Supplement AI evaluation with manager's feedback to help reps continuously improve.</p>
        </div>
      </div>
    </section>
  );
}

export default Steps;
