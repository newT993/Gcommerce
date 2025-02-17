"use client";

import { Product } from "@prisma/client";

type AdminProductsProps = {
  products: Product[];
};

export default function AdminProducts({ products }: AdminProductsProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="border text-white font-bold">
          <tr>
            <th className="px-6 py-3 text-left text-xs uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs uppercase tracking-wider">
              Inventory
            </th>
            <th className="px-6 py-3 text-left text-xs uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${product.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.inventory}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
