"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, ShoppingCart } from 'lucide-react'

// Mock data for a single product
const product = {
  id: 1,
  name: 'Elegant Rose Bouquet',
  price: 39.99,
  description: 'A stunning arrangement of fresh roses in various colors, perfect for any occasion.',
  images: [
    'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  ],
  rating: 4.5,
  reviews: 128,
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="flex mt-4 space-x-2">
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                width={100}
                height={100}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
                  selectedImage === index ? 'ring-2 ring-pink-500' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'}`} />
              ))}
            </div>
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>
          <p className="text-2xl font-bold text-pink-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="flex items-center mb-6">
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 mr-4"
            />
            <Button className="flex items-center">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </div>
          
          {/* Add more product details, shipping info, etc. here */}
        </div>
      </div>
    </div>
  )
}