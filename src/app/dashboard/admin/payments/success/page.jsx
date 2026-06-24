import { stripe } from '@/lib/stripe'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id) {
    throw new Error('Please provide a valid session_id')
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (session.status === 'open') {
    redirect('/')
  }

  const customerEmail = session.customer_details?.email

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-orange-100">
        
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for upgrading your account. Your subscription has been
          activated successfully.
        </p>

        {customerEmail && (
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-600">
              Confirmation email sent to
            </p>
            <p className="font-semibold text-orange-600">
              {customerEmail}
            </p>
          </div>
        )}

        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#FF5804] to-[#FF8D28] text-white font-semibold hover:opacity-90 transition"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/"
            className="block w-full py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            Back to Home
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Need help? Contact our support team anytime.
        </p>
      </div>
    </div>
  )
}