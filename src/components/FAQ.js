import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const faqData = [
    {
      question: "What is AI driven roleplay simulation?",
      answer: "The app utilizes AI technology to provide real-time feedback, identify strengths, and pinpoint areas for improvement. Sales representatives receive personalized guidance and coaching, allowing them to refine their sales techniques and achieve better results.",
    },
    {
        question: "How does Trovex Provide real time feedback and guidance?",
        answer: "The app utilizes AI technologies to provide real time feedback,Identitity, strength, and pinpoint areas for improvement. ",
      },
    {
      question: "How does Trovex help track and measure sales team performance?",
      answer: "Trovex provides detailed analytics and reports that help track the performance of sales teams. It identifies key metrics and areas for improvement, ensuring that the team is meeting their targets and continuously improving.",
    },
    {
      question: "How does Trovex reduce time to productivity for new hires?",
      answer: "With its AI-driven simulations and personalized feedback, Trovex helps new hires quickly adapt to their roles and improve their skills. This reduces the time it takes for new employees to become productive members of the sales team.",
    },
    {
      question: "Can you assist us in developing the initial AI simulations?",
      answer: "Yes, Trovex provides assistance in developing initial AI simulations tailored to your specific needs. Our team of experts will work with you to create effective and realistic simulations that meet your training requirements.",
    },
  ];

  return (
    <section className="faq">
      <h2>FAQ</h2>
      <p>Questions you may have</p>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${open === index ? 'open' : ''}`}
          onClick={() => toggle(index)}
        >
          <div className="faq-question">
            {item.question}
            <span className="faq-toggle">{open === index ? '-' : '+'}</span>
          </div>
          {open === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
