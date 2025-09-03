import ProductList from '@/components/ProductList'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nike Web Store</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest Nike products with cutting-edge design and performance technology.
          </p>
        </header>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Featured Products</h2>
          <ProductList />
        </section>
      </div>
    </main>
  )
}