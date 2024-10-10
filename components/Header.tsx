"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary font-serif">Maruva</Link>
        
        <nav className="hidden md:flex space-x-4">
          <Link href="/category/flowers" className="text-gray-600 hover:text-primary">Flowers</Link>
          <Link href="/category/fruit-baskets" className="text-gray-600 hover:text-primary">Fruit Baskets</Link>
          <Link href="/category/chocolate-baskets" className="text-gray-600 hover:text-primary">Chocolate Baskets</Link>
          <Link href="/category/gift-cards" className="text-gray-600 hover:text-primary">Gift Cards</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <form className="hidden md:flex items-center">
            <Input type="search" placeholder="Search..." className="mr-2" />
            <Button type="submit" size="icon" variant="ghost">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          
          <Link href="/cart">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </Link>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/category/flowers" className="text-gray-600 hover:text-primary">Flowers</Link>
                <Link href="/category/fruit-baskets" className="text-gray-600 hover:text-primary">Fruit Baskets</Link>
                <Link href="/category/chocolate-baskets" className="text-gray-600 hover:text-primary">Chocolate Baskets</Link>
                <Link href="/category/gift-cards" className="text-gray-600 hover:text-primary">Gift Cards</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header