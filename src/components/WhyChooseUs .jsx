'use client'

import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'High-Quality AI Prompts',
    desc: 'Carefully curated prompts to boost productivity, creativity, and business growth.',
  },
  {
    title: 'Save & Reuse Instantly',
    desc: 'One-click copy system so you can instantly use prompts in your favorite AI tools.',
  },
  {
    title: 'Community Driven',
    desc: 'Discover trending prompts shared by creators worldwide.',
  },
  {
    title: 'Multi AI Tool Support',
    desc: 'Works with ChatGPT, Perplexity, Claude, Gemini and more.',
  },
  {
    title: 'Boost Productivity',
    desc: 'Speed up your workflow with ready-made optimized prompts.',
  },
  {
    title: 'Free & Premium Access',
    desc: 'Explore free prompts or unlock premium high-performance prompts.',
  },
]

// Parent animation (stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="text-gray-500 mt-2">
            A smarter way to discover, use, and share AI prompts
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Number badge */}
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg mb-4">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs