'use client'
import React, { useEffect, useState } from 'react'

const Profile = ({user}) => {
      const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

        const email = user?.email

  useEffect(()=>{
    if (!email) return
      const fetchProfile = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/profile?email=${email}`
      )

      const result = await res.json()
      setData(result)

    } catch (error) {
      console.log(error)

    } finally {
      setLoading(false)
    }
  }
  fetchProfile()
  },[email])



//   useEffect(() => {
    
    
//   }, [email])


  return (
     <div className="min-h-screen bg-zinc-950 text-white p-6">

      <h1 className="text-3xl font-bold mb-6">
        👤 My Profile
      </h1>

      {loading ? (
        <p className="text-zinc-400">Loading...</p>
      ) : !data ? (
        <p className="text-zinc-400">Profile not found</p>
      ) : (

        <div className="space-y-6">

          {/* USER CARD */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">

            <h2 className="text-xl font-semibold">
              {data.user.name}
            </h2>

            <p className="text-zinc-400">
              {data.user.email}
            </p>

            <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full">
              {data.user.role}
            </span>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <p className="text-zinc-400">Total Prompts</p>
              <h3 className="text-2xl font-bold text-purple-400">
                {data.stats.totalPrompts}
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <p className="text-zinc-400">Total Reviews</p>
              <h3 className="text-2xl font-bold text-green-400">
                {data.stats.totalReviews}
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <p className="text-zinc-400">Total Copies</p>
              <h3 className="text-2xl font-bold text-orange-400">
                {data.stats.totalCopies}
              </h3>
            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default Profile