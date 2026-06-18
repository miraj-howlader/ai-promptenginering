'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@heroui/react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { signOut, useSession } from '@/lib/auth.client'





export default function Navbar() {
  
  const [open, setOpen] = useState(false)
  const {data: session} = useSession()
  const user = session?.user


  const navItems = user
    ? [
        { label: 'Home', href: '/' },
        { label: 'All Prompts', href: '/prompts' },
        { label: 'Dashboard', href: '/dashboard' },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'All Prompts', href: '/prompts' },
        { label: 'Login', href: '/login' },
        { label: 'Register', href: '/register' },
      ]


       const handleLogout = async () => {
        
       await signOut()
      
        }

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* 🌈 FULL GRADIENT NAVBAR */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">

            {/* LEFT: LOGO */}
           <Link href="/" className="flex items-center gap-3 group">

  {/* 🌈 GRADIENT LOGO BACKGROUND WRAPPER */}
  <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-gradient-to-r from-white/20 via-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-md">

    {/* LOGO */}
    <div className="w-9 h-9 relative">
      <Image
        src="/miraj.png"
        alt="logo"
        fill
        className="object-contain drop-shadow-md"
        priority
      />
    </div>

    {/* TEXT */}
    <span className="text-white font-bold text-lg tracking-tight">
      PromptHub
    </span>

  </div>

</Link>
            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-7">

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-white text-sm font-medium transition"
                >
                  {item.label}
                </Link>
              ))}

              {user && (
               <>
               <p className='text-white font-bold'>Hi,{user?.name}</p>
                <Button onClick={handleLogout} size="sm" color="default">
                  Logout
                </Button>
                
               </>
              )}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-white/20"
            >
              <div className="px-4 py-4 flex flex-col gap-3">

                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-white/90 hover:text-white text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}

                {user && (
                  <Button onClick={handleLogout} size="sm" className="w-full">
                    Logout
                  </Button>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  )
}