export default function ProfileCard({user}) {

  
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <div className="flex items-center gap-4">
        <img
          src={user?.image}
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h2 className="font-bold">{user?.name}</h2>
          <p className="text-sm text-gray-500">
            {user?.email}
          </p>
        </div>
      </div>

      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
        Edit Profile
      </button>
    </div>
  )
}