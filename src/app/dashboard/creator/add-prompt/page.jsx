'use client'

import { useState } from 'react'
import { Input, Button, Chip } from '@heroui/react'
import toast from 'react-hot-toast'
import { redirect } from 'next/navigation'

export default function AddPromptPage() {
  const [tags, setTags] = useState('')
  const [preview, setPreview] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const categories = [
    'Marketing',
    'Programming',
    'SEO',
    'Business',
    'Writing',
    'Design',
    'Education',
    'Productivity',
  ]

  const aiTools = [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Perplexity',
    'Midjourney',
    'Cursor',
    'Copilot',
  ]

  const uploadToImgBB = async (file) => {
    const formData = new FormData()
    formData.append('image', file)
      
    const imageBBApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${imageBBApiKey}`,
      {
        method: 'POST',
        body: formData,
      }
    )

    const data = await res.json()

    if (!data.success) throw new Error('Image upload failed')

    return data.data.url
  }

  const handleImage = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setPreview(URL.createObjectURL(file))

    try {
      setLoading(true)
      const url = await uploadToImgBB(file)
      setImageUrl(url)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const form = e.target

    const data = {
      title: form.title.value,
      description: form.description.value,
      content: form.content.value,
      category: form.category.value,
      aiTool: form.aiTool.value,
      difficulty: form.difficulty.value,
      visibility: form.visibility.value,
      thumbnail: imageUrl,

      tags: tags
        .split(',')
        .map(t => t.trim())
        .filter(Boolean),

      copyCount: 0,
      status: 'pending',
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/add-prompt`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    const dataone = await res.json()
     if(dataone){
      toast.success("Promt crated successfully")
      redirect('/prompts')
     }
    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="border rounded-3xl p-8 bg-white shadow-sm">

        <h1 className="text-3xl font-bold mb-2">
          Create New Prompt
        </h1>

        <p className="text-gray-500 mb-8">
          Share AI prompts with the marketplace
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* TITLE */}
          <Input
            name="title"
            label="Prompt Title"
            placeholder="Enter your prompt title"
            required
          />

          {/* DESCRIPTION */}
          <div>
            <label className="block mb-2 font-medium">
              Prompt Description
            </label>
            <textarea
              name="description"
              rows={3}
              className="w-full border rounded-xl p-3"
              placeholder="Write a short description of your prompt..."
              required
            />
          </div>

          {/* CONTENT */}
          <div>
            <label className="block mb-2 font-medium">
              Prompt Content
            </label>
            <textarea
              name="content"
              rows={8}
              className="w-full border rounded-xl p-3"
              placeholder="Write your full AI prompt here..."
              required
            />
          </div>

          {/* CATEGORY + TOOL */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Category
              </label>
              <select
                name="category"
                className="border rounded-xl p-3 w-full"
                required
              >
                {categories.map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                AI Tool
              </label>
              <select
                name="aiTool"
                className="border rounded-xl p-3 w-full"
              >
                {aiTools.map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

          </div>

          {/* TAGS */}
          <Input
            label="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="seo, marketing, ai, productivity"
            required
          />

          <div className="flex flex-wrap gap-2">
            {tags
              .split(',')
              .map(t => t.trim())
              .filter(Boolean)
              .map(tag => (
                <Chip key={tag}>{tag}</Chip>
              ))}
          </div>

          {/* DIFFICULTY */}
          <div>
            <label className="block mb-2 font-medium">
              Difficulty Level
            </label>
            <select
              name="difficulty"
              className="border rounded-xl p-3 w-full"
              required
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Pro</option>
            </select>
          </div>

          {/* IMAGE UPLOAD */}
          <div>
            <label className="block mb-2 font-medium">
              Thumbnail Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              required
            />

            {preview && (
              <div>
                <img
                  src={preview}
                  className="h-40 w-full object-cover rounded-xl mt-3 border"
                />

                {imageUrl && (
                  <p className="text-green-600 text-sm mt-2">
                    Uploaded successfully ✔
                  </p>
                )}
              </div>
            )}
          </div>

          {/* VISIBILITY */}
          <div>
            <label className="block mb-2 font-medium">
              Visibility
            </label>
            <select
              name="visibility"
              className="border rounded-xl p-3 w-full"
            >
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>

          {/* NOTE */}
          <div className="p-4 bg-yellow-50 border rounded-xl">
            <b>Note:</b> All prompts start as <b>pending</b> until admin approval.
          </div>

          <Button
            type="submit"
            isLoading={loading}
            className="w-full"
            color="primary"
            disabled={!imageUrl}
          >
            Submit Prompt
          </Button>

        </form>
      </div>
    </div>
  )
}