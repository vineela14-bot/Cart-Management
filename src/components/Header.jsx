import { useCart } from '../context/CartContext'

export default function Header() {
  const { totalItems } = useCart()

  return (
    <header className="app-header">
      <h1>My Cart</h1>
      <p>Items in cart: {totalItems}</p>
    </header>
  )
}
