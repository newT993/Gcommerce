import React from "react";

const SecondHeading = () => {
  return (
    <div className=" mb-8  flex justify-between">
      <h2 className="text-3xl font-semibold text-[3rem] tracking-tight leading-[2.5rem] w-[400px] border tracking-tight">
        Top-Selling Product of the Year Collection
      </h2>
      <div className="w-[300px]">
        <p className="text-gray-600 mt-2 font-semibold ">
          We create new models every week and refresh our collections.
        </p>
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-full">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SecondHeading;
