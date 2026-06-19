'use client'

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Search Prompts',
    desc: 'Find high-quality AI prompts for any task in seconds.',
  },
  {
    title: 'Copy Instantly',
    desc: 'One-click copy system lets you use prompts immediately.',
  },
  {
    title: 'Use in AI Tools',
    desc: 'Paste into ChatGPT, Claude, Perplexity, or any AI tool.',
  },
  {
    title: 'Boost Productivity',
    desc: 'Save time and generate better results with optimized prompts.',
  },
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const HowItWorks = () => {
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
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-gray-500 mt-2">
            Simple 4-step workflow to boost your productivity
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 mx-auto bg-black text-white rounded-full flex items-center justify-center mb-4">
                {index + 1}
              </div>

              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default HowItWorks