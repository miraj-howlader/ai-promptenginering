import { getUserSession } from "@/lib/cors/session"
import MyPrompt from "./MyPrompt"
import { getAllUserPrompt } from "@/lib/api"

const MyPrompts = async () => {
  const user = await getUserSession()

  console.log("SESSION:", user)

  if (!user?.email) {
    return <div>Please login</div>
  }

  const data = await getAllUserPrompt(user.email)

  return (
    <MyPrompt data={data} user={user} />
  )
}

export default MyPrompts