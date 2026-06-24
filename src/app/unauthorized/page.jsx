import Link from 'next/link'
import React from 'react'

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">🔒</div>

        <h1 className="text-3xl font-bold text-gray-800">
          Unauthorized Access
        </h1>

        <p className="text-gray-500 mt-3">
          You must be logged in to view this page.
        </p>

        <div className="mt-6 flex gap-3 justify-center">
          <Link
            href="/login"
            className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Login
          </Link>

          <Link
            href="/"
            className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UnauthorizedPage