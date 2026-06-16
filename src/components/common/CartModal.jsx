import { useCart } from "../../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle } from "lucide-react";

const fmt = (p) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(p);

export default function CartModal() {
  const { cartItems, cartCount, cartTotal, cartOpen, setCartOpen, removeFromCart, updateQty, clearCart } = useCart();

  const handleWhatsApp = () => {
    if (cartItems.length === 0) return;
    const itemLines = cartItems
      .map((i) => `• ${i.name} × ${i.qty} — ${fmt(i.price * i.qty)}`)
      .join("\n");
    const msg =
      `🛒 *New Order from Astro Ambuj Mishra*\n\n${itemLines}\n\n*Total: ${fmt(cartTotal)}*\n\nPlease confirm availability and share payment details. 🙏`;
    window.open(`https://dashboard.paytm.com/login/`, "_blank");
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="cart-backdrop"
            onClick={() => setCartOpen(false)}
          />

          {/* Modal */}
          {/* Centering wrapper — flex keeps modal in center regardless of framer motion */}
          <div className="cart-modal-wrapper">
            <motion.div
              key="cart-modal"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="cart-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Shopping cart"
            >
            {/* Header */}
            <div className="cart-modal-header">
              <div className="cart-modal-title">
                <ShoppingBag size={22} />
                <span>Your Cart</span>
                {cartCount > 0 && <span className="cart-modal-count">{cartCount}</span>}
              </div>
              <button
                className="cart-modal-close"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                <X size={22} />
              </button>
            </div>

            {/* Body */}
            <div className="cart-modal-body">
              {cartItems.length === 0 ? (
                <div className="cart-empty">
                  <div className="cart-empty-icon">🛒</div>
                  <h3>Your cart is empty</h3>
                  <p>Add sacred products to your cart and they'll appear here.</p>
                  <button className="cart-continue-btn" onClick={() => setCartOpen(false)}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="cart-items-list">
                    {cartItems.map((item) => (
                      <motion.div
                        key={`${item.id}-${item.category}`}
                        className="cart-item"
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                      >
                        <div className="cart-item-img">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-item-info">
                          <p className="cart-item-cat">{item.category}</p>
                          <h4 className="cart-item-name">{item.name}</h4>
                          <p className="cart-item-price">{fmt(item.price)}</p>
                        </div>
                        <div className="cart-item-actions">
                          <div className="cart-qty">
                            <button
                              onClick={() => updateQty(item.id, item.category, item.qty - 1)}
                              aria-label="Decrease"
                            >
                              <Minus size={14} />
                            </button>
                            <span>{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, item.category, item.qty + 1)}
                              disabled={item.qty >= 10}
                              aria-label="Increase"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="cart-item-subtotal">{fmt(item.price * item.qty)}</span>
                          <button
                            className="cart-remove-btn"
                            onClick={() => removeFromCart(item.id, item.category)}
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="cart-modal-footer">
                    <div className="cart-summary">
                      <div className="cart-summary-row">
                        <span>Subtotal ({cartCount} {cartCount === 1 ? "item" : "items"})</span>
                        <span className="cart-summary-total">{fmt(cartTotal)}</span>
                      </div>
                      <div className="cart-summary-note">
                        🚚 Free shipping on orders ₹999+ · 🔒 Secure checkout
                      </div>
                    </div>

                    <button className="cart-whatsapp-btn" onClick={handleWhatsApp}>
                      Order Now
                    </button>

                    <div className="cart-footer-row">
                      <button className="cart-continue-link" onClick={() => setCartOpen(false)}>
                        ← Continue Shopping
                      </button>
                      <button className="cart-clear-btn" onClick={clearCart}>
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
