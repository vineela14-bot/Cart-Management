import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Product({ product }) {
  const { addToCart } = useContext(CartContext)

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
