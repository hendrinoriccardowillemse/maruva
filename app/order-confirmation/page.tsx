import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
      <h1 className="text-3xl font-semibold mb-4">Thank You for Your Order!</h1>
      <p className="text-xl mb-8">Your order has been successfully placed.</p>
      
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <p className="mb-2"><strong>Order Number:</strong> #12345</p>
        <p className="mb-2"><strong>Total Amount:</strong> $64.98</p>
        <p><strong>Estimated Delivery:</strong> 3-5 business days</p>
      </div>
      
      <Button asChild>
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  )
}