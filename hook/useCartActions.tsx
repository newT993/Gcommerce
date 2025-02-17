import { useCart } from "@/contexts/cartContexts";

export function useCartActions() {
  const { state, dispatch } = useCart();

  const addToCart = (
    productId: number,
    price: number,
    name: string,
    quantity: number = 1
  ) => {
    const existingItem = state.items.find(
      (item) => item.productId === productId
    );

    if (existingItem) {
      dispatch({
        type: "UPDATE_ITEM",
        productId,
        quantity: existingItem.quantity + quantity,
      });
    } else {
      dispatch({
        type: "ADD_ITEM",
        item: { productId, price, quantity, name },
      });
    }
  };

  const removeFromCart = (productId: number) => {
    dispatch({
      type: "REMOVE_ITEM",
      productId,
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
    } else {
      dispatch({
        type: "UPDATE_ITEM",
        productId,
        quantity,
      });
    }
  };

  return {
    cartItems: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal: state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ),
  };
}
