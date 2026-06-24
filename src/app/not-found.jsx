import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">
      
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 max-w-2xl w-full">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 text-center shadow-2xl">
          
          {/* 404 Text */}
          <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            404
          </h1>

          {/* Title */}
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-4 text-slate-300 text-lg leading-relaxed max-w-lg mx-auto">
            The page youre looking for doesnt exist, has been moved,
            or the URL may be incorrect.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Back to Home
            </Link>

            <Link
              href="/prompts"
              className="px-8 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Explore Prompts
            </Link>
          </div>

          {/* Small Text */}
          <p className="mt-8 text-sm text-slate-500">
            Error Code: 404 • Resource Not Found
          </p>
        </div>
      </div>
    </div>
  )
}