import './App.css'
import Header from './components/Header.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'

function App() {
  return (
    <CartProvider>
      <div className="app-shell">
        <Header />
        <main className="main-content">
          <ProductList />
          <Cart />
        </main>
      </div>
    </CartProvider>
  )
}

export default App
