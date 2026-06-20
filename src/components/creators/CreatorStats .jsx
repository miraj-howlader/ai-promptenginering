export default function CreatorStats() {
  return (
    <div className="grid md:grid-cols-4 gap-4">

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500 text-sm">
          Total Prompts
        </p>
        <h2 className="text-2xl font-bold">18</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500 text-sm">
          Total Copies
        </p>
        <h2 className="text-2xl font-bold">1,240</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500 text-sm">
          Avg Rating
        </p>
        <h2 className="text-2xl font-bold">4.8 ⭐</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500 text-sm">
          Pending Review
        </p>
        <h2 className="text-2xl font-bold text-yellow-500">
          3
        </h2>
      </div>

    </div>
  )
}