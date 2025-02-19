import React from "react";

const FourthHeading = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center">
        <div className=" relative overflow-hidden">
          <div className="absolute -top-[120%] -right-[30%] -z-10 w-[400px] h-[400px] bg-orange-100 rounded-full opacity-50 "></div>
          <div className="absolute top-[50%] left-[70%] w-40 h-40 bg-blue-200 rounded-full opacity-50 -z-10"></div>
          <h2 className="text-4xl font-bold mb-4">
            Best Leather Bag Collection For You
          </h2>
          <p className="text-gray-600">
            For those who prefer a hands-free, stylish, and functional option.
          </p>
          <a
            href="#"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Shop Now
          </a>
        </div>
        <div className="animate-fade-in">
          <img
            src="https://images6.alphacoders.com/135/thumb-1920-1354117.jpeg"
            alt="Bag Image"
            className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FourthHeading;
