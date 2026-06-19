'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Example data (replace with API later)
const creators = [
  {
    _id: '1',
    name: 'Miraj Howlader',
    avatar: 'https://i.pravatar.cc/150?img=12',
    prompts: 128,
    likes: 2400,
  },
  {
    _id: '2',
    name: 'Sarah Khan',
    avatar: 'https://i.pravatar.cc/150?img=5',
    prompts: 98,
    likes: 1900,
  },
  {
    _id: '3',
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=8',
    prompts: 76,
    likes: 1500,
  },
  {
    _id: '4',
    name: 'Ayesha Rahman',
    avatar: 'https://i.pravatar.cc/150?img=32',
    prompts: 142,
    likes: 3200,
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const TopCreators = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Top Creators</h2>
          <p className="text-gray-500 mt-2">
            Meet the most active prompt creators in the community
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {creators.map((creator, index) => (
            <motion.div
              key={creator._id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -6 }}
              className="bg-gray-50 border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              {/* Rank Badge */}
              <div className="text-xs text-gray-500 mb-2">
                #{index + 1} Creator
              </div>

              {/* Avatar */}
              <div className="flex justify-center">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-16 h-16 rounded-full object-cover border"
                />
              </div>

              {/* Name */}
              <h3 className="mt-3 font-semibold">
                {creator.name}
              </h3>

              {/* Stats */}
              <div className="mt-3 text-sm text-gray-500 space-y-1">
                <p>📝 {creator.prompts} Prompts</p>
                <p>❤️ {creator.likes} Likes</p>
              </div>

              {/* Button */}
              <button className="mt-4 text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition">
                View Profile
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default TopCreators