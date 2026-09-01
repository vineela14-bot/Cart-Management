import { useCart } from '../context/CartContext'

export default function Product({ product }) {
  const { addToCart } = useCart()

  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>₹{product.price.toLocaleString('en-IN')}</p>
      <button type="button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </article>
  )
}
