'use client'

import { motion } from 'framer-motion'
import { Mail, Sparkles } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-8 md:p-12">

          {/* Background Blur */}
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">

            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white"
              >
                <Sparkles size={16} />
                <span className="text-sm">
                  Weekly AI Prompt Updates
                </span>
              </motion.div>

              <h2 className="mt-6 text-4xl font-bold text-white">
                Stay Ahead With The Latest AI Prompts
              </h2>

              <p className="mt-4 text-white/80 max-w-lg">
                Get exclusive prompts, productivity hacks, creator insights,
                and AI trends delivered directly to your inbox.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
                <Mail size={16} />
                No spam. Unsubscribe anytime.
              </div>
            </div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Join Our Newsletter
              </h3>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl bg-white px-4 py-3 outline-none"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-xl bg-black text-white py-3 font-medium"
                >
                  Subscribe Now
                </motion.button>
              </form>

              <p className="mt-4 text-xs text-white/70">
                Join 10,000+ creators receiving weekly AI updates.
              </p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}