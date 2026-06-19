'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Sparkles } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'


const footerLinks = {
  platform: [
    { name: 'Browse Prompts', href: '/prompts' },
    { name: 'Top Creators', href: '/creators' },
    { name: 'Categories', href: '/categories' },
    { name: 'Pricing', href: '/pricing' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  },
}

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary text-white">
                <Sparkles size={18} />
              </div>

              <span className="font-bold text-xl">
                PromptHub
              </span>
            </Link>

            <p className="mt-4 text-sm text-default-500 max-w-md">
              Discover, share, and monetize high-quality AI prompts.
              Empower your creativity and productivity with prompts
              crafted by top creators worldwide.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="#"
                className="p-2 rounded-lg border"
              >
                <FaGithub size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="#"
                className="p-2 rounded-lg border"
              >
                <BsTwitter size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="#"
                className="p-2 rounded-lg border"
              >
                <LiaLinkedin size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="#"
                className="p-2 rounded-lg border"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Platform */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">
              Platform
            </h3>

            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-default-500 hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">
              Resources
            </h3>

            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-default-500 hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">
              Legal
            </h3>

            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-default-500 hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
          <div className="border-t py-6 flex flex-col md:flex-row items-center justify-between gap-4">
  <p className="text-sm text-default-500">
    © {new Date().getFullYear()} PromptHub. All rights reserved.
  </p>

  <p className="text-sm text-default-500">
    Built with ❤️ for AI creators worldwide.
  </p>
</div>
       
      </div>
    </footer>
  )
}