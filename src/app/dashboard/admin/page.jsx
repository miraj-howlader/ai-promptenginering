'use client'

import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'


const AdminDashboardPage = () => {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)

  // LOAD REPORTS
  useEffect(() => {
    const loadReports = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reports`
        )

        const data = await res.json()
        setReports(data)

      } catch (error) {
        toast.error("Failed to load reports")
      } finally {
        setLoading(false)
      }
    }

    loadReports()
  }, [])

  // RESOLVE REPORT
  const handleResolve = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/report/${id}`,
        {
          method: "PATCH"
        }
      )

      const data = await res.json()

      if (data.success) {
        toast.success("Resolved")

        setReports((prev) =>
          prev.map((r) =>
            r._id === id
              ? { ...r, status: "resolved" }
              : r
          )
        )
      } else {
        toast.error("Failed")
      }

    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="max-w-5xl mx-auto mt-24 px-4">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* LOADING */}
      {loading && (
        <p className="text-gray-500">
          Loading reports...
        </p>
      )}

      {/* EMPTY STATE */}
      {!loading && reports.length === 0 && (
        <p className="text-gray-500">
          No reports found
        </p>
      )}

      {/* REPORT LIST */}
      {reports.map((r) => (
        <div
          key={r._id}
          className="border p-4 rounded mb-3"
        >

          <p><b>Prompt ID:</b> {r.promptId}</p>
          <p><b>User:</b> {r.userEmail}</p>
          <p><b>Reason:</b> {r.reason}</p>

          <p>
            <b>Status:</b>{" "}
            <span className={
              r.status === "resolved"
                ? "text-green-600"
                : "text-yellow-600"
            }>
              {r.status || "pending"}
            </span>
          </p>

          <button
            onClick={() => handleResolve(r._id)}
            disabled={r.status === "resolved"}
            className={`mt-2 px-3 py-1 rounded text-white ${
              r.status === "resolved"
                ? "bg-gray-400"
                : "bg-green-500"
            }`}
          >
            Mark Resolved
          </button>

        </div>
      ))}

    </div>
  )
}

export default AdminDashboardPage