import React from "react";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="bg-green-200 p-10">
          <div className="container mx-auto flex flex-wrap items-center justify-center md:justify-between">
            <div className="md:flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
              {/* Product Images */}
              <img
                src=""
                alt="Product 1"
                className="h-24 md:h-32 lg:h-48 mr-2 rounded"
              />
              <img
                src=""
                alt="Product 2"
                className="h-24 md:h-32 lg:h-48 mr-2 rounded"
              />
              <img
                src=""
                alt="Product 3"
                className="h-24 md:h-32 lg:h-48 rounded"
              />
            </div>

            {/* Promotional Text */}
            <div className="md:flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-green-800">
                Fresh, crisp, healthy!
              </h2>
              <p className="my-4">
                Our varieties turn every meal into a culinary adventure. Get to
                know them better here!
              </p>
              <button className="bg-green-900 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">ABOUT US</h1>

          <div className="flex flex-wrap items-center mb-12">
            <div className="md:w-1/2 w-full md:pr-6 mb-6 md:mb-0">
              <img
                src=""
                alt="Description"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-lg">Your paragraph here...</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="md:w-1/2 w-full order-2 md:order-1 md:pl-6">
              <p className="text-lg">Your paragraph here...</p>
            </div>
            <div className="md:w-1/2 w-full md:order-2 order-1 mb-6 md:mb-0">
              <img
                src=""
                alt="Description"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
