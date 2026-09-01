import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart()

  return (
    <section className="cart-panel">
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span className="cart-name">{item.name}</span>
                <span className="cart-meta">Qty: {item.quantity}</span>
                <button type="button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <p className="total-price">Total: ₹{totalPrice.toLocaleString('en-IN')}</p>
          <button type="button" className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </section>
  )
}
