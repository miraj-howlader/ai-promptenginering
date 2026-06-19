'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Example data (replace with API later)
const reviews = [
  {
    _id: '1',
    name: 'Sarah Khan',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    review:
      'This platform saved me hours of work. The prompts are extremely high quality and easy to use!',
    role: 'Content Creator',
  },
  {
    _id: '2',
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 4,
    review:
      'Great collection of AI prompts. I use it daily for my business content generation.',
    role: 'Entrepreneur',
  },
  {
    _id: '3',
    name: 'Ayesha Rahman',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
    review:
      'Super helpful and well-structured prompts. Highly recommended for AI users!',
    role: 'Freelancer',
  },
]

// Animations
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

const renderStars = (rating) => {
  return Array.from({ length: 5 }).map((_, i) => (
    <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
      ★
    </span>
  ))
}

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Customer Reviews</h2>
          <p className="text-gray-500 mt-2">
            What users say about our AI prompt platform
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((item) => (
            <motion.div
              key={item._id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* User */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-lg mb-3">
                {renderStars(item.rating)}
              </div>

              {/* Review */}
              <p className="text-sm text-gray-600">
                {item.review}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default CustomerReviews