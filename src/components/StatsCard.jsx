export default function StatsCard({ stats }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow grid grid-cols-3 gap-4">

      <div className="text-center">
        <p className="text-2xl font-bold">{stats?.length}</p>
        <p className="text-sm text-gray-500">My Prompts</p>
      </div>

      <div className="text-center">
        <p className="text-2xl font-bold">{stats?.copied}</p>
        <p className="text-sm text-gray-500">Copied</p>
      </div>

      <div className="text-center">
        <p className="text-2xl font-bold">{stats?.favorites}</p>
        <p className="text-sm text-gray-500">Favorites</p>
      </div>

    </div>
  )
}