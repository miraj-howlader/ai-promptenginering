'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'

const MyPrompt = ({ data }) => {
  const router = useRouter()

  // EDIT
  const handleEdit = (item) => {
    router.push(`/dashboard/edit/${item._id}`)
  }

  // DELETE
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Delete Prompt?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, Delete'
    })

    if (!result.isConfirmed) return

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/delete/${id}`,
        {
          method: 'DELETE'
        }
      )

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.message)
      }

      toast.success('Prompt Deleted Successfully')

      // 🔥 refresh page or reload data
      router.refresh()

    } catch (error) {
      toast.error(error.message)
    }
  }

  // EMPTY STATE
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-2xl py-10 text-gray-500">
        🚫 No prompts found for this user
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">

      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">

        {/* HEADER */}
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Category</th>
            <th className="p-3">AI Tool</th>
            <th className="p-3">Difficulty</th>
            <th className="p-3">Visibility</th>
            <th className="p-3">Status</th>
            <th className="p-3">Copy</th>
            <th className="p-3">Created</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((item) => (
            <tr key={item._id} className="border-t hover:bg-gray-50">

              <td className="p-3 font-medium">{item.title}</td>
              <td className="p-3">{item.category}</td>
              <td className="p-3">{item.aiTool}</td>
              <td className="p-3">{item.difficulty}</td>
              <td className="p-3">{item.visibility}</td>

              <td className="p-3">
                <span className={`px-2 py-1 rounded text-white text-sm ${
                  item.status === 'pending'
                    ? 'bg-yellow-500'
                    : 'bg-green-500'
                }`}>
                  {item.status}
                </span>
              </td>

              <td className="p-3">{item.copyCount}</td>

              <td className="p-3">
                {new Date(item.createdAt).toLocaleDateString()}
              </td>

              {/* ACTIONS */}
              <td className="p-3 flex gap-2">

                <button
                  onClick={() => handleEdit(item)}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default MyPrompt