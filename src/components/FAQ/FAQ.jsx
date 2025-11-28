import React, { useState } from 'react';
import './FAQ.css';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <div className="faq-question">
                <h3>{question}</h3>
                <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What programs do you offer?",
            answer: "We offer a wide range of programs including Undergraduate, Postgraduate, and Doctoral degrees in various fields such as Science, Arts, and Commerce."
        },
        {
            question: "How can I apply for admission?",
            answer: "You can apply online through our website. Navigate to the Admissions section and fill out the application form."
        },
        {
            question: "Are there scholarship opportunities?",
            answer: "Yes, we offer merit-based and need-based scholarships. Please check our Financial Aid section for more details."
        },
        {
            question: "Do you provide campus accommodation?",
            answer: "Yes, we have separate hostels for boys and girls with all modern amenities."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <h2 className="title">Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={activeIndex === index}
                        onClick={() => toggleFAQ(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
