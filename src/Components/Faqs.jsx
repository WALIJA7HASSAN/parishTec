import React, { useState } from "react";

const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState(1); 
  const faqs = [
    {
      id: 1,
      question: "What is Parish Tec?",
      answer:
        "Parish Tec is an upcoming financial technology startup platform focused on empowering justice-impacted individuals and their families by offering credit-building tools and financial support. Our goal is to help people rebuild credit and achieve financial independence.",
    },
    {
      id: 2,
      question: "How can I get early access to Parish Tec?",
      answer:
        "Simply sign up on our landing page! By joining our early access list, you'll be among the first to try Parish Tec when we launch and receive exclusive updates about our progress.",
    },
    {
      id: 3,
      question: "Who is Parish Tec designed for?",
      answer:
        "Parish Tec is designed to support justice-impacted individuals, their families, and reentry housing providers. Our mission is to provide accessible financial tools and resources tailored to those who face unique financial challenges.",
    },
    {
      id: 4,
      question: "When will Parish Tec be available?",
      answer:
        "We’re working hard to bring Parish Tec to life! While we don't have an exact launch date yet, signing up for early access ensures you're the first to know about our progress and release updates.",
    },
  ];

  const toggleFaq = (id) => {
    setActiveFaq((prevId) => (prevId === id ? null : id)); 
  };

  return (
    <div className="card-container faq-card-container">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="faq-container section"
      >
        <div className="faq-content">
          <div className="faq-header">
            <h3 data-aos="fade-up" data-aos-duration="1000">
              FAQ
            </h3>
            <p data-aos="fade-up" data-aos-duration="1000">
              If you didn’t find the answer you’re looking for, feel free to
              reach out to us at info@parishtec.com. Our team is happy to assist
              you!
            </p>
          </div>
          <div className="faqs" data-aos="fade-up" data-aos-duration="1000">
            {faqs.map((faq) => (
              <article
                key={faq.id}
                className={`faq-item ${
                  activeFaq === faq.id ? "faq-active-item" : ""
                }`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h4>{faq.question}</h4>
                  <div className="faq-icon">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div
                  className="faq-ans"
                  style={{
                    maxHeight: activeFaq === faq.id ? "1000px" : "0",
                    opacity: activeFaq === faq.id ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease, opacity 0.3s ease",
                  }}
                >
                  <p>&nbsp;</p>
                  <p>{faq.answer}</p>
                  <p>&nbsp;</p>

                </div>
                <div className="faq-hr"></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
