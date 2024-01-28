import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import cargoBike from "../img/cargo-bike.png";
import local from "../img/local.png";
import salad from "../img/salad.png";
import hourglass from "../img/hourglass.png";
import microgreens from "../img/microgreens.jpg";
import nooaHead from "../img/nooaHead.png";
import gopiHead from "../img/gopiHead.jpeg";
import imc from "../img/logo_imc.png";
import accent from "../img/logo_accent.png";
import cpi from "../img/logo_cpi.png";
import verdes from "../img/Verdes_Logo.png";

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

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#contact") {
      // Scroll to the contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (hash === "#home" || hash === "") {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]); // Depend on location

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [lists, setList] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const postList = async (post) => {
    try {
      const response = await fetch("http://localhost:4000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      const data = await response.json();
      setList([...lists, data]);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postList(formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" }); // Reset form after submit
  };

  return (
    <div>
      <div className="messageBox flex flex-row items-center" id="home">
        <div className="p-8 text-center">
          <header className="opener bg-gray-100 relative overflow-hidden">
            <img src={verdes} alt="Verdes Logo" className="logo"></img>
            <h2 className="subtitle text-2xl font-semibold mb-4">
              SERVAS AT VERDES!
            </h2>
            <p className="max-w-2xl mx-auto">
              We are a small business based in Vienna that produces and sells
              microgreens. Microgreens are small sprouts, infant versions of
              known vegetable types like broccoli and arugula. They can be used
              in a variety of ways, for example on bread, in a salad or as a
              deluxe garnish.
            </p>
            <a
              href="#contact"
              className="buttonContact mt-4 inline-block text-white px-6 py-2 rounded-full hover:bg-green-700 transition ease-in-out duration-150"
            >
              Contact us
            </a>
          </header>
          {/*<div className="arrows-container">
            <div className="scroll-down-arrow mt-2">v</div>
            <div className="scroll-down-arrow mt-2">v</div>
            <div className="scroll-down-arrow mt-2">v</div>
          </div>*/}
        </div>
        <img
          src={microgreens}
          alt="Microgreens"
          className="nonBgImage rounded-lg flex-none"
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
          <divs className="whiteBox">
            <div className="whiteBoxFront flex flex-col items-center text-center">
              <img src={hourglass} alt="Fresh" className="icon" />
              <span className="iconText">Fresh</span>
            </div>
            <div className="whiteBoxBack">
              <span>Some text to display on hover</span>
            </div>
          </divs>
          <div className="whiteBox">
            <div className="whiteBoxFront flex flex-col items-center text-center">
              <img src={local} alt="Hyperlocality" className="icon" />
              <span className="iconText">Hyperlocality</span>
            </div>
            <div className="whiteBoxBack">
              <span>Some text to display on hover</span>
            </div>
          </div>
          <div className="whiteBox">
            <div className="whiteBoxFront flex flex-col items-center text-center">
              <img src={salad} alt="Nutrition" className="icon" />
              <span className="iconText">Nutrition</span>
            </div>
            <div className="whiteBoxBack">
              <span>Some text to display on hover</span>
            </div>
          </div>
          <div className="whiteBox">
            <div className="whiteBoxFront flex flex-col items-center text-center">
              <img src={cargoBike} alt="Sustainability" className="icon" />
              <span className="iconText">Sustainability</span>
            </div>
            <div className="whiteBoxBack">
              <span>Some text to display on hover</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-section py-8 shadow-md rounded-lg">
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
              <p className="member-title text-md mb-2">Co-Founder & COO</p>
              <p className="member-info">
                Gopi, a passionate microgreens entrepreneur and forward-thinker,
                who has played a pivotal role in steering our microgreens
                business towards innovation and growth.
              </p>
            </div>

            <div className="team-member">
              <img
                src={nooaHead}
                alt="Person 2"
                className="member-photo mb-4"
              />
              <h3 className="member-name text-xl font-semibold">Nooa ADAMS</h3>
              <p className="member-title text-md mb-2">Co-Founder & CEO</p>
              <p className="member-info">
                Nooa, a motivated economics student, who is passionate about
                founding and running successful businesses and has excellent
                leadership skills.
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
        <a
          href="#contact"
          className="buttonContact mt-4 inline-block text-white px-6 py-2 rounded-full hover:bg-green-700 transition ease-in-out duration-150"
        >
          Questions? Contact Us!
        </a>
      </section>

      <section className="bg-gray-100 py-8 shadow-md rounded-lg">
        <h2 className="text-center text-3xl font-semibold mb-4">
          Our Partners
        </h2>

        <div className="companies flex flex-wrap justify-center ">
          <div className="company">
            <a href="https://www.fh-krems.ac.at/">
              <img src={imc} alt="Company 2 Logo" />
            </a>
          </div>
          <div className="company">
            <a href="https://accent.at/">
              <img src={accent} alt="Company 3 Logo" />
            </a>
          </div>
          <div className="company">
            <a href="https://creativepreincubator.at/">
              <img src={cpi} alt="Company 4 Logo" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="contact-section bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-3xl font-semibold mb-4" id="contact">
            Contact Us
          </h2>
          <br></br>
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Your Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-800"
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="email"
                >
                  Your Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-800"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="message"
                >
                  Message
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-800"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here"
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="buttonContact mt-4 inline-block text-white px-6 py-2 rounded-full hover:bg-green-700 transition ease-in-out duration-150"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <script></script>
    </div>
  );
};

export default Home;
