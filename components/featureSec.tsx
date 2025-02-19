import React from "react";

const FeatureSec = () => {
  return (
    <section className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
      <div className="p-6 bg-cyan-300 shadow-md rounded-md text-center">
        <h3 className="font-bold text-lg">100% Authentic Product</h3>
        <p className="text-gray-500">
          Prominently display a clear "100% Authentic Guarantee".
        </p>
      </div>
      <div className="p-6 bg-blue-300 shadow-md rounded-md text-center">
        <h3 className="font-bold text-lg">Free & Easy Return</h3>
        <p className="text-gray-500">
          Hassle-free returns with prepaid return labels.
        </p>
      </div>
      <div className="p-6 bg-green-300 shadow-md rounded-md text-center">
        <h3 className="font-bold text-lg">Safe Payments</h3>
        <p className="text-gray-500">
          Fraud detection tools ensure secure transactions.
        </p>
      </div>
      <div className="p-6 bg-white shadow-md rounded-md text-center bg-yellow-100">
        <h3 className="font-bold text-lg text-yellow-700">
          30% OFF Summer Cloth
        </h3>
      </div>
    </section>
  );
};

export default FeatureSec;
