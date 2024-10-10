import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About Maruva</h3>
            <p>Bringing beauty and joy through flowers since 2023.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-pink-600">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-pink-600">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-pink-600">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="hover:text-pink-600">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-pink-600">Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-pink-600">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2023 Maruva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer