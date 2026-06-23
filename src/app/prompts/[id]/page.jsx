import PromptClient from "@/components/PromptClient "
import { auth } from "@/lib/auth"
import { getUserSession } from "@/lib/cors/session"
import { headers } from "next/headers"


const PromptDetailPage = async ({ params }) => {
  const { id } =await params
  const user = await getUserSession()
  const {token} = await auth.api.getToken({
    headers: await headers()
  })

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/${id}`,{
      headers:{
        authorization:`Bearer ${token}`
      }
    })

  const prompt = await res.json()

  return <PromptClient prompt={prompt} user={user}/>
}

export default PromptDetailPage