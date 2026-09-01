import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Header.css'

export default function Header() {
  const { totalItems } = useContext(CartContext)

  return (
    <header className="app-header">
      <h1>My Cart</h1>
      <p>Items in cart: {totalItems}</p>
    </header>
  )
}
