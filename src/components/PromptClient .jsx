'use client'


import { useState } from "react"
import toast from "react-hot-toast"



export default function PromptClient({ prompt,user }) {
    const [bookmarked, setBookmarked] = useState(false)
    const [loading, setLoading] = useState(false)
   

  const handleCopy = async () => {
    try {

      await navigator.clipboard.writeText(prompt.content)

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/copy/${prompt._id}`,
        {
          method: "PATCH"
        }
      )

      const data = await res.json()

      if (data.success) {
        toast.success("Prompt copied successfully!")
      } else {
        toast.error("Failed to copy")
      }

    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  const handleBookmark = async () => {
  try {
    setLoading(true)

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookmark/toggle`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userEmail: user.email, // replace with session user
          promptId: prompt._id
        })
      }
    )

    const data = await res.json()

    if (data.success) {
      setBookmarked(data.bookmarked)
      toast.success(data.message)
    } else {
      toast.error("Failed")
    }

  } catch (error) {
    toast.error("Something went wrong")
  } finally {
    setLoading(false)
  }
}

   

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT IMAGE */}
        <div className="h-[350px] md:h-[500px] rounded-xl overflow-hidden border shadow-sm">
          <img
            src={prompt.thumbnail}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h1 className="text-4xl font-bold">
            {prompt.title}
          </h1>

          <p className="mt-4 text-gray-600">
            {prompt.description}
          </p>

          <div className="mt-6 flex gap-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-black text-white rounded-lg"
            >
              Copy Prompt
            </button>

           <button
  onClick={handleBookmark}
  disabled={loading}
  className={`px-4 py-2 rounded-lg border transition ${
    bookmarked ? "bg-black text-white" : "bg-white"
  }`}
>
  {bookmarked ? "Bookmarked ❤️" : "Bookmark 🤍"}
</button>
          </div>

        </div>

      </div>

      {/* CONTENT */}
      <div className="mt-12 p-5 border rounded-lg bg-gray-50 whitespace-pre-wrap">
        {prompt.content}
      </div>

    </div>
  )
}