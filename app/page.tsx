import { Prisma } from "@prisma/client";
import ProductCard from "@/components/productCard";
import Navbar from "@/components/navbar"; // Import the singleton instance
import { prisma } from "@/lab/prisma";
import DashboardButton from "@/components/dashboardBtn";
import Products from "@/components/allProducts";
import SecondHeading from "@/components/secondHeading";
import ThirdHeading from "@/components/thirdHeading";
import FourthHeading from "@/components/fourthHeading";
import FeatureSec from "@/components/featureSec";

export default async function Home() {
  return (
    <div className="">
      <section className="py-16">
        <div className="flex ">
          <div className="flex-1 pr-24 ">
            <h2 className="text-[3rem]  font-semibold tracking-tight">
              Access to high-quality,
              <span className="font-bold text-black">
                Eco-<span className="text-green-500">Friendly </span>
              </span>
              products and services &rArr;
              <button className="mt-6 mr-2 px-6 py-3 bg-black text-white rounded-3xl font-md text-md text-sm -translate-y-2 tracking-normal">
                Contact Us
              </button>
            </h2>
          </div>
          <div className="">
            <div className="flex flex-col items-center justify-center space-x-4 mt-10">
              <div className="flex -space-x-2">
                <img
                  src="https://images6.alphacoders.com/135/thumb-1920-1354117.jpeg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images6.alphacoders.com/135/thumb-1920-1354117.jpeg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images6.alphacoders.com/135/thumb-1920-1354117.jpeg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-[1.5rem] font-bold ">
                  <span className="-translate-y-1">+</span>
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-400">
                <span className="text-black">500+</span> Happy Customers
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <DashboardButton />
      </div>
      <h1 className="text-3xl font-bold mb-6">Main Products</h1>
      <Products category="main" />

      <div className="bg-black h-1 rounded-2xl  mx-4 mt-12 mb-4"></div>

      <SecondHeading />

      <h1 className="text-3xl font-bold mb-6">Top-Selling Products</h1>
      <Products category="top-selling" />

      <div className="bg-black h-1 rounded-2xl  mx-4 mt-12 mb-4"></div>
      <ThirdHeading />

      <FeatureSec />
      <FourthHeading />
      <div className="bg-black h-1 rounded-2xl  mx-4 mt-12 mb-4"></div>
      <h1 className="text-3xl font-bold mb-6">Our All Products</h1>
      <Products category="all" />

      <footer className="bg-gray-800 text-white text-center pt-4 mt-10">
        <p>© 2025 E-Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
