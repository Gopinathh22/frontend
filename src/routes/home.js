import React, { useState } from "react";
import cargoBike from "../img/cargo-bike.png";
import local from "../img/local.png";
import salad from "../img/salad.png";
import hourglass from "../img/hourglass.png";
import microgreens from "../img/microgreens.jpg";
import nooaHead from "../img/nooaHead.jpeg";
import gopiHead from "../img/gopiHead.jpeg";

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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section>
        <div className="grid grid-cols-4 gap-1 mb-16">
          <div className="whiteBox flex flex-col items-center text-center">
            <img src={hourglass} alt="Fresh" className="icon" />
            <span className="iconText">Fresh</span>
          </div>
          <div className="whiteBox flex flex-col items-center text-center">
            <img src={local} alt="Hyperlocality" className="icon" />
            <span className="iconText">Hyperlocality</span>
          </div>
          <div className="whiteBox flex flex-col items-center text-center">
            <img src={salad} alt="Nutrition" className="icon" />
            <span className="iconText">Nutrition</span>
          </div>
          <div className="whiteBox flex flex-col items-center text-center">
            <img src={cargoBike} alt="Sustainability" className="icon" />
            <span className="iconText">Sustainability</span>
          </div>
        </div>
      </section>
      <section id="shop" className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
      </section>

      <section className="about-us-section py-8">
        <div className="container mx-auto text-center">
          <h2 className="section-title text-3xl font-semibold mb-6">
            About Us
          </h2>

          <div className="team-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="team-member">
              <img
                src={gopiHead}
                alt="Person 1"
                className="member-photo mb-4"
              />
              <h3 className="member-name text-xl font-semibold">
                Gopinath HARIHARASUDHAN
              </h3>
              <p className="member-title text-md mb-2">Co-Founder & CEO</p>
              <p className="member-info">
                Jane has over 10 years of experience in the industry. She's
                passionate about sustainable business and loves to innovate.
              </p>
            </div>

            <div className="team-member">
              <img
                src={nooaHead}
                alt="Person 2"
                className="member-photo mb-4"
              />
              <h3 className="member-name text-xl font-semibold">Nooa ADAMS</h3>
              <p className="member-title text-md mb-2">Co-Founder & CTO</p>
              <p className="member-info">
                John, a tech enthusiast and visionary, has been instrumental in
                shaping the company's technological direction.
              </p>
            </div>
          </div>
          <br></br>
          <a
            href="#about"
            className="buttonContact mt-4 inline-block text-white px-6 py-2 rounded-full hover:bg-green-700 transition ease-in-out duration-150"
          >
            Learn more about us
          </a>
        </div>
      </section>

      <section className="faq-container mx-auto p-6 font-sans">
        <div className="mb-8">
          <h2 className="faq-title text-3xl font-semibold mb-4">F.A.Q.</h2>
          <div className="faq-items mt-2">
            {faqItems.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3
                  className="faq-question font-semibold text-lg cursor-pointer hover:text-gray-700"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </h3>
                <p
                  className={`faq-answer mt-2 text-gray-600 ${
                    faq.open ? "block" : "hidden"
                  } transition-all duration-300`}
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
