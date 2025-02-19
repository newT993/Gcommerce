"use client";

import { useCartActions } from "@/hook/useCartActions";
import { initiateCheckout } from "@/lab/checkout";
import { useState } from "react";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } =
    useCartActions();

  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      await initiateCheckout(cartItems);
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Checkout failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.productId} className="flex  items-center gap-4 mb-4">
              <span className="min-w-[200px] font-medium">{item.name}</span>
              <div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.productId, parseInt(e.target.value))
                  }
                  className="w-20 p-1 border rounded bg-blue-400"
                />
              </div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
              <button
                onClick={() => removeFromCart(item.productId)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
            >
              {isLoading ? "Processing..." : "Checkout"}
            </button>
            <div className=" text-xl font-bold">
              Total: ${cartTotal.toFixed(2)}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
