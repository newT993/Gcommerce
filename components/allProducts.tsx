"use client";
import { useCartActions } from "@/hook/useCartActions";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  inventory: number;
  imageUrl: string;
  category: string;
  reviews: { rating: number; comment: string }[];
};

export default function Products({ category }: { category: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCartActions();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products?category=${category}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          // <div key={product.id} className="border rounded-lg p-4 shadow-sm">
          //   <img
          //     src={product.imageUrl}
          //     alt={product.name}
          //     className="w-full h-48 object-cover mb-4"
          //   />
          //   <h2 className="text-xl font-semibold">{product.name}</h2>
          //   <p className="text-lg font-bold mt-2">${product.price}</p>
          //   <div className="flex items-center mt-4 justify-between">
          //     <Link href={`/product/${product.id}`}>
          //       <span className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          //         View Details
          //       </span>
          //     </Link>
          //     <button
          //       onClick={() =>
          //         addToCart(product.id, product.price, product.name)
          //       }
          //       className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          //     >
          //       Add to Cart
          //     </button>
          //   </div>
          // </div>
          <div
            key={product.id}
            className="w-[300px] relative transform hover:-translate-y-2 transition duration-300"
          >
            <img
              className="object-cover rounded-xl w-[300px] h-[350px]"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="absolute top-[80%] bg-white p-2 rounded-xl px-4  font-semibold left-0 mx-3">
              <p className="text-sm">{product.name}</p>
            </div>
            <button
              className="absolute top-0 left-0 m-3 rounded-3xl p-2 px-4 bg-black"
              onClick={() => addToCart(product.id, product.price, product.name)}
            >
              Buy Now
            </button>
            <Link
              href={`/product/${product.id}`}
              className="text-white border rounded-3xl p-2 px-4 absolute top-0 right-0 m-3 bg-black m-3"
            >
              View Detail
            </Link>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
