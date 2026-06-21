import PromptClient from "@/components/PromptClient "


const PromptDetailPage = async ({ params }) => {
  const { id } =await params

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/${id}`,
    { cache: "no-store" }
  )

  const prompt = await res.json()

  return <PromptClient prompt={prompt} />
}

export default PromptDetailPage