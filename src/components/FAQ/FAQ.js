import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text.",
    },
    {
      question: "How do I apply?",
      answer:
        "Simply head to our registration portal. Convince us why you are amazing and we will hopefully see you in Bremen in November! We’ll accept applicants on a rolling basis.",
    },
    {
      question: "What is the application process like?",
      answer:
        "We are looking for a diverse group of hackers at our hackathon. For this we will ask you a couple of questions in the application. That said, we are looking for anyone who is creative or just simply passionate for technology.",
    },
  ];

  return (
    <div>
      {faqData.map((faq, index) => (
        <div key={index}>
          <div
            className={`faq-question ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleAccordionClick(index)}
          >
            {faq.question}
          </div>
          {index === activeIndex && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
