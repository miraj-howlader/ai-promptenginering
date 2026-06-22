'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const ReportedPrompts = () => {
    const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)


  const handleRemove = async (id) => {
  const ok = toast.error('Delete prompt permanently?')
  if (!ok) return

  await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reports/${id}/remove`,
    { method: 'DELETE' }
  )

  fetchReports()
}

const handleWarn = async (id) => {
  await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reports/${id}/warn`,
    { method: 'PATCH' }
  )

  fetchReports()
}

const handleDismiss = async (id) => {
  await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reports/${id}/dismiss`,
    { method: 'PATCH' }
  )

  fetchReports()
}

  const fetchReports = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reports`
    )

    const data = await res.json()
    setReports(data)
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}

useEffect(() => {
  fetchReports()
}, [])

  return (
  <div className="p-6 text-white min-h-screen bg-zinc-950">

    <h1 className="text-3xl font-bold mb-6">
      Reported Prompts
    </h1>

    {loading ? (
      <p className="text-zinc-400">Loading...</p>
    ) : (

      <div className="overflow-x-auto border border-white/10 rounded-xl">

        <table className="w-full">

          <thead className="bg-white/10">
            <tr>
              <th className="p-3">Prompt ID</th>
              <th className="p-3">User</th>
              <th className="p-3">Reason</th>
              <th className="p-3">Description</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>

            {reports.map((r) => (

              <tr key={r._id} className="border-t border-white/10">

                <td className="p-3 text-xs text-zinc-400">
                  {r.promptId}
                </td>

                <td className="p-3">
                  {r.userEmail}
                </td>

                <td className="p-3 text-zinc-400">
                  {r.reason}
                </td>

                <td className="p-3 text-zinc-500">
                  {r.description}
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs
                    ${
                      r.status === 'removed'
                        ? 'bg-red-500/20 text-red-400'
                        : r.status === 'warned'
                        ? 'bg-orange-500/20 text-orange-400'
                        : r.status === 'dismissed'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {r.status}
                  </span>
                </td>

                <td className="p-3">
                  <div className="flex gap-2 flex-wrap">

                    <button
                      onClick={() => handleRemove(r._id)}
                      className="bg-red-500 px-2 py-1 rounded text-sm"
                    >
                      Remove
                    </button>

                    <button
                      onClick={() => handleWarn(r._id)}
                      className="bg-orange-500 px-2 py-1 rounded text-sm"
                    >
                      Warn
                    </button>

                    <button
                      onClick={() => handleDismiss(r._id)}
                      className="bg-green-500 px-2 py-1 rounded text-sm"
                    >
                      Dismiss
                    </button>

                  </div>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    )}

  </div>
  )
}

export default ReportedPrompts