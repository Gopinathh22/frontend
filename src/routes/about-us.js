import React from "react";
import CPI_Price from "../img/CPI_Price.jpeg";
import friendship from "../img/friendship.jpeg";
import microgreenai from "../img/microgreenai.png";
import microgreenai3 from "../img/microgreenai3.png";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <section>
        <div className="banner p-10">
          <div className="container mx-auto flex flex-wrap items-center justify-center md:justify-between">
            <div className="md:flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
              {/* Product Images */}
              <img
                src={microgreenai}
                alt="Product 1"
                className="h-24 md:h-32 lg:h-48 mr-2 rounded"
              />

              <img
                src={microgreenai3}
                alt="Product 3"
                className="h-24 md:h-32 lg:h-48 rounded"
              />
            </div>

            {/* Promotional Text */}
            <div className="md:flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-green-800">
                {t("aboutTitle")}
              </h2>
              <p className="my-4">{t("aboutDes")}</p>
              <a
                className="buttonContact mt-4 inline-block text-white px-6 py-2 rounded-full hover:bg-green-700 transition ease-in-out duration-150"
                href="/#contact"
              >
                {t("buttonContact")}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4">
          <h1 className="section-title text-3xl font-semibold mb-6 text-center p-5">
            About Us
          </h1>

          <div className="flex flex-wrap items-center mb-12">
            <div className="md:w-1/2 w-full md:pr-6 mb-6 md:mb-0">
              <img
                src={friendship}
                alt="Description"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-lg">{t("img1Des")}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="md:w-1/2 w-full order-2 md:order-1 md:pl-6">
              <p className="text-lg">{t("img2Des")}</p>
            </div>
            <div className="md:w-1/2 w-full md:order-2 order-1 mb-6 md:mb-0">
              <img
                src={CPI_Price}
                alt="Description"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5">
        {" "}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-3">Pitch</h2>
              <p className="text-lg text-gray-600">{t("pitchDes")}</p>
            </div>
            <div className="flex justify-center">
              <div className="w-full md:w-3/4">
                <iframe
                  className="w-full h-64 sm:h-96 rounded-xl shadow-lg"
                  style={{ height: "500px" }}
                  src=""
                  title="Pitch Video"
                  frameBorder="0"
                  allow="accelerometer; mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
