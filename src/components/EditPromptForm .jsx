'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function EditPromptForm({ prompt }) {
  const router = useRouter()
  const [updating, setUpdating] = useState(false)

  const [formData, setFormData] = useState({
    title: prompt.title || '',
    description: prompt.description || '',
    category: prompt.category || '',
    aiTool: prompt.aiTool || '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setUpdating(true)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/update/${prompt._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      toast.success('Prompt updated successfully 🚀')

      router.push('/dashboard/myprompts')
      router.refresh()

    } catch (error) {
      toast.error(error?.message || 'Update failed')
    } finally {
      setUpdating(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">

      <h1 className="text-3xl font-bold mb-6">
        Edit Prompt
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows={5}
          className="w-full border p-3 rounded"
        />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border p-3 rounded"
        />

        <input
          name="aiTool"
          value={formData.aiTool}
          onChange={handleChange}
          placeholder="AI Tool"
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          disabled={updating}
          className="w-full bg-blue-600 text-white py-3 rounded disabled:opacity-50"
        >
          {updating ? 'Updating...' : 'Update Prompt'}
        </button>

      </form>
    </div>
  )
}