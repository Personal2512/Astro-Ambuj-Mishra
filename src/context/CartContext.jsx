import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("astro_cart") || "[]");
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("astro_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.category === product.category);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.category === product.category
            ? { ...i, qty: Math.min(10, i.qty + qty) }
            : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category || "general",
          qty,
        },
      ];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id, category) => {
    setCartItems((prev) => prev.filter((i) => !(i.id === id && i.category === category)));
  };

  const updateQty = (id, category, qty) => {
    if (qty < 1) return removeFromCart(id, category);
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id && i.category === category ? { ...i, qty: Math.min(10, qty) } : i
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        cartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
