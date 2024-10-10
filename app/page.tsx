import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const featuredProducts = [
  { id: 1, name: 'Rose Bouquet', price: 29.99, image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Tulip Arrangement', price: 34.99, image: 'https://images.unsplash.com/photo-1589244159943-460088ed5c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Sunflower Bouquet', price: 24.99, image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Lily Arrangement', price: 39.99, image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern relative h-[600px] flex items-center justify-center mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Welcome to Maruva</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">Beautiful flowers for every occasion</p>
          <Button asChild size="lg" className="text-lg btn-primary">
            <Link href="/category/flowers">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Flowers', 'Fruit Baskets', 'Chocolate Baskets', 'Gift Cards'].map((category) => (
            <Link href={`/category/${category.toLowerCase().replace(' ', '-')}`} key={category}>
              <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-primary">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <Button asChild variant="outline" className="w-full btn-secondary">
                  <Link href={`/product/${product.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}