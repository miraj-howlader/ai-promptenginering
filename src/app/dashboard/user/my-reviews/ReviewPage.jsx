'use client'

import React, { useEffect, useState } from 'react'

const MyReviews = ({user}) => {
   const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
   const userEmail = user?.email

  useEffect(()=>{
     const fetchReviews = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews/my-reviews?email=${userEmail}`
      )

      const data = await res.json()
      console.log(data)
      setReviews(data)

    } catch (error) {
      console.log(error)

    } finally {
      setLoading(false)
    }
  }
  fetchReviews()
  },[userEmail])
  return (
     <div className="min-h-screen bg-zinc-950 text-white p-6">

      <h1 className="text-3xl font-bold mb-6">
        ⭐ My Reviews
      </h1>

      {loading ? (
        <p className="text-zinc-400">Loading...</p>
      ) : reviews.length === 0 ? (
        <p className="text-zinc-400">No reviews found</p>
      ) : (

        <div className="overflow-x-auto border border-white/10 rounded-xl">

          <table className="w-full">

            <thead className="bg-white/10 text-left">
              <tr>
                <th className="p-3">Prompt</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Comment</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            <tbody>

              {reviews.map((r) => (

                <tr
                  key={r._id}
                  className="border-t border-white/10 hover:bg-white/5"
                >

                  {/* PROMPT TITLE */}
                  <td className="p-3">
                    {r.promptTitle}
                  </td>

                  {/* RATING */}
                  <td className="p-3 text-yellow-400 font-semibold">
                    ⭐ {r.rating}
                  </td>

                  {/* COMMENT */}
                  <td className="p-3 text-zinc-400">
                    {r.comment}
                  </td>

                  {/* DATE */}
                  <td className="p-3 text-zinc-500 text-sm">
                    {new Date(r.createdAt).toLocaleDateString()}
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

export default MyReviews