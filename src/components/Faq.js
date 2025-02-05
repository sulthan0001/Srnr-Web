import React, { useState } from 'react';
import '../css/Faq.css';
import { Link } from 'react-router-dom';

const Faqq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'What services does your company offers?', answer: 'We provide Technology Consulting, Software Development, Innovative Solutions, IT Support & Maintenance.' },
    { question: 'How many employees does your company have?', answer: 'We have a dynamic team of over 200 employees.' },
    { question: 'Who are the key members of the main management team?', answer: 'Our management team consists of experienced professionals in technology and business leadership.' },
    { question: 'What IT solutions does your company offer?', answer: 'We offer cloud services, cybersecurity solutions, and custom software development.' },
    { question: 'How can I contact SRNR IT Solutions?', answer: 'You can contact us via email at srnritsolutions@gmail.com or call us at +91 9494751795.' },
    { question: 'How can I apply for a job at SRNR IT Solutions?', answer: 'Visit our careers page or send your resume to srnritsolutions@gmail.com.' },
    { question: 'Can we partner with SRNR IT Solutions for a project?', answer: 'Yes, please reach out to us with your project details to discuss further.' },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
    <div className="text"> <p style={{marginLeft:"10px"}}><Link to="/home" className='cor'> Home / </Link>FAQ's</p></div>

    <div className="faqs-container">
      <h1 className="faqs-title">FAQ's</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question">
            <span>{index + 1}. {faq.question}</span>
            <button onClick={() => toggleFAQ(index)}>
              {activeIndex === index ? '--' : '+'}
            </button>
          </div>
          {activeIndex === index && <div className="faq-answer text-primary">{faq.answer}</div>}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Faqq;
