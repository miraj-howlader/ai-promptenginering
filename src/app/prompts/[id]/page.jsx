import PromptClient from "@/components/PromptClient "
import { getUserSession } from "@/lib/cors/session"


const PromptDetailPage = async ({ params }) => {
  const { id } =await params
  const user = await getUserSession()

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/${id}`,
    { cache: "no-store" }
  )

  const prompt = await res.json()

  return <PromptClient prompt={prompt} user={user}/>
}

export default PromptDetailPage