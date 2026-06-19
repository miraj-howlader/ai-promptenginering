'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PromptCard = ({ prompt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg"
    >
      {/* Thumbnail */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={prompt.thumbnail}
          alt={prompt.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Category */}
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {prompt.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Title */}
        <h3 className="text-lg font-semibold line-clamp-1">
          {prompt.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {prompt.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
          <span className="bg-gray-100 px-2 py-1 rounded">
            {prompt.aiTool}
          </span>

          <span className="bg-gray-100 px-2 py-1 rounded">
            {prompt.difficulty}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-2">
          {prompt.tags?.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 text-xs text-gray-400">
          <span>🔥 {prompt.copyCount || 0} uses</span>
          <span>{prompt.visibility}</span>
        </div>

      </div>
    </motion.div>
  )
}

export default PromptCard