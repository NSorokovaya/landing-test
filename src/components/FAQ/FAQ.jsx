import React from 'react';

import style from './FAQ.module.scss'
const FAQ = () => {
      const faqData = [
      {
      question: 'How do I request a quote for a project?',
      answer: 'You can request a quote by filling out the contact form on our website.'
    },
    {
      question: 'How long does it  take to develop a website?',
      answer: 'It depends on the scope and complexity of the project. We usually determine timelines on an individual basis.'
    },
    {
      question: 'Do you provide technical support after the website is launched?',
      answer: 'Yes, we offer technical support and can assist with any technical issues.'
        },
        {
      question: 'Is it possible to request an audit of an existing website to improve its effectiveness?',
      answer: 'Yes, we offer website audit services and provide recommendations for optimization.'
    },
  ];

      return (
            <div className={style.faq}>
      <h2>FAQ</h2>
      {faqData.map((item, index) => (
        <div className="faq__item" key={index}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;