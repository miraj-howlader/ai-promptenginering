export default function ProfileCard() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100"
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h2 className="font-bold">John Doe</h2>
          <p className="text-sm text-gray-500">
            johndoe@gmail.com
          </p>
        </div>
      </div>

      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
        Edit Profile
      </button>
    </div>
  )
}