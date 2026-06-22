'use client'
import React, { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts'

const AnaLyticPage = () => {
     const [data, setData] = useState(null)
     const [loading, setLoading] = useState(true)


      const barData = [
    { name: 'Users', value: data?.totalUsers || 0 },
    { name: 'Prompts', value: data?.totalPrompts || 0 },
    { name: 'Reviews', value: data?.totalReviews || 0 },
    { name: 'Copies', value: data?.totalCopies || 0 }
  ]

  const pieData = [
    { name: 'Users', value: data?.totalUsers || 0 },
    { name: 'Prompts', value: data?.totalPrompts || 0 },
    { name: 'Reviews', value: data?.totalReviews || 0 },
    { name: 'Copies', value: data?.totalCopies || 0 }
  ]

  const COLORS = ['#3b82f6', '#a855f7', '#22c55e', '#f97316']



  const fetchAnalytics = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/analytics`
    )

    const result = await res.json()
    setData(result)

  } catch (error) {
    console.log(error)

  } finally {
    setLoading(false)
  }
}

useEffect(() => {
  fetchAnalytics()
}, [])


  return (
   <div className="p-6 min-h-screen bg-zinc-950 text-white">

      <h1 className="text-3xl font-bold mb-6">
        📊 Analytics Dashboard
      </h1>

      {loading ? (
        <p className="text-zinc-400">Loading...</p>
      ) : (

        <div className="space-y-10">

          {/* BAR CHART */}
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h2 className="mb-4 text-xl font-semibold">
              Overview (Bar Chart)
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* PIE CHART */}
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h2 className="mb-4 text-xl font-semibold">
              Distribution (Pie Chart)
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Legend />
                <Tooltip />

              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      )}
    </div>
  )
}

export default AnaLyticPage