'use client'

import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const AllPromptsAdmin = () => {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)
  const [reason, setReason] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  // ================= FETCH PROMPTS =================
  
  useEffect(()=>{
    const fetchPrompts = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompts`
      )

      const data = await res.json()
      setPrompts(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  fetchPrompts()
  })

  // ================= APPROVE =================
  const handleApprove = async (id) => {
    try {
     const res =  await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompts/${id}/approve`,
        { method: 'PATCH' }
      )
      if(res.ok){
        toast.success('Prompt Approved successfully')  
        fetchPrompts()
        
      }

      
    } catch (err) {
      console.log(err)
    }
  }

  // ================= DELETE =================
  const handleDelete = async (id) => {
    const ok = confirm('Delete this prompt?')
    if (!ok) return

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompts/${id}`,
        { method: 'DELETE' }
      )

      if (res.ok) {
        toast.error("Prompt deleted successfully")
        setPrompts(prev => prev.filter(p => p._id !== id))
        
      }
    } catch (err) {
      console.log(err)
    }
  }

  // ================= FEATURE =================
  const handleFeature = async (id) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompts/${id}/feature`,
        { method: 'PATCH' }
      )

      fetchPrompts()
    } catch (err) {
      console.log(err)
    }
  }

  // ================= REJECT OPEN =================
  const openReject = (id) => {
    setSelectedId(id)
  }

  // ================= REJECT SUBMIT =================
  const submitReject = async () => {
    

    try {
     const res =  await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompts/${selectedId}/reject`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ reason })
        }
      )
      if(res.ok){
        toast.error("Prompt Rejected successfully")
      }

      setReason('')
      setSelectedId(null)
      fetchPrompts()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="p-6 text-white min-h-screen bg-zinc-950">

      <h1 className="text-3xl font-bold mb-6">
        All Prompts
      </h1>

      {/* LOADING */}
      {loading ? (
        <p className="text-zinc-400">Loading prompts...</p>
      ) : (

        <div className="overflow-x-auto border border-white/10 rounded-xl">

          <table className="w-full">

            <thead className="bg-white/10 text-left">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Tool</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>

              {prompts.map((p) => (
                <tr
                  key={p._id}
                  className="border-t border-white/10 hover:bg-white/5"
                >

                  <td className="p-3">{p.title}</td>

                  <td className="p-3 text-zinc-400">
                    {p.category}
                  </td>

                  <td className="p-3 text-zinc-400">
                    {p.aiTool}
                  </td>

                  {/* STATUS */}
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium
                      ${
                        p.status === 'approved'
                          ? 'bg-green-500/20 text-green-400'
                          : p.status === 'rejected'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3">
                    <div className="flex gap-2 flex-wrap">

                      <button
                        onClick={() => handleApprove(p._id)}
                        className="bg-green-500 px-2 py-1 rounded text-sm"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => openReject(p._id)}
                        className="bg-yellow-500 px-2 py-1 rounded text-sm"
                      >
                        Reject
                      </button>

                      <button
                        onClick={() => handleFeature(p._id)}
                        className="bg-purple-500 px-2 py-1 rounded text-sm"
                      >
                        Feature
                      </button>

                      <button
                        onClick={() => handleDelete(p._id)}
                        className="bg-red-500 px-2 py-1 rounded text-sm"
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      )}

      {/* ================= REJECT MODAL ================= */}
      {selectedId && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-zinc-900 p-5 rounded-xl w-[400px]">

            <h2 className="text-xl mb-3">
              Rejection Reason
            </h2>

            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-2 bg-black border border-white/10 rounded"
              placeholder="Write reason..."
            />

            <div className="flex justify-end gap-2 mt-3">

              <button
                onClick={() => setSelectedId(null)}
                className="px-3 py-1 bg-gray-500 rounded"
              >
                Cancel
              </button>

              <button
                onClick={submitReject}
                className="px-3 py-1 bg-red-500 rounded"
              >
                Submit
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default AllPromptsAdmin