import React from "react";

const ThirdHeading = () => {
  return (
    <div className="mt-12 bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
      <div className=" p-4 pt-0 ">
        <img
          className="rounded-2xl object-cover h-[280px] cursor-pointer transition-all duration-300 hover:scale-110"
          src="https://images6.alphacoders.com/135/thumb-1920-1354117.jpeg"
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-xl h-auto pb-0">
        <h2 className="text-2xl font-bold">Why Choose Us</h2>
        <p className="text-gray-600 mt-2">
          We pride ourselves on offering products that meet the highest
          standards of quality.
        </p>

        <div className="mt-4">
          <details className="border-t border-gray-300 py-2">
            <summary className="cursor-pointer font-semibold">
              Unrivaled Quality
            </summary>
            <p className="text-gray-600 mt-1">
              Each item is carefully selected, tested, and crafted for
              durability.
            </p>
          </details>

          <details className="border-t border-gray-300 py-2">
            <summary className="cursor-pointer font-semibold">
              Sustains Bullous
            </summary>
            <p className="text-gray-600 mt-1">
              We support sustainable fashion and ethical production.
            </p>
          </details>

          <details className="border-t border-gray-300 py-2">
            <summary className="cursor-pointer font-semibold">
              Unrivaled Variety
            </summary>
            <p className="text-gray-600 mt-1">
              We believe in offering great value and diverse choices.
            </p>
          </details>

          <details className="border-t border-gray-300 py-2">
            <summary className="cursor-pointer font-semibold">
              Legacy of Excellence
            </summary>
            <p className="text-gray-600 mt-1">
              Our products stand the test of time, ensuring satisfaction.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ThirdHeading;
