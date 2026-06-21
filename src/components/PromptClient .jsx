'use client'


import { useEffect, useState } from "react"
import toast from "react-hot-toast"



export default function PromptClient({ prompt,user }) {
    const [bookmarked, setBookmarked] = useState(false)
    const [loading, setLoading] = useState(false)
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(5)
    const [comment, setComment] = useState("")
   

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

const handleReview = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userEmail: user.email,
          promptId: prompt._id,
          rating,
          comment
        })
      }
    )

    const data = await res.json()

    if (data.success) {
      toast.success("Review added")

      // reload reviews
      setReviews(prev => [
        {
          userEmail: user.email,
          rating,
          comment,
          createdAt: new Date()
        },
        ...prev
      ])

      setComment("")
    } else {
      toast.error(data.message)
    }

  } catch (error) {
    toast.error("Something went wrong")
  }
}

useEffect(() => {
  const loadReviews = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews/${prompt._id}`
    )

    const data = await res.json()
    setReviews(data)
  }

  loadReviews()
}, [prompt._id])

   

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

          {/* REVIEW FORM (ADD HERE) */}
{/* <div className="mt-10 border p-4 rounded-lg">

  <h2 className="text-xl font-semibold mb-3">
    Leave a Review
  </h2>

  <select
    value={rating}
    onChange={(e) => setRating(Number(e.target.value))}
    className="border p-2 rounded mb-3 w-full"
  >
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
    <option value={5}>5</option>
  </select>

  <textarea
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    className="w-full border p-2 rounded mb-3"
    placeholder="Write your review..."
  />

  <button
    onClick={handleReview}
    className="px-4 py-2 bg-black text-white rounded"
  >
    Submit Review
  </button>

</div> */}

        </div>

      </div>

      {/* CONTENT */}
      <div className="mt-12 p-5 border rounded-lg bg-gray-50 whitespace-pre-wrap">
        {prompt.content}
      </div>


      {/* REVIEW FORM (ADD HERE) */}
<div className="mt-10 border p-4 rounded-lg">

  <h2 className="text-xl font-semibold mb-3">
    Leave a Review
  </h2>

  <select
    value={rating}
    onChange={(e) => setRating(Number(e.target.value))}
    className="border p-2 rounded mb-3 w-full"
  >
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
    <option value={5}>5</option>
  </select>

  <textarea
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    className="w-full border p-2 rounded mb-3"
    placeholder="Write your review..."
  />

  <button
    onClick={handleReview}
    className="px-4 py-2 bg-black text-white rounded"
  >
    Submit Review
  </button>

</div>

<div className="mt-10">

  <h2 className="text-2xl font-semibold mb-4">
    Reviews
  </h2>

  {reviews.map((r, i) => (
    <div key={i} className="border p-3 rounded mb-3">
      <p className="font-semibold">{r.userEmail}</p>
      <p>⭐ {r.rating}/5</p>
      <p>{r.comment}</p>
    </div>
  ))}

</div>

    </div>
  )
}