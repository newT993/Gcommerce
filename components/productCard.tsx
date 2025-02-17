"use client";
import Link from "next/link";
import { Product } from "@prisma/client";
import { useCartActions } from "@/hook/useCartActions";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartActions();
  return (
    <div className="border rounded p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="mt-2">${product.price.toFixed(2)}</p>
      <div className="flex items-center mt-4 justify-between">
        <Link href={`/product/${product.id}`}>
          <span className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
            View Details
          </span>
        </Link>
        <button
          onClick={() => addToCart(product.id, product.price, product.name)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
