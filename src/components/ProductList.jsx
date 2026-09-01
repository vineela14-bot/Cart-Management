import Product from './Product'

const products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Headphones', price: 2000 },
  { id: 3, name: 'Mouse', price: 1000 },
]

export default function ProductList() {
  return (
    <section className="product-list">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
