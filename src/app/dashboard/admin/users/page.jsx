'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Users = () => {
   const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)



  const handleRoleChange = async (id, role) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${id}/role`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ role })
      }
    )

    if (res.ok) {
      fetchUsers()
      toast.success('User Role update')
    }
  } catch (error) {
    console.log(error)
  }
}

const handleDelete = async (id) => {
  const confirmDelete = confirm('Are you sure you want to delete this user?')

  if (!confirmDelete) return

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${id}`,
      {
        method: 'DELETE'
      }
    )

    if (res.ok) {
      setUsers(prev =>
        prev.filter(user => user._id !== id)
      )
    }
  } catch (error) {
    console.log(error)
  }
}

 const fetchUsers = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users`
    )

    const data = await res.json()
    setUsers(data)
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}

useEffect(() => {
  fetchUsers()
}, [])
 


  return (
  <div className="min-h-screen  text-white p-6">
     <div className="mb-6">
  <h1 className="text-3xl font-bold">
    👥 All Users
  </h1>

  <p className="text-black font-bold">
    Manage all registered users, roles and access
  </p>
</div>
<div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">

  <table className="w-full text-left">

    <thead className="bg-white/10 text-zinc-300">
      <tr>
        <th className="p-4 text-black ">#</th>
        <th className="p-4 text-black">Name</th>
        <th className="p-4 text-black">Email</th>
        <th className="p-4 text-black">Role</th>
        <th className="p-4 text-black">Change Role</th>
        <th className="p-4 text-black">Action</th>
      </tr>
    </thead>

    <tbody>

      {users.map((user, index) => (
        <tr
          key={user._id}
          className="border-t border-white/10 hover:bg-white/10 transition"
        >

          <td className="p-4 text-zinc-400">
            {index + 1}
          </td>

          <td className="p-4 font-medium">
            {user.name}
          </td>

          <td className="p-4 text-zinc-400">
            {user.email}
          </td>

          <td className="p-4">
            <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400">
              {user.role}
            </span>
          </td>

          <td className="p-4">
            <select
              value={user.role}
              onChange={(e) =>
                handleRoleChange(user._id, e.target.value)
              }
              className="bg-zinc-900 border border-zinc-700 px-3 py-2 rounded-lg"
            >
              <option value="user">User</option>
              <option value="creator">Creator</option>
              <option value="admin">Admin</option>
            </select>
          </td>

          <td className="p-4">
            <button
              onClick={() => handleDelete(user._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>
          </td>

        </tr>
      ))}

    </tbody>

  </table>

</div>
  </div>
)
}

export default Users