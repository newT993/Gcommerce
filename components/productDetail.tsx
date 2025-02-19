"use client";

import { ProductWithReviews } from "@/types/product";
import { useSession } from "next-auth/react";
import { formatDistance } from "date-fns";

interface ProductDetailsProps {
  product: ProductWithReviews;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-6">${product.price}</p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            {product.reviews.map((review) => (
              <div key={review.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="font-bold mr-2">{review.user.name}</span>
                  <span className="text-yellow-500">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {formatDistance(new Date(review.createdAt), new Date(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
