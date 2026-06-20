export default function QuickActions() {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex flex-wrap gap-4">

      <button className="bg-black text-white px-4 py-2 rounded-lg">
        + Create Prompt
      </button>

      <button className="bg-gray-100 px-4 py-2 rounded-lg">
        View Analytics
      </button>

      <button className="bg-gray-100 px-4 py-2 rounded-lg">
        Pending Approvals
      </button>

      <button className="bg-gray-100 px-4 py-2 rounded-lg">
        Earnings
      </button>

    </div>
  )
}