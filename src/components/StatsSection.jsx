'use client'

import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'AI Prompts', value: '10K+' },
  { label: 'Active Users', value: '5K+' },
  { label: 'Creators', value: '500+' },
  { label: 'Daily Uses', value: '20K+' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold">Our Impact</h2>
          <p className="text-gray-500 mt-2">
            Growing AI prompt community worldwide
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.08 }}
              className="bg-white border rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default StatsSection