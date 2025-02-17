"use client";

import { Order } from "@prisma/client";

type AdminOrdersProps = {
  orders: Order[];
};

export default function AdminOrders({ orders }: AdminOrdersProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="border text-white font-bold">
          <tr>
            <th className="px-6 py-3 text-left text-xs  uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-6 py-3 text-left text-xs  uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs  uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs  uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {order.userId}: "user 🦖"
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${order.total.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
