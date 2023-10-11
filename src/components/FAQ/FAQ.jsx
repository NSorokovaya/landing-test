import React, { useState } from 'react';

import style from './FAQ.module.scss';
import Title from 'components/Title/Title';
const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqData = [
    {
      question: 'How do I request a quote for a project?',
      answer:
        'You can request a quote by filling out the contact form on our website.',
    },
    {
      question: 'How long does it  take to develop a website?',
      answer:
        'It depends on the scope and complexity of the project. We usually determine timelines on an individual basis.',
    },
    {
      question:
        'Do you provide technical support after the website is launched?',
      answer:
        'Yes, we offer technical support and can assist with any technical issues.',
    },
    {
      question:
        'Is it possible to request an audit of an existing website to improve its effectiveness?',
      answer:
        'Yes, we offer website audit services and provide recommendations for optimization.',
    },
  ];
  const handleQuestionClick = index => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };
  return (
    <div className={style.faq} id="faq">
      <Title text="FAQ" />
      {faqData.map((item, index) => (
        <div className={style.faqItem} key={index}>
          <h3
            className={style.faqQuestion}
            onClick={() => handleQuestionClick(index)}
          >
            {item.question}
          </h3>
          <div className={style.faqAnswerDiv}>
            {selectedQuestion === index && (
              <p className={style.faqAnswer}>{item.answer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
