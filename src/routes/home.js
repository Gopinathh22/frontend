import React, { useState } from "react";
import cargoBike from "../img/cargo-bike.png";
import local from "../img/local.png";
import salad from "../img/salad.png";
import hourglass from "../img/hourglass.png";
import microgreens from "../img/microgreens.jpg";

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
      <div className="bg-gray-100 flex flex-row items-center">
        <div className="p-8 text-center">
          <header className="opener bg-gray-100 relative overflow-hidden">
            <h1 className="mainText text-6xl font-bold text-transparent bg-clip-text mb-2">
              VERDES
            </h1>
            <h2 className="text-2xl font-semibold mb-4">SERVAS AT VERDES!</h2>
            <p className="max-w-2xl mx-auto">
              We are a small business based in Vienna that produces and sells
              microgreens. Microgreens are small sprouts, infant versions of
              known vegetable types like broccoli and arugula. They can be used
              in a variety of ways, for example on bread, in a salad or as a
              deluxe garnish.
            </p>

            <a
              href="#shop"
              className="buttonContact mt-4 inline-block text-white px-6 py-2 rounded-full hover:bg-green-700 transition ease-in-out duration-150"
            >
              Contact us
            </a>
          </header>
        </div>
        <img
          src={microgreens}
          alt="Microgreens"
          className="rounded-lg flex-none"
          style={{ maxWidth: "50%" }}
        ></img>
      </div>
      <br></br>

      <div className="grid grid-cols-4 gap-1 mb-16">
        <div className="whiteBox flex flex-col items-center text-center">
          <img
            src={hourglass}
            alt="Fresh"
            className="icon w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
          ></img>
          <span className="mt-2">Fresh</span>
        </div>
        <div className="whiteBox flex flex-col items-center text-center">
          <img
            className="icon w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            src={local}
            alt="Hyperlocality"
          ></img>
          <span className="subtext mt-2">Hyperlocality</span>
        </div>
        <div className="whiteBox flex flex-col items-center text-center">
          <img
            className="icon w-20 h-20 sm:w-22 sm:h-24 md:w-28 md:h-32"
            src={salad}
            alt="Nutrition"
          ></img>
          <span className="mt-2">Nutrition</span>
        </div>
        <div className="whiteBox flex flex-col items-center text-center">
          <img
            className="icon w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            src={cargoBike}
            alt="Sustainability"
          ></img>
          <span className="mt-2">Sustainability</span>
        </div>
      </div>
      <section id="shop" className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
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
      </section>

      <footer className="text-center p-4">
        <p>&copy; 2023 Verdes. All rights reserved.</p>
        <br></br>
        <a
          href="https://www.flaticon.com/free-icons/cargo-bike"
          title="cargo bike icons"
          font-size="8px"
        >
          Icons from Freepik - Flaticon
        </a>
      </footer>
      <script></script>
    </div>
  );
};

export default Home;
