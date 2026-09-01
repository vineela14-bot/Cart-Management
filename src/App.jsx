import './App.css'
import Header from './components/Header/Header.jsx'
import ProductList from './components/ProductList/ProductList.jsx'
import Cart from './components/Cart/Cart.jsx'
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
