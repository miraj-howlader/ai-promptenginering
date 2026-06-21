'use client'

import React from 'react'

const ReportModal = ({
  handleReport,
  openReport,
  setOpenReport,
  reason,
  setReason,
  description,
  setDescription
}) => {

  if (!openReport) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-5 rounded w-[400px]">

        <h2 className="text-xl font-bold mb-3">
          Report Prompt
        </h2>

        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full border p-2 mb-3"
        >
          <option value="">Select reason</option>
          <option>Spam</option>
          <option>Inappropriate</option>
          <option>Copyright</option>
        </select>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 mb-3"
          placeholder="Optional description"
        />

        <div className="flex justify-end gap-2">

          <button
            onClick={() => setOpenReport(false)}
            className="px-3 py-2 border"
          >
            Cancel
          </button>

          <button
            onClick={handleReport}
            className="px-4 py-2 bg-red-500 text-white"
          >
            Submit
          </button>

        </div>

      </div>

    </div>
  )
}

export default ReportModal