'use client'

import { authClient } from '@/lib/auth.client'
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Radio,
  RadioGroup,
  TextField,
} from '@heroui/react'

import { Check, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { FaGoogle } from 'react-icons/fa'

const Registration = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')
  const [role, setRole] = useState('user')

  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect') || '/'

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)

    const plan = role === 'user' ? 'user_free' : 'creator_free'

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        role,
        image,
        plan,
      })

      if (error) {
        toast.error(error.message || 'Failed to create account')
        return
      }

      toast.success('Signed up successfully')
      router.push(redirectTo)
    } catch (err) {
      toast.error(err?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

const handleGoogleLogin = async () => {
  try {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    
    })
  } catch (err) {
    toast.error("Google login failed")
  }
}

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05060a] px-4">

      {/* background glow */}
      <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-fuchsia-600/20 blur-[140px]" />

      {/* CARD */}
      <div className="relative w-full max-w-md rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_80px_rgba(139,92,246,0.15)] backdrop-blur-2xl">

        {/* badge */}
        <div className="mb-5 flex justify-center">
          <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-xs text-violet-300">
            ✨ Join Modern Job Platform
          </div>
        </div>

        {/* heading */}
        <h1 className="text-center text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-center text-sm text-gray-400">
          Start your journey in seconds
        </p>

        {/* FORM */}
        <Form className="mt-8 flex flex-col gap-5" onSubmit={handleSignup}>

          <TextField isRequired>
            <Label className="text-gray-300">Name</Label>
            <Input
              className="h-12"
              value={name}
              onChange={(e) => setName(e.target.value)}
              classNames={{
                inputWrapper:
                  'bg-white/5 border border-white/10 hover:border-violet-500/50 focus-within:border-violet-500 transition-all',
              }}
            />
            <FieldError />
          </TextField>

          <TextField isRequired>
            <Label className="text-gray-300">Email</Label>
            <Input
              className="h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              classNames={{
                inputWrapper:
                  'bg-white/5 border border-white/10 hover:border-violet-500/50 focus-within:border-violet-500 transition-all',
              }}
            />
            <FieldError />
          </TextField>

          <TextField isRequired minLength={8}>
            <Label className="text-gray-300">Password</Label>
            <Input
              type="password"
              className="h-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              classNames={{
                inputWrapper:
                  'bg-white/5 border border-white/10 hover:border-violet-500/50 focus-within:border-violet-500 transition-all',
              }}
            />
            <Description className="text-xs text-gray-500">
              Min 8 chars, 1 uppercase & number
            </Description>
          </TextField>

          {/* ROLE FIXED */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
  <Label className="mb-3 block text-gray-300">
    Choose Role
  </Label>

  <div className="grid grid-cols-2 gap-3">
    
    <button
      type="button"
      onClick={() => setRole('user')}
      className={`rounded-xl border px-3 py-3 transition-all ${
        role === 'user'
          ? 'border-violet-500 bg-violet-500/10 text-white'
          : 'border-white/10 text-gray-300'
      }`}
    >
      User
    </button>

    <button
      type="button"
      onClick={() => setRole('creator')}
      className={`rounded-xl border px-3 py-3 transition-all ${
        role === 'creator'
          ? 'border-fuchsia-500 bg-fuchsia-500/10 text-white'
          : 'border-white/10 text-gray-300'
      }`}
    >
      Creator
    </button>

  </div>
</div>

          <TextField isRequired>
            <Label className="text-gray-300">Image URL</Label>
            <Input
              className="h-12"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              classNames={{
                inputWrapper:
                  'bg-white/5 border border-white/10 hover:border-violet-500/50 focus-within:border-violet-500 transition-all',
              }}
            />
          </TextField>

          {/* BUTTON */}
          <Button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all hover:scale-[1.02]"
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Check className="mr-2" />
                Create Account
              </>
            )}
          </Button>

          {/* OR */}
          <div className="relative py-2">
            <div className="h-px bg-white/10" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#05060a] px-3 text-xs text-gray-500">
              OR
            </span>
          </div>

          {/* GOOGLE */}
          <Button onClick={handleGoogleLogin} className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10">
            <FaGoogle className="mr-2 text-red-400" />
            Continue with Google
          </Button>

          {/* LOGIN */}
          <p className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link
              href={`/login?redirect=${redirectTo}`}
              className="text-violet-400 hover:text-violet-300"
            >
              Sign In
            </Link>
          </p>
        </Form>
      </div>
    </div>
  )
}

export default Registration