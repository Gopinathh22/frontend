import React, { useState } from "react";

const faqs = [
  {
    question: "What are microgreens?",
    answer:
      "Microgreens are young plants (seedlings) that are eaten before they are fully mature. They include all kinds of varieties such as veggies, herbs, and legumes.",
  },
  {
    question: "How can I use microgreens in cooking?",
    answer: "Placeholder answer for cooking with microgreens.",
  },
  {
    question: "What are the different types of microgreens?",
    answer: "Placeholder answer for different types of microgreens.",
  },
  {
    question: "How long does the shipping take?",
    answer: "Placeholder answer for shipping duration.",
  },
  {
    question: "How to initiate the refund process?",
    answer: "Placeholder answer for initiating a refund.",
  },
];
// Accordion functionality for FAQ

const Home = () => {
  const [faqItems, setFaqItems] = useState(
    faqs.map((faq) => ({ ...faq, open: false }))
  );

  const toggleFAQ = (index) => {
    setFaqItems(
      faqItems.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open };
        } else {
          return { ...faq, open: false };
        }
      })
    );
  };

  return (
    <div>
      <header className="bg-gray-100 p-8 text-center relative overflow-hidden">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-2">
          VERDES
        </h1>
        <p className="max-w-2xl mx-auto">
          We are a small business in Vienna that grows microgreens.
        </p>
        <a
          href="#shop"
          className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700 transition ease-in-out duration-150"
        >
          Browse our shop
        </a>
      </header>

      <section id="shop" className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
      </section>

      <section className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold text-center">Customer reviews</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"></div>
      </section>

      <section className="container mx-auto p-6 font-sans">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">F.A.Q.</h2>
          <div className="mt-2">
            {faqItems.map((faq, index) => (
              <div key={index}>
                <h3
                  className="accordion-header mt-4 font-semibold"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </h3>
                <p
                  className={`accordion-content mt-2 ${
                    faq.open ? "" : "hidden"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-16">
          {/** <!-- Value proposition items -->**/}
          <div className="flex flex-col items-center text-center">
            {/**  <img src="https://via.placeholder.com/80" alt="Fresh"> -->**/}
            <span className="mt-2">Fresh</span>
          </div>
          <div className="flex flex-col items-center text-center">
            {/** <img src="https://via.placeholder.com/80" alt="Hyperlocality"> -->**/}
            <span className="mt-2">Hyperlocality</span>
          </div>
          <div className="flex flex-col items-center text-center">
            {/**<img src="https://via.placeholder.com/80" alt="Nutrition"> -->**/}
            <span className="mt-2">Nutrition</span>
          </div>
          <div className="flex flex-col items-center text-center">
            {/** <img src="https://via.placeholder.com/80" alt="Sustainability"> -->**/}
            <span className="mt-2">Sustainability</span>
          </div>
        </div>
      </section>

      <div className="bg-green-600 text-white p-8 text-center">
        <p>Use promo code "SAVE10" for $10 off your purchase of $50 or more</p>
        <a
          href="#"
          className="mt-4 inline-block bg-white text-green-600 px-6 py-2 rounded-full hover:bg-gray-200 transition ease-in-out duration-150"
        >
          Shop Now
        </a>
      </div>
      <footer className="text-center p-4">
        <p>&copy; 2023 Verdes. All rights reserved.</p>
      </footer>

      <script></script>
    </div>
  );
};

export default Home;
