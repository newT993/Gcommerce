"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";

type CartItem = {
  productId: number;
  quantity: number;
  price: number;
  name: string;
};

type State = {
  items: CartItem[];
};

type Action =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; productId: number }
  | { type: "UPDATE_ITEM"; productId: number; quantity: number };

const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: { items: [] }, dispatch: () => null });

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.productId !== action.productId
        ),
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
