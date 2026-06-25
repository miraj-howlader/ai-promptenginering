export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <div className="text-center">
        
        {/* Logo Spinner */}
        <div className="relative mx-auto h-20 w-20">
          <div className="absolute inset-0 rounded-full border-4 border-slate-700"></div>

          <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-purple-500 border-b-transparent border-l-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <h2 className="mt-8 text-2xl font-bold text-white">
          Loading...
        </h2>

        <p className="mt-2 text-slate-400">
          Please wait while we prepare your content
        </p>

        {/* Progress Bar */}
        <div className="mt-6 w-64 mx-auto overflow-hidden rounded-full bg-slate-800">
          <div className="h-2 animate-pulse bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>
      </div>
    </div>
  )
}