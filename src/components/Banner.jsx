'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Button } from '@heroui/react'

const tags = [
  'AI Prompts',
  'Productivity',
  'Automation',
  'ChatGPT',
  'Design Ideas',
  'Marketing',
  'Coding',
  'Startup',
]

// Stagger Container Animation Rules
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Single Element Slide/Fade Rules
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Banner() {
  const [query, setQuery] = useState('')

  return (
    <section className="relative w-full overflow-hidden bg-[#030407] px-6 py-24 lg:py-32">

      {/* Premium Multi-layered Ambient Glow */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-20 left-1/3 h-[300px] w-[300px] rounded-full bg-fuchsia-500/5 blur-[100px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2"
      >

        {/* LEFT CONTENT */}
        <div className="z-10 flex flex-col justify-center">

          {/* Premium Animated Badge */}
          <motion.div 
            variants={itemVariants}
            className="mb-6 self-start inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.1)]"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            ✨ AI Powered Prompt Marketplace
          </motion.div>

          {/* High-Impact Typography */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight leading-[1.15] text-white sm:text-5xl lg:text-6xl"
          >
            Build, Explore & Share{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              AI Prompts
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-gray-400/90"
          >
            Boost productivity, automate tasks, and unlock creativity with powerful, ready-to-use AI prompts engineered for modern builders.
          </motion.p>

          {/* SEARCH BAR (Container Glow on Focus) */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex items-center rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl shadow-xl transition-all duration-300 focus-within:border-violet-500/50 focus-within:shadow-[0_0_30px_rgba(139,92,246,0.15)] focus-within:bg-white/[0.05]"
          >
            <Search className="ml-3 text-gray-400 w-5 h-5 flex-shrink-0" />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search prompts, ideas, automation..."
              className="ml-2 w-full bg-transparent px-2 py-3 text-sm text-white placeholder-gray-500 outline-none"
            />

            <Button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Search
            </Button>
          </motion.div>

          {/* PRIMARY/SECONDARY CTAs */}
          <motion.div 
            variants={itemVariants}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Button className="rounded-xl bg-white px-6 font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md">
              Explore Prompts
            </Button>

            <Button className="rounded-xl border border-white/10 bg-white/5 px-6 font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Create Prompt
            </Button>
          </motion.div>

          {/* TAGS */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-2"
          >
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:border-violet-500/40 hover:bg-violet-500/5 hover:text-violet-200"
              >
                #{tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT VISUAL (Pro Perspective Design) */}
        <motion.div
          variants={itemVariants}
          className="relative flex items-center justify-center [perspective:1000px]"
        >
          {/* Layered behind-image glows */}
          <div className="absolute h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[80px]" />
          <div className="absolute h-[250px] w-[250px] rounded-full bg-fuchsia-500/10 blur-[60px] translate-x-10 translate-y-10" />

          {/* Elegant Floating Frame Effect */}
          <div className="relative group transition-transform duration-500 ease-out [transform-style:preserve-3d] hover:rotate-y-3 hover:rotate-x-2">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
            <img
              src="/hero.png"
              alt="AI Hero"
              className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-white/20"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}